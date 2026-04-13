export default function Writing() {
  const publications = [
    // Add your publications here
    // { title: 'Publication Title', year: 2024, venue: 'Journal/Conference Name', link: '#' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Writing & Publications</h1>

      <div>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Here you can find my research papers, articles, and other publications.
        </p>
      </div>

      {publications.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Publications</h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{pub.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{pub.venue} ({pub.year})</p>
                <a href={pub.link} className="text-blue-600 hover:text-blue-800 font-semibold">
                  View Publication →
                </a>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          <p className="text-gray-600">Add your publications and research here.</p>
        </div>
      )}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Research Areas</h2>
        <p className="text-gray-600">
          Share your research interests and areas of expertise here.
        </p>
      </section>
    </div>
  );
}
