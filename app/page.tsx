import Link from 'next/link';

export default function Home() {
  // Mock data for static export
  const announcements = [
    { id: 1, title: 'Strict action against indiscipline', excerpt: 'The college administration has decided to take strict action against any form of indiscipline...', category: 'Notice', slug: 'strict-action-indiscipline' },
    { id: 2, title: 'Summer Vacations Schedule', excerpt: 'Please be informed that the college will observe summer vacations starting from...', category: 'Schedule', slug: 'summer-vacations' },
    { id: 3, title: 'Sports Week 2025 Winners', excerpt: 'The College secures the first position in All Pakistan FGEI Quiat competition ...', category: 'News', slug: 'sports-week-winners' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-green-800 py-16 text-white text-center px-4 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">
            Admissions Open 2026
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8 font-light">
            Join the prestigious FG Boys Inter College Mardan. Excellence in Education, Discipline in Life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#apply" className="bg-white text-green-900 px-8 py-3 rounded font-bold shadow-xl hover:bg-gray-100 transition">
              Apply Online (1st Year)
            </Link>
            <a href="https://drive.google.com/file/d/1SjCoROZk5RyPOCL8TE4pvmLLrrorLvMK/view" target="_blank" className="border border-white/50 px-8 py-3 rounded font-bold hover:bg-white/10 transition">
              Download Prospectus
            </a>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section id="news" className="max-w-7xl mx-auto py-16 px-6">
        <div className="border-l-4 border-green-700 pl-4 mb-10">
          <h3 className="text-3xl font-black text-gray-900 uppercase">Latest Announcements</h3>
          <p className="text-gray-500 italic">Updated: {new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-green-300 transition flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-green-800 bg-green-100 px-2 py-1 rounded">
                  {post.category}
                </span>
                <h4 className="font-bold text-lg mt-3">{post.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
              </div>
              <Link href={`/posts/${post.slug}`} className="text-green-700 text-sm font-bold mt-4 inline-block hover:underline">
                Read Full Notice &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Candidate Registration */}
      <section id="apply" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden grid md:grid-cols-5">
          {/* Left Info Column */}
          <div className="md:col-span-2 bg-green-900 p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Candidate Registration</h3>
            <ul className="space-y-6 text-sm opacity-90">
              <li><strong className="block text-green-400">Step 1:</strong> Fill the online form with correct Matric marks.</li>
              <li><strong className="block text-green-400">Step 2:</strong> Upload CNIC/B-Form and Result Card.</li>
              <li><strong className="block text-green-400">Step 3:</strong> Visit campus for interview after Merit List.</li>
            </ul>
            <div className="mt-12 pt-8 border-t border-green-700">
              <p className="text-xs uppercase tracking-widest text-green-400 font-bold mb-2">Queries?</p>
              <p className="text-sm">Contact Admissions: 0937-867788</p>
            </div>
          </div>
          
          {/* Right Form Column */}
          <div className="md:col-span-3 p-0 md:p-10 flex flex-col justify-center w-full bg-white">
            <div className="w-full overflow-hidden rounded-lg">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSc7lxY8yW7ZrLEU-HSQHfMqUnNM9ZjL9FNoTD3sRSt9F2a3mw/viewform?embedded=true" 
                className="w-full h-[800px] border-0"
                title="Registration Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
