import "../styles/Home.css"

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Bienvenue au Festival de l'Abeille et du Miel</h1>
              <p className="hero-subtitle">
                Célébrons les trésors dorés du patrimoine apicole algérien
              </p>
              <p className="hero-description">
                Rejoignez-nous pour une célébration extraordinaire des abeilles, du miel et de l'art ancestral de
                l'apiculture. Notre festival annuel rassemble apiculteurs, passionnés de miel et amoureux de la nature
                venus de toute l'Algérie (et d'ailleurs) pour honorer ces créatures remarquables et leurs doux cadeaux.
              </p>
              
            </div>
            <div className="hero-image">
              <img src="/logo-festival.png" alt="Logo du Festival" className="hero-logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-card">
              <h3>🐝 Découvrir</h3>
              <p>
                Découvrez l’univers fascinant des abeilles et leur rôle essentiel dans notre écosystème à travers des
                expositions interactives et des présentations d'experts.
              </p>
            </div>
            <div className="intro-card">
              <h3>🍯 Goûter</h3>
              <p>
                Dégustez les meilleures variétés de miel d’Ahrik, des fleurs sauvages des montagnes de Djurdjura chacune avec son profil de saveur unique.
              </p>
            </div>
            <div className="intro-card">
              <h3>🌿 Rencontrer</h3>
              <p>
                Rencontrez des apiculteurs passionnés, des artisans et d’autres amoureux du miel dans un esprit de
                partage et d’engagement pour une apiculture durable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
