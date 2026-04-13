# Dr. Mukesh Kumar — Academic Website

> Official academic website of Dr. Mukesh Kumar, Associate Professor at Gurugram University

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)

---

## 🌐 Live Site

> **URL:** _To be updated once deployed — see [Deployment](#-deployment) section below._

---

## 📖 Overview

This is the official academic portfolio website of **Dr. Mukesh Kumar**, Associate Professor in the Department of Computer Science at Gurugram University. The site serves as a central hub for his teaching materials, authored ebooks, research publications, and student-facing resources including office hours scheduling.

The design follows an editorial, print-inspired aesthetic using **Playfair Display** for headings and **Inter** for body text — balancing academic authority with modern readability.

---

## ✨ Features

- **Editorial typography** — Playfair Display + Inter pairing with a clean, journal-inspired layout
- **5 main sections** — Bio, Teaching, Ebook, Writing, and Office Hours, each with a distinct purpose
- **13 authored ebooks** — 10 textbooks and 3 lab manuals in A5 PDF format, all available for direct download
- **Semester-wise teaching materials** — Organized course listings from JAN 2023 through JAN 2026
- **Office hours scheduling** — Embedded Google Form for students to book time with Dr. Kumar
- **Fully responsive, mobile-first** — Works seamlessly on phones, tablets, and desktops
- **Deployed on Vercel** — Zero-config CI/CD with automatic preview deployments on every push

---

## 🛠️ Tech Stack

| Technology      | Version | Purpose                                      |
|-----------------|---------|----------------------------------------------|
| Next.js         | 14      | React framework, App Router, server components |
| React           | 18      | UI component library                         |
| TypeScript      | 5.3     | Static type safety                           |
| Tailwind CSS    | 3.4     | Utility-first styling, responsive design     |
| PostCSS         | 8.4     | CSS processing pipeline                      |
| Vercel          | —       | Hosting and deployment platform              |

---

## 📁 Project Structure

```
dr-mukesh-site/
├── app/                        # Next.js App Router pages
│   ├── bio/
│   │   └── page.tsx            # Biography and background
│   ├── teaching/
│   │   └── page.tsx            # Courses and semester-wise materials
│   ├── ebook/
│   │   └── page.tsx            # Ebook catalogue with PDF download links
│   ├── writing/
│   │   └── page.tsx            # Research papers and publications
│   ├── office-hours/
│   │   └── page.tsx            # Google Form embed for scheduling
│   ├── globals.css             # Global styles and font declarations
│   ├── layout.tsx              # Root layout (Navbar, fonts, metadata)
│   └── page.tsx                # Home / landing page
├── components/
│   └── Navbar.tsx              # Responsive navigation bar
├── public/
│   └── ebooks/                 # PDF files served statically
│       ├── neural-network.pdf
│       ├── analysis-design-algorithms.pdf
│       ├── algorithm-design.pdf
│       ├── knowledge-based-system.pdf
│       ├── software-engineering.pdf
│       ├── computer-system-architecture.pdf
│       ├── cyber-security-threats.pdf
│       ├── intrusion-detection-system.pdf
│       ├── mathematical-foundation-cs.pdf
│       ├── literature-survey.pdf
│       ├── lab-manual-ada.pdf
│       ├── lab-manual-algorithm-design.pdf
│       └── lab-manual-kbs.pdf
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or later
- **npm** 9+ (comes with Node.js)

### Clone and install

```bash
git clone https://github.com/<your-username>/dr-mukesh-site.git
cd dr-mukesh-site
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

### Build for production

```bash
npm run build
npm start
```

---

## 📚 Ebook Generation

The ebooks are authored documents compiled from LaTeX source files into A5-format PDFs. Once compiled, the PDF files are placed in `public/ebooks/` and are served by Next.js as static assets at the path `/ebooks/<filename>.pdf`.

The ebook catalogue currently includes:

**Textbooks & References (10)**
1. Neural Network
2. Analysis and Design of Algorithms
3. Algorithm Design
4. Knowledge Based System
5. Software Engineering
6. Computer System Architecture
7. Cyber Security Threats
8. Intrusion Detection System
9. Mathematical Foundation of Computer Science
10. How to Do Literature Survey

**Lab Manuals (3)**
1. Lab Manual — Analysis and Design of Algorithms
2. Lab Manual — Algorithm Design
3. Manual — Knowledge Based System

To add a new ebook, drop the compiled PDF into `public/ebooks/` and add its entry to the `textbooks` or `labManuals` array in `app/ebook/page.tsx`.

---

## ☁️ Deployment

### Vercel (recommended)

The fastest way to deploy:

1. Push the repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Every subsequent push to `main` triggers an automatic redeployment

### Manual / other platforms

```bash
npm run build   # outputs to .next/
npm start       # runs the production server on port 3000
```

The app is a standard Node.js server and can be hosted on any platform that supports Node.js 18+.

---

## 🤝 Contributing

This is a personal academic website. If you spot a bug or a broken link, please open an issue or submit a pull request. Contributions are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b fix/broken-pdf-link`
3. Commit your changes: `git commit -m "fix: update pdf href for neural network"`
4. Push and open a Pull Request

---

## 👤 Author

**Dr. Mukesh Kumar**
Associate Professor, Department of Computer Science
Gurugram University, Gurugram, Haryana, India

---

_Built with Next.js 14 and deployed on Vercel._
