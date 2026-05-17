import SectionReveal from '../SectionReveal'
import styles from './PrenupPhotos.module.css'

function PrenupPhotos({ config }) {
  return (
    <section id="photos" className="section">
      <SectionReveal className="container">
        <p className="sectionKicker">Moments before forever</p>
        <h2 className="sectionHeading">Prenup Photos</h2>
        <div className={styles.grid}>
          {config.prenupPhotos.map((photo, index) => (
            <a className={styles.photo} href={config.galleryUrl} key={photo} aria-label={`View prenup photo ${index + 1}`}>
              <img src={photo} alt="" />
              <span aria-hidden="true">heart</span>
            </a>
          ))}
        </div>
        <div className={styles.cta}>
          <a className="outlineButton" href={config.galleryUrl}>View Full Gallery</a>
        </div>
      </SectionReveal>
    </section>
  )
}

export default PrenupPhotos
