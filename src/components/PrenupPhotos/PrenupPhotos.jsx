import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal from '../SectionReveal'
import styles from './PrenupPhotos.module.css'

function PrenupPhotos({ config }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const closeLightbox = () => setActiveIndex(null)
  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index === 0 ? config.prenupPhotos.length - 1 : index - 1))
  }, [config.prenupPhotos.length])
  const showNext = useCallback(() => {
    setActiveIndex((index) => (index === config.prenupPhotos.length - 1 ? 0 : index + 1))
  }, [config.prenupPhotos.length])

  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, showNext, showPrevious])

  return (
    <section id="photos" className="section">
      <SectionReveal className="container">
        <p className="sectionKicker">Moments before forever</p>
        <h2 className="sectionHeading">Prenup Photos</h2>
        <div className={styles.grid}>
          {config.prenupPhotos.map((photo, index) => (
            <button className={styles.photo} type="button" key={photo} aria-label={`View prenup photo ${index + 1}`} onClick={() => setActiveIndex(index)}>
              <img src={photo} alt="" />
              <span aria-hidden="true">heart</span>
            </button>
          ))}
        </div>
        <div className={styles.cta}>
          <a className="outlineButton" href={config.galleryUrl}>View Full Gallery</a>
        </div>
      </SectionReveal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className={styles.close} type="button" aria-label="Close lightbox" onClick={closeLightbox}>×</button>
            <button className={styles.arrowLeft} type="button" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); showPrevious() }}>‹</button>
            <motion.img
              src={config.prenupPhotos[activeIndex]}
              alt=""
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            />
            <button className={styles.arrowRight} type="button" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); showNext() }}>›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PrenupPhotos
