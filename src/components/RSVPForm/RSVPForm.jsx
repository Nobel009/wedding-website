import { useState } from 'react'
import SectionReveal from '../SectionReveal'
import styles from './RSVPForm.module.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
  attendance: 'yes',
}

function RSVPForm({ config }) {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('RSVP submitted', form)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="rsvp" className={`section ${styles.section}`}>
      <SectionReveal className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="sectionKicker">The favor of a reply</p>
          <h2>RSVP</h2>
          <p>The favor of a response is requested before {config.rsvpDeadline}. Thank you!</p>
          <p>We cannot wait to celebrate this day with you.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={updateField} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={updateField} required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" value={form.phone} onChange={updateField} />
          </label>
          <fieldset>
            <legend>Attendance</legend>
            <label>
              <input type="radio" name="attendance" value="yes" checked={form.attendance === 'yes'} onChange={updateField} />
              Yes, I'll be there!
            </label>
            <label>
              <input type="radio" name="attendance" value="no" checked={form.attendance === 'no'} onChange={updateField} />
              I can't make it
            </label>
          </fieldset>
          <label>
            Message / Note
            <textarea name="message" value={form.message} onChange={updateField} rows="4" />
          </label>
          <button className="solidButton" type="submit">Send RSVP</button>
          {submitted && <p className={styles.success}>Thank you. Your response has been recorded for this demo.</p>}
        </form>
      </SectionReveal>
    </section>
  )
}

export default RSVPForm
