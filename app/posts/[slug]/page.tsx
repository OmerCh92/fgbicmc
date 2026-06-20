import Link from 'next/link';
import { notFound } from 'next/navigation';

// 1. The data array MUST remain outside and above the component
const posts = [
  { slug: 'strict-action-indiscipline', title: 'Strict action against indiscipline', date: '20 June 15, 2026', category: 'Notice', content: '<p>The college administration has decided to take strict action against any form of indiscipline...</p>' },
  { slug: 'summer-vacations', title: 'Summer Vacations Schedule', date: '21 May, 2026', category: 'Schedule', content: '<p>Please be informed that the college will observe summer vacations starting from 25 May. Classes will resume in August.</p>' },
  { slug: 'sports-week-winners', title: 'Sports Week 2026 Winners', date: '04 May, 2026', category: 'News', content: '<p>Congratulations to Jinnah House for securing the first position in the annual sports week.</p>' },
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. The updated async component
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <article className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200">
        <div className="mb-8 border-b pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Published: {post.date}</span>
            <span>Category: {post.category}</span>
          </div>
        </div>

        <div 
          className="prose max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link href="/#news" className="text-green-700 font-bold hover:underline">
            &larr; Back to Announcements
          </Link>
        </div>
      </article>
    </main>
  );
}