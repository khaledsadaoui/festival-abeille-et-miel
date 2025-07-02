import "../styles/PastEditions.css"

export default function PastEditions() {
  const pastEditions = [
    {
      year: "2023",
      theme: "",
      location: "",
      attendees: "15 000+",
      highlights: [],
      image: "/placeholder.svg?height=300&width=400",
      description: "",
    }
  ]

  return (
    <section className="past-editions">
      <div className="container">
        <div className="past-editions-header">
          <h1>Éditions Précédentes</h1>
          <p className="past-editions-subtitle">
            10 ans de célébration du patrimoine apicole et de la culture du miel en Algérie
          </p>
        </div>

        <div className="editions-timeline">
          {pastEditions?.map((edition, index) => (
            <div key={edition.year} className={`edition-card ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="edition-content">
                <div className="edition-image">
                  <img src={edition.image || "/placeholder.svg"} alt={`Festival ${edition.year}`} />
                  <div className="edition-year">{edition.year}</div>
                </div>

                <div className="edition-info">
                  <h2 className="edition-theme">{edition.theme}</h2>
                  <div className="edition-details">
                    <span className="detail-item">📍 {edition.location}</span>
                    <span className="detail-item">👥 {edition.attendees} participants</span>
                  </div>

                  <p className="edition-description">{edition.description}</p>

                  <div className="highlights">
                    <h3>Moments Forts</h3>
                    <ul className="highlights-list">
                      {edition.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="statistics-section">
          <h2>L'Impact du Festival au Fil des Ans</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">57 000+</div>
              <div className="stat-label">Participants au total</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Intervenants experts</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Ateliers organisés</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Variétés de miel présentées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
