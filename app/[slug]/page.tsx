import { notFound } from 'next/navigation';

// Make sure every <Link> in your app has a corresponding slug here!
const pages = [
  { 
    slug: 'about', // Matches <Link href="/about">
    title: 'About Us', 
    content: '<p>Welcome to FG Boys Inter College Mardan. We are dedicated to excellence in education and discipline.</p>' 
  },
  { 
    slug: 'faculty-staff', // Matches <Link href="/faculty-staff">
    title: 'Faculty & Staff', 
    content: '<p>Meet our dedicated teaching and administrative staff.</p>' 
  },
  { 
    slug: 'contact', // Matches <Link href="/contact">
    title: 'Contact Us', 
    content: '<p>Reach out to us at our main campus in Mardan Cantt. Phone: 0937-867788</p>' 
  },
];

export function generateStaticParams() {
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = pages.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <div className="bg-gray-100 py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-green-900">{page.title}</h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <article className="bg-white p-8 md:p-14 rounded-xl shadow-sm border border-gray-100">
          <div 
            className="prose prose-green lg:prose-lg max-w-none prose-headings:text-green-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-img:mx-auto prose-img:rounded-xl prose-img:shadow-md prose-li:marker:text-green-700"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </article>
      </main>
    </>
  );
}