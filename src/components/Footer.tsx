export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t border-blue-100 mt-10">
      <div className="container-app py-6 flex flex-col lg:flex-row justify-between items-center text-sm text-slate-600">
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} Online Shop Reviews. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
