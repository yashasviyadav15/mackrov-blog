import Link from "next/link";

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
    <header className="border-b border-gray-200">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight">
            MACKROV
          </span>

          <span className="text-sm text-gray-500">
            Engineering Notes
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}