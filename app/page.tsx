import Link from 'next/link';

const sections = [
  { num: '01', label: 'Bio', href: '/bio', desc: 'Academic background, career, and achievements' },
  { num: '02', label: 'Teaching', href: '/teaching', desc: 'Courses, syllabi, PPTs, notes & past papers' },
  { num: '03', label: 'Ebook', href: '/ebook', desc: 'Authored and co-authored digital textbooks' },
  { num: '04', label: 'Writing', href: '/writing', desc: 'Research papers, journals & publications' },
  { num: '05', label: 'Office Hours', href: '/office-hours', desc: 'Schedule a meeting or get in touch' },
];

const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Cloud Computing',
  'Data Science',
  'Networking',
  'Software Engineering',
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-gray-200">
        <p className="font-inter text-xs tracking-[0.25em] uppercase text-gray-400 mb-6">
          Associate Professor · Gurugram University
        </p>
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gray-900 leading-none tracking-tight mb-6">
          Dr. Mukesh<br />Kumar
        </h1>
        <p className="font-inter text-sm tracking-[0.2em] uppercase text-navy-600 mt-4">
          Department of Engineering &amp; Technology &nbsp;·&nbsp; 19+ Years Experience
        </p>
      </section>

      {/* Nav Cards */}
      <section className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group bg-white p-8 flex flex-col justify-between min-h-[180px] hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="font-inter text-xs tracking-widest text-navy-600 uppercase">{s.num}</span>
              <h2 className="font-playfair text-2xl font-semibold text-gray-900 mt-2 mb-3">{s.label}</h2>
              <p className="font-inter text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
            <span className="font-inter text-gray-300 group-hover:text-gray-900 transition-colors text-xl mt-6 inline-block">
              →
            </span>
          </Link>
        ))}
      </section>

      {/* Research Interests */}
      <section className="py-12 border-t border-gray-200">
        <p className="font-inter text-xs tracking-[0.25em] uppercase text-gray-400 mb-6">
          Research Interests
        </p>
        <div className="flex flex-wrap gap-2">
          {interests.map((tag) => (
            <span
              key={tag}
              className="font-inter text-xs tracking-widest uppercase border border-navy-100 text-navy-700 px-4 py-2 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
