import './MenuPanel.css'

const NAV_ITEMS = ['Impact', 'Initiatives', 'About', 'Press', 'Connect']

export default function MenuPanel({ isOpen, basePath = '', video }) {
  return (
    <div className={`menu-panel${isOpen ? ' menu-panel--open' : ''}`} aria-hidden={!isOpen}>
      <nav className="menu-panel__nav">
        {NAV_ITEMS.map(item => (
          <a key={item} href={`${basePath}/${item.toLowerCase()}`} className="menu-panel__link">
            {item}
          </a>
        ))}
      </nav>
      {video && (
        <div className="menu-panel__video">
          <video src={video} autoPlay muted loop playsInline />
        </div>
      )}
    </div>
  )
}
