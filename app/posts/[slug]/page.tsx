// fgbicmc-main/app/posts/[slug]/page.tsx

// Update the type signature to Expect a Promise, add 'async', and await the params
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // Await the params here!
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
