import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
const navigation = [
  {
    name: "Articles",
    href: "/articles",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
      <Link
  href="/"
  className="flex flex-col transition-opacity hover:opacity-80"
>
          <span className="text-2xl font-bold tracking-tight">
            Mackrov's Blog
          </span>

          {/* <span className="text-sm text-zinc-500 dark:text-zinc-400">
  Learn deeply. Explain clearly.
</span> */}
        </Link>

        <nav className="flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors text-zinc-600 hover:text-zinc-900
dark:text-zinc-400
dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
           <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}