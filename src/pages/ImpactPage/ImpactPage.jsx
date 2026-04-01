import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './ImpactPage.css'

const PILLARS = [
  {
    number: '01',
    title: 'Community Welfare',
    description:
      'Supporting local families, elderly care programmes, and social inclusion initiatives across the island. From food security drives to mental health outreach, we stand with the people of Ibiza.',
    tag: 'Social',
  },
  {
    number: '02',
    title: 'Cultural Arts',
    description:
      'Preserving the rich artistic heritage of the Balearics while empowering emerging local talent. We fund exhibitions, residencies, and public art installations year-round.',
    tag: 'Culture',
  },
  {
    number: '03',
    title: 'Youth & Sport',
    description:
      'Providing pathways for young people through structured sports programmes, scholarships, and mentorship. Every child deserves the tools to reach their potential.',
    tag: 'Youth',
  },
  {
    number: '04',
    title: 'Environmental Conservation',
    description:
      'Leading land and sea conservation projects — from Posidonia meadow restoration to coastal clean-ups. We are committed to leaving Ibiza better than we found it.',
    tag: 'Environment',
  },
]

const STORIES = [
  {
    year: '2023',
    headline: 'Posidonia Restoration Project Launched',
    body: 'In partnership with marine biologists and local fishermen, the Foundation initiated the largest seagrass restoration effort in Ibiza\'s history — covering over 40 hectares of seabed.',
    image: '/about.png',
  },
  {
    year: '2024',
    headline: '500 Scholarships Awarded to Island Youth',
    body: 'Through our education fund, five hundred young people from Ibiza and Formentera received grants to pursue higher education and vocational training both locally and abroad.',
    image: '/hero-pill.png',
  },
  {
    year: '2025',
    headline: 'Record €500K Budget Commitment',
    body: 'Following FIVE Holdings\' strategic investment, the Foundation announced a 430% increase in its annual budget — enabling unprecedented scale across all four pillars of impact.',
    image: '/about.png',
  },
]

export default function ImpactPage() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const drinkRef = useRef(null)
  const fanRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      if (!heroRef.current) return
      const heroHeight = heroRef.current.offsetHeight
      const y = window.scrollY
      if (y > heroHeight) return
      if (textRef.current)  textRef.current.style.transform  = `translateY(${y * 0.3}px)`
      if (drinkRef.current) drinkRef.current.style.transform = `translateY(calc(20% + ${y * 0.55}px)) rotate(-27deg)`
      if (fanRef.current)   fanRef.current.style.transform   = `translateY(calc(-80% + ${y * 0.15}px)) rotate(50deg)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="impact-page">
      <Navbar basePath="/ibiza" menuVideo="/ibiza-bg-video.mp4" />

      {/* ── Hero ── */}
      <section className="impact-hero" ref={heroRef}>
        <div className="impact-hero__text" ref={textRef}>
          <img src="/drink.png" alt="" className="impact-hero__drink" ref={drinkRef} />
          <img src="/fan.png" alt="" className="impact-hero__fan" ref={fanRef} />
          <h1 className="impact-hero__big">
            <span className="impact-hero__line1">Purpose is not</span>
            <span className="impact-hero__line2">a side project</span>
          </h1>
          <p className="impact-hero__small">It is the foundation on which everything we build must stand</p>
        </div>
      </section>


      {/* ── Stories ── */}
      <section className="ibiza-section impact-stories">
        <h2 className="impact-stories__title">IMPACT</h2>
        <p className="impact-stories__desc">Under President Kabir Mulchandani's leadership, The Pacha Foundation has expanded its impact following FIVE Holdings' acquisition, supporting social welfare, cultural arts, sports, and environmental initiatives that benefit communities and preserve Ibiza's heritage.</p>
        <div className="impact-stories__list">
          {STORIES.map((s, i) => (
            <div key={i} className="impact-story">
              <div className="impact-story__img">
                <img src={s.image} alt="" />
              </div>
              <div className="impact-story__content">
                <span className="impact-story__year">{s.year}</span>
                <h3 className="impact-story__headline">{s.headline}</h3>
                <p className="impact-story__body">{s.body}</p>
                <a href="#" className="impact-story__link">Read full story →</a>
              </div>
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
