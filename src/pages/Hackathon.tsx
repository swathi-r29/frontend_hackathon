import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trophy, 
  Calendar, 
  Users, 
  Sparkles, 
  Code2, 
  Brain, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Download, 
  Building2, 
  Plus, 
  X,
  FileCode,
  Award,
  Send,
  HelpCircle
} from 'lucide-react'
import { Btn, Reveal, Words, Ring } from '../ui'

interface Track {
  id: string
  title: string
  category: string
  prize: string
  badge: string
  desc: string
  scope: string[]
  suggestedStack: string[]
}

const HACKATHON_TRACKS: Track[] = [
  {
    id: 'gen-ai',
    title: 'Generative AI & Agentic Workflows',
    category: 'AI / Machine Learning',
    prize: '₹1,50,000 Prize Pool',
    badge: 'Flagship Track',
    desc: 'Build multi-agent systems, multimodal assistants, or domain-specific RAG architectures that automate complex real-world workflows.',
    scope: [
      'Autonomous customer support and operations agents',
      'Context-aware code refactoring and bug-fixing bots',
      'Local edge LLM deployment on resource-constrained devices',
    ],
    suggestedStack: ['LangChain', 'LlamaIndex', 'FastAPI', 'PyTorch', 'Vector DBs'],
  },
  {
    id: 'fintech-security',
    title: 'Next-Gen FinTech & Digital Trust',
    category: 'FinTech & Web3',
    prize: '₹1,25,000 Prize Pool',
    badge: 'Industry High Demand',
    desc: 'Innovate in transaction security, algorithmic credit scoring, zero-knowledge fraud detection, or programmable payment rails.',
    scope: [
      'Real-time anomaly and synthetic identity fraud detection',
      'Micro-savings and algorithmic investment automation',
      'Privacy-preserving financial records using Zero-Knowledge proofs',
    ],
    suggestedStack: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'Solidity / ZK-Snarks'],
  },
  {
    id: 'health-smart-systems',
    title: 'Healthcare AI & Assistive Technologies',
    category: 'MedTech & IoT',
    prize: '₹1,25,000 Prize Pool',
    badge: 'Social Impact',
    desc: 'Develop clinical screening tools, remote patient monitoring pipelines, or smart assistive devices for healthcare accessibility.',
    scope: [
      'Computer vision diagnostics for radiology / pathology',
      'Wearable biometric telemetry and emergency trigger alerts',
      'Hospital bed allocation and patient triage queue optimization',
    ],
    suggestedStack: ['TensorFlow Lite', 'ESP32', 'React Native', 'OpenCV', 'MQTT'],
  },
  {
    id: 'campus-sustainability',
    title: 'Smart Campus & Sustainable Microgrids',
    category: 'CleanTech & Urban Tech',
    prize: '₹1,00,000 Prize Pool',
    badge: 'Institutional Favorite',
    desc: 'Optimize university energy consumption, automated resource allocation, or intelligent waste segregation at institutional scale.',
    scope: [
      'Solar microgrid predictive power load forecasting',
      'Computer vision automated recyclable waste sorting',
      'Intelligent campus bus tracking and fleet route optimization',
    ],
    suggestedStack: ['Python', 'InfluxDB', 'React', 'Raspberry Pi', 'Docker'],
  },
]

const TIMELINE_STAGES = [
  {
    stage: '01',
    title: 'Team Registration & Problem Selection',
    dates: '15 Oct – 5 Nov 2026',
    status: 'ACTIVE NOW',
    desc: 'Form teams of 2 to 4 members, pick your track, and submit a 1-page idea synopsis.',
  },
  {
    stage: '02',
    title: 'Prototype Submission & Shortlisting',
    dates: '6 Nov – 15 Nov 2026',
    status: 'Upcoming',
    desc: 'Submit initial GitHub repo links and a 3-minute video walkthrough for mentor screening.',
  },
  {
    stage: '03',
    title: '36-Hour National Virtual Hackathon Sprint',
    dates: '20 Nov – 22 Nov 2026',
    status: 'Grand Event',
    desc: 'Non-stop building sprint with 1:1 mentor check-ins, midpoint milestone reviews, and code commits.',
  },
  {
    stage: '04',
    title: 'Live Pitching, Jury Evaluation & Awards',
    dates: '23 Nov 2026',
    status: 'Finale',
    desc: 'Top 15 finalist teams present live before engineering directors and venture capitalists.',
  },
]

const JURY_MEMBERS = [
  {
    name: 'Siddharth Rao',
    role: 'Principal Engineer',
    company: 'Ex-Google Cloud',
    expertise: 'Distributed Systems & AI Architecture',
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Head of Engineering',
    company: 'FinTech Unicorn',
    expertise: 'Scalable Microservices & Security',
  },
  {
    name: 'Dr. K. Ramaswamy',
    role: 'Professor & Research Chair',
    company: 'National Institute of Tech',
    expertise: 'Embedded IoT & Edge Machine Learning',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Who is eligible to participate in the Dkoder Hackathon?',
    a: 'Any undergraduate or postgraduate engineering or MCA student enrolled in an Indian college or university can participate. Both beginners and experienced coders are welcome.',
  },
  {
    q: 'What is the team size requirement?',
    a: 'Teams can consist of 2 to 4 members. You can have members from different departments (e.g. CSE, IT, ECE) within the same college or across institutions.',
  },
  {
    q: 'Is there any registration fee to participate?',
    a: 'No, participation in the Dkoder National Hackathon is 100% free of cost for all student teams.',
  },
  {
    q: 'How will the submissions be evaluated?',
    a: 'Projects will be judged on four criteria: Technical Innovation & Execution (35%), Feasibility & Impact (25%), Code Architecture & Cleanliness (20%), and Presentation & Demo (20%).',
  },
  {
    q: 'What are the perks besides the cash prize pool?',
    a: 'All participants receive a verified Certificate of Participation. Top teams receive direct fast-track interview opportunities with campus recruitment partners, cloud credits, and incubation mentorship.',
  },
]

export default function Hackathon() {
  const [selectedTrack, setSelectedTrack] = useState<number>(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [regModalOpen, setRegModalOpen] = useState(false)
  const [regSuccess, setRegSuccess] = useState(false)
  
  // Registration form state
  const [teamName, setTeamName] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [leadEmail, setLeadEmail] = useState('')
  const [teamSize, setTeamSize] = useState('3')
  const [chosenTrack, setChosenTrack] = useState(HACKATHON_TRACKS[0].title)

  // Countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 18, mins: 42, secs: 15 })
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 }
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* =========================================================================
          HERO SECTION: HIGH ENERGY HACKATHON ARENA (DKODER YELLOW & OBSIDIAN)
      ========================================================================= */}
      <section className="sec" style={{ paddingTop: '56px', paddingBottom: '72px', background: 'radial-gradient(1100px 600px at 80% 25%, rgba(109, 59, 255, 0.35), transparent 75%), radial-gradient(700px 400px at 0% 0%, rgba(245, 217, 10, 0.10), transparent 70%), var(--bg-main)' }}>
        <div className="grid-bg" />
        <div className="wrap" style={{ position: 'relative', maxWidth: 1540 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 54, alignItems: 'center' }}>
            {/* LEFT COLUMN: HERO HEADLINE & ACTIONS */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245, 217, 10, 0.12)', border: '1px solid rgba(245, 217, 10, 0.35)', color: 'var(--y-primary)', padding: '6px 16px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', marginBottom: 20 }}>
                <span className="live-dot" style={{ background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
                DKODER NATIONAL CAMPUS HACKATHON 2026
              </div>

              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)', lineHeight: 1.02, textTransform: 'uppercase', marginBottom: 18, fontWeight: 900, color: '#FFFFFF' }}>
                CODE. BUILD. <br />
                <span style={{ color: 'var(--y-primary)', textShadow: '0 0 40px rgba(245, 217, 10, 0.45)', display: 'inline-block', position: 'relative' }}>
                  DISRUPT.
                </span>
              </h1>

              <p className="lead" style={{ maxWidth: 640, fontSize: '1.18rem', lineHeight: 1.6, color: '#B8B2C8', marginBottom: 26 }}>
                India’s premier engineering college hackathon. Compete across AI, Web3, FinTech, and Smart Systems for <strong style={{ color: 'var(--y-primary)' }}>₹5,00,000+</strong> in prize money and direct campus placement interview fast-tracks.
              </p>

              {/* Real Live Countdown Widget */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 18, background: '#120F24', border: '1.5px solid rgba(139, 92, 255, 0.35)', color: '#fff', padding: '14px 24px', borderRadius: 18, marginBottom: 28, flexWrap: 'wrap', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--y-primary)', textTransform: 'uppercase' }}>
                  Registration Closes In:
                </div>
                <div style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.45rem' }}>
                  <div><span style={{ color: '#FFFFFF' }}>{timeLeft.days}</span><small style={{ fontSize: '0.68rem', display: 'block', color: '#8E88A0', fontWeight: 700 }}>DAYS</small></div>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>:</span>
                  <div><span style={{ color: '#FFFFFF' }}>{timeLeft.hours}</span><small style={{ fontSize: '0.68rem', display: 'block', color: '#8E88A0', fontWeight: 700 }}>HOURS</small></div>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>:</span>
                  <div><span style={{ color: '#FFFFFF' }}>{timeLeft.mins}</span><small style={{ fontSize: '0.68rem', display: 'block', color: '#8E88A0', fontWeight: 700 }}>MINS</small></div>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>:</span>
                  <div><span style={{ color: 'var(--y-primary)', textShadow: '0 0 12px rgba(245,217,10,0.6)' }}>{timeLeft.secs}</span><small style={{ fontSize: '0.68rem', display: 'block', color: '#8E88A0', fontWeight: 700 }}>SECS</small></div>
                </div>
              </div>

              {/* Action Row */}
              <div className="row" style={{ marginTop: 0, gap: 16 }}>
                <button
                  type="button"
                  className="btn btn-dark-pill"
                  style={{ fontSize: '1.05rem', padding: '14px 30px', background: 'var(--y-primary)', color: '#16003B', border: '2px solid var(--y-primary)', fontWeight: 800, boxShadow: '0 0 20px rgba(245, 217, 10, 0.4)' }}
                  onClick={() => {
                    setRegModalOpen(true)
                    setRegSuccess(false)
                  }}
                >
                  <span>Register Your Team</span>
                  <ArrowRight size={18} />
                </button>

                <Btn to="/mou" variant="out" icon={false} style={{ borderColor: 'rgba(255, 255, 255, 0.25)', color: '#FFFFFF' }}>
                  <Building2 size={18} style={{ marginRight: 6 }} />
                  Host at Your College
                </Btn>
              </div>

              {/* Verified Perks Pill Strip */}
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 24, fontSize: '0.86rem', color: '#B5AFC6' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={15} color="var(--y-primary)" /> Zero Registration Fee</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={15} color="var(--y-primary)" /> 4 Active Challenge Domains</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={15} color="var(--y-primary)" /> Verified IEEE Participation Credentials</span>
              </div>
            </div>

            {/* RIGHT COLUMN: HACKATHON ARENA COMMAND DECK */}
            <div style={{ background: '#151222', border: '2px solid rgba(139, 92, 255, 0.35)', borderRadius: 24, padding: 32, boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(109, 59, 255, 0.15)', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, borderBottom: '1px solid rgba(139, 92, 255, 0.2)', paddingBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(245, 217, 10, 0.12)', border: '1px solid rgba(245, 217, 10, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Trophy size={24} color="var(--y-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--y-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>GRAND TOURNAMENT</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>₹5,00,000 Cash Pool</div>
                  </div>
                </div>
                <span style={{ background: 'var(--y-primary)', color: '#16003B', padding: '4px 12px', borderRadius: 999, fontSize: '0.78rem', fontWeight: 800 }}>
                  STAGE 01 LIVE
                </span>
              </div>

              {/* 4 Tracks Quick Preview Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 20 }}>
                {HACKATHON_TRACKS.map((t, idx) => (
                  <div 
                    key={t.id} 
                    style={{ background: selectedTrack === idx ? 'rgba(245, 217, 10, 0.12)' : '#1D1830', border: `1.5px solid ${selectedTrack === idx ? 'var(--y-primary)' : 'rgba(255, 255, 255, 0.08)'}`, borderRadius: 14, padding: '12px 14px', cursor: 'pointer', transition: 'all 0.2s' }}
                    onClick={() => setSelectedTrack(idx)}
                  >
                    <div style={{ fontSize: '0.72rem', color: 'var(--y-primary)', fontWeight: 700, marginBottom: 2 }}>{t.category}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.25, marginBottom: 4 }}>{t.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#A098B5' }}>{t.prize}</div>
                  </div>
                ))}
              </div>

              {/* Live Registered Team Spotlight Ticker */}
              <div style={{ background: '#0D0B18', border: '1px solid rgba(139, 92, 255, 0.25)', borderRadius: 14, padding: '14px 16px', marginBottom: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, fontSize: '0.74rem', color: 'var(--y-primary)', fontWeight: 800, letterSpacing: '0.08em' }}>
                  <span>CAMPUS LEADERBOARD SPRINT</span>
                  <span style={{ color: '#10B981' }}>● LIVE BENCHMARK</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.82rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFFFFF' }}>
                    <span>🥇 IIT Bombay · <strong style={{ color: 'var(--y-primary)' }}>Team NeuralForge</strong> (AI)</span>
                    <span style={{ fontWeight: 800 }}>98.4 pts</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#C8C2D8' }}>
                    <span>🥈 BITS Pilani · <strong>Team ZeroProof</strong> (FinTech)</span>
                    <span style={{ fontWeight: 800 }}>96.8 pts</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#A098B5' }}>
                    <span>🥉 NIT Trichy · <strong>Team VisionMed</strong> (MedTech)</span>
                    <span style={{ fontWeight: 800 }}>95.2 pts</span>
                  </div>
                </div>
              </div>

              {/* Bottom Fast-Track Interview Highlight */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(245, 217, 10, 0.08)', border: '1px dashed rgba(245, 217, 10, 0.35)', borderRadius: 12, padding: '10px 14px', fontSize: '0.84rem', color: '#FFFFFF' }}>
                <Zap size={18} color="var(--y-primary)" style={{ flexShrink: 0 }} />
                <span>Top 15 Finalist Teams receive direct placement interviews with <strong>40+ Hiring Partners</strong>.</span>
              </div>
            </div>
          </div>

          {/* Key Metric Highlights Full Width Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginTop: 52, borderTop: '2px solid rgba(139, 92, 255, 0.22)', paddingTop: 32 }}>
            <div style={{ background: '#151222', border: '1px solid rgba(139, 92, 255, 0.25)', borderRadius: 16, padding: '18px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 900, color: 'var(--y-primary)', lineHeight: 1 }}>₹5,00,000+</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF', marginTop: 6 }}>Total Cash &amp; Grant Pool</div>
              <div style={{ fontSize: '0.78rem', color: '#8E88A0', marginTop: 2 }}>Non-dilutive innovation grants</div>
            </div>
            <div style={{ background: '#151222', border: '1px solid rgba(139, 92, 255, 0.25)', borderRadius: 16, padding: '18px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>15,000+</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF', marginTop: 6 }}>Engineers Registered</div>
              <div style={{ fontSize: '0.78rem', color: '#8E88A0', marginTop: 2 }}>Across all engineering branches</div>
            </div>
            <div style={{ background: '#151222', border: '1px solid rgba(139, 92, 255, 0.25)', borderRadius: 16, padding: '18px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1 }}>85+</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF', marginTop: 6 }}>Engineering Colleges</div>
              <div style={{ fontSize: '0.78rem', color: '#8E88A0', marginTop: 2 }}>IITs, NITs, and premier state universities</div>
            </div>
            <div style={{ background: '#151222', border: '1px solid rgba(139, 92, 255, 0.25)', borderRadius: 16, padding: '18px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', fontWeight: 900, color: 'var(--y-primary)', lineHeight: 1 }}>40+</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF', marginTop: 6 }}>Direct Hiring Partners</div>
              <div style={{ fontSize: '0.78rem', color: '#8E88A0', marginTop: 2 }}>Fast-track interview callouts</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INNOVATION TRACKS (TABBED INTERACTIVE VIEW)
      ========================================================================= */}
      <section className="sec" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <span className="eyebrow">Challenge Tracks</span>
          <Words text="Choose Your Innovation Domain." />
          <p className="muted" style={{ maxWidth: 680, marginTop: 8 }}>
            Solve targeted problem statements curated in partnership with tech companies and university research labs.
          </p>

          {/* Track selector chips */}
          <div className="chips" style={{ marginTop: 28 }}>
            {HACKATHON_TRACKS.map((track, i) => (
              <button
                key={track.id}
                className={`chip ${selectedTrack === i ? 'on' : ''}`}
                onClick={() => setSelectedTrack(i)}
                style={{ fontSize: '0.92rem', padding: '10px 18px', fontWeight: selectedTrack === i ? 700 : 600 }}
              >
                {track.title}
              </button>
            ))}
          </div>

          {/* Active Track Detail Card */}
          <div style={{ marginTop: 24 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTrack}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="card"
                style={{ padding: '36px 32px', border: '2px solid var(--border-light)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                      <span className="tag">{HACKATHON_TRACKS[selectedTrack].category}</span>
                      <span className="tag v">{HACKATHON_TRACKS[selectedTrack].badge}</span>
                      <span style={{ color: 'var(--y-primary)', fontWeight: 800, fontSize: '0.92rem' }}>
                        🏆 {HACKATHON_TRACKS[selectedTrack].prize}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '2rem', marginBottom: 12 }}>
                      {HACKATHON_TRACKS[selectedTrack].title}
                    </h2>
                    <p className="muted" style={{ fontSize: '1.05rem', maxWidth: 760, marginBottom: 24 }}>
                      {HACKATHON_TRACKS[selectedTrack].desc}
                    </p>

                    <h4 style={{ fontSize: '1.1rem', marginBottom: 12, color: 'var(--y-primary)' }}>Problem Statement Focus Areas:</h4>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {HACKATHON_TRACKS[selectedTrack].scope.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.95rem' }}>
                          <CheckCircle2 size={16} color="var(--y-primary)" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#A098B5', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                        Recommended Technology Stack:
                      </span>
                      <div className="chips">
                        {HACKATHON_TRACKS[selectedTrack].suggestedStack.map(stack => (
                          <span key={stack} style={{ background: 'rgba(255,255,255,0.06)', padding: '5px 12px', borderRadius: 8, fontSize: '0.85rem' }}>
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn yb"
                    style={{ padding: '14px 24px', fontWeight: 700 }}
                    onClick={() => {
                      setChosenTrack(HACKATHON_TRACKS[selectedTrack].title)
                      setRegModalOpen(true)
                      setRegSuccess(false)
                    }}
                  >
                    <span>Register for This Track</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TIMELINE & SPRINT SCHEDULE
      ========================================================================= */}
      <section className="sec pur" style={{ background: '#160F2E' }}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--y-primary)' }}>Sprint Timeline</span>
          <Words text="From Idea to Grand Finale." />
          <p className="muted" style={{ maxWidth: 640, marginTop: 8, color: '#CFC3EA' }}>
            Structured 4-stage milestone pipeline designed to help college students build and present production-ready prototypes.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 40 }}>
            {TIMELINE_STAGES.map((stage, i) => (
              <Reveal key={stage.stage} delay={i * 0.08}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 28,
                  padding: '24px 28px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20,
                  flexWrap: 'wrap'
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--y-primary)', minWidth: 60 }}>
                    {stage.stage}
                  </div>

                  <div style={{ flex: 1, minWidth: 260 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                      <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF' }}>{stage.title}</h3>
                      <span style={{
                        background: stage.status === 'ACTIVE NOW' ? '#10B981' : 'rgba(255,255,255,0.12)',
                        color: '#fff',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: 6
                      }}>
                        {stage.status}
                      </span>
                    </div>
                    <p style={{ color: '#B8B2C8', fontSize: '0.95rem' }}>{stage.desc}</p>
                  </div>

                  <div style={{ minWidth: 160, textAlign: 'right', fontWeight: 700, color: 'var(--y-primary)', fontSize: '1.05rem' }}>
                    📅 {stage.dates}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: JURY & MENTOR ADVISORY
      ========================================================================= */}
      <section className="sec" style={{ paddingTop: '64px' }}>
        <div className="wrap">
          <span className="eyebrow">Industry Evaluation</span>
          <Words text="Evaluated by Tech Leaders." />
          <p className="muted" style={{ maxWidth: 660, marginTop: 8 }}>
            Get your architecture reviewed by engineering leaders from top product companies and research faculty.
          </p>

          <div className="g3" style={{ marginTop: 32 }}>
            {JURY_MEMBERS.map((j, i) => (
              <Reveal key={j.name} delay={i * 0.08}>
                <div className="card" style={{ height: '100%', padding: '28px 24px' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--p-primary)', color: 'var(--y-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 800, marginBottom: 16 }}>
                    {j.name.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 4 }}>{j.name}</h3>
                  <div style={{ color: 'var(--y-primary)', fontSize: '0.88rem', fontWeight: 700, marginBottom: 8 }}>{j.role} • {j.company}</div>
                  <p className="muted" style={{ fontSize: '0.88rem' }}><strong>Expertise:</strong> {j.expertise}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FAQ ACCORDION
      ========================================================================= */}
      <section className="sec" style={{ paddingTop: 0, paddingBottom: '72px' }}>
        <div className="wrap acc" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="eyebrow">Got Questions?</span>
            <h2 style={{ fontSize: '2.4rem' }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = faqOpen === i
              return (
                <div key={i} className="card" style={{ padding: '0 24px', overflow: 'hidden' }}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setFaqOpen(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 0,
                      padding: '20px 0',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: 'inherit',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span>{item.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} style={{ display: 'inline-block', marginLeft: 16 }}>
                      <Plus size={20} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="muted" style={{ paddingBottom: 20, fontSize: '0.95rem', lineHeight: 1.6 }}>
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE REGISTRATION MODAL
      ========================================================================= */}
      <AnimatePresence>
        {regModalOpen && (
          <div className="modal-backdrop" style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              className="card"
              style={{ maxWidth: 540, width: '100%', maxHeight: '90vh', overflowY: 'auto', background: '#151222', border: '2px solid var(--y-primary)', position: 'relative' }}
            >
              <button
                type="button"
                onClick={() => setRegModalOpen(false)}
                style={{ position: 'absolute', right: 18, top: 18, background: 'none', border: 0, color: '#fff', cursor: 'pointer' }}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>

              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                <span className="tag">Team Entry</span>
                <span className="tag v">100% Free</span>
              </div>

              <h2 style={{ fontSize: '1.6rem', marginBottom: 6 }}>Register for Dkoder Hackathon</h2>
              <p className="muted" style={{ fontSize: '0.88rem', marginBottom: 20 }}>
                Compete across national engineering colleges for ₹5L+ prizes &amp; placement interviews.
              </p>

              {regSuccess ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Team Registration Confirmed!</h3>
                  <p className="muted" style={{ fontSize: '0.92rem', marginBottom: 20 }}>
                    Team <strong>{teamName}</strong> has been registered under <strong>{chosenTrack}</strong>. An email with your team token, Discord access link, and synopsis template has been dispatched to <strong>{leadEmail}</strong>.
                  </p>

                  <div style={{ background: '#FFFDF8', color: '#14111D', border: '2px solid #14111D', borderRadius: 16, padding: '16px', marginBottom: 24, textAlign: 'left', fontFamily: 'monospace' }}>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>🎫 HACKATHON PASS: #DK-HACK-{Math.floor(1000 + Math.random() * 9000)}</div>
                    <div style={{ fontSize: '0.85rem', color: '#555', marginTop: 4 }}>Team: {teamName} ({teamSize} Members)</div>
                    <div style={{ fontSize: '0.85rem', color: '#555' }}>Institution: {collegeName}</div>
                  </div>

                  <button
                    type="button"
                    className="btn yb"
                    style={{ width: '100%', padding: '12px' }}
                    onClick={() => setRegModalOpen(false)}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!teamName.trim() || !collegeName.trim() || !leadEmail.trim()) {
                      alert('Please complete all required fields.')
                      return
                    }
                    setRegSuccess(true)
                  }}
                >
                  <div className="fld">
                    <label htmlFor="regTeamName">Team Name</label>
                    <input
                      id="regTeamName"
                      placeholder="e.g. ByteForce"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="fld">
                    <label htmlFor="regCollege">Engineering College / Institution</label>
                    <input
                      id="regCollege"
                      placeholder="e.g. PSG College of Technology, Coimbatore"
                      value={collegeName}
                      onChange={(e) => setCollegeName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="fld">
                    <label htmlFor="regEmail">Team Leader Email</label>
                    <input
                      id="regEmail"
                      type="email"
                      placeholder="leader@college.edu"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="fld">
                    <label htmlFor="regTrack">Select Hackathon Track</label>
                    <select
                      id="regTrack"
                      value={chosenTrack}
                      onChange={(e) => setChosenTrack(e.target.value)}
                    >
                      {HACKATHON_TRACKS.map(t => (
                        <option key={t.id} value={t.title}>
                          {t.title} ({t.prize})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="fld">
                    <label htmlFor="regMembers">Team Size</label>
                    <select
                      id="regMembers"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                    >
                      <option value="2">2 Members</option>
                      <option value="3">3 Members</option>
                      <option value="4">4 Members</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                    <button type="submit" className="btn yb" style={{ flex: 1, padding: '14px', fontWeight: 800 }}>
                      <Send size={16} style={{ marginRight: 6 }} />
                      Submit Team Registration
                    </button>
                    <button type="button" className="btn out" onClick={() => setRegModalOpen(false)}>
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
