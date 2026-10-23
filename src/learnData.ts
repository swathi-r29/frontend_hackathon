export interface Course {
  id: string
  title: string
  category: 'Coding' | 'Aptitude' | 'Full-Stack' | 'Core CS'
  duration: string
  modulesCount: number
  projectsCount: number
  level: string
  badge: string
  instructor: string
  desc: string
  syllabus: string[]
  enrolled: boolean
  progress: number
}

export interface EventItem {
  id: string
  title: string
  category: 'Workshop' | 'Live Masterclass' | 'Mock Drive'
  date: string
  time: string
  speaker: string
  speakerRole: string
  registeredCount: number
  tag: string
  desc: string
  agenda: string[]
  isLive?: boolean
}

export interface ResourceItem {
  id: string
  title: string
  type: 'PDF Guide' | 'Cheat Sheet' | 'Solved Archive' | 'Checklist'
  pages: string
  reads: number
  badge: string
  desc: string
  highlights: string[]
  contentPreview: string
}

export interface ProjectItem {
  id: string
  title: string
  domain: 'AI & Healthcare' | 'Cloud & DevOps' | 'Web3 & Security' | 'IoT & Smart Systems'
  mentor: string
  mentorAffiliation: string
  difficulty: 'Intermediate' | 'Advanced'
  desc: string
  stack: string[]
  deliverables: string[]
  publicationTarget: string
}

export interface CertificationItem {
  id: string
  title: string
  category: string
  questionsCount: number
  durationMins: number
  passingPct: number
  difficulty: 'Foundational' | 'Intermediate' | 'Expert'
  badge: string
  desc: string
  skillsTested: string[]
  questions: {
    q: string
    options: string[]
    correct: number
    explanation: string
  }[]
}

export const COURSES: Course[] = [
  {
    id: 'dsa-campus-ace',
    title: 'Placement DSA & Algorithmic Problem Solving in C++/Java',
    category: 'Coding',
    duration: '80 Hours',
    modulesCount: 16,
    projectsCount: 4,
    level: 'Beginner to Advanced',
    badge: 'Industry Standard',
    instructor: 'Aman Verma (Ex-Amazon SDE)',
    desc: 'Master the top 20 DSA patterns tested by Google, Amazon, TCS Digital, and Zoho with live visual simulations and in-browser coding drills.',
    syllabus: [
      'Arrays, HashMaps & Sliding Window Mastery',
      'Two Pointers, Fast & Slow Pointers, Interval Merging',
      'Binary Trees, BSTs & Lowest Common Ancestor',
      'Graphs: BFS, DFS, Dijkstra & Topological Sort',
      'Dynamic Programming: 1D, 2D, Knapsack & Subsequence',
      'Company Specific Mock Coding Drills',
    ],
    enrolled: true,
    progress: 68,
  },
  {
    id: 'quant-aptitude-fasttrack',
    title: 'Speed-Math & Quantitative Aptitude for Placement Drives',
    category: 'Aptitude',
    duration: '45 Hours',
    modulesCount: 12,
    projectsCount: 2,
    level: 'All Levels',
    badge: 'Placement Qualifier',
    instructor: 'Priya Sharma (Aptitude Mentor, 10+ Yrs)',
    desc: 'Crush the round-1 eliminator in TCS NQT, Infosys, Cognizant, and Wipro using mental arithmetic, Vedic math tricks, and shortcut formulas.',
    syllabus: [
      'Percentages, Profit & Loss, Simple & Compound Interest',
      'Ratios, Proportions, Mixtures and Allegations',
      'Time, Speed & Distance, Train & Boat Problems',
      'Time & Work, Pipes & Cisterns Equations',
      'Permutations, Combinations & Probability Hacks',
      'Data Interpretation: Bar Charts, Pie Charts, Radar Graphs',
    ],
    enrolled: false,
    progress: 0,
  },
  {
    id: 'fullstack-mern-placement',
    title: 'Full-Stack MERN Architecture for Engineering Portfolios',
    category: 'Full-Stack',
    duration: '65 Hours',
    modulesCount: 14,
    projectsCount: 3,
    level: 'Intermediate',
    badge: 'High Impact Portfolio',
    instructor: 'Rohan Deshmukh (Staff Architect)',
    desc: 'Build and deploy 3 production-grade portfolio applications using React 18, Node.js, Express, and MongoDB that will stun campus interviewers.',
    syllabus: [
      'Modern JavaScript ES6+, Asynchronous Node Event Loop',
      'React 18 Component Architecture & Custom Hooks',
      'REST API Design, JWT Authentication & Security',
      'MongoDB Aggregations, Indexing & Data Modeling',
      'Dockerization, CI/CD GitHub Actions & AWS Deployment',
    ],
    enrolled: false,
    progress: 0,
  },
  {
    id: 'cs-core-trifecta',
    title: 'Core CS Triad: OS, DBMS & Computer Networks',
    category: 'Core CS',
    duration: '40 Hours',
    modulesCount: 10,
    projectsCount: 2,
    level: 'College Standard',
    badge: 'Interview Critical',
    instructor: 'Dr. S. Kulkarni (Associate Professor, IIT Alumni)',
    desc: 'Crisp, high-yield preparation for core technical rounds. Demystify processes, threading, normalization, transactions, TCP/IP, and DNS.',
    syllabus: [
      'OS: Process Lifecycle, Multithreading, Semaphores & Paging',
      'DBMS: ACID Properties, B-Trees, 1NF to BCNF, Complex SQL Joins',
      'Networks: OSI 7 Layers, TCP 3-Way Handshake, Subnetting, HTTPS',
      'System Design Warm-up: Caching, Load Balancing, CDN Basics',
    ],
    enrolled: false,
    progress: 0,
  },
]

export const EVENTS: EventItem[] = [
  {
    id: 'tcs-nqt-live-masterclass',
    title: 'TCS NQT 2026 Strategy, Live Coding & Eliminator Drill',
    category: 'Live Masterclass',
    date: 'Saturday, 25 Oct 2026',
    time: '6:00 PM - 8:30 PM IST',
    speaker: 'Aarav Malhotra',
    speakerRole: 'Placement Coach & Former Campus Recruiter',
    registeredCount: 1420,
    tag: 'Trending',
    desc: 'Live breakdown of the latest TCS NQT paper pattern. Learn real tricks to clear the cognitive and advanced programming sections in recorded time.',
    agenda: [
      '6:00 PM - Overview of Ninja vs Digital vs Prime Cutoffs',
      '6:30 PM - Live Solve: 3 High-Frequency Coding Problems',
      '7:30 PM - Speed Shortcuts for Verbal & Numerical Ability',
      '8:00 PM - Open Q&A and Free Mock Test Access',
    ],
    isLive: true,
  },
  {
    id: 'dp-bootcamp-3days',
    title: 'Dynamic Programming Decoded: 3-Day Intensive Workshop',
    category: 'Workshop',
    date: '28 - 30 Oct 2026',
    time: '7:00 PM - 9:00 PM IST',
    speaker: 'Neha Bansal',
    speakerRole: 'Competitive Programmer & ICPC Regionalist',
    registeredCount: 890,
    tag: 'Intermediate',
    desc: 'From recursion trees to memoization and bottom-up tabulation. Crack classic DP problems: Knapsack, LCS, LIS, and Grid Paths.',
    agenda: [
      'Day 1: Recursion Tree Visualization and 1D DP',
      'Day 2: 2D Grid DP & Matrix Chain Multiplication',
      'Day 3: State Machine DP & Bitmask Essentials',
    ],
  },
  {
    id: 'zoho-round2-mastery',
    title: 'Zoho Level 2 & 3 Advanced Matrix & String Problems Drill',
    category: 'Mock Drive',
    date: '2 Nov 2026',
    time: '5:00 PM - 7:30 PM IST',
    speaker: 'Ganesh K.',
    speakerRole: 'Zoho Lead Engineer & Campus Assessor',
    registeredCount: 650,
    tag: 'Company Specific',
    desc: 'Zoho does not allow built-in libraries. Learn how to write algorithms from scratch without library shortcuts (no regex, no sort()).',
    agenda: [
      'Writing custom memory & string manipulators',
      'Spiral matrix, snake patterns, and cross-word puzzles',
      'Live review of 5 candidate submissions with feedback',
    ],
  },
]

export const RESOURCES: ResourceItem[] = [
  {
    id: 'dsa-100-patterns',
    title: 'Top 100 DSA Patterns for Campus Placements (PDF & Code)',
    type: 'PDF Guide',
    pages: '48 Pages',
    reads: 8900,
    badge: 'Most Downloaded',
    desc: 'A comprehensive handbook mapping every LeetCode / GFG problem to 14 reusable patterns. Contains C++, Java, and Python boilerplate.',
    highlights: [
      '14 core algorithmic patterns explained with hand-drawn diagrams',
      'Time & Space complexity cheat sheet',
      'Company appearance tags (TCS, Infosys, Zoho, Cognizant, Wipro)',
    ],
    contentPreview: `# Top 100 DSA Patterns for Campus Placements
Author: DKODER Academic Team

## Pattern 1: Sliding Window
- Best suited for: Finding contiguous subarrays that satisfy a condition.
- Common triggers: "maximum sum subarray of size k", "longest substring without repeating characters".
- Template (Python):
\`\`\`python
def sliding_window(nums, k):
    left = 0
    curr_sum = 0
    max_sum = 0
    for right in range(len(nums)):
        curr_sum += nums[right]
        if right >= k - 1:
            max_sum = max(max_sum, curr_sum)
            curr_sum -= nums[left]
            left += 1
    return max_sum
\`\`\`
*(Download full PDF for all 100 patterns)*`,
  },
  {
    id: 'aptitude-speedmath-deck',
    title: 'Vedic Math & Aptitude Formulas Pocket Reference',
    type: 'Cheat Sheet',
    pages: '18 Pages',
    reads: 6400,
    badge: 'Quick Revision',
    desc: 'All formula sheets you need right before an aptitude exam: square roots in 3 seconds, percentage-fraction conversion chart, and work rates.',
    highlights: [
      'Fraction to percentage conversions (1/1 through 1/20)',
      'Time, speed & distance shortcuts for relative motion',
      'Calendar and clock angle direct formulas',
    ],
    contentPreview: `# Aptitude Speed Formula Deck

## Fast Percentage Multipliers
- 1/6 = 16.66%
- 1/7 = 14.28%
- 1/8 = 12.5%
- 1/9 = 11.11%
- 1/11 = 9.09%

## Clock Angle Formula:
Angle = |30H - (11/2)M|`,
  },
  {
    id: 'sql-50-queries-handbook',
    title: '50 Most Frequently Asked SQL Queries in Technical Interviews',
    type: 'Solved Archive',
    pages: '32 Pages',
    reads: 5120,
    badge: 'Campus Favorite',
    desc: 'From Nth highest salary to finding duplicates and self joins. Covers MySQL and PostgreSQL syntax with explanations.',
    highlights: [
      'Top 5 ranking functions (RANK, DENSE_RANK, ROW_NUMBER)',
      'Subqueries vs Joins performance trade-offs',
      'Handling NULL values and grouped aggregations',
    ],
    contentPreview: `# SQL Technical Round Queries

-- 1. Find the 2nd Highest Salary:
SELECT MAX(salary) 
FROM Employees 
WHERE salary < (SELECT MAX(salary) FROM Employees);

-- 2. Using DENSE_RANK() for Nth Highest:
WITH RankedSalaries AS (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk
    FROM Employees
)
SELECT salary FROM RankedSalaries WHERE rnk = 2;`,
  },
  {
    id: 'resume-ats-fresher-checklist',
    title: 'Fresher Engineering Placement Resume & ATS Checklist',
    type: 'Checklist',
    pages: '8 Pages',
    reads: 4300,
    badge: 'Essential',
    desc: 'Audit your resume before submitting to campus placement cells. Learn how to format action verbs, quantify metrics, and pass ATS filters.',
    highlights: [
      'XYZ formula for bullet points (Accomplished [X], measured by [Y], by doing [Z])',
      'List of ATS-prohibited elements (tables, multiple columns, graphics)',
      'Sample LaTeX and Overleaf one-page template link',
    ],
    contentPreview: `# Engineering Fresher Resume Checklist

- [x] Standard single-column layout
- [x] Clear GitHub repository links with functional READMEs
- [x] Quantified metrics (e.g., "Reduced latency by 35% using Redis")
- [x] Relevant coursework and core technical skills prioritized`,
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    id: 'vision-transformer-retina',
    title: 'Early Diabetic Retinopathy Detection using Hybrid Vision Transformers',
    domain: 'AI & Healthcare',
    mentor: 'Dr. Ramanathan Iyer, PhD (IIT Madras)',
    mentorAffiliation: 'IEEE Senior Member, Healthcare Informatics Lab',
    difficulty: 'Advanced',
    desc: 'A deep learning clinical screening pipeline analyzing fundus photography images with attention heatmaps for explainable medical AI.',
    stack: ['PyTorch', 'Vision Transformer (ViT)', 'FastAPI', 'React', 'Docker'],
    deliverables: [
      'Trained ViT model with >94.2% Area Under ROC curve',
      'Explainable AI Grad-CAM heatmap visualization dashboard',
      'IEEE Conference paper manuscript draft ready for review',
    ],
    publicationTarget: 'IEEE International Conference on Bioinformatics (BIBM / EMBC)',
  },
  {
    id: 'decentralized-degree-verify',
    title: 'Tamper-Proof Academic Credential Verification on Polygon',
    domain: 'Web3 & Security',
    mentor: 'Prof. Archana Patil',
    mentorAffiliation: 'Blockchain Research Cell, SPPU',
    difficulty: 'Intermediate',
    desc: 'Zero-knowledge soulbound credential issuance platform enabling engineering universities to mint and verify verified student degrees cryptographically.',
    stack: ['Solidity', 'Polygon zkEVM', 'Ethers.js', 'Next.js', 'IPFS'],
    deliverables: [
      'Smart contract suite with role-based institutional issuance',
      'Public verification portal requiring zero gas fees for employers',
      'Comprehensive Software Requirements Specification (SRS) & Architecture Doc',
    ],
    publicationTarget: 'Springer Lecture Notes in Networks and Systems (LNNS)',
  },
  {
    id: 'smart-microgrid-iot',
    title: 'Edge-AI Autonomous Energy Load Balancing for Solar Microgrids',
    domain: 'IoT & Smart Systems',
    mentor: 'Dr. Vivek Sharma',
    mentorAffiliation: 'Center for Renewable Energy & Embedded Systems',
    difficulty: 'Advanced',
    desc: 'Hardware-in-the-loop IoT prototype using ESP32 edge nodes and LSTM neural networks to predict solar irradiance and schedule battery discharge.',
    stack: ['ESP32 (C++)', 'MQTT Protocol', 'TensorFlow Lite for Microcontrollers', 'InfluxDB'],
    deliverables: [
      'Functional sensor circuit schematic in KiCad',
      'Edge inference model running in <45ms on embedded microcontroller',
      'Comparative benchmarking paper against classical PID controllers',
    ],
    publicationTarget: 'IEEE Transactions on Industrial Informatics / IEEE INDICON',
  },
]

export const TOPIC_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'dsa-cert-level1',
    title: 'Data Structures & Algorithms Proficiency Certification',
    category: 'Computer Science',
    questionsCount: 5,
    durationMins: 10,
    passingPct: 70,
    difficulty: 'Intermediate',
    badge: 'Gold Verified',
    desc: 'Validate your problem solving instincts across arrays, pointers, search algorithms, recursion, and time complexity.',
    skillsTested: ['Time & Space Complexity', 'Array Mutations', 'Hash Lookups', 'Recursion Stacks'],
    questions: [
      {
        q: 'What is the average and worst-case time complexity of searching in a balanced Binary Search Tree (AVL / Red-Black)?',
        options: ['O(1) and O(n)', 'O(log n) and O(log n)', 'O(log n) and O(n)', 'O(n) and O(n log n)'],
        correct: 1,
        explanation: 'Balanced BSTs guarantee O(log n) height in both average and worst cases due to self-balancing rotations.',
      },
      {
        q: 'Which data structure is fundamentally utilized to implement Breadth-First Search (BFS) in a graph?',
        options: ['Stack (LIFO)', 'Queue (FIFO)', 'Priority Queue', 'Disjoint Set Union'],
        correct: 1,
        explanation: 'BFS explores vertices level by level, requiring FIFO order facilitated by a Queue.',
      },
      {
        q: 'Given an array of size N containing integers from 1 to N with exactly one duplicate and one missing, what is the optimal space complexity to find both?',
        options: ['O(N) space using hash table', 'O(1) space using sum & square sum math or XOR', 'O(N log N) space', 'O(N^2) space'],
        correct: 1,
        explanation: 'Using algebraic equations (sum difference and square sum difference) or bitwise XOR, it can be solved in O(N) time and O(1) auxiliary space.',
      },
      {
        q: 'What will happen when you perform an in-order traversal on a Binary Search Tree (BST)?',
        options: ['Elements are visited in descending order', 'Elements are visited in strictly ascending sorted order', 'Elements are grouped by depth level', 'Elements are randomly traversed'],
        correct: 1,
        explanation: 'In-order traversal visits left subtree, root, then right subtree, producing keys in strictly non-decreasing sorted order.',
      },
      {
        q: 'What is the worst-case time complexity of Quicksort algorithm when the pivot is always chosen as the first element on an already sorted array?',
        options: ['O(N log N)', 'O(N)', 'O(N^2)', 'O(log N)'],
        correct: 2,
        explanation: 'When the array is already sorted and the pivot is the first element, partitions become completely skewed (1 and N-1 elements), resulting in O(N^2) runtime.',
      },
    ],
  },
  {
    id: 'aptitude-cert-master',
    title: 'Quantitative Aptitude & Placement Reasoning Certification',
    category: 'Placement Readiness',
    questionsCount: 5,
    durationMins: 10,
    passingPct: 70,
    difficulty: 'Foundational',
    badge: 'Silver Verified',
    desc: 'Certified proof of your mathematical agility and analytical problem-solving speed for campus recruitment drives.',
    skillsTested: ['Percentages', 'Time & Work', 'Speed & Distance', 'Permutations'],
    questions: [
      {
        q: 'A can complete a piece of work in 12 days and B in 24 days. Working together, in how many days will they finish the same work?',
        options: ['6 days', '8 days', '10 days', '18 days'],
        correct: 1,
        explanation: '1/12 + 1/24 = 3/24 = 1/8 work per day. Hence, total days = 8.',
      },
      {
        q: 'If the price of a commodity increases by 25%, by what percentage must a household reduce its consumption so that the total expenditure remains constant?',
        options: ['25%', '20%', '16.66%', '30%'],
        correct: 1,
        explanation: 'Percentage reduction = [r / (100 + r)] * 100 = [25 / 125] * 100 = 20%.',
      },
      {
        q: 'A train 180 meters long running at 72 km/h crosses an electric pole. How many seconds does it take?',
        options: ['7 seconds', '9 seconds', '12 seconds', '15 seconds'],
        correct: 1,
        explanation: 'Speed = 72 * (5/18) = 20 m/s. Time = Distance / Speed = 180 / 20 = 9 seconds.',
      },
      {
        q: 'In how many different ways can the letters of the word "ENGINEER" be arranged?',
        options: ['40,320', '3,360', '10,080', '6,720'],
        correct: 1,
        explanation: 'Total letters = 8. Repetitions: E appears 3 times, N appears 2 times. Ways = 8! / (3! * 2!) = 40320 / (6 * 2) = 3360.',
      },
      {
        q: 'Find the next number in the sequence: 2, 6, 12, 20, 30, ?',
        options: ['40', '42', '44', '48'],
        correct: 1,
        explanation: 'Pattern: 1*2, 2*3, 3*4, 4*5, 5*6, 6*7 = 42.',
      },
    ],
  },
]

export const TECH_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'python-tech-cert',
    title: 'Python for Enterprise & Placement Interviews',
    category: 'Programming Languages',
    questionsCount: 5,
    durationMins: 10,
    passingPct: 70,
    difficulty: 'Intermediate',
    badge: 'Python Pro',
    desc: 'Verify core Python proficiencies: mutability, list comprehensions, generators, decorators, and memory references.',
    skillsTested: ['Generators & Iterators', 'Memory Mutability', 'Decorators', 'List Comprehensions'],
    questions: [
      {
        q: 'What is the output of: `x = [1, 2, 3]; y = x; y.append(4); print(len(x))` in Python?',
        options: ['3', '4', 'TypeError', 'AttributeError'],
        correct: 1,
        explanation: 'In Python, lists are mutable objects. y is assigned the reference of x, so modifying y alters x.',
      },
      {
        q: 'What keyword turns a normal Python function into a generator function that produces values on demand?',
        options: ['return', 'yield', 'produce', 'generate'],
        correct: 1,
        explanation: 'The `yield` statement suspends function execution and returns a generator iterator value to the caller.',
      },
      {
        q: 'What is the primary difference between a Tuple and a List in Python?',
        options: ['Tuples can only store strings', 'Tuples are immutable while lists are mutable', 'Lists are faster for iteration than tuples', 'Tuples do not support indexing'],
        correct: 1,
        explanation: 'Tuples cannot be modified after instantiation (immutable), making them hashable and safer for constant sequences.',
      },
      {
        q: 'What does the `@functools.wraps` decorator do when writing custom decorators?',
        options: ['Compiles the function to C code', 'Preserves the original function name and docstrings', 'Enforces strict type annotations', 'Prevents recursive stack overflows'],
        correct: 1,
        explanation: '`@wraps` updates the wrapper function to look like the wrapped function by copying `__name__`, `__doc__`, etc.',
      },
      {
        q: 'What is the time complexity of retrieving a key from a standard Python dictionary (dict) with average hash distribution?',
        options: ['O(log N)', 'O(1)', 'O(N)', 'O(N^2)'],
        correct: 1,
        explanation: 'Python dictionaries use open-addressing hash tables with perturbation, achieving amortized O(1) key lookups.',
      },
    ],
  },
  {
    id: 'java-enterprise-cert',
    title: 'Java 17 & OOP Architecture Placement Certification',
    category: 'Backend & Enterprise',
    questionsCount: 5,
    durationMins: 10,
    passingPct: 70,
    difficulty: 'Expert',
    badge: 'Java Certified',
    desc: 'Validate Java virtual machine fundamentals, collections framework, lambda expressions, and memory management.',
    skillsTested: ['JVM Memory Model', 'Streams API', 'Garbage Collection', 'Inheritance & Polymorphism'],
    questions: [
      {
        q: 'Where are Object instances physically stored in the JVM memory architecture?',
        options: ['Method Area', 'Call Stack', 'Heap Memory', 'Program Counter Register'],
        correct: 2,
        explanation: 'All object instances and their corresponding instance variables are allocated on the shared JVM Heap.',
      },
      {
        q: 'Which Java 8+ interface represents a function that accepts one argument and produces a boolean result?',
        options: ['Function<T, R>', 'Consumer<T>', 'Predicate<T>', 'Supplier<T>'],
        correct: 2,
        explanation: '`Predicate<T>` has the abstract method `boolean test(T t)` commonly used in stream filtering.',
      },
      {
        q: 'Can an interface in Java 8+ have concrete method implementations?',
        options: ['No, interfaces can only have abstract methods', 'Yes, using `default` or `static` keywords', 'Only if the class is abstract', 'Only in Java 21+'],
        correct: 1,
        explanation: 'Java 8 introduced `default` and `static` methods to provide backward-compatible interface enhancements.',
      },
      {
        q: 'What is the contract between `equals()` and `hashCode()` in Java?',
        options: ['If hashCode() is equal, equals() must return true', 'If equals() is true, hashCode() must return the same integer', 'They are completely independent', 'hashCode() is only used for sorting'],
        correct: 1,
        explanation: 'If two objects are equal according to `equals()`, calling `hashCode()` on each must produce the identical integer result.',
      },
      {
        q: 'What does the `volatile` keyword in Java guarantee for a variable across threads?',
        options: ['Atomic compound operations like i++', 'Direct read/write visibility from main memory preventing thread caching', 'Automatic synchronization on the variable', 'Immutable constant value'],
        correct: 1,
        explanation: '`volatile` guarantees visibility of changes across threads by flushing reads/writes directly to main memory.',
      },
    ],
  },
]
