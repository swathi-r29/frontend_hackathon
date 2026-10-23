import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  GraduationCap, 
  Calendar, 
  Folder, 
  FolderKanban, 
  BookOpen, 
  Monitor, 
  Search, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Download, 
  Award, 
  UserCheck, 
  X, 
  Check, 
  ExternalLink,
  ChevronRight,
  Send,
  Trophy,
  AlertCircle
} from 'lucide-react'
import { Bar, Btn, Words } from '../ui'
import { 
  COURSES, 
  EVENTS, 
  RESOURCES, 
  PROJECTS, 
  TOPIC_CERTIFICATIONS, 
  TECH_CERTIFICATIONS,
  Course,
  EventItem,
  ResourceItem,
  ProjectItem,
  CertificationItem
} from '../learnData'

export default function Learn() {
  const [searchParams, setSearchParams] = useSearchParams()
  const sectionParam = searchParams.get('section') || 'courses'

  // Available tabs matching the dropdown 1:1
  const tabs = [
    { id: 'courses', label: 'Courses', icon: GraduationCap, sub: 'Skill-based programs' },
    { id: 'events', label: 'Events & Workshops', icon: Calendar, sub: 'Workshops & live sessions' },
    { id: 'resources', label: 'Resources & Guides', icon: Folder, sub: 'Guides, videos & articles' },
    { id: 'projects', label: 'Final Year Projects', icon: FolderKanban, sub: 'Guidance, mentor & publication' },
    { id: 'topic-wise', label: 'Topic Wise', icon: BookOpen, sub: 'Certifications by topic' },
    { id: 'technology-wise', label: 'Technology Wise', icon: Monitor, sub: 'Certifications by technology' },
  ]

  const activeTab = tabs.some(t => t.id === sectionParam) ? sectionParam : 'courses'

  const selectTab = (id: string) => {
    setSearchParams({ section: id })
    window.scrollTo({ top: 180, behavior: 'smooth' })
  }

  // State for Courses
  const [courseCategory, setCourseCategory] = useState<string>('All')
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null)
  const [enrolledCourses, setEnrolledCourses] = useState<Record<string, boolean>>({
    'dsa-campus-ace': true
  })

  // State for Events
  const [registeredEvents, setRegisteredEvents] = useState<Record<string, boolean>>({})
  const [activeEventSuccess, setActiveEventSuccess] = useState<string | null>(null)

  // State for Resources
  const [resourceQuery, setResourceQuery] = useState('')
  const [resourceType, setResourceType] = useState('All')
  const [activeResourceModal, setActiveResourceModal] = useState<ResourceItem | null>(null)
  const [copiedResource, setCopiedResource] = useState(false)

  // State for Projects
  const [activeProjectMentorModal, setActiveProjectMentorModal] = useState<ProjectItem | null>(null)
  const [mentorTeamName, setMentorTeamName] = useState('')
  const [mentorEmail, setMentorEmail] = useState('')
  const [mentorSubmitted, setMentorSubmitted] = useState(false)

  // State for Certifications Test Simulator
  const [activeTest, setActiveTest] = useState<CertificationItem | null>(null)
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({})
  const [testSubmitted, setTestSubmitted] = useState(false)
  const [testScore, setTestScore] = useState<{ score: number; pct: number; passed: boolean } | null>(null)
  const [studentName, setStudentName] = useState('Candidate')

  // Filtered courses
  const filteredCourses = useMemo(() => {
    if (courseCategory === 'All') return COURSES
    return COURSES.filter(c => c.category === courseCategory)
  }, [courseCategory])

  // Filtered resources
  const filteredResources = useMemo(() => {
    return RESOURCES.filter(r => {
      const matchQuery = (r.title + r.desc).toLowerCase().includes(resourceQuery.toLowerCase())
      const matchType = resourceType === 'All' || r.type === resourceType
      return matchQuery && matchType
    })
  }, [resourceQuery, resourceType])

  return (
    <>
      {/* =========================================================================
          HERO BANNER
      ========================================================================= */}
      <section className="sec yel" style={{ paddingTop: '36px', paddingBottom: '36px' }}>
        <div className="grid-bg" />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="hero-system-eyebrow" style={{ marginBottom: 12 }}>
            <span>DKODER LEARNING ECOSYSTEM</span>
            <span className="slash">/</span>
            <span>PLACEMENT READINESS</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', textTransform: 'uppercase', marginBottom: 12 }}>
            LEARN. SOLVE. <span className="mark" style={{ background: '#FFE54C', padding: '2px 10px', borderRadius: 8 }}>GET CERTIFIED.</span>
          </h1>

          <p className="lead" style={{ maxWidth: 660, marginTop: 8 }}>
            Targeted skill programs, live company workshops, downloadable placement archives, and industry-calibrated certifications designed for engineering campus drives.
          </p>

          {/* Interactive Top Tab Bar matching dropdown categories */}
          <div className="learn-tabs-navigation" style={{ marginTop: 32 }}>
            <div className="chips" role="tablist">
              {tabs.map((tab) => {
                const isSelected = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isSelected}
                    className={`chip ${isSelected ? 'on' : ''}`}
                    onClick={() => selectTab(tab.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 18px',
                      fontSize: '0.94rem',
                      fontWeight: isSelected ? 700 : 600,
                      boxShadow: isSelected ? '0 4px 12px rgba(245, 217, 10, 0.35)' : 'none'
                    }}
                  >
                    <tab.icon size={17} />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TAB 1: COURSES (SKILL-BASED PROGRAMS)
      ========================================================================= */}
      {activeTab === 'courses' && (
        <section className="sec" style={{ paddingTop: 48 }}>
          <div className="wrap">
            <div className="section-head-split" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <span className="eyebrow">Skill-Based Programs</span>
                <Words text="Targeted Placement Courses." />
                <p className="muted" style={{ marginTop: 8 }}>
                  Designed around real technical rounds of Tier-1 product and Tier-2 service companies.
                </p>
              </div>

              {/* Course Category Filter Chips */}
              <div className="chips">
                {['All', 'Coding', 'Aptitude', 'Full-Stack', 'Core CS'].map((cat) => (
                  <button
                    key={cat}
                    className={`chip ${courseCategory === cat ? 'on' : ''}`}
                    onClick={() => setCourseCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="g3" style={{ marginTop: 32 }}>
              {filteredCourses.map((c) => {
                const isEnrolled = enrolledCourses[c.id]
                return (
                  <motion.div
                    layout
                    key={c.id}
                    className="card course-card"
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <span className="tag">{c.category}</span>
                        <span className="tag v" style={{ background: '#2D1B54', color: '#E9E0FF' }}>{c.badge}</span>
                      </div>

                      <h3 style={{ fontSize: '1.25rem', marginBottom: 10, lineHeight: 1.3 }}>{c.title}</h3>
                      <p className="muted" style={{ fontSize: '0.9rem', marginBottom: 16 }}>{c.desc}</p>

                      <div style={{ fontSize: '0.85rem', color: '#B8B2C8', marginBottom: 14 }}>
                        <div>👨‍🏫 <strong>Instructor:</strong> {c.instructor}</div>
                        <div>⏱️ <strong>Duration:</strong> {c.duration} • {c.modulesCount} Modules • {c.projectsCount} Projects</div>
                      </div>

                      {isEnrolled && (
                        <div style={{ marginTop: 14, marginBottom: 16 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: 4 }}>
                            <span>Progress</span>
                            <span style={{ fontWeight: 700 }}>{c.progress}%</span>
                          </div>
                          <Bar pct={c.progress} />
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                      <button
                        type="button"
                        className="btn"
                        style={{ flex: 1, padding: '10px 14px', fontSize: '0.9rem' }}
                        onClick={() => {
                          if (!isEnrolled) {
                            setEnrolledCourses({ ...enrolledCourses, [c.id]: true })
                          }
                          setActiveCourseModal(c)
                        }}
                      >
                        {isEnrolled ? 'Continue Course' : 'Enroll for Free'}
                      </button>

                      <button
                        type="button"
                        className="btn out"
                        style={{ padding: '10px 12px' }}
                        onClick={() => setActiveCourseModal(c)}
                        title="View Syllabus"
                      >
                        Syllabus
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 2: EVENTS (WORKSHOPS & LIVE SESSIONS)
      ========================================================================= */}
      {activeTab === 'events' && (
        <section className="sec" style={{ paddingTop: 48 }}>
          <div className="wrap">
            <span className="eyebrow">Workshops & Live Sessions</span>
            <Words text="Learn Live with Campus Assessors." />
            <p className="muted" style={{ marginTop: 8, maxWidth: 640 }}>
              Interactive problem-solving sprints, direct recruiter Q&As, and company-specific mock exam prep.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 36 }}>
              {EVENTS.map((ev) => {
                const isReg = registeredEvents[ev.id]
                return (
                  <motion.div
                    key={ev.id}
                    className="card"
                    style={{
                      borderLeft: ev.isLive ? '4px solid #FF4444' : '4px solid var(--y-primary)',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                      <div style={{ flex: 1, minWidth: 280 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                          {ev.isLive ? (
                            <span style={{ background: '#FF4444', color: '#fff', fontSize: '0.72rem', fontWeight: 800, padding: '3px 8px', borderRadius: 6, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', display: 'inline-block' }} />
                              LIVE THIS WEEK
                            </span>
                          ) : (
                            <span className="tag">{ev.category}</span>
                          )}
                          <span className="tag v">{ev.tag}</span>
                          <span className="muted" style={{ fontSize: '0.85rem' }}>👥 {ev.registeredCount + (isReg ? 1 : 0)} Enrolled</span>
                        </div>

                        <h3 style={{ fontSize: '1.45rem', marginBottom: 8 }}>{ev.title}</h3>
                        <p className="muted" style={{ marginBottom: 14 }}>{ev.desc}</p>

                        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: '0.88rem', color: 'var(--y-primary)', marginBottom: 16 }}>
                          <div>📅 {ev.date}</div>
                          <div>⏰ {ev.time}</div>
                          <div>🎤 {ev.speaker} ({ev.speakerRole})</div>
                        </div>

                        {/* Agenda points */}
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: 12, border: '1px solid var(--border-light)' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: '#B8B2C8', display: 'block', marginBottom: 6 }}>
                            Session Agenda:
                          </span>
                          <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {ev.agenda.map((pt, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <CheckCircle2 size={14} color="#F5D90A" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Action Box */}
                      <div style={{ minWidth: 200, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'stretch' }}>
                        {isReg ? (
                          <div style={{ background: 'rgba(52, 211, 153, 0.15)', border: '1px solid #34D399', color: '#34D399', padding: '14px', borderRadius: 12, textAlign: 'center' }}>
                            <CheckCircle2 size={24} style={{ margin: '0 auto 6px' }} />
                            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Seat Confirmed!</div>
                            <div style={{ fontSize: '0.78rem', color: '#B8B2C8', marginTop: 4 }}>Joining link sent to your email</div>
                          </div>
                        ) : (
                          <button
                            type="button"
                            className="btn yb"
                            style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.95rem' }}
                            onClick={() => {
                              setRegisteredEvents({ ...registeredEvents, [ev.id]: true })
                              setActiveEventSuccess(ev.title)
                            }}
                          >
                            <span>Register for Free</span>
                            <ArrowRight size={16} />
                          </button>
                        )}

                        <button
                          type="button"
                          className="btn out"
                          style={{ fontSize: '0.85rem', padding: '8px 12px' }}
                          onClick={() => {
                            const calText = encodeURIComponent(`DKODER Event: ${ev.title}`)
                            const calDetails = encodeURIComponent(`${ev.desc}\nTime: ${ev.time}`)
                            window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calText}&details=${calDetails}`, '_blank')
                          }}
                        >
                          <Calendar size={14} style={{ marginRight: 6 }} />
                          Add to Google Calendar
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 3: RESOURCES (GUIDES, VIDEOS & ARTICLES)
      ========================================================================= */}
      {activeTab === 'resources' && (
        <section className="sec" style={{ paddingTop: 48 }}>
          <div className="wrap">
            <span className="eyebrow">Guides, Videos & Articles</span>
            <Words text="Curated Placement Knowledge Bank." />
            <p className="muted" style={{ marginTop: 8 }}>
              Cheat sheets, pattern cheat codes, company archives, and ATS resume templates used by top placement candidates.
            </p>

            {/* Search & Filter Bar */}
            <div style={{ display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: 260 }}>
                <Search size={18} style={{ position: 'absolute', left: 14, top: 15, color: '#B8B2C8' }} />
                <input
                  aria-label="Search resources"
                  placeholder="Search resources, topics, or formulas..."
                  value={resourceQuery}
                  onChange={(e) => setResourceQuery(e.target.value)}
                  style={{ paddingLeft: 42 }}
                />
              </div>

              <div className="chips">
                {['All', 'PDF Guide', 'Cheat Sheet', 'Solved Archive', 'Checklist'].map((t) => (
                  <button
                    key={t}
                    className={`chip ${resourceType === t ? 'on' : ''}`}
                    onClick={() => setResourceType(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources Grid */}
            <div className="g3" style={{ marginTop: 32 }}>
              {filteredResources.map((res) => (
                <div
                  key={res.id}
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="tag">{res.type}</span>
                      <span className="muted" style={{ fontSize: '0.8rem' }}>{res.pages} • {res.reads.toLocaleString()} Views</span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: 10, lineHeight: 1.35 }}>{res.title}</h3>
                    <p className="muted" style={{ fontSize: '0.9rem', marginBottom: 16 }}>{res.desc}</p>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: 12, borderRadius: 10, border: '1px solid var(--border-light)', marginBottom: 16 }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--y-primary)', display: 'block', marginBottom: 6 }}>
                        Key Highlights:
                      </span>
                      <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.82rem', color: '#B8B2C8', display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {res.highlights.map((h, i) => (
                          <li key={i}>• {h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 10 }}>
                    <button
                      type="button"
                      className="btn"
                      style={{ flex: 1, padding: '10px 14px', fontSize: '0.9rem' }}
                      onClick={() => {
                        setActiveResourceModal(res)
                        setCopiedResource(false)
                      }}
                    >
                      <FileText size={16} style={{ marginRight: 6 }} />
                      Read Resource
                    </button>

                    <button
                      type="button"
                      className="btn out"
                      style={{ padding: '10px 12px' }}
                      onClick={() => {
                        setActiveResourceModal(res)
                      }}
                      title="Download PDF"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 4: FINAL YEAR PROJECTS (GUIDANCE, MENTOR & PUBLICATION)
      ========================================================================= */}
      {activeTab === 'projects' && (
        <section className="sec" style={{ paddingTop: 48 }}>
          <div className="wrap">
            <span className="eyebrow">Guidance, Mentor & Publication</span>
            <Words text="Engineering Final Year Projects & Research." />
            <p className="muted" style={{ marginTop: 8, maxWidth: 660 }}>
              Turn your major capstone project into a genuine competitive edge with guided research manuscripts, production architectures, and IEEE publication roadmaps.
            </p>

            <div className="g3" style={{ marginTop: 36 }}>
              {PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="tag">{proj.domain}</span>
                      <span className="tag v">{proj.difficulty}</span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: 12, lineHeight: 1.3 }}>{proj.title}</h3>
                    <p className="muted" style={{ fontSize: '0.9rem', marginBottom: 16 }}>{proj.desc}</p>

                    {/* Tech Stack Chips */}
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--y-primary)', display: 'block', marginBottom: 6 }}>
                        Technology Stack:
                      </span>
                      <div className="chips">
                        {proj.stack.map((st) => (
                          <span key={st} style={{ background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: 6, fontSize: '0.78rem', color: '#ECE5FC' }}>
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mentor Info */}
                    <div style={{ background: 'rgba(109, 59, 255, 0.12)', border: '1px solid rgba(139, 92, 255, 0.3)', padding: 12, borderRadius: 10, marginBottom: 16 }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ECE5FC' }}>🎓 Mentor: {proj.mentor}</div>
                      <div style={{ fontSize: '0.78rem', color: '#B8B2C8', marginTop: 2 }}>{proj.mentorAffiliation}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--y-primary)', marginTop: 4 }}>🎯 <strong>Target:</strong> {proj.publicationTarget}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 10 }}>
                    <button
                      type="button"
                      className="btn"
                      style={{ flex: 1, padding: '10px 14px', fontSize: '0.9rem' }}
                      onClick={() => {
                        setActiveProjectMentorModal(proj)
                        setMentorSubmitted(false)
                      }}
                    >
                      <UserCheck size={16} style={{ marginRight: 6 }} />
                      Request Guidance
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* IEEE Publication Roadmap Banner */}
            <div className="card" style={{ marginTop: 40, background: 'linear-gradient(135deg, rgba(22, 15, 46, 0.9), rgba(109, 59, 255, 0.15))', border: '1px solid var(--p-accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                <Award size={28} color="#F5D90A" />
                <h3 style={{ fontSize: '1.4rem' }}>IEEE Conference Paper Publication Roadmap</h3>
              </div>
              <p className="muted" style={{ maxWidth: 780, fontSize: '0.95rem', marginBottom: 20 }}>
                Every Dkoder Final Year Project follows the rigorous IEEE / Springer manuscript standard: Problem Statement Definition &rarr; Dataset Benchmarking &rarr; Novel Method Implementation &rarr; Quantitative Evaluation &rarr; Paper Peer-Review.
              </p>
              <div className="row" style={{ marginTop: 0 }}>
                <button
                  type="button"
                  className="btn out"
                  onClick={() => alert('SRS and IEEE LaTeX starter template pack downloaded to your workspace!')}
                >
                  <Download size={16} style={{ marginRight: 6 }} />
                  Download IEEE LaTeX Template &amp; SRS Starter
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 5: TOPIC WISE CERTIFICATIONS
      ========================================================================= */}
      {activeTab === 'topic-wise' && (
        <section className="sec" style={{ paddingTop: 48 }}>
          <div className="wrap">
            <span className="eyebrow">Certifications by Topic</span>
            <Words text="Topic Wise Verification & Badges." />
            <p className="muted" style={{ marginTop: 8, maxWidth: 660 }}>
              Verify your competence in specific technical disciplines. Pass the assessment test (70%+) to earn an official Dkoder verifiable digital credential.
            </p>

            <div className="g3" style={{ marginTop: 36 }}>
              {TOPIC_CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="tag">{cert.category}</span>
                      <span className="tag v">{cert.badge}</span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', marginBottom: 10, lineHeight: 1.3 }}>{cert.title}</h3>
                    <p className="muted" style={{ fontSize: '0.9rem', marginBottom: 16 }}>{cert.desc}</p>

                    <div style={{ fontSize: '0.85rem', color: '#B8B2C8', marginBottom: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      <div>📝 <strong>{cert.questionsCount} Questions</strong></div>
                      <div>⏱️ <strong>{cert.durationMins} Mins</strong></div>
                      <div>🎯 <strong>Pass: {cert.passingPct}%</strong></div>
                    </div>

                    {/* Tested skills */}
                    <div style={{ marginBottom: 18 }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--y-primary)', display: 'block', marginBottom: 6 }}>
                        Skills Assessed:
                      </span>
                      <div className="chips">
                        {cert.skillsTested.map((s) => (
                          <span key={s} style={{ background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: 6, fontSize: '0.78rem', color: '#ECE5FC' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn yb"
                    style={{ padding: '12px 18px', fontWeight: 700 }}
                    onClick={() => {
                      setActiveTest(cert)
                      setUserAnswers({})
                      setTestSubmitted(false)
                      setTestScore(null)
                    }}
                  >
                    <Trophy size={16} style={{ marginRight: 6 }} />
                    Take Certification Test
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          TAB 6: TECHNOLOGY WISE CERTIFICATIONS
      ========================================================================= */}
      {activeTab === 'technology-wise' && (
        <section className="sec" style={{ paddingTop: 48 }}>
          <div className="wrap">
            <span className="eyebrow">Certifications by Technology</span>
            <Words text="Stack-Specific Developer Credentials." />
            <p className="muted" style={{ marginTop: 8, maxWidth: 660 }}>
              Prove hands-on syntax and architectural mastery in Python, Java, C++, React, and cloud frameworks. Recognized by 120+ institutional placement partners.
            </p>

            <div className="g3" style={{ marginTop: 36 }}>
              {TECH_CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <span className="tag">{cert.category}</span>
                      <span className="tag v">{cert.badge}</span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', marginBottom: 10, lineHeight: 1.3 }}>{cert.title}</h3>
                    <p className="muted" style={{ fontSize: '0.9rem', marginBottom: 16 }}>{cert.desc}</p>

                    <div style={{ fontSize: '0.85rem', color: '#B8B2C8', marginBottom: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      <div>📝 <strong>{cert.questionsCount} Questions</strong></div>
                      <div>⏱️ <strong>{cert.durationMins} Mins</strong></div>
                      <div>🎯 <strong>Pass: {cert.passingPct}%</strong></div>
                    </div>

                    <div style={{ marginBottom: 18 }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--y-primary)', display: 'block', marginBottom: 6 }}>
                        Key Competencies:
                      </span>
                      <div className="chips">
                        {cert.skillsTested.map((s) => (
                          <span key={s} style={{ background: 'rgba(255,255,255,0.06)', padding: '3px 8px', borderRadius: 6, fontSize: '0.78rem', color: '#ECE5FC' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn yb"
                    style={{ padding: '12px 18px', fontWeight: 700 }}
                    onClick={() => {
                      setActiveTest(cert)
                      setUserAnswers({})
                      setTestSubmitted(false)
                      setTestScore(null)
                    }}
                  >
                    <Trophy size={16} style={{ marginRight: 6 }} />
                    Take Certification Test
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          INTERACTIVE MODAL 1: COURSE SYLLABUS & ENROLLMENT DRAWER
      ========================================================================= */}
      <AnimatePresence>
        {activeCourseModal && (
          <div className="modal-backdrop" style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              className="card"
              style={{ maxWidth: 640, width: '100%', maxHeight: '88vh', overflowY: 'auto', background: '#151222', border: '2px solid var(--p-accent)', position: 'relative' }}
            >
              <button
                type="button"
                onClick={() => setActiveCourseModal(null)}
                style={{ position: 'absolute', right: 18, top: 18, background: 'none', border: 0, color: '#fff', cursor: 'pointer' }}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>

              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                <span className="tag">{activeCourseModal.category}</span>
                <span className="tag v">{activeCourseModal.badge}</span>
              </div>

              <h2 style={{ fontSize: '1.65rem', marginBottom: 10 }}>{activeCourseModal.title}</h2>
              <p className="muted" style={{ marginBottom: 18 }}>{activeCourseModal.desc}</p>

              <div style={{ background: 'rgba(255,255,255,0.04)', padding: 14, borderRadius: 12, marginBottom: 20, display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: '0.88rem' }}>
                <div>👨‍🏫 <strong>Mentor:</strong> {activeCourseModal.instructor}</div>
                <div>⏱️ <strong>Duration:</strong> {activeCourseModal.duration}</div>
                <div>📊 <strong>Level:</strong> {activeCourseModal.level}</div>
              </div>

              <h4 style={{ fontSize: '1.1rem', marginBottom: 12, color: 'var(--y-primary)' }}>Complete Course Syllabus:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                {activeCourseModal.syllabus.map((mod, i) => (
                  <div key={i} style={{ padding: '10px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--p-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: 800 }}>
                      0{i + 1}
                    </span>
                    <span style={{ fontSize: '0.92rem' }}>{mod}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  type="button"
                  className="btn yb"
                  style={{ flex: 1, padding: '12px 18px', fontWeight: 700 }}
                  onClick={() => {
                    setEnrolledCourses({ ...enrolledCourses, [activeCourseModal.id]: true })
                    setActiveCourseModal(null)
                    alert(`Congratulations! You are enrolled in "${activeCourseModal.title}". Course access is now active.`)
                  }}
                >
                  Start Learning Now
                </button>
                <button
                  type="button"
                  className="btn out"
                  onClick={() => setActiveCourseModal(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          INTERACTIVE MODAL 2: EVENT REGISTRATION SUCCESS POPUP
      ========================================================================= */}
      <AnimatePresence>
        {activeEventSuccess && (
          <div className="modal-backdrop" style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="card"
              style={{ maxWidth: 460, width: '100%', textAlign: 'center', background: '#151222', border: '2px solid #34D399', padding: '32px 24px' }}
            >
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: 10 }}>You are Registered!</h3>
              <p className="muted" style={{ fontSize: '0.92rem', marginBottom: 20 }}>
                You have successfully reserved your seat for <strong>{activeEventSuccess}</strong>. The calendar invite and Zoom/Google Meet link have been prepared.
              </p>
              <button
                type="button"
                className="btn yb"
                style={{ width: '100%', padding: '12px' }}
                onClick={() => setActiveEventSuccess(null)}
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          INTERACTIVE MODAL 3: RESOURCE PREVIEW & DOWNLOAD MODAL
      ========================================================================= */}
      <AnimatePresence>
        {activeResourceModal && (
          <div className="modal-backdrop" style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              className="card"
              style={{ maxWidth: 680, width: '100%', maxHeight: '88vh', overflowY: 'auto', background: '#151222', border: '2px solid var(--p-accent)', position: 'relative' }}
            >
              <button
                type="button"
                onClick={() => setActiveResourceModal(null)}
                style={{ position: 'absolute', right: 18, top: 18, background: 'none', border: 0, color: '#fff', cursor: 'pointer' }}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>

              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                <span className="tag">{activeResourceModal.type}</span>
                <span className="muted" style={{ fontSize: '0.85rem' }}>{activeResourceModal.pages}</span>
              </div>

              <h2 style={{ fontSize: '1.5rem', marginBottom: 14 }}>{activeResourceModal.title}</h2>

              <pre style={{ background: '#0A0814', color: '#ECE5FC', padding: 18, borderRadius: 12, border: '1px solid var(--border-light)', whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.88rem', maxHeight: 320, overflowY: 'auto', marginBottom: 20 }}>
                {activeResourceModal.contentPreview}
              </pre>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn yb"
                  style={{ flex: 1, padding: '12px 18px', fontWeight: 700 }}
                  onClick={() => {
                    navigator.clipboard.writeText(activeResourceModal.contentPreview)
                    setCopiedResource(true)
                    setTimeout(() => setCopiedResource(false), 2500)
                  }}
                >
                  {copiedResource ? (
                    <>
                      <Check size={16} style={{ marginRight: 6 }} />
                      Copied Notes to Clipboard!
                    </>
                  ) : (
                    <>
                      <FileText size={16} style={{ marginRight: 6 }} />
                      Copy Notes to Clipboard
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="btn out"
                  onClick={() => {
                    const blob = new Blob([activeResourceModal.contentPreview], { type: 'text/markdown' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = `${activeResourceModal.id}-dkoder-guide.md`
                    a.click()
                  }}
                >
                  <Download size={16} style={{ marginRight: 6 }} />
                  Download (.md)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          INTERACTIVE MODAL 4: PROJECT MENTOR GUIDANCE FORM
      ========================================================================= */}
      <AnimatePresence>
        {activeProjectMentorModal && (
          <div className="modal-backdrop" style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              className="card"
              style={{ maxWidth: 560, width: '100%', background: '#151222', border: '2px solid var(--p-accent)', position: 'relative' }}
            >
              <button
                type="button"
                onClick={() => setActiveProjectMentorModal(null)}
                style={{ position: 'absolute', right: 18, top: 18, background: 'none', border: 0, color: '#fff', cursor: 'pointer' }}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>

              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                <span className="tag">{activeProjectMentorModal.domain}</span>
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: 8 }}>Request Project Mentor Guidance</h3>
              <p className="muted" style={{ fontSize: '0.88rem', marginBottom: 20 }}>
                Assigned Mentor: <strong>{activeProjectMentorModal.mentor}</strong> ({activeProjectMentorModal.mentorAffiliation})
              </p>

              {mentorSubmitted ? (
                <div style={{ textAlign: 'center', padding: '24px 10px' }}>
                  <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: 6 }}>Proposal Submitted!</h4>
                  <p className="muted" style={{ fontSize: '0.88rem', marginBottom: 18 }}>
                    Mentor <strong>{activeProjectMentorModal.mentor}</strong> has been notified. You will receive an email at <strong>{mentorEmail || 'your email'}</strong> with the introductory call link and literature survey kit.
                  </p>
                  <button type="button" className="btn yb" onClick={() => setActiveProjectMentorModal(null)}>
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!mentorTeamName.trim() || !mentorEmail.trim()) {
                      alert('Please provide team name and email.')
                      return
                    }
                    setMentorSubmitted(true)
                  }}
                >
                  <div className="fld">
                    <label htmlFor="teamName">College / Team Name</label>
                    <input
                      id="teamName"
                      placeholder="e.g. InnovateX - Final Year CSE"
                      value={mentorTeamName}
                      onChange={(e) => setMentorTeamName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="fld">
                    <label htmlFor="teamEmail">Contact Email</label>
                    <input
                      id="teamEmail"
                      type="email"
                      placeholder="student@engg.edu"
                      value={mentorEmail}
                      onChange={(e) => setMentorEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="fld">
                    <label htmlFor="teamDomain">Selected Domain Project</label>
                    <input
                      id="teamDomain"
                      value={activeProjectMentorModal.title}
                      readOnly
                      style={{ opacity: 0.8 }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                    <button type="submit" className="btn yb" style={{ flex: 1, padding: '12px' }}>
                      <Send size={15} style={{ marginRight: 6 }} />
                      Submit to Mentor
                    </button>
                    <button type="button" className="btn out" onClick={() => setActiveProjectMentorModal(null)}>
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          INTERACTIVE MODAL 5 & 6: REAL CERTIFICATION ASSESSMENT SIMULATOR
      ========================================================================= */}
      <AnimatePresence>
        {activeTest && (
          <div className="modal-backdrop" style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              className="card"
              style={{ maxWidth: 720, width: '100%', maxHeight: '90vh', overflowY: 'auto', background: '#120F24', border: '2px solid var(--y-primary)', position: 'relative' }}
            >
              <button
                type="button"
                onClick={() => setActiveTest(null)}
                style={{ position: 'absolute', right: 18, top: 18, background: 'none', border: 0, color: '#fff', cursor: 'pointer' }}
                aria-label="Close test"
              >
                <X size={22} />
              </button>

              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                <span className="tag">{activeTest.category}</span>
                <span className="tag v">{activeTest.badge}</span>
              </div>

              <h2 style={{ fontSize: '1.5rem', marginBottom: 8 }}>{activeTest.title}</h2>
              <p className="muted" style={{ fontSize: '0.88rem', marginBottom: 20 }}>
                5 Questions • 70% passing cutoff • Instant Certificate Generation
              </p>

              {/* Assessment State 1: Active Questions Test */}
              {!testSubmitted ? (
                <div>
                  <div style={{ marginBottom: 20, background: 'rgba(255,255,255,0.04)', padding: 12, borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.88rem' }}>
                      Candidate: <strong>{studentName}</strong>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--y-primary)', fontWeight: 700 }}>
                      Answered: {Object.keys(userAnswers).length} / {activeTest.questions.length}
                    </div>
                  </div>

                  {activeTest.questions.map((qObj, qIdx) => (
                    <div key={qIdx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-light)', padding: 16, borderRadius: 12, marginBottom: 18 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.98rem', marginBottom: 12, display: 'flex', gap: 8 }}>
                        <span style={{ color: 'var(--y-primary)' }}>Q{qIdx + 1}.</span>
                        <span>{qObj.q}</span>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {qObj.options.map((opt, optIdx) => {
                          const isSelected = userAnswers[qIdx] === optIdx
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => setUserAnswers({ ...userAnswers, [qIdx]: optIdx })}
                              style={{
                                textAlign: 'left',
                                padding: '10px 14px',
                                borderRadius: 8,
                                border: isSelected ? '2px solid var(--y-primary)' : '1px solid rgba(255,255,255,0.1)',
                                background: isSelected ? 'rgba(245, 217, 10, 0.15)' : 'rgba(255,255,255,0.02)',
                                color: isSelected ? '#FFFFFF' : '#B8B2C8',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                transition: 'all 0.15s ease'
                              }}
                            >
                              <strong style={{ marginRight: 8 }}>{String.fromCharCode(65 + optIdx)}.</strong>
                              {opt}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}

                  <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                    <button
                      type="button"
                      className="btn yb"
                      style={{ flex: 1, padding: '14px', fontWeight: 800 }}
                      onClick={() => {
                        if (Object.keys(userAnswers).length < activeTest.questions.length) {
                          if (!confirm('You have unanswered questions. Are you sure you want to submit?')) return
                        }
                        let correctCount = 0
                        activeTest.questions.forEach((q, i) => {
                          if (userAnswers[i] === q.correct) correctCount++
                        })
                        const pct = Math.round((correctCount / activeTest.questions.length) * 100)
                        setTestScore({
                          score: correctCount,
                          pct,
                          passed: pct >= activeTest.passingPct
                        })
                        setTestSubmitted(true)
                      }}
                    >
                      Submit Assessment &amp; Generate Score
                    </button>
                  </div>
                </div>
              ) : (
                /* Assessment State 2: Results & Official Certificate */
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                  {testScore?.passed ? (
                    <div>
                      <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                        <Trophy size={36} />
                      </div>

                      <h3 style={{ fontSize: '1.8rem', marginBottom: 4 }}>Congratulations! You Passed!</h3>
                      <p style={{ color: '#34D399', fontWeight: 700, fontSize: '1.1rem', marginBottom: 20 }}>
                        Score: {testScore.score} / {activeTest.questions.length} ({testScore.pct}%)
                      </p>

                      {/* Official Certificate Card */}
                      <div
                        id="certificate-box"
                        style={{
                          background: '#FFFDF8',
                          color: '#14111D',
                          border: '3px solid #14111D',
                          borderRadius: 20,
                          padding: '28px 24px',
                          boxShadow: '6px 8px 0px #14111D',
                          margin: '0 auto 24px',
                          textAlign: 'center',
                          position: 'relative'
                        }}
                      >
                        <div style={{ fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 800, color: '#8C7300', marginBottom: 8 }}>
                          DKODER ACADEMIC VERIFICATION COUNCIL
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#14111D', marginBottom: 12 }}>
                          CERTIFICATE OF COMPETENCY
                        </h2>
                        <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: 6 }}>This is officially awarded to</p>
                        <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#2F056B', textDecoration: 'underline', marginBottom: 12 }}>
                          {studentName === 'Candidate' ? 'Engineering Placement Candidate' : studentName}
                        </div>
                        <p style={{ fontSize: '0.92rem', color: '#333', maxWidth: 480, margin: '0 auto 14px' }}>
                          For demonstrating verified placement problem-solving aptitude in <strong>{activeTest.title}</strong> with an evaluation grade of <strong>{testScore.pct}%</strong>.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #DDD', paddingTop: 12, fontSize: '0.78rem', color: '#777' }}>
                          <span>Credential ID: <strong>DK-{Math.random().toString(36).substring(2, 9).toUpperCase()}</strong></span>
                          <span>Verified: <strong>{new Date().toLocaleDateString('en-GB')}</strong></span>
                          <span>Status: <strong style={{ color: '#16A34A' }}>AUTHENTIC</strong></span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: 12 }}>
                        <button
                          type="button"
                          className="btn yb"
                          style={{ flex: 1, padding: '12px' }}
                          onClick={() => alert('Certificate downloaded! You can attach this credential ID to your campus placement resume.')}
                        >
                          <Download size={16} style={{ marginRight: 6 }} />
                          Download Verified Certificate
                        </button>
                        <button
                          type="button"
                          className="btn out"
                          onClick={() => setActiveTest(null)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(239, 68, 68, 0.2)', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                        <AlertCircle size={36} />
                      </div>

                      <h3 style={{ fontSize: '1.6rem', marginBottom: 4 }}>Cutoff Not Reached</h3>
                      <p style={{ color: '#EF4444', fontWeight: 700, fontSize: '1.05rem', marginBottom: 16 }}>
                        Score: {testScore?.score} / {activeTest.questions.length} ({testScore?.pct}%) — Required: {activeTest.passingPct}%
                      </p>
                      <p className="muted" style={{ maxWidth: 460, margin: '0 auto 24px', fontSize: '0.92rem' }}>
                        Review the detailed topics in our Courses section and retake the test anytime without penalty.
                      </p>

                      <div style={{ display: 'flex', gap: 12 }}>
                        <button
                          type="button"
                          className="btn yb"
                          style={{ flex: 1, padding: '12px' }}
                          onClick={() => {
                            setUserAnswers({})
                            setTestSubmitted(false)
                            setTestScore(null)
                          }}
                        >
                          Retake Test Now
                        </button>
                        <button
                          type="button"
                          className="btn out"
                          onClick={() => setActiveTest(null)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
