import './Button.css'

export default function Button({ href, onClick, children, className = '' }) {
  if (href) {
    return (
      <a href={href} className={`btn btn--primary ${className}`}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={`btn btn--primary ${className}`}>
      {children}
    </button>
  )
}
