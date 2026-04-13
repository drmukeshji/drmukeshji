# Dr. Mukesh Kumar — Academic Website

Official academic website of Dr. Mukesh Kumar, Associate Professor, Department of Engineering & Technology, Gurugram University.

**Live site:** https://dr-mukesh-site.vercel.app

---

## Sections

- **Bio** — Academic background, career, and achievements
- **Teaching** — Semester-wise courses with syllabus, PPTs, ebooks, notes, and question papers
- **Ebook** — 14 authored textbooks and lab manuals available for download
- **Writing** — Research publications and journals
- **Office Hours** — Schedule and contact

---

## Adding Course Materials

Drop files into the correct folder under `public/courses/` and push to git:

```
public/courses/
  {semester}/               e.g. jan-2026, july-2025
    {course-slug}/          e.g. neural-network, algorithms-design
      syllabus/             syllabus.pdf
      ppt/                  module-1.ppt, module-2.ppt ...
      notes/                notes.pdf
      question-papers/      2023.pdf, 2024.pdf ...
```

See `public/courses/README.md` for the full course slug reference.

After uploading, update the `resources` field for the course in `app/teaching/page.tsx` and deploy.

---

## Tech Stack

- Next.js 14 · React 18 · TypeScript · Tailwind CSS
- Deployed on Vercel
