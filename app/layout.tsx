import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.mackrov.com"),

  title: {
    default: "Mackrov",
    template: "%s | Mackrov",
  },

  description:
    "Engineering notes on React, JavaScript and Frontend Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className="min-h-screen bg-background text-foreground">
      <ThemeProvider>
        <Header />
  
        <main className="mx-auto max-w-5xl px-6 py-12">
          {children}
        </main>
  
        <Footer />
      </ThemeProvider>
    </body>
  </html>
  );
}