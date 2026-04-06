import { useEffect, useRef } from 'react'
import './IbizaHero.css'

function lerp(a, b, t) { return a + (b - a) * t }
function ease(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t }

export default function IbizaHero({
  stat = '35+',
  statLabel = 'Initiatives',
  missionText = '1 Mission',
  teamImage,
  statImage,
  video,
}) {
  const wrapperRef  = useRef(null)
  const pillRef     = useRef(null)
  const overlayRef  = useRef(null)
  const naturalRect = useRef(null)

  useEffect(() => {
    // Wait for CSS slide-in animations to finish before capturing rect
    const captureTimer = setTimeout(() => {
      if (pillRef.current) {
        naturalRect.current = pillRef.current.getBoundingClientRect()
      }
    }, 2000)

    function onResize() {
      if (pillRef.current) {
        naturalRect.current = pillRef.current.getBoundingClientRect()
      }
    }
    window.addEventListener('resize', onResize)

    function onScroll() {
      const wrapper = wrapperRef.current
      const overlay = overlayRef.current
      const nat     = naturalRect.current
      if (!wrapper || !overlay || !nat) return

      const rect        = wrapper.getBoundingClientRect()
      const vh          = window.innerHeight
      const vw          = window.innerWidth
      const scrollSpace = wrapper.offsetHeight - vh
      const raw         = -rect.top / scrollSpace
      const progress    = Math.max(0, Math.min(1, raw))
      const t           = ease(progress)

      // Hide only once the wrapper has fully scrolled off screen
      if (rect.bottom <= 0) {
        overlay.style.opacity       = '0'
        overlay.style.pointerEvents = 'none'
        return
      }

      const opacity = Math.min(1, progress * 3)

      overlay.style.opacity       = String(opacity)
      overlay.style.pointerEvents = progress >= 0.98 ? 'auto' : 'none'
      overlay.style.top           = `${lerp(nat.top,    0,  t)}px`
      overlay.style.left          = `${lerp(nat.left,   0,  t)}px`
      overlay.style.width         = `${lerp(nat.width,  vw, t)}px`
      overlay.style.height        = `${lerp(nat.height, vh, t)}px`
      overlay.style.borderRadius  = `${lerp(9999, 0, t)}px`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(captureTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div ref={wrapperRef} className="ibiza-hero-wrapper">
      <section className="ibiza-hero">
        <div className="ibiza-hero__inner">

          {/* Row 1 — team image + stat */}
          <div className="ibiza-hero__row ibiza-hero__row--spread ibiza-hero__row--slide-right">
            {teamImage && (
              <div className="ibiza-hero__img-wrap">
                <img src="/star-group.png" alt="" className="ibiza-hero__img-star" />
                <div className="ibiza-hero__pill ibiza-hero__pill--img">
                  <img src={teamImage} alt="" />
                </div>
              </div>
            )}
            <div className="ibiza-hero__text-wrap">
              {/* <img src="/cloud-group.png" alt="" className="ibiza-hero__text-cloud" /> */}
              <span className="ibiza-hero__heading">
                {stat} {statLabel}
              </span>
            </div>
            {statImage && (
              <div className="ibiza-hero__pill ibiza-hero__pill--img ibiza-hero__pill--fill">
                <img src={statImage} alt="" />
              </div>
            )}
          </div>

          {/* Row 2 — mission + video pill */}
          <div className="ibiza-hero__row ibiza-hero__row--slide-left">
            <div className="ibiza-hero__mission-group">
              <img src="/bullseye.png" alt="" className="ibiza-hero__pill--bullseye" />
              <div className="ibiza-hero__text-wrap">
                {/* <img src="/cap.png" alt="" className="ibiza-hero__text-star" /> */}
                <span className="ibiza-hero__heading">{missionText}</span>
              </div>
            </div>
            {video && (
              <div className="ibiza-hero__video-wrap">
                <img src="/cloud-group.png" alt="" className="ibiza-hero__video-cloud" />
                <div className="ibiza-hero__pill ibiza-hero__pill--video" ref={pillRef}>
                  <video src={video} autoPlay muted loop playsInline />
                </div>
              </div>
            )}
          </div>

          {/* Row 3 — tagline */}
          <div className="ibiza-hero__row ibiza-hero__row--fade-in">
            <span className="ibiza-hero__heading">Nurturing</span>
            <div className="ibiza-hero__row3-wrap ibiza-hero__cherry--desktop">
              <img src="/cherry.png" alt="" className="ibiza-hero__row3-cherry" />
              <div className="ibiza-hero__pill ibiza-hero__pill--img ibiza-hero__pill--row3">
                <img src="/hero-pill3.png" alt="" />
              </div>
            </div>
            <span className="ibiza-hero__cherry-future">
              <span className="ibiza-hero__heading">Future</span>
              <div className="ibiza-hero__row3-wrap ibiza-hero__cherry--mobile">
                <img src="/cherry.png" alt="" className="ibiza-hero__row3-cherry" />
                <div className="ibiza-hero__pill ibiza-hero__pill--img ibiza-hero__pill--row3">
                  <img src="/hero-pill3.png" alt="" />
                </div>
              </div>
            </span>
          </div>

        </div>
      </section>

      {/* Expanding video overlay */}
      {video && (
        <div ref={overlayRef} className="ibiza-hero__overlay" style={{ opacity: 0, pointerEvents: 'none' }}>
          <video src={video} autoPlay muted loop playsInline />
        </div>
      )}
    </div>
  )
}
