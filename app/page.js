"use client"

import { useState } from "react"
import Header from "../components/Header"
import Home from "../components/Home"
import Program from "../components/Program"
import PastEditions from "../components/PastEditions"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import "../styles/globals.css"

export default function App() {
  const [activeSection, setActiveSection] = useState("home")

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />
      case "program":
        return <Program />
      case "past-editions":
        return <PastEditions />
      case "contact":
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">{renderSection()}</main>
      <Footer />
    </div>
  )
}
