import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo-festival.png" alt="Logo du Festival des Abeilles et du Miel" className="footer-logo-img" />
              <div className="footer-logo-text">
                <h3>Festival des Abeilles & Miel</h3>
                <p>Algérie</p>
              </div>
            </div>
            <p className="footer-description">
              Célébrons ensemble la richesse apicole de notre pays, entre traditions et passions partagées.
            </p>
          </div>

          <div className="footer-section">
            <h4>Liens Rapides</h4>
            <ul className="footer-links">
              <li><a href="#home">Accueil</a></li>
              <li><a href="#program">Programme</a></li>
              <li><a href="#past-editions">Éditions Passées</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100094651809962" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M279.1 288l14.2-92.66h-88.91V132.1c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S263.5 0 225.4 0c-73.64 0-121.3 44.38-121.3 124.7v70.6H22.89V288h81.27v224h100.2V288z"/>
                </svg>
                <p>Facebook</p>
              </a>
              <a href="https://www.instagram.com/festival_abeille_et_miel?igsh=NG82ZnAxOGJrcXlw" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 256 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.9-19.6-5-37-17.6-52.4-12.7-15.7-29.6-26.2-48.7-32.8-19.7-6.8-39.5-8.1-59.9-8.6-23.4-.5-46.9-.5-70.3-.5s-46.9 0-70.3.5c-20.4.5-40.2 1.8-59.9 8.6-19.1 6.6-36 17.1-48.7 32.8-12.6 15.4-16.7 32.8-17.6 52.4-.6 12.1-.6 24.2-.6 36.4v147.2c0 12.2 0 24.3.6 36.4.9 19.6 5 37 17.6 52.4 12.7 15.7 29.6 26.2 48.7 32.8 19.7 6.8 39.5 8.1 59.9 8.6 23.4.5 46.9.5 70.3.5s46.9 0 70.3-.5c20.4-.5 40.2-1.8 59.9-8.6 19.1-6.6 36-17.1 48.7-32.8 12.6-15.4 16.7-32.8 17.6-52.4.6-12.1.6-24.2.6-36.4V168.5c0-12.1 0-24.2-.6-36.4z"/>
                </svg>
                <p>Instagram</p>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M448,209.9V128h-66.8c-6.2-17.6-9.7-36.6-9.7-56.4V0h-72.6v260.5c0,26.4-21.4,47.8-47.8,47.8s-47.8-21.4-47.8-47.8
  s21.4-47.8,47.8-47.8c5.9,0,11.5,1.1,16.7,3V143c-5.5-0.8-11.1-1.2-16.7-1.2c-66.3,0-120.1,53.8-120.1,120.1S204.2,382,270.5,382
  S390.6,328.2,390.6,261.9V204C412.7,207.7,430.9,212.7,448,219.2V209.9z"/>
</svg>

                <p>TikTok</p>
              </a>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2024 Festival des Abeilles & du Miel — Tous droits réservés</p>
            <div className="footer-bottom-links">

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
