import "../styles/Program.css"

export default function Program() {
  const programData = [
  {
    day: "Vendredi",
    date: "15 mai 2024",
    events: [
      {
        time: "09:00 - 10:30",
        title: "Cérémonie d'ouverture et accueil",
        description: "Ouverture officielle avec musique traditionnelle algérienne et cérémonie de bénédiction du miel",
        type: "ceremony",
      },
    ],
  },
  {
    day: "Samedi",
    date: "16 mai 2024",
    events: [
      {
        time: "09:00 - 10:30",
        title: "Pratiques apicoles durables",
        description: "Atelier sur l’apiculture écologique et la préservation de l’environnement",
        type: "workshop",
      }
    ],
  },
  {
    day: "Dimanche",
    date: "17 mai 2024",
    events: [
      {
        time: "09:00 - 10:30",
        title: "Santé des abeilles et gestion des maladies",
        description: "Approche vétérinaire pour maintenir des colonies d’abeilles en bonne santé",
        type: "talk",
      },
    ],
  },
];


  const getEventIcon = (type) => {
    const icons = {
      ceremony: "🎉",
      talk: "🎤",
      workshop: "🛠️",
      exhibition: "🏛️",
      education: "📚",
      demonstration: "👨‍🍳",
      cultural: "🎭",
      panel: "💬",
    }
    return icons[type] || "📅"
  }

  return (
    <section className="program">
      <div className="container">
        <div className="program-header">
          <h1>Festival Program</h1>
          <p className="program-subtitle">
            Three days of immersive experiences celebrating the world of bees and honey
          </p>
        </div>

        <div className="program-schedule">
          {programData.map((day, dayIndex) => (
            <div key={dayIndex} className="day-schedule">
              <div className="day-header">
                <h2>{day.day}</h2>
                <p className="day-date">{day.date}</p>
              </div>

              <div className="events-list">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className={`event-card ${event.type}`}>
                    <div className="event-time">
                      <span className="time">{event.time}</span>
                      <span className="event-icon">{getEventIcon(event.type)}</span>
                    </div>
                    <div className="event-content">
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      <span className="event-type">{event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="program-footer">
  <div className="info-box">
    <h3>Informations importantes</h3>
    <ul>
      <li>Tous les ateliers nécessitent une inscription préalable</li>
      <li>Les séances de dégustation incluent des échantillons offerts</li>
      <li>Les enfants de moins de 12 ans participent gratuitement aux programmes éducatifs</li>
      <li>Le site du festival est ouvert chaque jour de 8h00 à 21h00</li>
    </ul>
  </div>
</div>

      </div>
    </section>
  )
}
