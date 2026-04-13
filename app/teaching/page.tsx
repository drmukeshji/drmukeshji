'use client';

import { useState } from 'react';

const semesters = [
  'JAN 2023',
  'JULY 2023',
  'JAN 2024',
  'JULY 2024',
  'JAN 2025',
  'JULY 2025',
  'JAN 2026',
];

type Resources = {
  syllabus?: string;
  ppt?: string;
  notes?: string;
  questionPapers?: string;
  ebook?: string;
};

type Course = {
  course: string;
  program: string;
  sem: string;
  resources?: Resources;
};

// File paths follow the convention:
// /courses/{semester-slug}/{course-slug}/{type}/filename
// When Dr. Kumar uploads a file, add its path here to make the link appear.
const courseData: Record<string, Course[]> = {
  'JAN 2023': [],
  'JULY 2023': [
    {
      course: 'Neural Network', program: 'AI', sem: '7th Semester',
      resources: { ebook: '/ebooks/neural-network.pdf' },
    },
    {
      course: 'Mathematical Foundation of Computer Sciences', program: 'M.Tech', sem: '1st Semester',
      resources: { ebook: '/ebooks/mathematical-foundation-cs.pdf' },
    },
    { course: 'Practical Training-II', program: 'AI', sem: '7th Semester' },
    { course: 'Project', program: 'AI', sem: '7th Semester' },
  ],
  'JAN 2024': [
    {
      course: 'Analysis and Design of Algorithms', program: 'B.Tech.', sem: '4th Semester',
      resources: { ebook: '/ebooks/analysis-design-algorithms.pdf' },
    },
    {
      course: 'Analysis and Design of Algorithms Lab', program: 'B.Tech.', sem: '4th Semester',
      resources: { ebook: '/ebooks/lab-manual-ada.pdf' },
    },
    {
      course: 'Algorithms Design', program: 'M.Tech.', sem: '2nd Semester',
      resources: { ebook: '/ebooks/algorithm-design.pdf' },
    },
    {
      course: 'Algorithms Design Lab', program: 'M.Tech.', sem: '2nd Semester',
      resources: { ebook: '/ebooks/lab-manual-algorithm-design.pdf' },
    },
    { course: 'Seminar', program: 'M.Tech.', sem: '2nd Semester' },
  ],
  'JULY 2024': [
    {
      course: 'Mathematical Foundation of Computer Sciences', program: 'M.Tech', sem: '1st Semester',
      resources: { ebook: '/ebooks/mathematical-foundation-cs.pdf' },
    },
    {
      course: 'Knowledge Based System', program: 'M.Tech', sem: '3rd Semester',
      resources: { ebook: '/ebooks/knowledge-based-system.pdf' },
    },
    {
      course: 'Knowledge Based System Lab', program: 'M.Tech', sem: '3rd Semester',
      resources: { ebook: '/ebooks/lab-manual-kbs.pdf' },
    },
    {
      course: 'Cyber Security Threats', program: 'B.Tech', sem: '5th Semester',
      resources: { ebook: '/ebooks/cyber-security-threats.pdf' },
    },
  ],
  'JAN 2025': [
    {
      course: 'Software Engineering', program: 'M.Tech.', sem: '2nd Semester',
      resources: { ebook: '/ebooks/software-engineering.pdf' },
    },
    { course: 'Machine Learning', program: 'Ph.D Course Work', sem: '' },
    { course: 'Project', program: 'CSE-IOT', sem: '' },
  ],
  'JULY 2025': [
    {
      course: 'Knowledge Based System', program: 'M.Tech', sem: '3rd Semester',
      resources: { ebook: '/ebooks/knowledge-based-system.pdf' },
    },
    {
      course: 'Knowledge Based System Lab', program: 'M.Tech', sem: '3rd Semester',
      resources: { ebook: '/ebooks/lab-manual-kbs.pdf' },
    },
    {
      course: 'Computer System Architecture', program: 'MCA', sem: '3rd Semester',
      resources: { ebook: '/ebooks/computer-system-architecture.pdf' },
    },
    { course: 'Practical Training-II', program: 'AI', sem: '7th Semester' },
    { course: 'Practical Training-II', program: 'CS', sem: '7th Semester' },
    { course: 'Practical Training-I', program: 'IOT', sem: '5th Semester' },
  ],
  'JAN 2026': [
    {
      course: 'Algorithms Design', program: 'M.Tech. CSE', sem: '2nd Semester',
      resources: { ebook: '/ebooks/algorithm-design.pdf' },
    },
    {
      course: 'Algorithms Design Lab', program: 'M.Tech. CSE', sem: '2nd Semester',
      resources: { ebook: '/ebooks/lab-manual-algorithm-design.pdf' },
    },
    { course: 'Machine Learning', program: 'Ph.D Course Work', sem: '' },
    {
      course: 'Intrusion Detection System', program: 'B.Tech CS', sem: '6th Semester',
      resources: { ebook: '/ebooks/intrusion-detection-system.pdf' },
    },
    { course: 'Computer Fundamental', program: 'M.Tech. CSE', sem: '2nd Semester' },
  ],
};

function ResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="font-inter text-xs tracking-wide uppercase text-navy-700 border border-navy-200 px-3 py-1.5 rounded-sm hover:bg-navy-50 hover:border-navy-400 transition-colors whitespace-nowrap"
    >
      {label} ↓
    </a>
  );
}

function EmptyCell() {
  return <span className="font-inter text-xs text-gray-200">—</span>;
}

export default function Teaching() {
  const [active, setActive] = useState('JAN 2026');
  const courses = courseData[active] ?? [];

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="border-b border-gray-200 pb-10 mb-12">
        <p className="font-inter text-xs tracking-[0.25em] uppercase text-navy-600 mb-3">Academics</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Teaching</h1>
        <p className="font-inter text-base text-gray-500 mt-4 max-w-xl leading-relaxed">
          Course materials organized by semester — syllabi, lecture slides, ebooks, notes, and previous year question papers.
        </p>
      </div>

      {/* Semester Tabs */}
      <div className="flex flex-wrap gap-0 border border-stone-200 rounded-sm overflow-hidden mb-10 w-fit">
        {semesters.map((sem) => (
          <button
            key={sem}
            onClick={() => setActive(sem)}
            className={`font-inter text-xs tracking-widest uppercase px-5 py-3 transition-colors border-r border-gray-200 last:border-r-0 ${
              active === sem
                ? 'bg-navy-800 text-white'
                : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            {sem}
          </button>
        ))}
      </div>

      {/* Active Semester Label */}
      <div className="flex items-center gap-4 mb-6">
        <p className="font-inter text-xs tracking-[0.2em] uppercase text-gray-400">{active} Session</p>
        <div className="flex-1 border-t border-gray-100" />
      </div>

      {/* Course Table */}
      {courses.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-sm p-12 text-center">
          <p className="font-playfair text-xl text-gray-400 mb-2">No courses listed for this semester</p>
          <p className="font-inter text-sm text-gray-400">Course data will be added progressively.</p>
        </div>
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-sm">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-[#F2EDE6] border-b border-gray-200">
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-5 py-4 w-8">#</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-5 py-4">Course Name</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-4 py-4">Program</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-4 py-4">Semester</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-center px-4 py-4">Syllabus</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-center px-4 py-4">PPT</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-center px-4 py-4">Ebook</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-center px-4 py-4">Notes</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-center px-4 py-4">Question Papers</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors last:border-0">
                  <td className="font-inter text-xs text-gray-400 px-5 py-4">{String(idx + 1).padStart(2, '0')}</td>
                  <td className="font-playfair text-base font-medium text-gray-900 px-5 py-4">{row.course}</td>
                  <td className="font-inter text-sm text-gray-500 px-4 py-4 whitespace-nowrap">{row.program}</td>
                  <td className="font-inter text-sm text-gray-500 px-4 py-4 whitespace-nowrap">{row.sem}</td>
                  <td className="text-center px-4 py-4">
                    {row.resources?.syllabus
                      ? <ResourceLink href={row.resources.syllabus} label="PDF" />
                      : <EmptyCell />}
                  </td>
                  <td className="text-center px-4 py-4">
                    {row.resources?.ppt
                      ? <ResourceLink href={row.resources.ppt} label="PPT" />
                      : <EmptyCell />}
                  </td>
                  <td className="text-center px-4 py-4">
                    {row.resources?.ebook
                      ? <ResourceLink href={row.resources.ebook} label="PDF" />
                      : <EmptyCell />}
                  </td>
                  <td className="text-center px-4 py-4">
                    {row.resources?.notes
                      ? <ResourceLink href={row.resources.notes} label="PDF" />
                      : <EmptyCell />}
                  </td>
                  <td className="text-center px-4 py-4">
                    {row.resources?.questionPapers
                      ? <ResourceLink href={row.resources.questionPapers} label="PDF" />
                      : <EmptyCell />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 flex items-start gap-3 border border-stone-200 rounded-sm bg-[#FDFAF6] px-5 py-4">
        <svg className="w-4 h-4 text-navy-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="font-inter text-sm text-gray-500">
          Materials are uploaded progressively. Contact Dr. Kumar during{' '}
          <a href="/office-hours" className="text-navy-700 underline underline-offset-2">office hours</a>{' '}
          for access to resources not yet listed.
        </p>
      </div>
    </div>
  );
}
