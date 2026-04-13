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

const courseData: Record<string, { course: string; program: string; sem: string; ebook?: string }[]> = {
  'JAN 2023': [],
  'JULY 2023': [
    { course: 'Neural Network', program: 'AI', sem: '7th Semester', ebook: '/ebooks/neural-network.pdf' },
    { course: 'Mathematical Foundation of Computer Sciences', program: 'M.Tech', sem: '1st Semester', ebook: '/ebooks/mathematical-foundation-cs.pdf' },
    { course: 'Practical Training-II', program: 'AI', sem: '7th Semester' },
    { course: 'Project', program: 'AI', sem: '7th Semester' },
  ],
  'JAN 2024': [
    { course: 'Analysis and Design of Algorithms', program: 'B.Tech.', sem: '4th Semester', ebook: '/ebooks/analysis-design-algorithms.pdf' },
    { course: 'Analysis and Design of Algorithms Lab', program: 'B.Tech.', sem: '4th Semester', ebook: '/ebooks/lab-manual-ada.pdf' },
    { course: 'Algorithms Design', program: 'M.Tech.', sem: '2nd Semester', ebook: '/ebooks/algorithm-design.pdf' },
    { course: 'Algorithms Design Lab', program: 'M.Tech.', sem: '2nd Semester', ebook: '/ebooks/lab-manual-algorithm-design.pdf' },
    { course: 'Seminar', program: 'M.Tech.', sem: '2nd Semester' },
  ],
  'JULY 2024': [
    { course: 'Mathematical Foundation of Computer Sciences', program: 'M.Tech', sem: '1st Semester', ebook: '/ebooks/mathematical-foundation-cs.pdf' },
    { course: 'Knowledge Based System', program: 'M.Tech', sem: '3rd Semester', ebook: '/ebooks/knowledge-based-system.pdf' },
    { course: 'Knowledge Based System Lab', program: 'M.Tech', sem: '3rd Semester', ebook: '/ebooks/lab-manual-kbs.pdf' },
    { course: 'Cyber Security Threats', program: 'B.Tech', sem: '5th Semester', ebook: '/ebooks/cyber-security-threats.pdf' },
  ],
  'JAN 2025': [
    { course: 'Software Engineering', program: 'M.Tech.', sem: '2nd Semester', ebook: '/ebooks/software-engineering.pdf' },
    { course: 'Machine Learning', program: 'Ph.D Course Work', sem: '' },
    { course: 'Project', program: 'CSE-IOT', sem: '' },
  ],
  'JULY 2025': [
    { course: 'Knowledge Based System', program: 'M.Tech', sem: '3rd Semester', ebook: '/ebooks/knowledge-based-system.pdf' },
    { course: 'Knowledge Based System Lab', program: 'M.Tech', sem: '3rd Semester', ebook: '/ebooks/lab-manual-kbs.pdf' },
    { course: 'Computer System Architecture', program: 'MCA', sem: '3rd Semester', ebook: '/ebooks/computer-system-architecture.pdf' },
    { course: 'Practical Training-II', program: 'AI', sem: '7th Semester' },
    { course: 'Practical Training-II', program: 'CS', sem: '7th Semester' },
    { course: 'Practical Training-I', program: 'IOT', sem: '5th Semester' },
  ],
  'JAN 2026': [
    { course: 'Algorithms Design', program: 'M.Tech. CSE', sem: '2nd Semester', ebook: '/ebooks/algorithm-design.pdf' },
    { course: 'Algorithms Design Lab', program: 'M.Tech. CSE', sem: '2nd Semester', ebook: '/ebooks/lab-manual-algorithm-design.pdf' },
    { course: 'Machine Learning', program: 'Ph.D Course Work', sem: '' },
    { course: 'Intrusion Detection System', program: 'B.Tech CS', sem: '6th Semester', ebook: '/ebooks/intrusion-detection-system.pdf' },
    { course: 'Computer Fundamental', program: 'M.Tech. CSE', sem: '2nd Semester' },
  ],
};

const resourceCols = ['Syllabus', 'PPT', 'Ebooks', 'Notes', 'Old Question Papers'];

export default function Teaching() {
  const [active, setActive] = useState('JAN 2023');
  const courses = courseData[active] ?? [];

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="border-b border-gray-200 pb-10 mb-12">
        <p className="font-inter text-xs tracking-[0.25em] uppercase text-navy-600 mb-3">Academics</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Teaching</h1>
        <p className="font-inter text-base text-gray-500 mt-4 max-w-xl leading-relaxed">
          Course materials organized by semester — including syllabi, lecture PPTs, ebooks, notes, and previous year question papers.
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
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-[#F2EDE6] border-b border-gray-200">
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-5 py-4 w-8">#</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-5 py-4">Course Name</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-5 py-4">Program</th>
                <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-5 py-4">Semester</th>
                {resourceCols.map((col) => (
                  <th key={col} className="font-inter text-xs tracking-widest uppercase text-gray-400 text-center px-4 py-4">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {courses.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="font-inter text-xs text-gray-400 px-5 py-4">{String(idx + 1).padStart(2, '0')}</td>
                  <td className="font-playfair text-base font-medium text-gray-900 px-5 py-4">{row.course}</td>
                  <td className="font-inter text-sm text-gray-500 px-5 py-4">{row.program}</td>
                  <td className="font-inter text-sm text-gray-500 px-5 py-4">{row.sem}</td>
                  {/* Syllabus */}
                  <td className="text-center px-4 py-4">
                    <span className="font-inter text-xs text-gray-300">—</span>
                  </td>
                  {/* PPT */}
                  <td className="text-center px-4 py-4">
                    <span className="font-inter text-xs text-gray-300">—</span>
                  </td>
                  {/* Ebooks */}
                  <td className="text-center px-4 py-4">
                    {row.ebook ? (
                      <a
                        href={row.ebook}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter text-xs tracking-wide uppercase text-navy-700 border border-navy-200 px-3 py-1.5 rounded-sm hover:bg-navy-50 hover:border-navy-400 transition-colors whitespace-nowrap"
                      >
                        PDF ↓
                      </a>
                    ) : (
                      <span className="font-inter text-xs text-gray-300">—</span>
                    )}
                  </td>
                  {/* Notes */}
                  <td className="text-center px-4 py-4">
                    <span className="font-inter text-xs text-gray-300">—</span>
                  </td>
                  {/* Old Question Papers */}
                  <td className="text-center px-4 py-4">
                    <span className="font-inter text-xs text-gray-300">—</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8">
        <p className="font-inter text-sm text-gray-400">
          Course materials will be uploaded progressively. Contact Dr. Kumar during office hours for access.
        </p>
      </div>
    </div>
  );
}
