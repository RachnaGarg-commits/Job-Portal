const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} JobPortal. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            Twitter
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer
