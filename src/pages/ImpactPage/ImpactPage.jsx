import { useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './ImpactPage.css'

const STORIES = [
  {
    headline: 'Increase In 2025 Budget',
    body: 'Under President Kabir Mulchandani, The Pacha Foundation has grown significantly since FIVE Holdings\u2019 2023 acquisition, with funding up 430%. In 2025, it supported 14 social welfare initiatives (\u20ac94,000+), funded cultural arts programmes including Ibiza port music events (\u20ac126,000+), invested in sports initiatives like marathons and youth programmes (\u20ac128,000+), and contributed over \u20ac134,000 to environmental efforts focused on marine conservation, biodiversity, and recycling.',
    image: '/impact1.jpg',
  },
  {
    headline: 'Ibiza Initiatives',
    body: 'In 2025, The Pacha Foundation has expanded its impact by renewing support for key initiatives and launching new projects that respond to Ibiza\u2019s evolving needs. With a record \u20ac500,000 budget funding over 35 programmes, the Foundation has deepened its commitment to Social Welfare, Cultural Arts, Sports, and Environmental stewardship, focusing its support on the most impactful projects, aligning with community leadership and local and national priorities.',
    image: '/impact2.png',
  },
  {
    headline: 'Committed In 2025',
    body: 'Originally a grassroots initiative within The Pacha Group, the Pacha Foundation now manages a \u20ac500,000 portfolio in 2025\u2014up 5% year-on-year and 430% since FIVE Holdings\u2019 acquisition. This growth highlights the link between the Group\u2019s commercial success and its commitment to social impact, supporting social welfare, culture, sports, and environmental initiatives across Ibiza.',
    image: '/impact3.png',
  },
  {
    headline: 'Funding To Ibiza',
    body: 'While many foundations pursue global ambitions, often struggling to achieve lasting impact, The Pacha Foundation remains steadfast in its mission to exclusively serve the Island of Ibiza. This focused vision stems from our deep gratitude for over 50 years of success, rooted in the vibrant and resilient communities that thrive alongside the Pacha Brand. In 2025, our \u20ac500,000 budget, reflecting a 5% year-on-year increase, fuels targeted initiatives in social welfare, cultural arts, sports, and environmental stewardship, ensuring measurable and enduring contributions to Ibiza\u2019s legacy and its people.',
    image: '/impact4.png',
  },
]



export default function ImpactPage() {
  const heroRef      = useRef(null)
  const impactRef    = useRef(null)
  const imageRef     = useRef(null)
  const cloudRefs    = useRef([])

  // Switch from CSS animation to JS-driven transform for parallax
  useEffect(() => {
    const t = setTimeout(() => {
      if (impactRef.current) {
        impactRef.current.style.animation = 'none'
        impactRef.current.style.transform = 'translateX(-50%) translateY(0)'
      }
      cloudRefs.current.forEach((el) => {
        if (el) {
          el.style.animation = 'none'
          el.style.opacity   = '1'
        }
      })
    }, 1600)
    return () => clearTimeout(t)
  }, [])

  // Parallax on scroll
  useEffect(() => {
    function onScroll() {
      if (!heroRef.current) return
      const y = window.scrollY
      const h = heroRef.current.offsetHeight
      if (y > h) return

      if (impactRef.current)
        impactRef.current.style.transform = `translateX(-50%) translateY(${y * 0.35}px)`
      if (imageRef.current)
        imageRef.current.style.transform  = `translateX(-50%) translateY(${y * 0.12}px)`
      cloudRefs.current.forEach((el, i) => {
        if (el) el.style.transform = `translateY(${y * (0.18 + i * 0.04)}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="impact-page">
      <Navbar basePath="/ibiza" menuVideo="/ibiza-bg-video.mp4" />

      {/* ── Hero ── */}
      <section className="impact-hero" ref={heroRef}>

        {/* Layer 2 — IMPACT text (behind image, in front of sky) */}
        <h1 className="impact-hero__impact" ref={impactRef}>IMPACT</h1>

        {/* Layer 4 — Runners image (foreground) */}
        <img
          src="/impact-hero.png"
          alt="Impact"
          className="impact-hero__image"
          ref={imageRef}
        />

      </section>

      {/* ── Stories ── */}
      <section className="ibiza-section impact-stories">
        {/* <h2 className="impact-stories__title">IMPACT</h2> */}
        <p className="impact-stories__desc">Under President Kabir Mulchandani's leadership, The Pacha Foundation has expanded its impact following FIVE Holdings' acquisition, supporting social welfare, cultural arts, sports, and environmental initiatives that benefit communities and preserve Ibiza's heritage.</p>
        <div className="impact-stories__list">
          {STORIES.map((s, i) => (
            <div key={i} className="impact-story">
              <div className="impact-story__img">
                <img src={s.image} alt="" />
              </div>
              <div className="impact-story__content">
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
