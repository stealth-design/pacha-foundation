import { useState } from 'react'
import './IbizaInitiatives.css'

const categories = [
  {
    name: 'Social Welfare',
    description: 'Upholding Inclusivity and Compassionate Care',
    images: ['/social1.png', '/social2.png', '/social3.png'],
  },
  {
    name: 'Culture and Arts',
    description: "Inspiring Ibiza's Spirit and Celebrating Its Legacy",
    images: ['/culture1.png', '/culture2.png', '/culture3.png'],
  },
  {
    name: 'Environmental',
    description: 'Protecting National Treasures for a Regenerative Future',
    images: ['/environment1.png', '/environment2.png', '/environment3.png'],
  },
  {
    name: 'Sports',
    description: 'Building Economic Resilience and Community Strength',
    images: ['/sports1.png', '/sports2.png', '/sports3.png'],
  },
]

export default function IbizaInitiatives() {
  const [active, setActive] = useState(0)

  return (
    <section className="ibiza-initiatives">
      <div className="ibiza-initiatives__header">
        <h2 className="ibiza-initiatives__title">Initiatives</h2>
        <div className="ibiza-initiatives__tabs">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              className={`ibiza-initiatives__tab${i === active ? ' ibiza-initiatives__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src="/button-star.png" className="ibiza-initiatives__tab-star" alt="" />
              <span className="ibiza-initiatives__tab-label">{cat.name}</span>
              <img src="/button-cloud.png" className="ibiza-initiatives__tab-cloud" alt="" />
            </button>
          ))}
        </div>
      </div>
      <p className="ibiza-initiatives__desc">{categories[active].description}</p>
      <div className="ibiza-initiatives__images">
        {categories[active].images.map((src, i) => (
          <div key={i} className="ibiza-initiatives__img-wrap">
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}
