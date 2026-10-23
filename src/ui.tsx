import { ReactNode, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Menu, X, User, ExternalLink, ShieldCheck, Sparkles, ChevronDown, ChevronUp, Play, Pause, GraduationCap, Calendar, Folder, FolderKanban, BookOpen, Monitor } from 'lucide-react'

export const Reveal = ({ children, delay = 0, className, style }: { children: ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) => {
  const rm = useReducedMotion()
  return (
    <motion.div
      className={className}
      style={style}
      initial={rm ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export const Words = ({ text, as: T = 'h2' }: { text: string; as?: 'h1' | 'h2' | 'span' | 'div' }) => {
  const rm = useReducedMotion()
  const M = motion[T]
  return (
    <M aria-label={text} initial="h" whileInView="s" viewport={{ once: true }} transition={{ staggerChildren: rm ? 0 : 0.05 }}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '.06em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{ h: { y: rm ? 0 : '110%' }, s: { y: 0 } }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </M>
  )
}

export const Btn = ({
  to,
  children,
  variant = '',
  onClick,
  disabled,
  type,
  icon = true,
  style,
}: {
  to?: string
  children: ReactNode
  variant?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
  icon?: boolean
  style?: React.CSSProperties
}) => {
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={17} className="btn-icon" />}
    </>
  )

  return to ? (
    <Link to={to} className={`btn ${variant}`} style={style}>
      {content}
    </Link>
  ) : (
    <button type={type ?? 'button'} className={`btn ${variant}`} onClick={onClick} disabled={disabled} style={style}>
      {content}
    </button>
  )
}

export const Ring = ({ pct, size = 96 }: { pct: number; size?: number }) => {
  const r = 38
  const circ = 2 * Math.PI * r
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={`${pct}% placement readiness`}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="#E9E0FF" strokeWidth="8" />
      <motion.circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="#7040D8"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circ}
        transform="rotate(-90 50 50)"
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ - (pct / 100) * circ }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <text x="50" y="56" textAnchor="middle" fontSize="21" fontWeight="800" fill="#32105E" fontFamily="var(--d)">
        {pct}%
      </text>
    </svg>
  )
}

export const Bar = ({ pct }: { pct: number }) => (
  <div className="bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
    <motion.i
      style={{ width: `${pct}%` }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
    />
  </div>
)

export const Counter = ({ to }: { to: number }) => {
  const rm = useReducedMotion()
  const [n, setN] = useState(rm ? to : 0)
  useEffect(() => {
    if (rm) return
    let f = 0
    let id = 0
    const t = (s: number) => {
      f ||= s
      const p = Math.min((s - f) / 1100, 1)
      setN(Math.round(to * p))
      if (p < 1) id = requestAnimationFrame(t)
    }
    id = requestAnimationFrame(t)
    return () => cancelAnimationFrame(id)
  }, [to, rm])
  return <>{n.toLocaleString()}</>
}

// Integrated Hero Video Component with Graceful Fallback & Poster
export const HeroVideoPlayer = () => {
  const rm = useReducedMotion()
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  const toggle = () => { const v = videoRef.current; if (!v) return; if (v.paused) { v.play(); setPaused(false) } else { v.pause(); setPaused(true) } }

  const posterUrl = '/images/dkoder-hero-poster.png'

  return (
    <div className="hero-video-card">
      <div className="hero-video-wrapper">
        {/* Glow ambient background backdrop */}
        <div className="hero-video-glow" />

        {/* Video or Image Fallback */}
        {!videoFailed && !rm ? (
          <video
            ref={videoRef}
            className="hero-video-element"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterUrl}
            onError={() => setVideoFailed(true)}
            aria-label="DKODER college students collaborating, coding, and preparing for campus placements"
          >
            <source src="/video/dkoder-hero.mp4" type="video/mp4" />
            <source src="/videos/dkoder-hero.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        ) : (
          <img
            src={posterUrl}
            alt="Engineering college students preparing for campus placements with DKODER"
            className="hero-video-element"
            loading="eager"
          />
        )}

        {!videoFailed && !rm && <button type="button" className="video-toggle" onClick={toggle} aria-label={paused ? 'Play background video' : 'Pause background video'}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}
        {/* Badge Overlay */}
        <div className="hero-video-badge">
          <span className="live-dot" />
          <span>Preview: campus prep with Dkoder</span>
        </div>

        {/* Floating Stat Pill Overlay */}
        <div className="hero-video-stat-pill">
          <Sparkles size={16} className="text-yellow" />
          <span>Coding · Aptitude · Mock Tests · Company Prep</span>
        </div>
      </div>
    </div>
  )
}

export const learnDropdownSections = [
  {
    title: 'LEARN',
    items: [
      {
        to: '/learn?section=courses',
        icon: GraduationCap,
        title: 'Courses',
        desc: 'Skill-based programs',
      },
      {
        to: '/learn?section=events',
        icon: Calendar,
        title: 'Events',
        desc: 'Workshops & live sessions',
      },
      {
        to: '/learn?section=resources',
        icon: Folder,
        title: 'Resources',
        desc: 'Guides, videos & articles',
      },
      {
        to: '/learn?section=projects',
        icon: FolderKanban,
        title: 'Final Year Projects',
        desc: 'Guidance, mentor & publication',
      },
    ],
  },
  {
    title: 'CERTIFICATIONS',
    items: [
      {
        to: '/learn?section=topic-wise',
        icon: BookOpen,
        title: 'Topic Wise',
        desc: 'Certifications by topic',
      },
      {
        to: '/learn?section=technology-wise',
        icon: Monitor,
        title: 'Technology Wise',
        desc: 'Certifications by technology',
      },
    ],
  },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/learn', label: 'Learn', hasDropdown: true },
  { to: '/hackathon', label: 'Hackathons' },
  { to: '/colleges', label: 'For Colleges' },
  { to: '/mou', label: 'Apply for MOU' },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  // Dismiss on click outside or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="wrap nav">
        {/* Logo: </ > Dkoder */}
        <Link to="/" className="logo" aria-label="DKODER Home">
          <span className="logo-badge">&lt;/&gt;</span>
          <span className="logo-text">Dkoder</span>
        </Link>

        {/* Mobile menu burger */}
        <button
          className="burger"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Menu */}
        <nav aria-label="Primary navigation" className="nav-container">
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(({ to, label, hasDropdown }) => {
              if (hasDropdown) {
                const isCurrentLearnActive = pathname.startsWith('/learn')
                return (
                  <li
                    key={to}
                    ref={dropdownRef}
                    className="nav-item-dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={`nav-link nav-dropdown-btn ${dropdownOpen ? 'nav-dropdown-open' : ''} ${isCurrentLearnActive ? 'active' : ''}`}
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{label}</span>
                      {dropdownOpen ? (
                        <ChevronUp size={15} className="dropdown-chevron" />
                      ) : (
                        <ChevronDown size={15} className="dropdown-chevron" />
                      )}
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          className="nav-dropdown-menu"
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                        >
                          {learnDropdownSections.map((section, sIdx) => (
                            <div key={section.title} className={sIdx > 0 ? 'dropdown-section-group has-divider' : 'dropdown-section-group'}>
                              <div className="dropdown-section-heading">{section.title}</div>
                              <div className="dropdown-items-stack">
                                {section.items.map((item) => (
                                  <Link
                                    key={item.title}
                                    to={item.to}
                                    className="dropdown-item-card"
                                    onClick={() => setDropdownOpen(false)}
                                  >
                                    <div className="dropdown-circle-badge">
                                      <item.icon size={20} strokeWidth={2.1} />
                                    </div>
                                    <div className="dropdown-text-column">
                                      <span className="dropdown-title-text">{item.title}</span>
                                      <span className="dropdown-subtitle-text">{item.desc}</span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              }

              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      isActive
                        ? to === '/'
                          ? 'nav-pill-active'
                          : 'nav-link active'
                        : 'nav-link'
                    }
                  >
                    <span>{label}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Header Right Actions: Profile Icon & Start Learning Button */}
        <div className="nav-right-actions">
          <Link to="/colleges" className="nav-profile-btn" aria-label="Profile / Account">
            <User size={20} />
          </Link>
          <Link to="/learn" className="btn btn-dark-pill">
            <span>Start Learning</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export const Footer = () => (
  <footer className="site-footer">
    <div className="wrap">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <span className="logo-badge">&lt;/&gt;</span>
            <span className="logo-text text-yellow">Dkoder</span>
          </div>
          <p className="footer-desc">
            The placement Learning Management System (LMS) designed for engineering colleges and ambitious students across India.
          </p>
          <div className="footer-badge-wrap">
            <span className="footer-subtag">
              <ShieldCheck size={14} /> Institutional Placement Partner
            </span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><Link to="/learn">Practice Modules</Link></li>
            <li><Link to="/learn">Coding &amp; DSA Lab</Link></li>
            <li><Link to="/learn">Aptitude &amp; Reasoning</Link></li>
            <li><Link to="/hackathon">Student Hackathons</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Institutions</h4>
          <ul>
            <li><Link to="/colleges">Campus Placement Suite</Link></li>
            <li><Link to="/mou">Apply for College MOU</Link></li>
            <li><Link to="/colleges">Student Analytics</Link></li>
            <li><a href="https://dkoder.co.in" target="_blank" rel="noopener noreferrer">Official Portal <ExternalLink size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /></a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Campus Targets</h4>
          <ul>
            <li><Link to="/learn">TCS NQT Preparation</Link></li>
            <li><Link to="/learn">Infosys InfyTQ &amp; DSE</Link></li>
            <li><Link to="/learn">Zoho Round 2 &amp; 3</Link></li>
            <li><Link to="/learn">Wipro NLTH &amp; Turbo</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Dkoder. Redesigned with premium edtech UX. Reference platform: <a href="https://dkoder.co.in" target="_blank" rel="noopener noreferrer">dkoder.co.in</a>.
        </p>
        <p className="disclaimer">
          Questions and curriculum structures are calibrated for engineering placement readiness.
        </p>
      </div>
    </div>
  </footer>
)
