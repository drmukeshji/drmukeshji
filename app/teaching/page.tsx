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

// Placeholder course data per semester — to be filled later
const courseData: Record<string, { course: string; sem: string }[]> = {
  'JAN 2023': [
    { course: 'Add Course Name', sem: 'Add Semester' },
  ],
  'JULY 2023': [
    { course: 'Add Course Name', sem: 'Add Semester' },
  ],
  'JAN 2024': [
    { course: 'Add Course Name', sem: 'Add Semester' },
  ],
  'JULY 2024': [
    { course: 'Add Course Name', sem: 'Add Semester' },
  ],
  'JAN 2025': [
    { course: 'Add Course Name', sem: 'Add Semester' },
  ],
  'JULY 2025': [
    { course: 'Add Course Name', sem: 'Add Semester' },
  ],
  'JAN 2026': [
    { course: 'Add Course Name', sem: 'Add Semester' },
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
        <p className="font-inter text-xs tracking-[0.25em] uppercase text-gray-400 mb-3">Academics</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Teaching</h1>
        <p className="font-inter text-base text-gray-500 mt-4 max-w-xl leading-relaxed">
          Course materials organized by semester — including syllabi, lecture PPTs, ebooks, notes, and previous year question papers.
        </p>
      </div>

      {/* Semester Tabs */}
      <div className="flex flex-wrap gap-0 border border-gray-200 rounded-sm overflow-hidden mb-10 w-fit">
        {semesters.map((sem, idx) => (
          <button
            key={sem}
            onClick={() => setActive(sem)}
            className={`font-inter text-xs tracking-widest uppercase px-5 py-3 transition-colors border-r border-gray-200 last:border-r-0 ${
              active === sem
                ? 'bg-gray-900 text-white'
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
      <div className="overflow-x-auto border border-gray-200 rounded-sm">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-5 py-4 w-8">#</th>
              <th className="font-inter text-xs tracking-widest uppercase text-gray-400 text-left px-5 py-4">Course Name</th>
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
                <td className="font-inter text-sm text-gray-500 px-5 py-4">{row.sem}</td>
                {resourceCols.map((col) => (
                  <td key={col} className="text-center px-4 py-4">
                    <span className="font-inter text-xs text-gray-300">—</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <p className="font-inter text-sm text-gray-400">
          Course materials will be uploaded progressively. Contact Dr. Kumar during office hours for access.
        </p>
      </div>
    </div>
  );
}
