import './LandingHero.css'

const heroHand = '/hand-logo.png'

export default function LandingHero() {
  return (
    <section className="landing-hero">

      {/* Big display title + overlapping image */}
      <div className="landing-hero__title-wrap">
        <h1 className="landing-hero__title">
          <span className="landing-hero__line landing-hero__line--bold">Pacha</span>
          <span className="landing-hero__line landing-hero__line--regular">Foundation</span>
        </h1>

        {/* Decorative image — sits between the two text lines */}
        <div className="landing-hero__image-wrap">
          <img src={heroHand} alt="" className="landing-hero__image" />
        </div>

        {/* Script word overlaid over "Foundation" */}
        <span className="landing-hero__script" aria-hidden="true">Impact</span>
      </div>

      {/* Subtitle */}
      <p className="landing-hero__subtitle">
        Advancing healthcare, youth development, and the arts,
        while preserving cultural heritage
      </p>

      {/* Location chooser */}
      <div className="landing-hero__locations">
        <a href="/ibiza" className="landing-hero__location-btn">
          <video
            className="landing-hero__location-video"
            src="/ibiza-bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <span className="landing-hero__location-label">IBZ</span>
        </a>
        <a href="/ny" className="landing-hero__location-btn">
          <video
            className="landing-hero__location-video"
            src="/ny-bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <span className="landing-hero__location-label">NY</span>
        </a>
      </div>

    </section>
  )
}
