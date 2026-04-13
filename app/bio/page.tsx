export default function Bio() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-10 mb-12">
        <p className="font-inter text-xs tracking-[0.25em] uppercase text-gray-400 mb-3">About</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Dr. Mukesh Kumar
        </h1>
        <p className="font-inter text-base text-gray-500 mt-4 tracking-wide">
          Associate Professor · Department of Engineering &amp; Technology · Gurugram University
        </p>
      </div>

      {/* Bio Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Quick Stats Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="border border-gray-200 p-6 rounded-sm">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">At a Glance</p>
            <ul className="space-y-4">
              <li>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-widest">Experience</p>
                <p className="font-playfair text-xl font-semibold text-gray-900 mt-1">19+ Years</p>
              </li>
              <li>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-widest">Publications</p>
                <p className="font-playfair text-xl font-semibold text-gray-900 mt-1">100+</p>
              </li>
              <li>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-widest">Qualification</p>
                <p className="font-inter text-sm text-gray-700 mt-1">B.Tech · M.Tech · Ph.D</p>
              </li>
              <li>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-widest">Specialization</p>
                <p className="font-inter text-sm text-gray-700 mt-1">Computer Engineering &amp; Allied Domains</p>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 p-6 rounded-sm">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Expertise</p>
            <div className="flex flex-wrap gap-2">
              {['AI', 'Machine Learning', 'Cloud Computing', 'Data Science', 'Networking', 'Software Engineering'].map((tag) => (
                <span key={tag} className="font-inter text-xs border border-gray-300 text-gray-600 px-3 py-1 rounded-sm tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Bio Text */}
        <div className="lg:col-span-2 space-y-8">
          <p className="font-inter text-base text-gray-700 leading-[1.9] font-light">
            Dr. Mukesh Kumar is a academician and administrator currently serving as an Associate Professor in the Department of Engineering and Technology at Gurugram University. With more than 19 years of experience in teaching, research, and academic administration, he has established himself as a dedicated educator committed to excellence in higher technical education. His role involves not only academic leadership but also strategic planning, faculty coordination, and the overall development of the department.
          </p>

          <p className="font-inter text-base text-gray-700 leading-[1.9] font-light">
            Dr. Kumar possesses a strong academic foundation with qualifications including B.Tech, M.Tech, and Ph.D. in the field of engineering and technology, with a specialization in Computer Engineering and allied domains. His areas of expertise encompass emerging and in-demand fields such as Artificial Intelligence, Machine Learning, Cloud Computing, Data Science, Networking and Software Engineering. He has consistently focused on bridging the gap between theoretical knowledge and practical application, thereby preparing students to meet industry expectations and technological advancements.
          </p>

          <div className="border-l-2 border-gray-900 pl-6">
            <p className="font-playfair text-xl italic text-gray-800 leading-relaxed">
              &quot;Bridging the gap between theoretical knowledge and practical application, preparing students to meet industry expectations and technological advancements.&quot;
            </p>
          </div>

          <p className="font-inter text-base text-gray-700 leading-[1.9] font-light">
            In his teaching career, Dr. Mukesh Kumar has made significant contributions through the adoption of innovative pedagogical practices. He actively implements Outcome-Based Education (OBE), integrates ICT tools into classroom teaching, and emphasizes experiential and student-centric learning approaches. His dedication to curriculum development and academic innovation ensures that the courses offered remain aligned with current industry standards and global trends. He is also deeply involved in mentoring students, guiding them in academic projects, research work, and career development.
          </p>

          <p className="font-inter text-base text-gray-700 leading-[1.9] font-light">
            Dr. Kumar has a commendable research profile, with over 100 publications in reputed national and international journals and conferences. His research interests primarily lie in advanced computing technologies, and he has contributed to the dissemination of knowledge in areas such as intelligent systems, cloud-based solutions, and data-driven methodologies. Through his scholarly work, he continues to promote a research-oriented culture within the institution and encourages students and faculty members to engage in meaningful research activities.
          </p>

          <p className="font-inter text-base text-gray-700 leading-[1.9] font-light">
            Apart from his academic and research contributions, Dr. Mukesh Kumar plays a vital role in institutional development. He has been actively associated with quality assurance and accreditation processes, particularly in NAAC-related activities such as preparation of AQARs and SSRs. He also contributes to initiatives aimed at improving the university&apos;s standing in national rankings such as NIRF. His involvement in administrative bodies like the Academic Council and Board of Studies reflects his commitment to policy-making and governance in higher education.
          </p>

          <p className="font-inter text-base text-gray-700 leading-[1.9] font-light">
            In addition to his professional responsibilities, Dr. Kumar is engaged in various extension and outreach activities. He participates in organizing Faculty Development Programs, workshops, and seminars, and supports initiatives related to environmental awareness and social responsibility, including programs like Paryavaran Pathshala. His holistic approach to education, which combines teaching, research, administration, and community engagement, highlights his dedication to the comprehensive development of students and society.
          </p>

          <div className="border-t border-gray-200 pt-6">
            <p className="font-inter text-base text-gray-700 leading-[1.9] font-light">
              Overall, Dr. Mukesh Kumar is a committed academic leader whose contributions to Gurugram University have significantly enhanced the quality of education, research, and institutional growth. His extensive experience, forward-looking approach, and dedication to academic excellence make him a valuable asset to the field of engineering education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
