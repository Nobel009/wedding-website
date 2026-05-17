import SectionReveal from '../SectionReveal'
import styles from './GiftGuide.module.css'

function GiftGuide({ config }) {
  return (
    <section id="gift-guide" className="section">
      <SectionReveal className={`container ${styles.wrap}`}>
        <svg className={styles.icon} viewBox="0 0 80 52" aria-hidden="true">
          <path d="M4 6h72v40H4z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="m5 7 35 25L75 7M5 45l24-19M75 45 51 26" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <p className="sectionKicker">With gratitude</p>
        <h2 className="sectionHeading">Gift Guide</h2>
        <p>
          Your presence is already a gift we will treasure. If you wish to bless us further, a monetary gift would help us begin this new chapter with grateful and steady hearts.
        </p>
        <div className={styles.detailCard}>
          <strong>{config.giftDetails.title}</strong>
          <span>Account: {config.giftDetails.accountName}</span>
          <span>GCash: {config.giftDetails.gcash}</span>
          <span>Bank: {config.giftDetails.bank}</span>
        </div>
      </SectionReveal>
    </section>
  )
}

export default GiftGuide
