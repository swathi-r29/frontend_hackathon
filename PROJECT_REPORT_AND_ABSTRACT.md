# PROJECT REPORT & ABSTRACT
## DKODER — Next-Generation Placement LMS & Developer Ecosystem Redesign

**Repository:** [https://github.com/swathi-r29/frontend_hackathon](https://github.com/swathi-r29/frontend_hackathon)  
**Track / Category:** Frontend Web Development & UI/UX Redesign  
**Technology Stack:** React 18, TypeScript, Vite, Vanilla CSS Design System, Framer Motion, Lucide Icons  

---

## 1. Executive Abstract

Engineering students across universities face fragmented preparation tools when transitioning from academics to high-paying software engineering careers. The existing DKODER web interface, while feature-rich, suffered from outdated design paradigms, visual contrast gaps, unoptimized navigation, and a lack of interactive feedback.

This project delivers a **comprehensive, production-grade frontend redesign of DKODER (dkoder.co.in)**. Engineered around a sleek, modern obsidian dark palette paired with DKODER's signature high-energy yellow (`#FEE715` / `#F5D90A`), the revamped platform unifies:
1. An immersive, high-conversion **Homepage** with responsive hero actions and interactive curriculum previews.
2. A full-featured **Skill Practice Arena** supporting Coding, Aptitude, Mock Tests, and Company Prep with real-time browser-based code compilation simulations.
3. An automated **Certification & Testing Engine** that evaluates developers with randomized assessments and renders downloadable/verifiable digital credentials.
4. A competitive **Hackathon & Grand Tournament Portal** featuring live countdown clocks, domain breakdowns, and team registration workflows.
5. An **Institutional "For Colleges" Hub & MOU Application Portal** designed to drive university placements and training partnerships.

The result is a responsive, performant, and visually stunning web platform that elevates student engagement and employer perception.

---

## 2. Problem Statement & Objectives

### The Problem
* **Visual Inconsistency:** Outdated aesthetics, low contrast ratios, and lack of visual hierarchy hindered user engagement.
* **Complex Navigation:** Aspiring candidates struggled to find relevant practice questions, tests, and hackathons quickly.
* **Passive Experience:** Absence of instant feedback loops (simulated code runs, real-time quizzes, verifiable credentials).
* **Institutional Disconnect:** Insufficient tools for engineering colleges to explore placement statistics and sign MOUs.

### Core Objectives
* **Modern Design Language:** Implement a cohesive design system using CSS variables, glassmorphic surfaces, fluid typography, and micro-interactions.
* **High Contrast & Accessibility:** Ensure WCAG-compliant contrast between foreground elements and obsidian backgrounds.
* **Interactive Features:** Build working client-side simulations including a code runner, timed skill assessments, and registration modals.
* **Institutional Conversion:** Provide a dedicated university portal with an interactive partnership/MOU application flow.

---

## 3. System Architecture & Tech Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **React 18 + Vite** | Blazing-fast HMR, component modularity, zero bundle bloat |
| **Language** | **TypeScript** | Type safety, maintainability, and clean prop contracts |
| **Styling** | **Modular Vanilla CSS** | Ultimate styling flexibility, zero runtime CSS overhead, custom tokens |
| **Routing** | **React Router v6** | Client-side routing with clean URL parameters and dynamic deep links |
| **Icons & Motion** | **Lucide React + Framer Motion** | Lightweight SVGs and smooth micro-interactions |

---

## 4. Key Functional Modules

### 4.1. Modernized Homepage Hero & Ecosystem
* **Hero Section:** High-impact typography (*"Your Next Level Starts With You"*), category pills (Coding, Aptitude, Company Prep, Mock Tests), and dual CTAs with hover glow effects.
* **Curriculum Showcase:** Interactive preview cards with tabbed switches for Topic-wise modules, Core CS subjects, and Full-Stack tracks.
* **Value Pillars:** Core metrics highlighting Practice Purposefully, Track Progress, and College Placement readiness.

### 4.2. Interactive Learning & Skill Practice Suite (`/learn`)
* **Topic-Wise Coding Practice:** Questions categorized by difficulty (Easy, Medium, Hard) and topics (Arrays, Strings, Dynamic Programming, Graphs).
* **Live Code Runner Simulation:** Code editor supporting C++, Python, and Java with stdin input, real-time test case execution, and pass/fail terminal feedback.
* **Company-Specific Prep:** Curated questions targeted for top product companies (Google, Amazon, Microsoft, TCS, Infosys).

### 4.3. Real-Time Certification & Assessment Engine
* **Interactive Assessment Modal:** 5-question timed technical quiz covering Data Structures, Algorithms, and System Design.
* **Instant Score Evaluation:** Automated scoring algorithm with instant validation and retake capabilities.
* **Dynamic Digital Certificate:** Candidates scoring ≥ 70% automatically unlock a digital certificate rendered on-screen with their name, completion date, and credential ID.

### 4.4. Hackathon Arena & Grand Tournament Deck (`/hackathon`)
* **Live Tournament Countdown:** Real-time countdown clock counting down to competition kickoff.
* **4 Challenge Domains:** AI/ML, Full Stack Web3, Cloud & DevOps, and Algorithmic Sprint.
* **Interactive Team Registration Modal:** Multi-step registration form validating team name, leader email, college name, and team size.

### 4.5. Institutional University Portal & MOU Application (`/colleges` & `/mou`)
* **College Placement ROI:** Showcase of 85%+ average placement conversion, partner colleges, and training tracks.
* **Interactive MOU Form:** Step-by-step institutional partnership form with input validation, success confirmations, and submission status.

---

## 5. UI/UX Design System & Color Palette

* **Primary Background:** `#0B0914` (Obsidian Deep Purple)
* **Card Surface:** `#151222` / `#211A35` (Elevated dark surfaces with subtle purple undertones)
* **Brand Accent:** `#FEE715` / `#F5D90A` (Signature DKODER Electric Yellow for CTAs and highlights)
* **Secondary Accent:** `#6D3BFF` / `#8B5CFF` (Royal Cyber Purple for badges and glow effects)
* **Foreground Text:** `#FFFFFF` (Stark White, 100% contrast) and `#C9BCF0` (Muted lilac secondary text)

---

## 6. Impact & Results

* **100% Client-Side Interactivity:** Full user flows tested end-to-end without requiring server round-trips for the demo.
* **Blazing Fast Performance:** Vite production build compiles in ~6.5s with zero bundle warnings.
* **Responsive Across Devices:** Tested seamlessly across 1800px desktop, laptop, and tablet viewports.

---

## 7. Team & Submission Details

* **Project Name:** DKODER Frontend Redesign
* **GitHub Repository:** [https://github.com/swathi-r29/frontend_hackathon](https://github.com/swathi-r29/frontend_hackathon)
* **Submission Date:** October 2026
