import { useState } from 'react'
import SectionReveal from '../SectionReveal'
import styles from './FAQ.module.css'

function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section sectionAlt">
      <SectionReveal className="container">
        <p className="sectionKicker">Kindly note</p>
        <h2 className="sectionHeading">Frequently Asked Questions</h2>
        <div className={styles.accordion}>
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article className={styles.item} key={item.q}>
                <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
                </button>
                <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
                  <p>{item.a}</p>
                </div>
              </article>
            )
          })}
        </div>
      </SectionReveal>
    </section>
  )
}

export default FAQ
