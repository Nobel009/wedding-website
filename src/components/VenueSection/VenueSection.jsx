import SectionReveal from '../SectionReveal'
import styles from './VenueSection.module.css'

function VenueCard({ label, venue }) {
  return (
    <article className={styles.card}>
      <img src={venue.image} alt={venue.name} />
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
