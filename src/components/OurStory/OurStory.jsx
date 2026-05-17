import SectionReveal from '../SectionReveal'
import styles from './OurStory.module.css'

function OurStory({ config }) {
  return (
    <section id="story" className="section">
      <SectionReveal className="container">
        <p className="sectionKicker">Our Story</p>
        <h2 className="sectionHeading">A Love Written Softly</h2>
        <div className={styles.timeline}>
          {config.story.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}

export default OurStory
