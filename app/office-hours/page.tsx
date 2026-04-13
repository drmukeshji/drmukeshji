const schedule = [
  { day: 'Monday', time: '10:00 AM – 4:00 PM' },
  { day: 'Tuesday', time: '10:00 AM – 4:00 PM' },
  { day: 'Wednesday', time: '10:00 AM – 4:00 PM' },
  { day: 'Thursday', time: '10:00 AM – 4:00 PM' },
  { day: 'Friday', time: '10:00 AM – 4:00 PM' },
];

// Replace FORM_URL below with your actual Google Form embed URL
// To get it: open your Google Form → Send → Embed → copy the src URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfV19RMZfBsnmxHuWXuYy_z9ATSN9u0GbufVrjQ-Ct4ECH_Bw/viewform?embedded=true';

export default function OfficeHours() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="border-b border-gray-200 pb-10 mb-12">
        <p className="font-inter text-xs tracking-[0.25em] uppercase text-gray-400 mb-3">Contact</p>
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Office Hours</h1>
        <p className="font-inter text-base text-gray-500 mt-4 max-w-xl leading-relaxed">
          I welcome students, colleagues, and researchers during my office hours. Please use the form below to schedule a meeting or ask a question.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Schedule */}
          <div className="border border-stone-200 p-6 rounded-2xl bg-[#FDFAF6]">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-gray-400 mb-5">Schedule</p>
            <ul className="space-y-4">
              {schedule.map((s) => (
                <li key={s.day} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="font-inter text-sm font-medium text-gray-900">{s.day}</span>
                  <span className="font-inter text-sm text-gray-400">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="border border-stone-200 p-6 rounded-2xl bg-[#FDFAF6]">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-gray-400 mb-5">Contact</p>
            <ul className="space-y-4">
              <li>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:drmukesh@gurugramuniversity.ac.in"
                  className="font-inter text-sm text-navy-700 hover:underline underline-offset-2"
                >
                  drmukesh@gurugramuniversity.ac.in
                </a>
              </li>
              <li>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-widest mb-1">Office</p>
                <p className="font-inter text-sm text-gray-700">Dept. of Engineering &amp; Technology<br />Gurugram University</p>
              </li>
              <li>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-widest mb-1">Department</p>
                <p className="font-inter text-sm text-gray-700">Engineering &amp; Technology</p>
              </li>
            </ul>
          </div>
        </aside>

        {/* Google Form Embed */}
        <div className="lg:col-span-2">
          {GOOGLE_FORM_URL ? (
            <div className="rounded-2xl overflow-hidden border border-stone-200">
              <div className="bg-[#F2EDE6] px-6 py-4 border-b border-stone-200">
                <p className="font-inter text-xs tracking-[0.2em] uppercase text-navy-600">Book an Appointment</p>
              </div>
              <iframe
                src={GOOGLE_FORM_URL}
                width="100%"
                height="700"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="bg-white"
                title="Office Hours Appointment Form"
              >
                Loading form...
              </iframe>
            </div>
          ) : (
            <div className="rounded-2xl border border-stone-200 overflow-hidden">
              <div className="bg-[#F2EDE6] px-6 py-4 border-b border-stone-200">
                <p className="font-inter text-xs tracking-[0.2em] uppercase text-navy-600">Book an Appointment</p>
              </div>
              <div className="bg-[#FDFAF6] flex flex-col items-center justify-center min-h-[360px] text-center p-12">
                <div className="w-12 h-12 rounded-full bg-navy-50 border border-navy-100 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-playfair text-xl text-gray-700 mb-2">Appointment Form</p>
                <p className="font-inter text-sm text-gray-400 max-w-xs leading-relaxed">
                  The scheduling form will appear here once the Google Form link is configured.
                </p>
                <p className="font-inter text-xs text-gray-300 mt-5 bg-white border border-stone-200 rounded-lg px-3 py-2">
                  Add your form URL to <code className="text-navy-500">GOOGLE_FORM_URL</code> in this page
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
