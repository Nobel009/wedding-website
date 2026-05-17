import SectionReveal from '../SectionReveal'
import styles from './DressCode.module.css'

function DressCode({ config }) {
  return (
    <section id="attire" className="section sectionAlt">
      <SectionReveal className="container">
        <p className="sectionKicker">Attire</p>
        <h2 className="sectionHeading">The Dress Code</h2>
        <div className={styles.attireGrid}>
          <article>
            <h3>Men's Attire</h3>
            <p>Barong, suit, or polished formal wear in soft neutrals, warm browns, or muted earth tones.</p>
          </article>
          <article>
            <h3>Women's Attire</h3>
            <p>Formal dresses, gowns, or elegant separates in the shades below. Kindly reserve white for the bride.</p>
          </article>
        </div>
        <div className={styles.swatches}>
          {config.motifColors.map((color) => (
            <div className={styles.swatchItem} key={color.hex}>
              <span className={styles.swatch} style={{ background: color.hex }} />
              <strong>{color.name}</strong>
              <small>{color.hex}</small>
            </div>
          ))}
        </div>
        <p className={styles.caption}>You may glam up in these shades, but your smile is the best you can wear!</p>
      </SectionReveal>
    </section>
  )
}

export default DressCode
