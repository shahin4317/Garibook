
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-black text-white">GARI<span className="text-emerald-500">BOOK</span></span>
          <p className="mt-2 text-xs text-gray-500">© 2026 Garibook Clone for Technical Assessment. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition">Terms of Service</a>
          <a href="#support" className="hover:text-white transition">Support</a>
        </div>
      </div>
    </footer>
  );
}