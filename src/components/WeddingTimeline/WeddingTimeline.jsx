import { motion } from 'framer-motion'
import SectionReveal from '../SectionReveal'
import styles from './WeddingTimeline.module.css'

function WeddingTimeline({ items }) {
  return (
    <section id="timeline" className="section">
      <SectionReveal className={`container ${styles.wrap}`}>
        <div className={styles.headingWrap}>
          <span aria-hidden="true">🌸</span>
          <span aria-hidden="true">🌸</span>
          <span aria-hidden="true">🌸</span>
          <p className="sectionKicker">The day unfolds</p>
          <h2>Wedding Timeline</h2>
        </div>
        <div className={styles.timeline}>
          {items.map((item) => (
            <motion.article
              className={`${styles.item} ${item.side === 'right' ? styles.right : styles.left}`}
              key={`${item.time}-${item.event}`}
              initial={{ opacity: 0, x: item.side === 'right' ? 70 : -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className={styles.content}>
                <time>{item.time}</time>
                <h3>{item.event}</h3>
                <p>{item.description}</p>
              </div>
              <span className={styles.connector} aria-hidden="true" />
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.icon} aria-hidden="true">{item.icon}</span>
            </motion.article>
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}

export default WeddingTimeline
