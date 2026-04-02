import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './ImpactPage.css'



const STORIES = [
  {
    headline: 'Increase In 2025 Budget',
    body: 'Under President Kabir Mulchandani, The Pacha Foundation has grown significantly since FIVE Holdings’ 2023 acquisition, with funding up 430%. In 2025, it supported 14 social welfare initiatives (€94,000+), funded cultural arts programmes including Ibiza port music events (€126,000+), invested in sports initiatives like marathons and youth programmes (€128,000+), and contributed over €134,000 to environmental efforts focused on marine conservation, biodiversity, and recycling.',
    image: '/impact1.jpg',
  },
  {
    headline: 'Ibiza Initiatives',
    body: 'In 2025, The Pacha Foundation has expanded its impact by renewing support for key initiatives and launching new projects that respond to Ibiza’s evolving needs. With a record €500,000 budget funding over 35 programmes, the Foundation has deepened its commitment to Social Welfare, Cultural Arts, Sports, and Environmental stewardship, focusing its support on the most impactful projects, aligning with community leadership and local and national priorities.',
    image: '/impact2.png',
  },
  {
    headline: 'Committed In 2025',
    body: 'Originally a grassroots initiative within The Pacha Group, the Pacha Foundation now manages a €500,000 portfolio in 2025—up 5% year-on-year and 430% since FIVE Holdings’ acquisition. This growth highlights the link between the Group’s commercial success and its commitment to social impact, supporting social welfare, culture, sports, and environmental initiatives across Ibiza.',
    image: '/impact3.png',
  },

  {
    headline: 'Funding To Ibiza',
    body: 'While many foundations pursue global ambitions, often struggling to achieve lasting impact, The Pacha Foundation remains steadfast in its mission to exclusively serve the Island of Ibiza. This focused vision stems from our deep gratitude for over 50 years of success, rooted in the vibrant and resilient communities that thrive alongside the Pacha Brand. In 2025, our €500,000 budget, reflecting a 5% year-on-year increase, fuels targeted initiatives in social welfare, cultural arts, sports, and environmental stewardship, ensuring measurable and enduring contributions to Ibiza’s legacy and its people.',
    image: '/impact4.png',
  }
]

export default function ImpactPage() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const drinkRef = useRef(null)
  const fanRef = useRef(null)

  // Clear load animations once done so JS parallax can take over
  useEffect(() => {
    const timer = setTimeout(() => {
      if (drinkRef.current) drinkRef.current.style.animation = 'none'
      if (fanRef.current)   fanRef.current.style.animation   = 'none'
    }, 1400)
    return () => clearTimeout(timer)
  }, [])

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
