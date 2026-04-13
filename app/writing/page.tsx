const researchAreas = [
  'Intelligent Systems',
  'Cloud Computing',
  'Data-Driven Methodologies',
  'Artificial Intelligence',
  'Machine Learning',
  'Network Security',
  'Software Engineering',
];

const publications = [
  // Placeholder — real publications to be added
  // { title: '', venue: '', year: '', type: 'journal' | 'conference' },
];

export default function Writing() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="border-b border-gray-200 pb-10 mb-12">
        <p className="font-inter text-xs tracking-[0.25em] uppercase text-navy-600 mb-3">Research</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Writing</h1>
        <p className="font-inter text-base text-gray-500 mt-4 max-w-xl leading-relaxed">
          Over 100 publications in reputed national and international journals and conferences, spanning artificial intelligence, cloud computing, and data science.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-px bg-stone-200 mb-14">
        <div className="bg-[#FDFAF6] p-8 text-center">
          <p className="font-playfair text-5xl font-bold text-navy-800">100+</p>
          <p className="font-inter text-xs tracking-widest uppercase text-gray-400 mt-2">Publications</p>
        </div>
        <div className="bg-[#FDFAF6] p-8 text-center">
          <p className="font-playfair text-5xl font-bold text-navy-800">19+</p>
          <p className="font-inter text-xs tracking-widest uppercase text-gray-400 mt-2">Years Research</p>
        </div>
        <div className="bg-[#FDFAF6] p-8 text-center">
          <p className="font-playfair text-5xl font-bold text-navy-800">7</p>
          <p className="font-inter text-xs tracking-widest uppercase text-gray-400 mt-2">Research Areas</p>
        </div>
      </div>

      {/* Research Areas */}
      <section className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-navy-600">Research Areas</p>
          <div className="flex-1 border-t border-gray-100" />
        </div>
        <div className="flex flex-wrap gap-2">
          {researchAreas.map((area) => (
            <span
              key={area}
              className="font-inter text-xs tracking-widest uppercase border border-navy-100 text-navy-700 px-4 py-2 rounded-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-navy-600">Publications</p>
          <div className="flex-1 border-t border-gray-100" />
        </div>

        {publications.length > 0 ? (
          <div className="space-y-0 border border-gray-200 rounded-sm divide-y divide-gray-100">
            {publications.map((pub, idx) => (
              <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                <p className="font-playfair text-base font-semibold text-gray-900 mb-1">{pub.title}</p>
                <p className="font-inter text-sm text-gray-500">{pub.venue} · {pub.year}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-gray-300 rounded-sm p-12 text-center">
            <p className="font-playfair text-xl text-gray-400 mb-2">Publications Coming Soon</p>
            <p className="font-inter text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
              The full list of 100+ publications will be added here. Each entry will include the title, venue, year, and a link to the paper.
            </p>
          </div>
        )}
      </section>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="font-inter text-sm text-gray-400">
          For a complete list of publications, please contact Dr. Kumar directly or visit his institutional profile.
        </p>
      </div>
    </div>
  );
}
