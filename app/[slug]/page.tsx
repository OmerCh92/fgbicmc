// Update the type signature to Expect a Promise, add 'async', and await the params
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // Await the params here!
  const page = pages.find((p) => p.slug === resolvedParams.slug);

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
