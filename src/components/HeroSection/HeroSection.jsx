import { motion } from 'framer-motion'
import styles from './HeroSection.module.css'

function HeroSection({ config }) {
  return (
    <section
      id="home"
      className={styles.hero}
      style={{ backgroundImage: `linear-gradient(var(--color-overlay), var(--color-overlay)), url(${config.heroImage})` }}
    >
      <div className={styles.content}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={styles.kicker}>
          You are cordially invited to the wedding of
        </motion.p>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.25 }} className={styles.line} />
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          {config.groom} & {config.bride}
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.35 }} className={styles.line} />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.85 }} className={styles.date}>
          {config.weddingDateLabel}
        </motion.p>
      </div>
    </section>
  )
}

export default HeroSection
