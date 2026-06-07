# RRRTX Labs — Master Development Blueprint (2026)

## 1. TECH STACK & ARCHITECTURE
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Components:** Shadcn/UI (Customized for Dark Mode)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Deployment:** Vercel

## 2. FOLDER STRUCTURE
```text
/src
  /app (Next.js Pages)
    /services
    /case-studies
    /about
    /contact
    /blog
  /components
    /ui (Shadcn)
    /sections
      - Hero.tsx
      - TrustBar.tsx
      - ServicesBento.tsx
      - Process.tsx
      - CaseStudyCard.tsx
    /forms
      - AuditForm.tsx
      - DiscoveryCallForm.tsx
  /data
    - proof.json (Testimonials, Case Studies)
  /lib (Utils, SEO)
  /styles (Globals.css)
```

## 3. COMPONENT ARCHITECTURE (KEY COMPONENTS)
### A. The "Bento Grid" Service Cards
Reusable container with glassmorphism and subtle hover scaling.
- **Props:** Title, Description, Price, Deliverables, Icon.

### B. Dynamic Trust Bar
An infinite horizontal scroll of your certifications and project stats.
- **Source:** Pulls from `data/proof.json`.

### C. Multi-Step Lead Form
- **Step 1:** Pain points selection.
- **Step 2:** Business details (Revenue, Industry).
- **Step 3:** Contact info & Calendar booking integration.

## 4. SEO STRATEGY
### Keywords
- **Primary:** AI Automation Agency, Lead Automation for Contractors, AI Chatbots for Real Estate.
- **Secondary:** RRRTX Labs, Muhammad Ahmad AI, Zero-click Automation.

### Metadata (Per Page)
- **Title:** RRRTX Labs | AI Automation That Converts Leads
- **Description:** We build automated systems that capture, qualify, and follow up with leads in under 60 seconds. Stop losing sales to slow response.
- **Open Graph:** Professional banner with "14+ Shipped Projects" badge.

## 5. CONVERSION OPTIMIZATION (PSYCHOLOGICAL TRIGGERS)
- **The "High Anchor":** Display the $10k Full System first to make the $2k Lead Machine look like a steal.
- **The "Proof Bar":** Constant visibility of "37+ Certifications" and "Google AI Finalist" badges.
- **The "Loom Effect":** Every case study must include a video walkthrough to prove the system works.
- **Urgency:** "Accepting only 2 new projects for Q3."

## 6. DATA SCHEMA (GitHub Repo)
Store all content in JSON to allow for "Zero-Code" updates:
- `reviews.json`: Customer quotes.
- `projects.json`: Title, Tech Stack, Live URL, GitHub link.
- `certifications.json`: Credly link, Issuer, Date.

## 7. DEVELOPMENT TIMELINE (5-DAY SPRINT)
- **Day 1:** Setup repo, Theme/Tailwind config, and Font system.
- **Day 2:** Build Homepage Hero, Trust Bar, and Services Bento.
- **Day 3:** Build Case Study template and About page.
- **Day 4:** Integrate multi-step Lead Form and SEO metadata.
- **Day 5:** Final polish, Framer Motion animations, and Vercel Deploy.
