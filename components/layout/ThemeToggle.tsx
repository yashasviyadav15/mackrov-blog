// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <button
//       onClick={() =>
//         setTheme(theme === "dark" ? "light" : "dark")
//       }
//       className="rounded-lg border px-3 py-2 text-sm"
//     >
//       {theme === "dark" ? "☀️" : "🌙"}
//     </button>
//   );
// }
"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      suppressHydrationWarning
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="rounded-lg border px-3 py-2 text-sm"
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}