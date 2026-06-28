import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="mt-4 text-gray-600">
        The page youre looking for doesnt exist.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-lg border px-5 py-3 hover:bg-gray-100"
      >
        Back Home
      </Link>
    </div>
  );
}