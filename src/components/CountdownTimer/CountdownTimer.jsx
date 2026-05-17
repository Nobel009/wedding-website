import { useEffect, useMemo, useState } from 'react'
import SectionReveal from '../SectionReveal'
import styles from './CountdownTimer.module.css'

function getRemaining(targetDate) {
  const distance = Math.max(new Date(targetDate).getTime() - Date.now(), 0)
  return {
    Days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    Minutes: Math.floor((distance / (1000 * 60)) % 60),
    Seconds: Math.floor((distance / 1000) % 60),
  }
}

function CountdownTimer({ weddingDate }) {
  const initial = useMemo(() => getRemaining(weddingDate), [weddingDate])
  const [time, setTime] = useState(initial)

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getRemaining(weddingDate)), 1000)
    return () => window.clearInterval(timer)
  }, [weddingDate])

  return (
    <section id="countdown" className="section sectionAlt">
      <SectionReveal className="container">
        <p className="sectionKicker">The celebration begins in</p>
        <h2 className="sectionHeading">Counting Down</h2>
        <div className={styles.grid}>
          {Object.entries(time).map(([label, value]) => (
            <div className={styles.box} key={label}>
              <strong>{String(value).padStart(2, '0')}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}

export default CountdownTimer
