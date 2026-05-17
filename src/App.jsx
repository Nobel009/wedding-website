import { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import OurStory from './components/OurStory/OurStory'
import WeddingTimeline from './components/WeddingTimeline/WeddingTimeline'
import DressCode from './components/DressCode/DressCode'
import GiftGuide from './components/GiftGuide/GiftGuide'
import VenueSection from './components/VenueSection/VenueSection'
import FAQ from './components/FAQ/FAQ'
import PrenupPhotos from './components/PrenupPhotos/PrenupPhotos'
import RSVPForm from './components/RSVPForm/RSVPForm'
import Footer from './components/Footer/Footer'
import { weddingConfig } from './data/weddingConfig'

function Divider() {
  return <hr className="divider" aria-hidden="true" />
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [cursor, setCursor] = useState({ x: -20, y: -20 })
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)
    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  useEffect(() => {
    const updateCursor = (event) => setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener('mousemove', updateCursor)
    return () => window.removeEventListener('mousemove', updateCursor)
  }, [])

  useEffect(() => {
    const sections = [
      ['home', 'Home'],
      ['welcome', 'Welcome'],
      ['countdown', 'Countdown'],
      ['story', 'Our Story'],
      ['timeline', 'Timeline'],
      ['attire', 'Attire'],
      ['gift-guide', 'Gifts'],
      ['venue', 'Venue'],
      ['faq', 'FAQ'],
      ['photos', 'Photos'],
      ['rsvp', 'RSVP'],
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) {
          const match = sections.find(([id]) => id === visible.target.id)
          setActiveSection(match?.[1] ?? '')
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 },
    )

    sections.forEach(([id]) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="scrollProgress" style={{ width: `${scrollProgress}%` }} />
      <div className="cursorTrail" style={{ left: cursor.x, top: cursor.y }} />
      <div className={`sectionChapter ${activeSection ? 'sectionChapterVisible' : ''}`}>
        {activeSection}
      </div>
      <NavBar config={weddingConfig} />
      <main>
        <HeroSection config={weddingConfig} />
        <WelcomeSection config={weddingConfig} />
        <Divider />
        <CountdownTimer weddingDate={weddingConfig.date} />
        <OurStory config={weddingConfig} />
        <Divider />
        <WeddingTimeline items={weddingConfig.timeline} />
        <DressCode config={weddingConfig} />
        <GiftGuide config={weddingConfig} />
        <Divider />
        <VenueSection config={weddingConfig} />
        <FAQ items={weddingConfig.faq} />
        <PrenupPhotos config={weddingConfig} />
        <RSVPForm config={weddingConfig} />
      </main>
      <Footer config={weddingConfig} />
    </>
  )
}

export default App
