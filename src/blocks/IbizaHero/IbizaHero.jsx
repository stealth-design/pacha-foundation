import './IbizaHero.css'

export default function IbizaHero({
  stat = '35+',
  statLabel = 'Initiatives',
  missionText = '1 Mission',
  tagline = 'Nurturing Future',
  teamImage,
  statImage,
  video,
}) {
  return (
    <section className="ibiza-hero">
      <div className="ibiza-hero__inner">

        {/* Row 1 — team image + stat */}
        <div className="ibiza-hero__row ibiza-hero__row--spread">
          {teamImage && (
            <div className="ibiza-hero__pill ibiza-hero__pill--img">
              <img src={teamImage} alt="" />
            </div>
          )}
          <span className="ibiza-hero__heading">
            {stat} {statLabel}
          </span>
          {statImage && (
            <div className="ibiza-hero__pill ibiza-hero__pill--img ibiza-hero__pill--fill">
              <img src={statImage} alt="" />
            </div>
          )}
        </div>

        {/* Row 2 — mission + video pill */}
        <div className="ibiza-hero__row">
          <span className="ibiza-hero__heading">{missionText}</span>
          {video && (
            <div className="ibiza-hero__pill ibiza-hero__pill--video">
              <video src={video} autoPlay muted loop playsInline />
            </div>
          )}
        </div>

        {/* Row 3 — tagline */}
        <div className="ibiza-hero__row">
          <span className="ibiza-hero__heading">{tagline}</span>
        </div>

      </div>
    </section>
  )
}
