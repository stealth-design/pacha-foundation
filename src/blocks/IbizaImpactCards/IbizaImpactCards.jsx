import { useEffect, useRef, useState } from 'react'
import './IbizaImpactCards.css'

const CARDS = [
  {
    prefix: '',
    value: 430,
    suffix: '%',
    label: 'INCREASE IN 2025 BUDGET',
    bgImage: '/imp1.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M3 21L10 14L15.5 18.5L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 7h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    prefix: '',
    value: 35,
    suffix: '+',
    label: 'IBIZA INITIATIVES',
    bgImage: '/imp2.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="11" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 26c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    prefix: '\u20ac',
    value: 500,
    suffix: 'K',
    label: 'COMMITTED IN 2025',
    bgImage: '/imp3.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 10a6 6 0 100 8M7 13h9M7 17h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    prefix: '',
    value: 100,
    suffix: '%',
    label: 'FUNDING IN IBIZA',
    bgImage: '/imp4.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3l3.09 8.26H26l-7.05 5.12 2.69 8.26L14 19.52l-7.64 5.12 2.69-8.26L2 11.26h8.91z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function countUp(target, duration, onTick, onDone) {
  const start = performance.now()
  function step(now) {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    onTick(Math.round(eased * target))
    if (t < 1) requestAnimationFrame(step)
    else onDone()
  }
  requestAnimationFrame(step)
}

export default function IbizaImpactCards() {
  const sectionRef = useRef(null)
  const startedRef = useRef(false)
  const [started, setStarted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [counts, setCounts] = useState(CARDS.map(() => 0))
  const [labelsVisible, setLabelsVisible] = useState(CARDS.map(() => false))

  function runCard(index) {
    if (index >= CARDS.length) {
      setTimeout(() => setActiveIndex(-1), 1200)
      return
    }
    setActiveIndex(index)
    setTimeout(() => {
      countUp(
        CARDS[index].value,
        1600,
        (n) => setCounts(prev => { const next = [...prev]; next[index] = n; return next }),
        () => {
          setLabelsVisible(prev => { const next = [...prev]; next[index] = true; return next })
          setTimeout(() => runCard(index + 1), 1100)
        }
      )
    }, 680)
  }

  useEffect(() => {
    const el = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          observer.disconnect()
          setStarted(true)
          runCard(0)
        }
      },
      { threshold: 0.25 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="iic">
      <h2 className="iic__heading">Impact</h2>
      {CARDS.map((card, i) => {
        const isActive = started && i === activeIndex
        const labelVis = labelsVisible[i]
        return (
          <div
            key={i}
            className={`iic__card iic__card--${i}${isActive ? ' iic__card--active' : ''}`}
            style={isActive ? {
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            } : undefined}
          >
            <span className="iic__icon">{card.icon}</span>
            <div className="iic__body">
              <span className="iic__num">
                {card.prefix}{counts[i]}{card.suffix}
              </span>
              <span className={`iic__label${isActive && !labelVis ? ' iic__label--hidden' : ''}`}>
                {card.label}
              </span>
            </div>
          </div>
        )
      })}
    </section>
  )
}
