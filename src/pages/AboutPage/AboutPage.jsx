import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './AboutPage.css'

/* LetterHero commented out
const LETTER_TEXT = `...`
function LetterHero() { ... }
*/

const BOARD = [
  { name: 'Kabir Mulchandani', position: 'President', image: '/km1.png', imageHover: '/km2.png' },
  { name: 'Josep Antoni Escandell', position: 'Managing Director', image: '/ja1.png', imageHover: '/ja2.png' },
  { name: 'Mashenka Anand', position: 'Managing Director', image: '/ma1.png', imageHover: '/ma2.png' },

]

const TEAM = [
  {
    name: 'Kabir Mulchandani',
    role: 'President',
    image: '/km-pill.png',
    bio: 'Kabir Mulchandani leads The Pacha Foundation following FIVE Holdings\' 2023 acquisition of The Pacha Group. Under his vision, the Foundation\'s annual budget has grown by 430%, extending its reach across social welfare, cultural arts, sports, and environmental stewardship.',
  },
  {
    name: 'Maria Torres',
    role: 'Director of Programmes',
    image: '/hero-pill.png',
    bio: 'Maria oversees the Foundation\'s 35+ annual programmes, ensuring each initiative delivers measurable impact for Ibiza\'s communities. With a background in social policy, she has shaped partnerships with over 40 local organisations since 2020.',
  },
  {
    name: 'Jordi Ferrer',
    role: 'Head of Environmental Stewardship',
    image: '/hero-pill.png',
    bio: 'Jordi leads the Foundation\'s environmental division, driving initiatives in Posidonia conservation, coastal clean-ups, and biodiversity reforestation. He represents the Foundation in Ibiza\'s premier environmental forums.',
  },
]


export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar basePath="/ibiza" menuVideo="/ibiza-bg-video.mp4" />

      {/* ── Chairman Letter Hero ── */}
      {/* <LetterHero /> */}

      {/* ── Mission ── */}
      {/* <section className="ibiza-section about-mission ibiza-section--cream">
        <div className="about-mission__inner">
          <p className="about-mission__label">OUR PHILISOPHY</p>
          <h2 className="about-mission__title">Reinforcing The Foundation’s long-term partnerships in social welfare and cultural arts while expanding its programmes in environmental conservation, sports, and athletics, Mulchandani has strengthened the Foundation’s alignment with national priorities and deepened its role in driving key community strategies.</h2>
          <p className="about-mission__body">Amidst The Pacha Group’s global success, The Pacha Foundation stands unwavering in its commitment to serving Ibiza’s communities. Following FIVE Holdings’ acquisition of The Pacha Group in 2023, Kabir Mulchandani, President of The Pacha Foundation, expanded The Foundation's 2025 budget by 430%, delivering unprecedented Social and Environmental Impact across Ibiza</p>
        </div>
      </section> */}

      {/* ── Board ── */}
      <section className="ibiza-section about-board">
        <h2 className="about-board__title">BOARD OF DIRECTORS</h2>
        <div className="about-board__grid">
          {BOARD.map((member, i) => (
            <div key={i} className="about-board-card">
              <div className="about-board-card__img">
                <img className="about-board-card__img-bottom" src={member.imageHover} alt={member.name} />
                <img className="about-board-card__img-top" src={member.image} alt={member.name} />
              </div>
              <h3 className="about-board-card__name">{member.name}</h3>
              <span className="about-board-card__position">{member.position}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer
        bgImage="/ibiza-footer-bg.png"
        basePath="/ibiza"
        headline={<>Building A Future Where<br className="footer__mobile-br" /> <em>Purpose</em> Meets <em>Celebration</em></>}
      />
    </div>
  )
}
