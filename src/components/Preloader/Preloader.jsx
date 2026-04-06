import { useEffect, useRef, useState } from 'react'
import './Preloader.css'

const DURATION = 2000 // ms the splash stays visible

export default function Preloader({ onDone }) {
  const [displayed, setDisplayed] = useState(0)
  const [exiting, setExiting] = useState(false)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    startRef.current = performance.now()

    function tick(now) {
      const progress = Math.min((now - startRef.current) / DURATION, 1)
      // ease-out cubic so the counter decelerates near 100
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(Math.floor(eased * 100))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplayed(100)
        setExiting(true)
        setTimeout(onDone, 650)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className={`preloader${exiting ? ' preloader--exit' : ''}`}>
      <div className="preloader__inner">
        <img src="/cherry.png" className="preloader__cherry" alt="" />
        <div className="preloader__count">{displayed}</div>
        <div className="preloader__bar">
          <div className="preloader__bar-fill" style={{ width: `${displayed}%` }} />
        </div>
        <p className="preloader__label">Pacha Foundation</p>
      </div>
    </div>
  )
}
