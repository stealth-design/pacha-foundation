import './Footer.css'

const NAV_ITEMS = ['Impact', 'Initiatives', 'Press', 'About', 'Connect']

export default function Footer({ bgImage, headline, basePath = '' }) {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__headline">{headline}</h2>
        <nav className="footer__nav">
          {NAV_ITEMS.map(item => (
            <a key={item} href={`${basePath}/${item.toLowerCase()}`} className="footer__link">
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer__bg">
        <img src={bgImage} alt="" />
      </div>

      <p className="footer__copy">© The Pacha Foundation</p>
    </footer>
  )
}
