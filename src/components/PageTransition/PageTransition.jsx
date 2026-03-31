import { useEffect, useRef } from 'react'
import './PageTransition.css'

/**
 * Renders an expanding circle from `origin` {x, y} (viewport coords).
 * Calls `onDone` when the animation finishes.
 */
export default function PageTransition({ origin, onDone }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handler = () => onDone()
    el.addEventListener('animationend', handler)
    return () => el.removeEventListener('animationend', handler)
  }, [onDone])

  return (
    <div
      ref={ref}
      className="page-transition"
      style={{
        '--tx': `${origin.x}px`,
        '--ty': `${origin.y}px`,
      }}
    />
  )
}
