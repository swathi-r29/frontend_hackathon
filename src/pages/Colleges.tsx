import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Laptop, 
  FileCheck, 
  TrendingUp, 
  Send,
  X,
  Clock,
  Sparkles
} from 'lucide-react'
import { Bar, Btn, Counter, Reveal, Words } from '../ui'

interface StakeholderRole {
  title: string
  subtitle: string
  metrics: { label: string; val: number }[]
  benefits: string[]
  quote: string
}

const STAKEHOLDER_ROLES: Record<string, StakeholderRole> = {
  'Placement Officers (TPO)': {
    title: 'Drive Campus Hiring Conversion Rates',
    subtitle: 'Measure student cohort readiness ahead of Day-1 placement drives with company cut-off benchmarks.',
    metrics: [
      { label: 'TCS NQT Readiness', val: 82 },
      { label: 'Infosys DSE Clearance', val: 74 },
      { label: 'Zoho Round 2 & 3 Score', val: 61 },
      { label: 'Service-to-Product Transition', val: 68 },
    ],
    benefits: [
      'Automated company cut-off filtering (TCS, Infosys, Zoho, Cognizant, Wipro)',
      'Anti-cheat proctored diagnostic placement tests with screenshot blocking',
      'Batch-wise student export for campus recruiter shortlisting',
      'Historical placement conversion analytics for institutional audits',
    ],
    quote: '"Dkoder helped our TPO cell identify which students needed quant speed-math intervention 3 months before TCS arrived on campus."',
  },
  'Faculty & HODs': {
    title: 'Curriculum Alignment & NBA/NAAC Audit Data',
    subtitle: 'Assign automated coding labs and aptitude homework that complement your academic syllabus.',
    metrics: [
      { label: 'Batch Coursework Coverage', val: 88 },
      { label: 'Lab Assignment Submissions', val: 92 },
      { label: 'Weak Topic Remediation Rate', val: 78 },
      { label: 'Core CS Subject Mastery', val: 84 },
    ],
    benefits: [
      'Ready-to-use lab problem banks in C, C++, Java, and Python',
      'Automated grading of code execution, edge cases, and time complexity',
      'Granular topic breakdown: Arrays, Trees, DBMS Normalization, OS Paging',
      'Accreditation-ready student outcome reports for NBA and NAAC documentation',
    ],
    quote: '"Grading 180 student programming assignments manually used to take days. With Dkoder’s automated test cases, students get instant feedback."',
  },
  'Students': {
    title: 'Targeted Practice Without the Guesswork',
    subtitle: 'Solve real, company-tagged questions calibrated to your dream salary package bracket.',
    metrics: [
      { label: 'Daily Practice Streak', val: 89 },
      { label: 'Problem Solving Speed', val: 75 },
      { label: 'Aptitude Accuracy', val: 83 },
      { label: 'Mock Exam Confidence', val: 86 },
    ],
    benefits: [
      '350+ real company questions with video hints and optimal solutions',
      'Integrated in-browser live code sandbox supporting C++, Java, Python',
      'Daily streaks, campus leaderboards, and verifiable skill badges',
      'Comprehensive TCS NQT, InfyTQ, and NLTH mock test simulators',
    ],
    quote: '"Practising company-tagged questions directly matched what came up in my technical round. I cleared TCS Digital on my first attempt."',
  },
}

const PARTNERSHIP_STEPS = [
  {
    step: '01',
    title: 'Sign Institutional MOU',
    desc: 'Formalize an academic placement partnership. Zero initial software licensing overhead for partner colleges.',
  },
  {
    step: '02',
    title: 'Batch Onboarding',
    desc: 'Seamless CSV/ERP upload of student cohorts across CSE, IT, ECE, and other engineering disciplines.',
  },
  {
    step: '03',
    title: 'Diagnostic Benchmark Test',
    desc: 'Every student completes a baseline aptitude and coding diagnostic to map individual skill gaps.',
  },
  {
    step: '04',
    title: 'Weekly Readiness Tracking',
    desc: 'Placement officers monitor real-time department leaderboards and cohort readiness ahead of drive dates.',
  },
]

export default function Colleges() {
  const [selectedRole, setSelectedRole] = useState<string>('Placement Officers (TPO)')
  const currentRole = STAKEHOLDER_ROLES[selectedRole]

  // Demo request modal state
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [demoSuccess, setDemoSuccess] = useState(false)
  const [instName, setInstName] = useState('')
  const [instEmail, setInstEmail] = useState('')
  const [instCity, setInstCity] = useState('')

  return (
    <>
      {/* =========================================================================
          HERO SECTION: INSTITUTIONAL PLACEMENT LMS
      ========================================================================= */}
      <section className="sec yel" style={{ paddingTop: '42px', paddingBottom: '64px' }}>
        <div className="grid-bg" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#14111D', color: 'var(--y-primary)', padding: '6px 16px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', marginBottom: 18 }}>
            <Building2 size={16} />
            DKODER INSTITUTIONAL PARTNERSHIP PROGRAM
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.8rem)', lineHeight: 1.05, textTransform: 'uppercase', marginBottom: 18 }}>
            MEASURABLE PLACEMENT READINESS <br />
            <span style={{ background: '#14111D', color: 'var(--y-primary)', padding: '2px 14px', borderRadius: 12, display: 'inline-block', marginTop: 4 }}>
              AT CAMPUS SCALE.
            </span>
          </h1>

          <p className="lead" style={{ maxWidth: 720, fontSize: '1.2rem', marginBottom: 28 }}>
            Transform your institution’s campus placement outcomes. Dkoder equips your Training &amp; Placement Cell (TPO) with automated aptitude assessments, company-tagged coding labs, and real-time student readiness report cards.
          </p>

          <div className="row" style={{ marginTop: 0, gap: 16 }}>
            <Btn to="/mou" variant="yb">
              <span>Apply for College MOU</span>
              <ArrowRight size={18} />
            </Btn>

            <button
              type="button"
              className="btn btn-dark-pill"
              onClick={() => {
                setDemoModalOpen(true)
                setDemoSuccess(false)
              }}
            >
              <Sparkles size={18} style={{ marginRight: 6 }} />
              Schedule Campus Demo
            </button>
          </div>

          {/* Institutional Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 48, borderTop: '2px solid rgba(20, 17, 29, 0.15)', paddingTop: 28 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: '#14111D' }}>+42%</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(20, 17, 29, 0.75)' }}>Higher Placement Conversion</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: '#14111D' }}>80+</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(20, 17, 29, 0.75)' }}>Partner Engineering Colleges</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: '#14111D' }}>350+</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(20, 17, 29, 0.75)' }}>Company-Calibrated Problems</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: '#14111D' }}>100%</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(20, 17, 29, 0.75)' }}>Cloud-Hosted &amp; Zero Setup</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: STAKEHOLDER COHORT SYSTEM (TPO, FACULTY, STUDENTS)
      ========================================================================= */}
      <section className="sec" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <span className="eyebrow">Institutional Architecture</span>
          <Words text="Engineered for Every Campus Stakeholder." />
          <p className="muted" style={{ maxWidth: 680, marginTop: 8 }}>
            Switch between views to explore how Dkoder delivers value to placement officers, faculty department heads, and students.
          </p>

          {/* Role switcher chips */}
          <div className="chips" style={{ marginTop: 28 }} role="tablist">
            {Object.keys(STAKEHOLDER_ROLES).map(role => (
              <button
                key={role}
                role="tab"
                aria-selected={selectedRole === role}
                className={`chip ${selectedRole === role ? 'on' : ''}`}
                onClick={() => setSelectedRole(role)}
                style={{ fontSize: '0.95rem', padding: '10px 20px', fontWeight: selectedRole === role ? 700 : 600 }}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Active Stakeholder Detailed Dashboard Showcase */}
          <div style={{ marginTop: 28 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRole}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.2 }}
                className="card"
                style={{ padding: '36px 32px', border: '2px solid var(--border-light)' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 36, alignItems: 'center' }}>
                  {/* Left Column: Benefits & Testimonial */}
                  <div>
                    <span className="tag" style={{ marginBottom: 12 }}>{selectedRole} Portal</span>
                    <h2 style={{ fontSize: '1.85rem', marginBottom: 10, lineHeight: 1.25 }}>
                      {currentRole.title}
                    </h2>
                    <p className="muted" style={{ fontSize: '1.02rem', marginBottom: 20 }}>
                      {currentRole.subtitle}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                      {currentRole.benefits.map((b, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.95rem' }}>
                          <CheckCircle2 size={18} color="#FF2A4D" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '3px solid var(--y-primary)', padding: '14px 18px', borderRadius: '0 12px 12px 0' }}>
                      <p style={{ fontStyle: 'italic', fontSize: '0.92rem', color: '#ECE5FC' }}>{currentRole.quote}</p>
                    </div>
                  </div>

                  {/* Right Column: Live Simulated Readiness Dashboard Card */}
                  <div style={{ background: '#120F24', border: '2px solid rgba(139, 92, 255, 0.3)', borderRadius: 20, padding: 28 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                        <span style={{ fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          Live Cohort Readiness
                        </span>
                      </div>
                      <span className="tag v">Batch 2026</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {currentRole.metrics.map(m => (
                        <div key={m.label}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: 6 }}>
                            <span>{m.label}</span>
                            <span style={{ fontWeight: 800, color: 'var(--y-primary)' }}>{m.val}%</span>
                          </div>
                          <Bar pct={m.val} />
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: '#A098B5' }}>
                      <span>Monitored Students: <strong>640</strong></span>
                      <span>Next Drive: <strong>TCS (Nov 2026)</strong></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 4-STEP PARTNERSHIP ROADMAP
      ========================================================================= */}
      <section className="sec pur" style={{ background: '#160F2E' }}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--y-primary)' }}>Partnership Roadmap</span>
          <Words text="How Colleges Partner with Dkoder." />
          <p className="muted" style={{ maxWidth: 660, marginTop: 8, color: '#CFC3EA' }}>
            Zero IT infrastructure hassle. From MOU execution to baseline student onboarding in under 72 hours.
          </p>

          <div className="g3" style={{ marginTop: 40 }}>
            {PARTNERSHIP_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="card" style={{ height: '100%', background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'var(--y-primary)', marginBottom: 8 }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 8, color: '#FFFFFF' }}>{s.title}</h3>
                  <p style={{ color: '#B8B2C8', fontSize: '0.92rem', lineHeight: 1.55 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Btn to="/mou" variant="yb">
              <span>Start the Institutional MOU Application</span>
              <ArrowRight size={18} />
            </Btn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS DEMO MODAL
      ========================================================================= */}
      <AnimatePresence>
        {demoModalOpen && (
          <div className="modal-backdrop" style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              className="card"
              style={{ maxWidth: 520, width: '100%', background: '#151222', border: '2px solid var(--y-primary)', position: 'relative' }}
            >
              <button
                type="button"
                onClick={() => setDemoModalOpen(false)}
                style={{ position: 'absolute', right: 18, top: 18, background: 'none', border: 0, color: '#fff', cursor: 'pointer' }}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>

              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                <span className="tag">Institutional Demo</span>
                <span className="tag v">For TPOs &amp; HODs</span>
              </div>

              <h2 style={{ fontSize: '1.6rem', marginBottom: 6 }}>Schedule an On-Campus Demo</h2>
              <p className="muted" style={{ fontSize: '0.88rem', marginBottom: 20 }}>
                Experience the placement readiness dashboard, question creator, and student analytics in a live 30-minute walkthrough.
              </p>

              {demoSuccess ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.45rem', marginBottom: 8 }}>Demo Scheduled!</h3>
                  <p className="muted" style={{ fontSize: '0.92rem', marginBottom: 20 }}>
                    Our institutional partnership team will contact <strong>{instName}</strong> at <strong>{instEmail}</strong> to coordinate a walkthrough for your Placement Cell and Faculty.
                  </p>
                  <button
                    type="button"
                    className="btn yb"
                    style={{ width: '100%', padding: '12px' }}
                    onClick={() => setDemoModalOpen(false)}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!instName.trim() || !instEmail.trim()) {
                      alert('Please provide college name and official email.')
                      return
                    }
                    setDemoSuccess(true)
                  }}
                >
                  <div className="fld">
                    <label htmlFor="instName">College / Institution Name</label>
                    <input
                      id="instName"
                      placeholder="e.g. SRM Institute of Science & Technology"
                      value={instName}
                      onChange={(e) => setInstName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="fld">
                    <label htmlFor="instCity">City &amp; State</label>
                    <input
                      id="instCity"
                      placeholder="e.g. Chennai, Tamil Nadu"
                      value={instCity}
                      onChange={(e) => setInstCity(e.target.value)}
                      required
                    />
                  </div>

                  <div className="fld">
                    <label htmlFor="instEmail">Official College / TPO Email</label>
                    <input
                      id="instEmail"
                      type="email"
                      placeholder="tpo@college.edu.in"
                      value={instEmail}
                      onChange={(e) => setInstEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                    <button type="submit" className="btn yb" style={{ flex: 1, padding: '14px', fontWeight: 800 }}>
                      <Send size={16} style={{ marginRight: 6 }} />
                      Request Campus Demo
                    </button>
                    <button type="button" className="btn out" onClick={() => setDemoModalOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
