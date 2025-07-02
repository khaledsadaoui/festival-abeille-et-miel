"use client"

import "../styles/Header.css"

export default function Header({ activeSection, setActiveSection }) {
  const navItems = [
    { id: "home", label: "Acceuill" },
    { id: "program", label: "Programme" },
    { id: "past-editions", label: "Past Editions" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <img src="/logo-festival.png" alt="Bee and Honey Festival Logo" className="logo" />
            <div className="logo-text">
              <h1>Festival de l'abeille et du miel</h1>
              <p>Village Ahrik</p>
            </div>
          </div>

          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
