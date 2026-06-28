export default function Footer() {
    return (
      <footer className="border-t border-gray-200 mt-20">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mackrov.
          </p>
        </div>
      </footer>
    );
  }