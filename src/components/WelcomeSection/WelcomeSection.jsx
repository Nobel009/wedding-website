import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionReveal from '../SectionReveal'
import styles from './WelcomeSection.module.css'

const speeds = [0.5, 1, 1.25, 1.5, 2]
const notes = ['♪', '♫', '♪', '♫', '♪', '♫', '♪']

function formatTime(value) {
  if (!Number.isFinite(value)) return '0:00'
  const minutes = Math.floor(value / 60)
  const seconds = Math.floor(value % 60)
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function MusicPlayer({ audioUrl }) {
  const audioRef = useRef(null)
  const menuRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [speed, setSpeed] = useState(1)

  useEffect(() => {
    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      await audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !audio.muted
    setIsMuted(audio.muted)
  }

  const seek = (event) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = (event.clientX - rect.left) / rect.width
    audio.currentTime = Math.min(duration, Math.max(0, ratio * duration))
  }

  const setPlaybackSpeed = (value) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = value
      setSpeed(value)
    }
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className={styles.musicBlock}>
      <audio
        ref={audioRef}
        src={audioUrl}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={() => setIsPlaying(false)}
      />
      <div className={styles.player}>
        <button className={styles.playButton} type="button" onClick={togglePlay} aria-label={isPlaying ? 'Pause wedding song' : 'Play wedding song'}>
          {isPlaying ? 'Ⅱ' : '▶'}
        </button>
        <span className={styles.time}>{formatTime(currentTime)}</span>
        <button className={styles.progress} type="button" onClick={seek} aria-label="Seek wedding song">
          <span style={{ width: `${progress}%` }} />
        </button>
        <span className={styles.time}>{formatTime(duration)}</span>
        <button className={styles.iconButton} type="button" onClick={toggleMute} aria-label={isMuted ? 'Unmute wedding song' : 'Mute wedding song'}>
          {isMuted ? '🔇' : '🔊'}
        </button>
        <div className={styles.menuWrap} ref={menuRef}>
          <button className={styles.iconButton} type="button" onClick={(event) => { event.stopPropagation(); setMenuOpen((value) => !value) }} aria-label="Music player menu">
            ⋮
          </button>
          {menuOpen && (
            <div className={styles.menu}>
              <a href={audioUrl} download>Download</a>
              <div className={styles.speedGroup}>
                <span>Playback Speed</span>
                <div>
                  {speeds.map((value) => (
                    <button className={speed === value ? styles.activeSpeed : ''} type="button" key={value} onClick={() => setPlaybackSpeed(value)}>
                      {value}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className={styles.songLabel}>Listen to our wedding song</p>
    </div>
  )
}

function WelcomeSection({ config }) {
  return (
    <section id="welcome" className={`section ${styles.section}`}>
      <div className={styles.notes} aria-hidden="true">
        {notes.map((note, index) => (
          <span key={`${note}-${index}`}>{note}</span>
        ))}
      </div>
      <SectionReveal className={`container ${styles.grid}`}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className={styles.imageWrap}>
          <img src={config.welcomeImage} alt={`${config.groom} and ${config.bride} wedding detail`} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.12 }} viewport={{ once: true }} className={styles.copy}>
          <p className="sectionKicker">With joyful hearts</p>
          <h2>
            Welcome to
            <span className={styles.mobileTitleBreak}> Our Wedding Website</span>
          </h2>
          <p>
            We are so grateful to share this season with the people who have loved, guided, and celebrated us along the way.
          </p>
          <p>
            Here you will find the details for our ceremony, reception, attire, gifts, and RSVP. May this page feel like a small preview of the warmth we hope to share with you on our wedding day.
          </p>
          <MusicPlayer audioUrl={config.audioUrl} />
          <span className={styles.hashtag}>{config.hashtag}</span>
        </motion.div>
      </SectionReveal>
    </section>
  )
}

export default WelcomeSection
