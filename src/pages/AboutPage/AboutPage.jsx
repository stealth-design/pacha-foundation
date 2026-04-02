import { useEffect, useRef, useState } from 'react' // useRef used in LetterHero
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './AboutPage.css'

const LETTER_TEXT = `Dear Pacha Family,

In 2025, The Pacha Foundation is driving over 35 initiatives with a 430% funding boost, deepening our impact across Ibiza. We're expanding care for at-risk families, leading marine conservation and smart recycling efforts, and supporting the Balearic Islands' top resilience forums.

We're also celebrating Ibiza’s heritage through music events and artist support to sustain and enrich the island’s Pityusic legacy, while energising the community with international sports and youth athletic programmes.

As President, I’m inspired by our shared vision of solidarity and excellence. The Foundation’s success is rooted in Ibiza’s enduring spirit, and together, we’re building a stronger, more resilient future. 

I am proud of what we have built together, and I remain committed to ensuring that The Pacha Foundation continues to grow in both reach and ambition. The best is yet to come.


Kabir Mulchandani
President, The Pacha Foundation
Chairman, The Pacha Group`

function LetterHero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    const id = setInterval(() => {
      indexRef.current += 1
      setDisplayed(LETTER_TEXT.slice(0, indexRef.current))
      if (indexRef.current >= LETTER_TEXT.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 18)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="ibiza-section ibiza-about about-letter-section">
      <div className="ibiza-about__content">
        <h2 className="about-letter__heading">A LETTER FROM THE CHAIRMAN</h2>
        <div className="about-letter__body">
          {/* invisible full text reserves space so nothing shifts */}
          <span className="about-letter__spacer" aria-hidden="true">{LETTER_TEXT}</span>
          <span className="about-letter__visible">
            {displayed}
            {!done && <span className="about-letter__cursor" aria-hidden="true">|</span>}
          </span>
        </div>
      </div>
      <div className="ibiza-about__image">
        <img src="/chairman.png" alt="Kabir Mulchandani, President" />
      </div>
    </section>
  )
}

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
      <LetterHero />

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
