import { useEffect, useState } from 'react'
import styles from './NavBar.module.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Schedule', href: '#countdown' },
  { label: 'Attire', href: '#attire' },
  { label: 'Venue', href: '#venue' },
  { label: 'RSVP', href: '#rsvp' },
]

function NavBar({ config }) {
  const [scrolled, setScrolled] = useState(() => (
    typeof window === 'undefined' ? false : window.scrollY > 8
  ))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 8)
    }

    const closeDesktopMenu = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
      updateScrolled()
    }

    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    window.addEventListener('resize', closeDesktopMenu)
    window.addEventListener('pageshow', updateScrolled)
    return () => {
      window.removeEventListener('scroll', updateScrolled)
      window.removeEventListener('resize', closeDesktopMenu)
      window.removeEventListener('pageshow', updateScrolled)
    }
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const onScroll = () => {
      if (open) setOpen(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    const onHashChange = () => setOpen(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const onVisibilityChange = () => {
      if (!document.hidden) {
        setScrolled(window.scrollY > 8)
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className={`${styles.nav} ${scrolled || open ? styles.solid : ''}`}>
      <a className={styles.logo} href="#home" onClick={() => setOpen(false)}>
        {config.businessName}
      </a>
      <button
        className={styles.menuButton}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`${styles.links} ${open ? styles.open : ''}`} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
