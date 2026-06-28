export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-5xl font-bold">Mackrov</h1>

        <p className="mt-4 text-xl text-gray-600">
          Engineering Notes by Yash
        </p>

        <div className="mt-12 rounded-xl border p-6">
          <h2 className="text-2xl font-semibold">
            🚀 Welcome to Mackrov
          </h2>

          <p className="mt-4 text-gray-600">
            This is where I'll write about React,
            JavaScript, Frontend Engineering,
            System Design, Career and everything I
            learn while building software.
          </p>
        </div>
      </div>
    </main>
  );
}