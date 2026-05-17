import styles from './Footer.module.css'

function Footer({ config }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.mark}>{config.groom[0]} & {config.bride[0]}</div>
        <p>Made with love by {config.businessName}</p>
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="17" cy="7" r="1" fill="currentColor" /></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v5h3v-5h2.4l.6-3h-3V9c0-.6.4-1 1-1Z" fill="currentColor" /></svg>
          </a>
        </div>
        <small>Copyright {new Date().getFullYear()} {config.businessName}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
