import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white"
            >
              gari<span className="text-blue-500">book</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Simple, reliable and comfortable rides for every journey.
              Wherever you're going, we're here to get you there.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-500"
                aria-label="Facebook"
              >
                <FaFacebook size={17} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-500"
                aria-label="Instagram"
              >
                <BsInstagram size={17} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-500"
                aria-label="LinkedIn"
              >
                <BsLinkedin size={17} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition hover:border-blue-500 hover:text-blue-500"
                aria-label="Twitter"
              >
                <BsTwitterX size={17} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#about" className="transition hover:text-blue-500">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-blue-500">
                  Services
                </a>
              </li>

              <li>
                <a href="#use-cases" className="transition hover:text-blue-500">
                  Use Cases
                </a>
              </li>

              <li>
                <a href="#blogs" className="transition hover:text-blue-500">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  City Rides
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Airport Transfers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Hourly Rentals
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Intercity Travel
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Garibook. All rights reserved.
            </p>

            <p>
              Made for better journeys.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;