import { useState } from 'react'
import SectionReveal from '../SectionReveal'
import styles from './VenueSection.module.css'

function VenueCard({ label, venue }) {
  const [tilt, setTilt] = useState('perspective(600px) rotateX(0deg) rotateY(0deg)')

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x / rect.width) - 0.5) * 8
    const rotateX = ((0.5 - y / rect.height) * 8)
    setTilt(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
  }

  return (
    <article
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt('perspective(600px) rotateX(0deg) rotateY(0deg)')}
      style={{ transform: tilt }}
    >
      <img src={venue.image} alt={venue.name} style={{ objectPosition: venue.objectPosition ?? 'center' }} />
      <div className={styles.overlay}>
        <span>{label}</span>
        <h3>{venue.name}</h3>
        <p>{venue.address}</p>
        <a className="outlineButton" href={venue.mapUrl} target="_blank" rel="noreferrer">
          View Map
        </a>
      </div>
    </article>
  )
}

function VenueSection({ config }) {
  return (
    <section id="venue" className="section">
      <SectionReveal className="container">
        <p className="sectionKicker">Where to go</p>
        <h2 className="sectionHeading">Ceremony & Reception</h2>
        <div className={styles.grid}>
          <VenueCard label="Ceremony" venue={config.ceremony} />
          <VenueCard label="Reception" venue={config.reception} />
        </div>
      </SectionReveal>
    </section>
  )
}

export default VenueSection
