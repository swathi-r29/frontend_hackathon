import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { 
  Code2, 
  Brain, 
  FileCheck2, 
  Building2, 
  GraduationCap, 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Award,
  Terminal,
  Trophy,
  ArrowRight,
  Play,
  TrendingUp,
  Zap,
  Target
} from 'lucide-react'
import { Bar, Btn, HeroVideoPlayer, Reveal, Ring, Words } from '../ui'
import { BOARD, LEARNING_TRACKS, PLANS, PREPARATION_JOURNEY, TARGETS } from '../data'

export default function Home() {
  const rm = useReducedMotion()

  const trackIcons = [
    <Code2 size={26} />,
    <Brain size={26} />,
    <Terminal size={26} />,
    <Building2 size={26} />,
    <FileCheck2 size={26} />
  ]

  return (
    <>
      {/* =========================================================================
          SECTION A: HERO MATCHING EXACT USER REFERENCE IMAGE + RIGHT SIDE VIDEO
      ========================================================================= */}
      <section className="hero-banner-sec">
        <div className="wrap">
          <div className="hero-reference-grid">
            {/* LEFT COLUMN: HERO TYPOGRAPHY & CALL-TO-ACTIONS */}
            <div className="hero-left-content">
              {/* Eyebrow Breadcrumb Tag */}
              <div className="hero-system-eyebrow">
                <span className="eyebrow-brand">DKODER</span>
                <span className="slash">/</span>
                <span className="eyebrow-tag">CAREER SKILL SYSTEM</span>
                <span className="eyebrow-batch">2026 Batch Ready</span>
              </div>

              {/* Massive Impact Headline */}
              <h1 className="hero-giant-heading">
                YOUR <span className="text-purple">NEXT</span><br />
                LEVEL <span className="text-purple">STARTS</span><br />
                WITH <span className="underline-you">YOU.</span>
              </h1>

              {/* Subheading copy */}
              <p className="hero-subtext">
                Build real skills. Solve better problems.<br />
                Turn practice into progress.
              </p>

              {/* Dual Action CTA Buttons */}
              <div className="hero-cta-group">
                <Btn to="/learn" variant="btn-dark-primary btn-hero-lg">
                  Enter Skill Mode
                </Btn>
                <Btn to="/hackathon" variant="btn-pill-subtle btn-hero-lg" icon={false}>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.01em' }}>Explore the platform</span>
                  <span className="play-icon-circle"><Play size={13} fill="#14111D" color="#14111D" /></span>
                </Btn>
              </div>

              {/* Category Breadcrumb List */}
              <div className="hero-category-list">
                <a href="/learn?section=topic-wise" className="cat-chip">CODING</a>
                <span className="pipe">|</span>
                <a href="/learn?section=topic-wise" className="cat-chip">APTITUDE</a>
                <span className="pipe">|</span>
                <a href="/learn?section=courses" className="cat-chip">COMPANY PREP</a>
                <span className="pipe">|</span>
                <a href="/learn?section=technology-wise" className="cat-chip">MOCK TESTS</a>
              </div>

              {/* Three Value Pillars at the base */}
              <div className="hero-value-pillars">
                <div className="pillar-item">
                  <div className="pillar-icon"><Zap size={22} /></div>
                  <div className="pillar-text">
                    <b>Practice</b>
                    <span>Purposefully</span>
                  </div>
                </div>
                <div className="pillar-divider" />
                <div className="pillar-item">
                  <div className="pillar-icon"><TrendingUp size={22} /></div>
                  <div className="pillar-text">
                    <b>Track</b>
                    <span>Your Progress</span>
                  </div>
                </div>
                <div className="pillar-divider" />
                <div className="pillar-item">
                  <div className="pillar-icon"><Target size={22} /></div>
                  <div className="pillar-text">
                    <b>Be Ready</b>
                    <span>for Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTEGRATED VIDEO INSIDE THE RIGHT-SIDE INTERACTIVE STAGE */}
            <div className="hero-right-stage">
              <Reveal delay={0.1}>
                {/* Main Video Component Player */}
                <HeroVideoPlayer />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B: YOUR PLACEMENT PREPARATION JOURNEY (EDITORIAL TIMELINE)
      ========================================================================= */}
      <section className="sec sec-purple">
        <div className="wrap">
          <span className="eyebrow">Your Placement Preparation Journey</span>
          <Words text="From First Concept to Offer Letter." as="h2" />
          <p className="lead">
            A structured, measurable roadmap engineered to take students from curious problem-solvers to placement-ready candidates.
          </p>

          <div className="journey-timeline">
            {PREPARATION_JOURNEY.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.08} className="journey-step-card">
                <div className="journey-number">{item.step}</div>
                <span className="target-badge" style={{ marginBottom: 12, display: 'inline-block' }}>
                  {item.tag}
                </span>
                <h3 style={{ color: '#FFFFFF', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ color: '#F8E71C', fontSize: '0.92rem', fontWeight: 600, marginBottom: 8 }}>
                  {item.summary}
                </p>
                <p style={{ color: '#D3C5EE', fontSize: '0.9rem' }}>
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: EXPLORE LEARNING TRACKS
      ========================================================================= */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <span className="eyebrow">Explore Learning Tracks</span>
              <Words text="Targeted Practice for Every Round." as="h2" />
              <p className="lead">
                Every track features company-tagged questions, graded test cases, and real-time feedback designed for technical assessments.
              </p>
            </div>
            <Btn to="/learn" variant="btn-outline">
              View All Question Sets
            </Btn>
          </div>

          <div className="grid-cards-3">
            {LEARNING_TRACKS.map((track, i) => (
              <Reveal key={track.id} delay={i * 0.06} className="card-feature">
                <div className="card-icon-wrap">
                  {trackIcons[i % trackIcons.length]}
                </div>
                <span className="target-badge" style={{ marginBottom: 10, display: 'inline-block' }}>
                  {track.badge}
                </span>
                <h3>{track.title}</h3>
                <p style={{ fontWeight: 600, color: 'var(--p-accent)', fontSize: '0.9rem', margin: '4px 0 10px' }}>
                  {track.headline}
                </p>
                <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', marginBottom: 20 }}>
                  {track.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink-main)' }}>
                    {track.count}
                  </span>
                  <Btn to="/learn" variant="btn-sm">
                    Practise
                  </Btn>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D: HACKATHONS (COMMUNITY & LIVE CHALLENGES)
      ========================================================================= */}
      <section className="sec sec-warm">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Community &amp; Hackathons</span>
              <Words text="Build. Solve. Ship with Fellow Coders." as="h2" />
              <p className="lead">
                Put your algorithms to the test under timed constraints. Team up with peers, solve problem statements presented by campus recruiters, and earn verified leaderboard badges.
              </p>
              <div className="row-actions">
                <Btn to="/hackathon">
                  Explore Hackathon Arena
                </Btn>
                <Btn to="/mou" variant="btn-outline">
                  Host Campus Hackathon
                </Btn>
              </div>
            </div>

            <Reveal className="card-feature" style={{ borderTop: '6px solid var(--p-deep)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Trophy size={28} color="#7943DE" />
                <h3 style={{ margin: 0 }}>Upcoming Campus Hackathon</h3>
              </div>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.94rem' }}>
                Upcoming dates and problem statements are published on our events calendar. Check official schedules and guidelines below.
              </p>
              <div style={{ marginTop: 20, padding: '16px', background: 'var(--surface-2)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>Next Sprint:</span>
                  <span style={{ fontWeight: 700, color: 'var(--p-accent)' }}>Dates to be announced</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--ink-muted)', margin: 0 }}>
                  Open to all engineering college students preparing for technical placements.
                </p>
              </div>
              <div style={{ marginTop: 20 }}>
                <Btn to="/hackathon" variant="btn-sm">
                  View Rules &amp; Register
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: FOR COLLEGES (INSTITUTIONAL LMS OFFERING)
      ========================================================================= */}
      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 48px' }}>
            <span className="eyebrow">For Colleges &amp; Universities</span>
            <Words text="Placement Readiness You Can Measure." as="h2" />
            <p className="lead" style={{ margin: '14px auto 0' }}>
              One centralized placement LMS connecting students, teaching faculty, and placement cell heads. Monitor batch progress, schedule custom entrance tests, and drive higher campus conversion rates.
            </p>
          </div>

          <div className="grid-cards-3">
            <Reveal delay={0.05} className="card-feature">
              <div className="card-icon-wrap">
                <GraduationCap size={26} />
              </div>
              <h3>For Students</h3>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', marginTop: 10 }}>
                Company-tagged questions, salary filter packages, live coding evaluations, and individual readiness report cards.
              </p>
              <div style={{ marginTop: 18 }}>
                <Btn to="/learn" variant="btn-sm">
                  Student Portal
                </Btn>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="card-feature">
              <div className="card-icon-wrap">
                <Sparkles size={26} />
              </div>
              <h3>For Faculty</h3>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', marginTop: 10 }}>
                Assign topic-wise coding sets, track weekly batch completion percentages, and identify weak concept areas before drive dates.
              </p>
              <div style={{ marginTop: 18 }}>
                <Btn to="/colleges" variant="btn-sm">
                  Faculty View
                </Btn>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="card-feature">
              <div className="card-icon-wrap">
                <Building2 size={26} />
              </div>
              <h3>For Placement Officers</h3>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.92rem', marginTop: 10 }}>
                Drive-readiness dashboards, cohort benchmark metrics across branches, and tailored practice packs aligned with incoming recruiters.
              </p>
              <div style={{ marginTop: 18 }}>
                <Btn to="/mou" variant="btn-sm">
                  Partner with Us
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: STUDENT LEADERBOARD & PROGRESS TRACKING
      ========================================================================= */}
      <section className="sec sec-lavender">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Leaderboard &amp; Daily Streaks</span>
              <Words text="Make Improvement Visible Every Single Day." as="h2" />
              <p className="lead">
                Consistent coding yields placement offers. Earn XP for every clean test suite pass, maintain daily solve streaks, and climb the institutional rankings.
              </p>

              <p className="demo-note">Sample leaderboard. Names, colleges and XP are illustrative demo data, not real Dkoder users.</p>
            </div>

            <Reveal className="table-wrap">
              <table className="dk-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Student Solver</th>
                    <th>College</th>
                    <th style={{ textAlign: 'right' }}>Total XP</th>
                  </tr>
                </thead>
                <tbody>
                  {BOARD.map(user => (
                    <tr key={user.rank}>
                      <td style={{ fontWeight: 800, color: user.rank === 1 ? '#D97706' : '#38106A' }}>
                        #{user.rank}
                      </td>
                      <td>
                        <div style={{ fontWeight: 700 }}>{user.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                          🔥 {user.streak} days streak
                        </div>
                      </td>
                      <td style={{ color: 'var(--ink-muted)' }}>{user.college}</td>
                      <td style={{ textAlign: 'right', fontWeight: 800, color: '#38106A' }}>
                        {user.xp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F: ANNUAL PLANS (BRONZE, SILVER, GOLD, PLATINUM)
      ========================================================================= */}
      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px' }}>
            <span className="eyebrow">Targeted Preparation Plans</span>
            <Words text="Invest in Your Placement Readiness." as="h2" />
            <p className="lead" style={{ margin: '14px auto 0' }}>
              Choose the package matched to your targeted salary tier (0–15+ LPA) with structured mock test series and company question packs.
            </p>
          </div>

          <div className="pricing-grid">
            {PLANS.map(plan => (
              <Reveal key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="pricing-tag">Most Popular</span>}
                <span className="target-badge" style={{ alignSelf: 'flex-start' }}>
                  {plan.target}
                </span>
                <h3 style={{ marginTop: 12 }}>{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price}
                  <span className="pricing-period">{plan.period}</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--ink-muted)', minHeight: 42 }}>
                  {plan.tagline}
                </p>

                <ul className="pricing-features">
                  {plan.features.map(feat => (
                    <li key={feat}>
                      <CheckCircle2 size={16} color="#7943DE" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Btn to="/learn" variant={plan.popular ? '' : 'btn-outline'}>
                  {plan.cta}
                </Btn>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION G: FINAL CALL TO ACTION (BRING DKODER TO YOUR CAMPUS)
      ========================================================================= */}
      <section className="sec sec-yellow">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 840 }}>
          <span className="eyebrow">Institutional Partnership</span>
          <Words text="Bring DKODER to Your Campus Today." as="h2" />
          <p className="lead" style={{ margin: '18px auto 32px' }}>
            Empower your students with verified interview practice, track live performance metrics across engineering departments, and elevate institutional placement records.
          </p>

          <div className="row-actions" style={{ justifyContent: 'center' }}>
            <Btn to="/mou" variant="">
              Apply for College MOU
            </Btn>
            <Btn to="/colleges" variant="btn-outline">
              Explore College Solutions
            </Btn>
          </div>
        </div>
      </section>
    </>
  )
}
