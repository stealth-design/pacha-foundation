import { useEffect, useRef, useState } from 'react'
import './IbizaStats.css'

const STATS = [
  { prefix: '',  value: 430, suffix: '%', label: 'INCREASE IN 2025 BUDGET' },
  { prefix: '',  value: 35,  suffix: '+',  label: 'IBIZA INITIATIVES' },
  { prefix: '€', value: 500, suffix: 'K',  label: 'COMMITTED IN 2025' },
  { prefix: '',  value: 100, suffix: '%',  label: 'FUNDING IN IBIZA' },
]

function countUp(target, duration, onTick, onDone) {
  const start = performance.now()
  function step(now) {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 2) // ease-out quad
    onTick(Math.round(eased * target))
    if (t < 1) requestAnimationFrame(step)
    else onDone()
  }
  requestAnimationFrame(step)
}

export default function IbizaStats() {
  const sentinelRef = useRef(null)
  const startedRef = useRef(false)
  const [counts, setCounts] = useState(STATS.map(() => 0))
  const [labelsVisible, setLabelsVisible] = useState(STATS.map(() => false))

  useEffect(() => {
    const el = sentinelRef.current

    function runStat(index) {
      if (index >= STATS.length) return
      const { value } = STATS[index]

      countUp(value, 1500, (n) => {
        setCounts(prev => {
          const next = [...prev]
          next[index] = n
          return next
        })
      }, () => {
        // number done → fade in label, then start next stat
        setTimeout(() => {
          setLabelsVisible(prev => {
            const next = [...prev]
            next[index] = true
            return next
          })
          setTimeout(() => runStat(index + 1), 600)
        }, 150)
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          observer.disconnect()
          runStat(0)
        }
      },
      { threshold: 0.3 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" style={{ height: 0 }} />

      {/* Desktop — 3 columns */}
      <section className="ibiza-section ibiza-stats ibiza-stats--desktop">
        <div className="ibiza-stats__col ibiza-stats__col--numbers">
          {STATS.map((s, i) => (
            <div key={i} className="ibiza-stats__row">
              <span className="ibiza-stats__num">{s.prefix}{counts[i]}{s.suffix}</span>
            </div>
          ))}
        </div>
        <div className="ibiza-stats__col ibiza-stats__col--bar">
          <span className="ibiza-stats__bar-title">Impact</span>
        </div>
        <div className="ibiza-stats__col ibiza-stats__col--labels">
          {STATS.map((s, i) => (
            <div key={i} className="ibiza-stats__row">
              <span className={`ibiza-stats__label${labelsVisible[i] ? ' ibiza-stats__label--visible' : ''}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile — bar top, paired rows */}
      <section className="ibiza-section ibiza-stats ibiza-stats--mobile">
        <div className="ibiza-stats__bar">
          <span className="ibiza-stats__bar-title">Impact</span>
        </div>
        {STATS.map((s, i) => (
          <div key={i} className="ibiza-stats__row">
            <span className="ibiza-stats__num">{s.prefix}{counts[i]}{s.suffix}</span>
            <span className={`ibiza-stats__label${labelsVisible[i] ? ' ibiza-stats__label--visible' : ''}`}>
              {s.label}
            </span>
          </div>
        ))}
      </section>
    </>
  )
}
