export default function Home() {
  return (
    <>
      <section className="py-20">
        <h1 className="text-5xl font-bold tracking-tight">
          Engineering Notes
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Thoughts on React, JavaScript,
          Frontend Engineering, and building
          software.
        </p>
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-semibold">
          Latest Articles
        </h2>

        <div className="rounded-xl border p-8">
          <p className="text-gray-500">
            No articles yet.
          </p>
        </div>
      </section>
    </>
  );
}