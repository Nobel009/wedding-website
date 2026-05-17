import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './HeroSection.module.css'

function HeroSection({ config }) {
  const [backgroundY, setBackgroundY] = useState(0)
  const coupleName = `${config.groom} & ${config.bride}`

  useEffect(() => {
    const updateParallax = () => setBackgroundY(window.scrollY * 0.4)
    updateParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
    return () => window.removeEventListener('scroll', updateParallax)
  }, [])

  return (
    <section
      id="home"
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(var(--color-overlay), var(--color-overlay)), url(${config.heroImage})`,
        backgroundPositionY: `${backgroundY}px`,
      }}
    >
      <div className={styles.content}>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={styles.kicker}>
          You are cordially invited to the wedding of
        </motion.p>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.25 }} className={styles.line} />
        <motion.h1
          variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } } }}
          initial="hidden"
          animate="visible"
          aria-label={coupleName}
        >
          {coupleName.split('').map((character, index) => (
            <motion.span
              aria-hidden="true"
              className={styles.letter}
              key={`${character}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
            >
              {character === ' ' ? '\u00A0' : character}
            </motion.span>
          ))}
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
