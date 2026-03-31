import './MenuPanel.css'

const NAV_ITEMS = ['Impact', 'Initiatives', 'About', 'Press', 'Connect']

export default function MenuPanel({ isOpen }) {
  return (
    <div className={`menu-panel${isOpen ? ' menu-panel--open' : ''}`} aria-hidden={!isOpen}>
      <nav className="menu-panel__nav">
        {NAV_ITEMS.map(item => (
          <a key={item} href={`/${item.toLowerCase()}`} className="menu-panel__link">
            {item}
          </a>
        ))}
      </nav>
      <div className="menu-panel__illustration">
        <img src="/menu-illustration.png" alt="" />
      </div>
    </div>
  )
}
