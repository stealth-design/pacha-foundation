import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import IbizaHero from '../../blocks/IbizaHero/IbizaHero'
import IbizaInitiatives from '../../blocks/IbizaInitiatives/IbizaInitiatives'
import IbizaStats from '../../blocks/IbizaStats/IbizaStats'
import Button from '../../components/Button/Button'
import './IbizaPage.css'

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

      <section className="ibiza-section ibiza-about ibiza-section--cream">
        <div className="ibiza-about__content">
          <h2>ABOUT</h2>
          <p>Established in 2018 as a private non-profit, The Pacha Foundation builds on <span className="ibiza-about__hover-word">The Pacha Group’s legacy<img src="/pachagroup-pill.png" className="ibiza-about__hover-pill" alt="" /></span> of social impact. </p>
          <p>Following <span className="ibiza-about__hover-word">FIVE Holdings’<img src="/fiveholdings-pill.png" className="ibiza-about__hover-pill" alt="" /></span> 2023 acquisition of The Pacha Group , <span className="ibiza-about__hover-word">President Kabir Mulchandani<img src="/km-pill.png" className="ibiza-about__hover-pill" alt="" /></span> expanded the Foundation’s vision and reach. The Foundation advances <span className="ibiza-about__hover-word">healthcare<img src="/healthcare-pill.png" className="ibiza-about__hover-pill" alt="" /></span>, <span className="ibiza-about__hover-word">youth development<img src="/youth-pill.png" className="ibiza-about__hover-pill" alt="" /></span>, and the <span className="ibiza-about__hover-word">arts<img src="/arts-pill.png" className="ibiza-about__hover-pill" alt="" /></span>, while preserving <span className="ibiza-about__hover-word">cultural heritage<img src="/culture-pill.png" className="ibiza-about__hover-pill" alt="" /></span>. It also promotes resilience through sport, community programmes, and environmental leadership across land and sea. </p>
          {/* <Button href="/ibiza/about" className="ibiza-about__btn">
            <img src="/button-cloud.png" className="ibiza-about__btn-cloud" alt="" />
            <span className="ibiza-about__btn-label">Know More</span>
            <img src="/button-cherry.png" className="ibiza-about__btn-cherry" alt="" />
          </Button> */}
        </div>
        <div className="ibiza-about__image">
          <img src="/about.png" alt="" />
        </div>
      </section>

      <IbizaStats />

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
          {[
            { outlet: 'Diario de Ibiza', headline: 'Pacha Foundation Announces Record €500K Commitment for 2025' },
            { outlet: 'El País', headline: 'How FIVE Holdings Is Reshaping Social Impact in the Balearics' },
            { outlet: 'Ibiza Global Radio', headline: "Youth, Sport and Sea: Inside the Foundation's Expanded Vision" },
            { outlet: 'Forbes España', headline: 'Kabir Mulchandani on Purpose-Led Growth and Island Stewardship' },
          ].map((item) => (
            <li key={item.outlet} className="ibiza-press__item">
              <div className="ibiza-press__item-content">
                <span className="ibiza-press__outlet">{item.outlet}</span>
                <span className="ibiza-press__headline">{item.headline}</span>
              </div>
              <a href="#" className="ibiza-press__arrow-btn" aria-label={`Read ${item.outlet}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Footer
        bgImage="/ibiza-footer-bg.png"
        basePath="/ibiza"
        headline={<>Building A Future Where<br className="footer__mobile-br" /> <em>Purpose</em> Meets <em>Celebration</em></>}
      />

    </div>
  )
}
