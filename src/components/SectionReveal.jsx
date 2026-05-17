import { motion } from 'framer-motion'

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
}

function SectionReveal({ children, className = '' }) {
  return (
    <motion.div className={className} {...reveal}>
      {children}
    </motion.div>
  )
}

export default SectionReveal
