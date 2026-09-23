import { useState } from "react";

const navLinks = [
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Earn With Garibook",
    href: "#earn",
  },
  {
    name: "Garibook Business",
    href: "#business",
  },
  {
    name: "Garibook Club",
    href: "#club",
  },
  {
    name: "Campaign",
    href: "#campaign",
  },
  {
    name: "Blogs",
    href: "#blogs",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4"
          aria-label="Garibook Home"
        >
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Garibook
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-black focus:outline-none focus-visible:text-black"
            >
              {link.name}
            </a>
          ))}

          {/* Language */}
          <button
            type="button"
            className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-black focus:outline-none focus-visible:text-black"
          >
            English
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1200px] flex-col px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleCloseMenu}
              className="border-b border-slate-100 px-2 py-4 text-sm font-medium text-slate-700 transition-colors hover:text-black focus:outline-none focus-visible:text-black last:border-b-0"
            >
              {link.name}
            </a>
          ))}

          <button
            type="button"
            className="px-2 py-4 text-left text-sm font-medium text-slate-700 transition-colors hover:text-black focus:outline-none focus-visible:text-black"
            onClick={handleCloseMenu}
          >
            English
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;