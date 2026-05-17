import { useState } from 'react'
import SectionReveal from '../SectionReveal'
import styles from './FAQ.module.css'

function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  const [query, setQuery] = useState('')
  const filteredItems = items.filter((item) => item.q.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <section id="faq" className="section sectionAlt">
      <SectionReveal className="container">
        <p className="sectionKicker">Kindly note</p>
        <h2 className="sectionHeading">Frequently Asked Questions</h2>
        <label className={styles.search}>
          <span>Search questions</span>
          <input
            type="search"
            placeholder="Search questions..."
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setOpenIndex(0)
            }}
          />
        </label>
        <div className={styles.accordion}>
          {filteredItems.map((item, index) => {
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
          {filteredItems.length === 0 && <p className={styles.empty}>No questions found</p>}
        </div>
      </SectionReveal>
    </section>
  )
}

export default FAQ
