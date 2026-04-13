const textbooks = [
  { num: '01', title: 'Neural Network', href: '/ebooks/neural-network.pdf' },
  { num: '02', title: 'Analysis and Design of Algorithms', href: '/ebooks/analysis-design-algorithms.pdf' },
  { num: '03', title: 'Algorithm Design', href: '/ebooks/algorithm-design.pdf' },
  { num: '04', title: 'Knowledge Based System', href: '/ebooks/knowledge-based-system.pdf' },
  { num: '05', title: 'Software Engineering', href: '/ebooks/software-engineering.pdf' },
  { num: '06', title: 'Computer System Architecture', href: '/ebooks/computer-system-architecture.pdf' },
  { num: '07', title: 'Cyber Security Threats', href: '/ebooks/cyber-security-threats.pdf' },
  { num: '08', title: 'Intrusion Detection System', href: '/ebooks/intrusion-detection-system.pdf' },
  { num: '09', title: 'Mathematical Foundation of Computer Science', href: '/ebooks/mathematical-foundation-cs.pdf' },
  { num: '10', title: 'How to Do Literature Survey', href: '/ebooks/literature-survey.pdf' },
];

const labManuals = [
  { num: '01', title: 'Lab Manual — Analysis and Design of Algorithms', href: '/ebooks/lab-manual-ada.pdf' },
  { num: '02', title: 'Lab Manual — Algorithm Design', href: '/ebooks/lab-manual-algorithm-design.pdf' },
  { num: '03', title: 'Manual — Knowledge Based System', href: '/ebooks/lab-manual-kbs.pdf' },
  { num: '04', title: 'E-Content Development in 4 Quadrants for a Complete Course', href: '/ebooks/econtent-4-quadrants.pdf' },
];

function EbookCard({ num, title, href }: { num: string; title: string; href: string }) {
  return (
    <div className="border border-stone-200 p-6 flex items-start justify-between gap-4 hover:border-gray-400 transition-colors group bg-[#FDFAF6]">
      <div className="flex items-start gap-4">
        <span className="font-inter text-xs tracking-widest text-gray-400 pt-1 shrink-0">{num}</span>
        <h3 className="font-playfair text-lg font-semibold text-gray-900 leading-snug">
          E-Book {title}
        </h3>
      </div>
      <a
        href={href}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="font-inter text-xs tracking-widest uppercase border border-gray-300 text-gray-500 px-4 py-2 rounded-sm whitespace-nowrap hover:border-navy-700 hover:text-navy-700 transition-colors shrink-0"
      >
        Download PDF ↓
      </a>
    </div>
  );
}

export default function Ebook() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="border-b border-gray-200 pb-10 mb-12">
        <p className="font-inter text-xs tracking-[0.25em] uppercase text-navy-600 mb-3">Publications</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Ebooks</h1>
        <p className="font-inter text-base text-gray-500 mt-4 max-w-xl leading-relaxed">
          A collection of authored and co-authored digital textbooks, lab manuals, and reference books for engineering students.
        </p>
      </div>

      {/* Textbooks Section */}
      <section className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-gray-400">Textbooks &amp; References</p>
          <div className="flex-1 border-t border-gray-100" />
          <span className="font-inter text-xs text-gray-400">{textbooks.length} books</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200">
          {textbooks.map((book) => (
            <EbookCard key={book.num} {...book} />
          ))}
        </div>
      </section>

      {/* Lab Manuals Section */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-gray-400">Lab Manuals</p>
          <div className="flex-1 border-t border-gray-100" />
          <span className="font-inter text-xs text-gray-400">{labManuals.length} manuals</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200">
          {labManuals.map((book) => (
            <div key={book.num} className="border border-stone-200 p-6 flex items-start justify-between gap-4 hover:border-gray-400 transition-colors bg-[#FDFAF6]">
              <div className="flex items-start gap-4">
                <span className="font-inter text-xs tracking-widest text-gray-400 pt-1 shrink-0">{book.num}</span>
                <h3 className="font-playfair text-lg font-semibold text-gray-900 leading-snug">
                  E-Book {book.title}
                </h3>
              </div>
              <a
                href={book.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-xs tracking-widest uppercase border border-gray-300 text-gray-500 px-4 py-2 rounded-sm whitespace-nowrap hover:border-navy-700 hover:text-navy-700 transition-colors shrink-0"
              >
                Download PDF ↓
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="font-inter text-sm text-gray-400">
          All ebooks are authored by Dr. Mukesh Kumar. PDF files are available for direct download.
        </p>
      </div>
    </div>
  );
}
