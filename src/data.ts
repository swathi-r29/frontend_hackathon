export type Category = 'Aptitude' | 'Coding' | 'MCQ' | 'Mock Exam'
export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Module {
  id: number
  title: string
  category: Category
  difficulty: Difficulty
  topic: string
  progress: number
  company?: string
}

export const MODULES: Module[] = [
  { id: 1, title: 'Percentages, Ratios and Profit & Loss', category: 'Aptitude', difficulty: 'Easy', topic: 'Quant', progress: 85, company: 'TCS' },
  { id: 2, title: 'Time, Speed, Distance & Work Equations', category: 'Aptitude', difficulty: 'Medium', topic: 'Quant', progress: 50, company: 'Infosys' },
  { id: 3, title: 'Two Sum and Fast Hash Lookups', category: 'Coding', difficulty: 'Easy', topic: 'Arrays & Strings', progress: 95, company: 'Zoho' },
  { id: 4, title: 'Sliding Window & Substring Patterns', category: 'Coding', difficulty: 'Medium', topic: 'Algorithms', progress: 35, company: 'Wipro' },
  { id: 5, title: 'Graph Traversal & BFS/DFS Mazes', category: 'Coding', difficulty: 'Hard', topic: 'Graphs', progress: 15, company: 'Amazon' },
  { id: 6, title: 'SQL Joins, Normalization & Transactions', category: 'MCQ', difficulty: 'Medium', topic: 'DBMS Core', progress: 65, company: 'Accenture' },
  { id: 7, title: 'OS Concurrency, Semaphores & Paging', category: 'MCQ', difficulty: 'Easy', topic: 'Operating Systems', progress: 75, company: 'Capgemini' },
  { id: 8, title: 'TCS NQT Full Pattern Mock Exam', category: 'Mock Exam', difficulty: 'Medium', topic: 'National Qualifier', progress: 40, company: 'TCS' },
  { id: 9, title: 'InfyTQ Full-Stack & Python Qualifier', category: 'Mock Exam', difficulty: 'Hard', topic: 'Certification Mock', progress: 20, company: 'Infosys' },
]

export const CATS: Category[] = ['Aptitude', 'Coding', 'MCQ', 'Mock Exam']
export const DIFFS: Difficulty[] = ['Easy', 'Medium', 'Hard']

export const TARGETS = [
  { name: 'TCS', role: 'Ninja & Digital', q: 'Reverse words in a sentence in-place without auxiliary space.', pct: 78, tag: 'NQT Prep' },
  { name: 'Infosys', role: 'Systems Engineer / DSE', q: 'Find the first non-repeating character in a streaming input.', pct: 64, tag: 'InfyTQ' },
  { name: 'Zoho', role: 'Software Developer', q: 'Print an N x N spiral matrix with boundary collision checks.', pct: 45, tag: 'Level 2 & 3' },
  { name: 'Wipro', role: 'Turbo / Elite', q: 'Check if two complex strings are anagrams in strictly O(N) runtime.', pct: 70, tag: 'NLTH' },
  { name: 'Accenture', role: 'ASE / FSE', q: 'Bitwise operation sequence to verify parity and power of two.', pct: 82, tag: 'Cognitive & Tech' },
]

export const BOARD = [
  { rank: 1, name: 'Sample Student A', college: 'Demo College 1', xp: 3240, streak: 18, badges: ['TCS Ready', 'DSA Ace'] },
  { rank: 2, name: 'Sample Student B', college: 'Demo College 2', xp: 2980, streak: 14, badges: ['Infosys Ready', 'Quant Pro'] },
  { rank: 3, name: 'Sample Student C', college: 'Demo College 3', xp: 2750, streak: 12, badges: ['Zoho Ready'] },
  { rank: 4, name: 'Sample Student D', college: 'Demo College 4', xp: 2420, streak: 9, badges: ['Accenture Ready'] },
  { rank: 5, name: 'Sample Student E', college: 'Demo College 5', xp: 2190, streak: 7, badges: ['Top Solver'] },
]

export const LEARNING_TRACKS = [
  {
    id: 'dsa',
    title: 'Coding & Data Structures',
    headline: 'Real interview coding with built-in sandbox',
    desc: 'Master array manipulations, trees, dynamic programming, and recursion patterns with company tags from top campus drives.',
    badge: 'Core Track',
    count: '350+ Problems',
    link: '/learn',
    filter: 'Coding' as Category,
  },
  {
    id: 'aptitude',
    title: 'Aptitude & Logical Reasoning',
    headline: 'High-speed speed-math and logical deduction',
    desc: 'Master speed arithmetic, quantitative tricks, syllogisms, and data interpretation required to crack round-1 eliminators.',
    badge: 'Round 1 Eliminator',
    count: '500+ Questions',
    link: '/learn',
    filter: 'Aptitude' as Category,
  },
  {
    id: 'mcq',
    title: 'Computer Science Core MCQs',
    headline: 'DBMS, OS, Computer Networks & OOPs',
    desc: 'Solidify your core engineering topics tested in online assessments for product and service engineering roles.',
    badge: 'Technical Round',
    count: '420+ Concepts',
    link: '/learn',
    filter: 'MCQ' as Category,
  },
  {
    id: 'company',
    title: 'Company-Specific Drive Packs',
    headline: 'Curated by recruiters and alumni',
    desc: 'Targeted preparation packs for TCS, Infosys, Zoho, Wipro, and Accenture reflecting the latest exam syllabi.',
    badge: 'Campus Target',
    count: '12+ Companies',
    link: '/learn',
    filter: 'Mock Exam' as Category,
  },
  {
    id: 'mocks',
    title: 'Timed Mock Exams & Assessments',
    headline: 'Simulate real placement test environments',
    desc: 'Full-length timed assessments with negative marking, section timers, and AI-driven performance breakdown reports.',
    badge: 'Exam Simulation',
    count: '24 Full Tests',
    link: '/learn',
    filter: 'Mock Exam' as Category,
  },
]

export const PREPARATION_JOURNEY = [
  {
    step: '01',
    title: 'Learn Concepts',
    summary: 'Topic-wise bite-sized mastery',
    desc: 'Grasp essential data structures, quantitative fundamentals, and core CS concepts with clear examples and visual explanations.',
    tag: 'Foundation',
  },
  {
    step: '02',
    title: 'Practise Coding & DSA',
    summary: 'Write, debug, and submit in real-time',
    desc: 'Solve company-tagged problems directly in the live browser code editor with automated test-case evaluation.',
    tag: 'Hands-on',
  },
  {
    step: '03',
    title: 'Improve Aptitude',
    summary: 'Speed, accuracy, and shortcut techniques',
    desc: 'Drill through timed quant, logical reasoning, and verbal aptitude tests designed to beat cut-offs.',
    tag: 'Speed Drills',
  },
  {
    step: '04',
    title: 'Attempt Mock Tests',
    summary: 'Simulate high-stakes placement environments',
    desc: 'Experience real exam interfaces with sectional timers, adaptive question distribution, and instant scoring.',
    tag: 'Simulation',
  },
  {
    step: '05',
    title: 'Technical Interview Prep',
    summary: 'Explain your reasoning and code structure',
    desc: 'Review frequently asked interview questions, edge-case defenses, and system design basics.',
    tag: 'Face-to-Face',
  },
  {
    step: '06',
    title: 'Placement Day Ready',
    summary: 'Walk into drives with measurable confidence',
    desc: 'Track readiness indices across companies, analyze strengths and weaknesses, and secure your offer.',
    tag: 'Career Offer',
  },
]

export const PLANS = [
  {
    name: 'Bronze',
    price: '₹699',
    period: '/year',
    target: '0–3 LPA Target',
    tagline: 'Ideal for foundational campus drives and service companies.',
    features: [
      'Service-based company interview questions',
      'Daily coding challenges & streaks',
      'Aptitude & MCQ practice drills',
      'Basic topic performance reports',
    ],
    popular: false,
    cta: 'Get Bronze',
  },
  {
    name: 'Silver',
    price: '₹999',
    period: '/year',
    target: '0–5 LPA Target',
    tagline: 'Complete package for mass recruiters and mid-tier product roles.',
    features: [
      'Everything in Bronze',
      'TCS NQT & InfyTQ style mock papers',
      'Company-specific pattern filtering',
      'Detailed test analytics & solutions',
    ],
    popular: true,
    cta: 'Get Silver',
  },
  {
    name: 'Gold',
    price: '₹1,599',
    period: '/year',
    target: '0–7 LPA Target',
    tagline: 'Advanced DSA and technical interview question bank.',
    features: [
      'Everything in Silver',
      'Advanced DSA & algorithmic tracks',
      'Technical interview deep dives',
      'Priority leaderboard ranking',
    ],
    popular: false,
    cta: 'Get Gold',
  },
  {
    name: 'Platinum',
    price: '₹1,999',
    period: '/year',
    target: '0–15+ LPA Target',
    tagline: 'Premium tier for high-paying product companies & specialized roles.',
    features: [
      'Everything in Gold',
      'Product company interview prep',
      'Unlimited timed mock assessments',
      'AI-driven skill gap report card',
    ],
    popular: false,
    cta: 'Get Platinum',
  },
]
