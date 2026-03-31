import './MainLayout.css'

export default function MainLayout({ children }) {
  return (
    <div className="layout">
      <main className="layout__main">{children}</main>
    </div>
  )
}
