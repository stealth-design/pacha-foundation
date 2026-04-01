import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTransition from '../../components/PageTransition/PageTransition'
import './LandingHero.css'

const heroHand = '/hand-logo.png'

export default function LandingHero() {
  const navigate = useNavigate()
  const [transition, setTransition] = useState(null)

  const handleLocationClick = useCallback((e, path) => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    setTransition({ x, y, to: path })
  }, [])

  const handleTransitionDone = useCallback(() => {
    navigate(transition.to)
  }, [navigate, transition])

  return (
    <>
      <section className="landing-hero">

        <div className="landing-hero__title-wrap">
          <h1 className="landing-hero__title">
            <span className="landing-hero__line landing-hero__line--bold">Pacha</span>
            <span className="landing-hero__line landing-hero__line--regular">Foundation</span>
          </h1>
          <div className="landing-hero__image-wrap">
            <img src={heroHand} alt="" className="landing-hero__image" />
          </div>
          {/* <span className="landing-hero__script" aria-hidden="true">Impact</span> */}
        </div>

        <p className="landing-hero__subtitle">
          Advancing healthcare, youth development, and the arts,
          while preserving cultural heritage
        </p>

        <div className="landing-hero__locations">
          <a
            href="/ibiza"
            className="landing-hero__location-btn"
            onClick={(e) => handleLocationClick(e, '/ibiza')}
          >
            <div className="landing-hero__location-circle">
              <video
                className="landing-hero__location-video"
                src="/ibiza-bg-video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <span className="landing-hero__location-label">IBZ</span>
          </a>
          <a
            href="/newyork"
            className="landing-hero__location-btn"
            onClick={(e) => handleLocationClick(e, '/newyork')}
          >
            <div className="landing-hero__location-circle">
              <video
                className="landing-hero__location-video"
                src="/ny-bg-video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <span className="landing-hero__location-label">NY</span>
          </a>
        </div>

      </section>

      {transition && (
        <PageTransition
          origin={{ x: transition.x, y: transition.y }}
          onDone={handleTransitionDone}
        />
      )}
    </>
  )
}
