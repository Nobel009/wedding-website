import { motion } from 'framer-motion'
import SectionReveal from '../SectionReveal'
import styles from './WelcomeSection.module.css'

function WelcomeSection({ config }) {
  return (
    <section id="welcome" className="section">
      <SectionReveal className={`container ${styles.grid}`}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.imageWrap}>
          <img src={config.welcomeImage} alt={`${config.groom} and ${config.bride} wedding detail`} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.12 }} viewport={{ once: true }} className={styles.copy}>
          <p className="sectionKicker">With joyful hearts</p>
          <h2>Welcome to Our Wedding Website</h2>
          <p>
            We are so grateful to share this season with the people who have loved, guided, and celebrated us along the way.
          </p>
          <p>
            Here you will find the details for our ceremony, reception, attire, gifts, and RSVP. May this page feel like a small preview of the warmth we hope to share with you on our wedding day.
          </p>
          <span className={styles.hashtag}>{config.hashtag}</span>
        </motion.div>
      </SectionReveal>
    </section>
  )
}

export default WelcomeSection
