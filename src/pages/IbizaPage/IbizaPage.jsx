import { useState, useRef, useCallback } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import IbizaHero from '../../blocks/IbizaHero/IbizaHero'
import IbizaInitiatives from '../../blocks/IbizaInitiatives/IbizaInitiatives'
import IbizaStats from '../../blocks/IbizaStats/IbizaStats'
import IbizaImpactCards from '../../blocks/IbizaImpactCards/IbizaImpactCards'
import Button from '../../components/Button/Button'
import './IbizaPage.css'

const PRESS_ITEMS = [
  { outlet: 'Electronic Groove', headline: 'The Pacha Foundation is a proud sponsor of local Ibiza football team', screenshot: '/press1.jpg', url: 'https://electronicgroove.com/pacha-becomes-official-sponsor-of-sd-ibiza-islas-pitiusas-football-team/' },
  { outlet: 'Periódico de Ibiza', headline: 'The APNEEF solidarity calendar 2026 launches at Pacha Hotel ', screenshot: '/press2.jpg', url: 'https://www.periodicodeibiza.es/pitiusas/aldia/2025/09/18/2472239/color-ilusio-protagonistas-del-nuevo-calendario-solidario-apneef.html' },
  { outlet: 'Diario de Ibiza', headline: "The Pacha Foundation's Grand Charity Party sets sights on a new fundraising record", screenshot: '/press3.jpg', url: 'https://www.diariodeibiza.es/ibiza/2025/12/11/fiesta-solidaria-pacha-ninos-busca-124675578.html' },
  { outlet: 'Diario de Ibiza', headline: 'The Pacha Foundation unveils 2025 plan with record budget', screenshot: '/press4.jpg', url: 'https://www.diariodeibiza.es/ibiza/2025/09/03/fundacion-pacha-lanza-ambicioso-plan-121214102.html' },
]

function PressItem({ item }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const itemRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const rect = itemRef.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <li
      ref={itemRef}
      className="ibiza-press__item"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="ibiza-press__item-link"
        aria-label={`Read ${item.outlet}: ${item.headline}`}
      >
        <div className="ibiza-press__item-content">
          <span className="ibiza-press__outlet">{item.outlet}</span>
          <span className="ibiza-press__headline">{item.headline}</span>
        </div>
        <span className="ibiza-press__arrow-btn" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </a>
      {visible && (
        <div
          className="ibiza-press__preview"
          style={{ left: pos.x + 20, top: pos.y - 80 }}
        >
          <img src={item.screenshot} alt={`${item.outlet} screenshot`} loading="lazy" />
        </div>
      )}
    </li>
  )
}

export default function IbizaPage() {
  return (
    <div className="ibiza-page">
      <Navbar basePath="/ibiza" menuVideo="/ibiza-bg-video.mp4" />

      <IbizaHero
        stat="35+"
        statLabel="Initiatives"
        missionText="1 Mission"
        tagline="Nurturing Future"
        teamImage="/hero-pill.png"

        video="/ibiza-hero-video.mp4"
      />

      <div className="ibiza-page__content">
      <section className="ibiza-section ibiza-about ibiza-section--cream">
        <div className="ibiza-about__content">
          <h2>ABOUT</h2>
          <p>Established in 2018 as a private non-profit, The Pacha Foundation builds on <span className="ibiza-about__hover-word">The Pacha Group's legacy<img src="/pachagroup-pill.png" className="ibiza-about__hover-pill" alt="" loading="lazy" /></span> of social impact. </p>
          <p>Following <span className="ibiza-about__hover-word">FIVE Holdings'<img src="/fiveholdings-pill.png" className="ibiza-about__hover-pill" alt="" loading="lazy" /></span> 2023 acquisition of The Pacha Group , <span className="ibiza-about__hover-word">President Kabir Mulchandani<img src="/km-pill.png" className="ibiza-about__hover-pill" alt="" loading="lazy" /></span> expanded the Foundation's vision and reach. The Foundation advances <span className="ibiza-about__hover-word">healthcare<img src="/healthcare-pill.png" className="ibiza-about__hover-pill" alt="" loading="lazy" /></span>, <span className="ibiza-about__hover-word">youth development<img src="/youth-pill.png" className="ibiza-about__hover-pill" alt="" loading="lazy" /></span>, and the <span className="ibiza-about__hover-word">arts<img src="/arts-pill.png" className="ibiza-about__hover-pill" alt="" loading="lazy" /></span>, while preserving <span className="ibiza-about__hover-word">cultural heritage<img src="/culture-pill.png" className="ibiza-about__hover-pill" alt="" loading="lazy" /></span>. It also promotes resilience through sport, community programmes, and environmental leadership across land and sea. </p>
          {/* <Button href="/ibiza/about" className="ibiza-about__btn">
            <img src="/button-cloud.png" className="ibiza-about__btn-cloud" alt="" />
            <span className="ibiza-about__btn-label">Know More</span>
            <img src="/button-cherry.png" className="ibiza-about__btn-cherry" alt="" />
          </Button> */}
        </div>
        <div className="ibiza-about__image">
          <img src="/about.png" alt="" loading="lazy" />
        </div>
      </section>

      {/* <IbizaStats /> */}

      <IbizaImpactCards />

      <IbizaInitiatives />

      <section className="ibiza-press">
        <div className="ibiza-press__header">
          <h2 className="ibiza-press__title">Press</h2>
          <Button href="#" className="ibiza-press__view-btn">
            <img src="/button-cloud.png" className="ibiza-about__btn-cloud" alt="" />
            <span className="ibiza-about__btn-label">View More</span>
            <img src="/button-cherry.png" className="ibiza-about__btn-cherry" alt="" />
          </Button>
        </div>
        <ul className="ibiza-press__list">
          {PRESS_ITEMS.map((item) => (
            <PressItem key={item.outlet} item={item} />
          ))}
        </ul>
      </section>

      <Footer
        bgImage="/ibiza-footer-bg.png"
        basePath="/ibiza"
        headline={<>Building A Future Where<br className="footer__mobile-br" /> <em>Purpose</em> Meets <em>Celebration</em></>}
      />

      </div>
    </div>
  )
}
