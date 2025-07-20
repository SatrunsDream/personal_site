# Project Architecture: Personal Portfolio (React)

---

## 0. Overview
This document provides a comprehensive, AI-friendly architecture map of the Personal Portfolio React project. Each major component, data structure, and connection is annotated with a unique ID (UID) for cross-referencing. The goal is to enable any AI or developer to instantly understand the structure, data flow, and logic of the codebase.

---

## 1. File Structure (UID: FS-ROOT)

```
personalsite/ (FS-ROOT)
├── public/ (FS-PUBLIC)
│   ├── index.html (FS-HTML)
│   └── Sardor_DS_Resume.pdf (FS-RESUME)
├── src/ (FS-SRC)
│   ├── assets/ (FS-ASSETS)
│   │   └── images/ (FS-IMAGES)
│   │       ├── lebron.jpg (FS-IMG-LEBRON)
│   │       ├── zero_to_hero_python.jpg (FS-IMG-CERT)
│   │       ├── ckd.png (FS-IMG-CKD)
│   │       ├── mlb.png (FS-IMG-MLB)
│   │       ├── nas.png (FS-IMG-NAS)
│   │       ├── poa.png (FS-IMG-POA)
│   │       ├── dcs.png (FS-IMG-DCS)
│   │       └── hma.png (FS-IMG-HMA)
│   ├── components/ (FS-COMP)
│   │   ├── App.jsx (FS-APP)
│   │   ├── Hero.jsx (FS-HERO)
│   │   ├── Navigation.jsx (FS-NAV)
│   │   ├── Experience.jsx (FS-EXP)
│   │   ├── Projects.jsx (FS-PROJ)
│   │   ├── ProjectCard.jsx (FS-PROJCARD)
│   │   ├── Awards.jsx (FS-AWARDS)
│   │   ├── Contact.jsx (FS-CONTACT)
│   │   └── Blog.jsx (FS-BLOG)
│   ├── data/ (FS-DATA)
│   │   └── projects.json (FS-PROJDATA)
│   ├── styles/ (FS-STYLES)
│   │   └── global.css (FS-GLOBALCSS)
│   └── index.js (FS-INDEXJS)
├── package.json (FS-PKG)
├── README.md (FS-README)
└── ARCHITECTURE.md (FS-ARCH)
```

---

## 2. Component & Data Flow Map

### 2.1. App Entry (UID: APP-ENTRY)
- **File:** `src/index.js` (FS-INDEXJS)
- **Mounts:** `<App />` (FS-APP) into `#root` in `public/index.html` (FS-HTML)
- **CSS:** Imports `global.css` (FS-GLOBALCSS)

### 2.2. App Component (UID: APP-MAIN)
- **File:** `src/components/App.jsx` (FS-APP)
- **Purpose:** Top-level layout and section ordering
- **Renders:**
  - `<Navigation />` (FS-NAV)
  - `<Hero />` (FS-HERO)
  - `<Experience />` (FS-EXP)
  - `<Projects />` (FS-PROJ)
  - `<Awards />` (FS-AWARDS)
  - `<Blog />` (FS-BLOG)
  - `<Contact />` (FS-CONTACT)

### 2.3. Navigation (UID: NAV)
- **File:** `src/components/Navigation.jsx` (FS-NAV)
- **Purpose:** Top nav bar, section links, theme toggle
- **State:**
  - `isMenuOpen` (mobile menu)
  - `isDarkMode` (theme, persisted in localStorage)
- **Interacts:**
  - Scrolls to section IDs
  - Toggles dark mode (adds `.dark-mode` to `<body>`, triggers CSS overrides)

### 2.4. Hero Section (UID: HERO)
- **File:** `src/components/Hero.jsx` (FS-HERO)
- **Purpose:** Profile intro, summary, profile image, resume download
- **Assets:**
  - Profile image: `lebron.jpg` (FS-IMG-LEBRON)
  - Resume: `Sardor_DS_Resume.pdf` (FS-RESUME)
- **Text:** Humanized summary, academic interests

### 2.5. Experience Section (UID: EXP)
- **File:** `src/components/Experience.jsx` (FS-EXP)
- **Purpose:** Timeline of work/academic experience
- **Features:**
  - Zigzag timeline layout (CSS)
  - Each experience: bullet points, expand/collapse
  - Dates, company, location, job title
- **State:**
  - Expand/collapse per experience (local state)
- **Styling:**
  - `.experience-item`, `.experience-content`, `.timeline-dot` (FS-GLOBALCSS)

### 2.6. Projects Section (UID: PROJ)
- **File:** `src/components/Projects.jsx` (FS-PROJ)
- **Purpose:** Grid of project cards
- **Data:**
  - Loads from `projects.json` (FS-PROJDATA)
- **Renders:**
  - `<ProjectCard />` (FS-PROJCARD) for each project

#### 2.6.1. ProjectCard (UID: PROJCARD)
- **File:** `src/components/ProjectCard.jsx` (FS-PROJCARD)
- **Props:** `project` (from Projects)
- **Image Import:**
  - Dynamically imports from `src/assets/images/` (FS-IMAGES) using filename from `projects.json`
- **Displays:**
  - Image, title, description, tech tags, external link

### 2.7. Certificates/Awards Section (UID: AWARDS)
- **File:** `src/components/Awards.jsx` (FS-AWARDS)
- **Purpose:** Certificate card with modal preview
- **State:**
  - `showCertificate` (modal open/close)
- **Assets:**
  - Certificate image: `zero_to_hero_python.jpg` (FS-IMG-CERT)
- **Features:**
  - Modal popup for certificate preview

### 2.8. Blog Section (UID: BLOG)
- **File:** `src/components/Blog.jsx` (FS-BLOG)
- **Purpose:** Placeholder for blog posts (can be expanded)

### 2.9. Contact Section (UID: CONTACT)
- **File:** `src/components/Contact.jsx` (FS-CONTACT)
- **Purpose:** Contact form, social links
- **Form:** Name, email, message (no backend by default)
- **Socials:** GitHub, LinkedIn, Email

---

## 3. Data & Asset Flow

- **Images:** Imported as modules in components (UID: IMG-IMPORT)
- **Resume:** Linked from `public/` (UID: RESUME-LINK)
- **Project Data:** Loaded from `src/data/projects.json` (UID: PROJ-DATA)
- **Certificate Data:** Hardcoded in `Awards.jsx` (UID: CERT-DATA)

---

## 4. Theming & State

- **Dark/Light Mode:**
  - State in `Navigation.jsx` (UID: THEME-STATE)
  - CSS toggles `.dark-mode` on `<body>` (UID: THEME-CSS)
  - All major sections have dark mode overrides in `global.css` (FS-GLOBALCSS)

- **Expand/Collapse (Experience):**
  - Local state per experience item (UID: EXP-STATE)

- **Modal (Certificate):**
  - Local state in `Awards.jsx` (UID: MODAL-STATE)

---

## 5. CSS & Styling

- **Global Styles:** `src/styles/global.css` (FS-GLOBALCSS)
- **Section Classes:** `.hero`, `.experience-timeline`, `.project-card`, `.award-card`, `.contact-form`, etc.
- **Dark Mode:** `.dark-mode` overrides for all major classes
- **Responsive:** Media queries for mobile/tablet
- **Animations:** Transitions for hover, modal, expand/collapse

---

## 6. Build & Deployment

- **Build Tool:** `react-scripts` (UID: BUILD-TOOL)
- **Dev Server:** `npm start` (UID: DEV-SERVER)
- **Production Build:** `npm run build` (UID: PROD-BUILD)
- **Vercel:**
  - Deploys from root
  - Output directory: `build/`
  - No special config needed

---

## 7. Unique ID (UID) Rule

- **UIDs** are assigned to every major file, component, data source, and flow.
- **Format:** `FS-` for files/folders, `UID:` for architecture concepts, `IMG-` for images, etc.
- **Cross-reference:** Any UID can be searched to instantly locate its definition and usage.
- **Purpose:** Enables AI or developer to reason about the codebase, trace data flow, and understand all connections without ambiguity.

---

## 8. Extending the Architecture

- **To add a new section:**
  - Create a new component in `src/components/` (FS-COMP)
  - Add to `App.jsx` (FS-APP)
  - Add UID to this document
- **To add new data:**
  - Place images in `src/assets/images/` (FS-IMAGES)
  - Add project data to `projects.json` (FS-PROJDATA)
- **To add backend:**
  - Connect form in `Contact.jsx` (FS-CONTACT) to an API endpoint
  - Document new flows and UIDs here

---

## 9. AI Reasoning Example

- To find where the profile image is used:
  - Search for `FS-IMG-LEBRON` → see `Hero.jsx` (FS-HERO) → see `<img src={lebronImage} ... />`
- To trace project data:
  - `FS-PROJDATA` → loaded in `Projects.jsx` (FS-PROJ) → rendered by `ProjectCard.jsx` (FS-PROJCARD)
- To understand theming:
  - `isDarkMode` in `Navigation.jsx` (FS-NAV) → toggles `.dark-mode` on `<body>` → CSS in `global.css` (FS-GLOBALCSS)

---

**End of Architecture Map** 