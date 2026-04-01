import './IbizaHero.css'

export default function IbizaHero({
  stat = '35+',
  statLabel = 'Initiatives',
  missionText = '1 Mission',
  teamImage,
  statImage,
  video,
}) {
  return (
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
        <div className="ibiza-hero__row ibiza-hero__row--slide-left">
          <span className="ibiza-hero__heading">{missionText}</span>
          {video && (
            <div className="ibiza-hero__video-wrap">
              <img src="/cloud-group.png" alt="" className="ibiza-hero__video-cloud" />
              <div className="ibiza-hero__pill ibiza-hero__pill--video">
                <video src={video} autoPlay muted loop playsInline />
              </div>
            </div>
          )}
        </div>

        {/* Row 3 — tagline */}
        <div className="ibiza-hero__row ibiza-hero__row--fade-in">
          <span className="ibiza-hero__heading">Nurturing</span>
          <img src="/cherry.png" alt="" className="ibiza-hero__cherry ibiza-hero__cherry--desktop" />
          <span className="ibiza-hero__cherry-future">
            <span className="ibiza-hero__heading">Future</span>
            <img src="/cherry.png" alt="" className="ibiza-hero__cherry ibiza-hero__cherry--mobile" />
          </span>
        </div>

      </div>
    </section>
  )
}
