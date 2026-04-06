import { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './InitiativesPage.css'

const STORIES = [
  {
    headline: 'Social Welfare',
    body: `The Pacha Foundation, rooted in its dedication to Ibiza's most vulnerable, continues to deliver vital social and healthcare support to diverse communities and key organisations across the island. In 2025, with over €94,000 allocated to fourteen targeted initiatives, our long-term partnerships with a robust portfolio of healthcare programmes strengthen mental, physical, and economic well-being. The Foundation remains steadfast in its mission to empower Ibiza's most at-risk residents, fostering resilience and inclusivity through sustained, impactful support.`,
    image: '/initiatives0.png',
    gallery: [
      { src: '/social1.png', caption: 'Community food aid programme' },
      { src: '/social2.png', caption: 'Mental health outreach 2025' },
      { src: '/social3.png', caption: 'Family support services' },
      { src: '/social1.png', caption: 'Elderly care partnership' },
      { src: '/social1.png', caption: 'Community food aid programme' },
      { src: '/social2.png', caption: 'Mental health outreach 2025 testing the long caption' },
    ],
  },
  {
    headline: 'Culture and Arts',
    body: 'Renowned as a global hub for nightlife and entertainment, Ibiza is also home to a rich, millennia-old Pityusic culture, tracing back to the Phoenician Empire and recognised by UNESCO as a World Heritage Site. In 2025, The Pacha Foundation invested over €126,000 across eight vibrant initiatives to preserve and promote this enduring legacy. By funding historic and contemporary cultural events, including musical showcases at Ibiza’s port, and supporting dedicated arts groups, the Foundation celebrates one of the world’s most ancient cultures, ensuring it continues to inspire and captivate global audiences.',
    image: '/initiatives1.png',
    gallery: [
      { src: '/culture1.png', caption: 'Ibiza Port Music Series' },
      { src: '/culture2.png', caption: 'Heritage preservation workshop' },
      { src: '/culture3.png', caption: 'Emerging artist residency' },
      { src: '/culture1.png', caption: 'Eivissa Jazz Festival 2025' },
    ],
  },
  {
    headline: 'Environmental',
    body: 'Ibiza’s UNESCO-protected Posidonia sea-grass meadows, recognised as the world’s largest living organism, are vital to the health and resilience of the Balearic marine ecosystem. Acknowledging the essential role of Ibiza’s land and marine resources in sustaining the island’s nearly 4 million annual visitors, The Pacha Foundation has prioritised environmental stewardship in 2025. With over €134,000 allocated to five high-impact initiatives, including marine conservation, reforestation and smart recycling systems, the Foundation reinforces its leadership in Ibiza’s premier environmental forums, ensuring the island’s natural heritage thrives for future generations.',
    image: '/initiatives2.png',
    gallery: [
      { src: '/environment1.png', caption: 'Posidonia restoration dive' },
      { src: '/environment2.png', caption: 'Coastal clean-up, June 2025' },
      { src: '/environment3.png', caption: 'Biodiversity reforestation' },
      { src: '/environment1.png', caption: 'Zero waste school programme' },
    ],
  },
  {
    headline: 'Sports',
    body: `While many foundations pursue global ambitions, The Pacha Foundation remains steadfast in its mission to exclusively serve the Island of Ibiza. In 2025, our €500,000 budget fuels targeted initiatives in social welfare, cultural arts, sports, and environmental stewardship, ensuring measurable and enduring contributions to Ibiza's legacy and its people.`,
    image: '/sports2.png',
    gallery: [
      { src: '/sports1.png', caption: 'Ibiza Half Marathon 2025' },
      { src: '/sports2.png', caption: 'Youth football academy' },
      { src: '/sports3.png', caption: 'Adaptive sports programme' },
      { src: '/sports1.png', caption: 'Paddle & surf youth camp' },
    ],
  },
]

function StoryCard({ story }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="initiatives-story-wrap">
      <div className="initiatives-story">
        <div className="initiatives-story__img">
          <img src={story.image} alt="" />
        </div>
        <div className="initiatives-story__content">
          <h3 className="initiatives-story__headline">{story.headline}</h3>
          <p className="initiatives-story__body">{story.body}</p>
          <button className="initiatives-gallery-btn" onClick={() => setOpen(o => !o)}>
            <img src="/button-cloud.png" alt="" className="initiatives-gallery-btn__cloud" />
            <span>{open ? 'Close' : 'Explore'}</span>
            <img src="/button-cherry.png" alt="" className="initiatives-gallery-btn__cherry" />
          </button>
        </div>
      </div>
      <div className={`initiatives-gallery${open ? ' initiatives-gallery--open' : ''}`}>
        <div className="initiatives-gallery__grid">
          {story.gallery.map((item, i) => (
            <div key={i} className="initiatives-gallery__item">
              <div className="initiatives-gallery__img">
                <img src={item.src} alt={item.caption} />
              </div>
              <div className="initiatives-gallery__caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StoriesSection() {
  return (
    <section className="ibiza-section initiatives-stories">
      {/* <h2 className="initiatives-stories__title">INITIATIVES</h2> */}
      <p className="initiatives-stories__desc">In 2025, The Pacha Foundation expanded its impact with a €500,000 budget (up 5% year-on-year), supporting 35+ programmes across key areas: Social Welfare (€94,000+), Cultural Arts (€126,000+), Sports (€128,000+), and Environmental Stewardship (€134,000+). Through these initiatives, the Foundation continues to strengthen Ibiza's communities and preserve its vibrant legacy.</p>
      <div className="initiatives-stories__list">
        {STORIES.map((s, i) => (
          <StoryCard key={i} story={s} />
        ))}
      </div>
    </section>
  )
}

const CLOUDS = [
  { top: '8%',  left: '-2%',  width: '22vw', z: 3 },
  { top: '4%',  left: '28%',  width: '16vw', z: 3 },
  { top: '2%',  right: '5%',  width: '20vw', z: 3 },
  { top: '22%', left: '12%',  width: '12vw', z: 3 },
]

export default function InitiativesPage() {
  const heroRef      = useRef(null)
  const titleRef     = useRef(null)
  const imageRef     = useRef(null)
  const cloudRefs    = useRef([])

  useEffect(() => {
    const t = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.animation = 'none'
        titleRef.current.style.transform = 'translateX(-50%) translateY(0)'
      }
      cloudRefs.current.forEach(el => {
        if (el) { el.style.animation = 'none'; el.style.opacity = '1' }
      })
    }, 1600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    function onScroll() {
      if (!heroRef.current) return
      const y = window.scrollY
      if (y > heroRef.current.offsetHeight) return
      if (titleRef.current)
        titleRef.current.style.transform = `translateX(-50%) translateY(${y * 0.35}px)`
      if (imageRef.current)
        imageRef.current.style.transform = `translateX(-50%) translateY(${y * 0.12}px)`
      cloudRefs.current.forEach((el, i) => {
        if (el) el.style.transform = `translateY(${y * (0.18 + i * 0.04)}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="initiatives-page">
      <Navbar basePath="/ibiza" menuVideo="/ibiza-bg-video.mp4" />

      {/* ── Hero ── */}
      <section className="initiatives-hero" ref={heroRef}>
        <h1 className="initiatives-hero__title" ref={titleRef}>INITIATIVES</h1>
        {CLOUDS.map((c, i) => (
          <img
            key={i}
            src="/cloud.png"
            alt=""
            className="initiatives-hero__cloud"
            ref={el => cloudRefs.current[i] = el}
            style={{ top: c.top, left: c.left, right: c.right, width: c.width, zIndex: c.z }}
          />
        ))}
        <img
          src="/initiatives-hero.png"
          alt="Initiatives"
          className="initiatives-hero__image"
          ref={imageRef}
        />
      </section>

      {/* ── Stories ── */}
      <StoriesSection />

      <Footer
        bgImage="/ibiza-footer-bg.png"
        basePath="/ibiza"
        headline={<>Building A Future Where<br className="footer__mobile-br" /> <em>Purpose</em> Meets <em>Celebration</em></>}
      />
    </div>
  )
}
