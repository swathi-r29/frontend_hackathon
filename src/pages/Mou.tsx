import { FormEvent, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Btn, Words } from '../ui'

interface F { institution: string; city: string; contact: string; role: string; email: string; phone: string; students: string }
const INIT: F = { institution: '', city: '', contact: '', role: '', email: '', phone: '', students: '' }
const LABELS: Record<keyof F, string> = { institution: 'Institution name', city: 'City and state', contact: 'Contact person', role: 'Role', email: 'Email', phone: 'Phone', students: 'Final-year students (approx.)' }
const validate = (f: F) => { const e: Partial<Record<keyof F, string>> = {}
  ;(Object.keys(f) as (keyof F)[]).forEach(k => { if (!f[k].trim()) e[k] = `${LABELS[k]} is required` })
  if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email'
  if (f.phone && !/^[+\d][\d\s-]{7,14}$/.test(f.phone)) e.phone = 'Enter a valid phone number'
  if (f.students && !(Number(f.students) > 0)) e.students = 'Enter a number above 0'
  return e }
export default function Mou() {
  const [f, setF] = useState<F>(INIT); const [e, setE] = useState<Partial<Record<keyof F, string>>>({}); const [step, setStep] = useState<'form' | 'review' | 'done'>('form'); const [busy, setBusy] = useState(false); const [copied, setCopied] = useState(false)
  const summary = (Object.keys(f) as (keyof F)[]).map(k => `${LABELS[k]}: ${f[k]}`).join('\n')
  const next = (ev: FormEvent) => { ev.preventDefault(); const x = validate(f); setE(x); if (!Object.keys(x).length) setStep('review') }
  const confirm = () => { setBusy(true); setTimeout(() => { setBusy(false); setStep('done') }, 600) }
  return <>
    <section className="sec yel"><div className="grid-bg" /><div className="wrap" style={{ position: 'relative' }}><span className="eyebrow" style={{ color: '#32105E' }}>Apply for MOU</span><Words text="Partner with Dkoder." as="h1" />
      <p className="lead">Three steps: fill the form, review, then send the summary to Dkoder yourself. This page does not transmit data anywhere.</p></div></section>
    <section className="sec"><div className="wrap" style={{ maxWidth: 680 }}><AnimatePresence mode="wait">
      {step === 'form' && <motion.form key="f" noValidate onSubmit={next} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
        {(Object.keys(f) as (keyof F)[]).map(k => <div className="fld" key={k}><label htmlFor={k}>{LABELS[k]}</label>
          <input id={k} value={f[k]} aria-invalid={!!e[k]} aria-describedby={e[k] ? `${k}-e` : undefined} type={k === 'email' ? 'email' : 'text'} onChange={ev => { setF({ ...f, [k]: ev.target.value }); if (e[k]) setE({ ...e, [k]: undefined }) }} />
          <AnimatePresence>{e[k] && <motion.p id={`${k}-e`} role="alert" className="err" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{e[k]}</motion.p>}</AnimatePresence></div>)}
        <Btn type="submit">Review application</Btn></motion.form>}
      {step === 'review' && <motion.div key="r" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><h2>Review</h2><pre className="card" style={{ whiteSpace: 'pre-wrap', margin: '20px 0' }}>{summary}</pre>
        <div className="row" style={{ marginTop: 0 }}><Btn variant="out" onClick={() => setStep('form')}>Edit</Btn><Btn onClick={confirm} disabled={busy}>{busy ? 'Preparing...' : 'Confirm details'}</Btn></div></motion.div>}
      {step === 'done' && <motion.div key="d" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}><div className="card"><Check color="#7040D8" size={36} /><h2 style={{ fontSize: '2rem' }}>Details ready. Not sent yet.</h2>
        <p className="muted" style={{ margin: '10px 0' }}>No backend is connected, so nothing was emailed or saved. Copy the summary and send it to Dkoder through their official contact channel.</p>
        <div className="row"><Btn onClick={() => navigator.clipboard?.writeText(summary).then(() => setCopied(true))}>{copied ? 'Copied' : 'Copy summary'}</Btn><Btn variant="out" onClick={() => { setF(INIT); setStep('form'); setCopied(false) }}>Start over</Btn></div></div></motion.div>}
    </AnimatePresence></div></section>
  </>
}
