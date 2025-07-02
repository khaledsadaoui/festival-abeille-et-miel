"use client"

import { useState } from "react"
import "../styles/Contact.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">Get in touch with the organizers</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Festival Location</h3>
              <p>
                Village Ahrik
                <br />
                Bouzeguene, Tizi Ouzou
                <br />
                Algerie
              </p>
            </div>

            <div className="info-card">
              <h3>📞 Contact Information</h3>
              <p>
                Phone: +213
                <br />
                Email: 
                <br />
                WhatsApp: +213
              </p>
            </div>

           
            

            
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>

              {isSubmitted && (
                <div className="success-message">
                  <p>🍯 Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="tickets">Ticket Information</option>
                  <option value="vendor">Vendor Application</option>
                  <option value="media">Media & Press</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="sponsorship">Sponsorship</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn" disabled={isSubmitted}>
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h3>Find Us</h3>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <h4>Village Ahrik</h4>
                <p>Bouzegeune, Tizi ouzou</p>
                <p>Algeria</p>
                <div className="map-links">
                  <a href="https://maps.app.goo.gl/KRMFUk6e8MkzqpM16" className="map-link">
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
