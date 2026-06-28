import type { Heading } from "@/lib/content/posts";

type Props = {
  headings: Heading[];
};

export default function TableOfContents({
  headings,
}: Props) {
  if (headings.length === 0) return null;

  return (
    <aside className="mb-10 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <h2 className="mb-4 text-lg font-semibold">
        Contents
      </h2>

      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.slug}
              className={
                heading.level === 3
                  ? "ml-4"
                  : ""
              }
            >
              <a
                href={`#${heading.slug}`}
                className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}