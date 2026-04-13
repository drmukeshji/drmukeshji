const schedule = [
  { day: 'Monday', time: '— TBD' },
  { day: 'Wednesday', time: '— TBD' },
  { day: 'Friday', time: '— TBD' },
];

// Replace FORM_URL below with your actual Google Form embed URL
// To get it: open your Google Form → Send → Embed → copy the src URL
const GOOGLE_FORM_URL = ''; // e.g. https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true

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
          <div className="border border-gray-200 p-6 rounded-sm">
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
          <div className="border border-gray-200 p-6 rounded-sm">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-gray-400 mb-5">Contact</p>
            <ul className="space-y-4">
              <li>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                <p className="font-inter text-sm text-gray-700">Add your email address</p>
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
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-gray-400 mb-5">Schedule a Meeting</p>

          {GOOGLE_FORM_URL ? (
            <iframe
              src={GOOGLE_FORM_URL}
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="border border-gray-200 rounded-sm"
              title="Office Hours Appointment Form"
            >
              Loading form…
            </iframe>
          ) : (
            <div className="border border-dashed border-gray-300 rounded-sm flex flex-col items-center justify-center min-h-[400px] text-center p-12">
              <p className="font-playfair text-xl text-gray-400 mb-3">Form Coming Soon</p>
              <p className="font-inter text-sm text-gray-400 max-w-sm leading-relaxed">
                The appointment form will be embedded here. In the meantime, please reach out via email to schedule a meeting.
              </p>
              <p className="font-inter text-xs text-gray-300 mt-6">
                Developer note: replace <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-500">GOOGLE_FORM_URL</code> in this page with your Google Form embed URL.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
