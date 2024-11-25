import Link from 'next/link';
import {  Instagram, Linkedin,  Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <span className="text-green-400 mr-1">×</span> DB
            </Link>
            <p className="text-gray-400 max-w-xs">
              Experience digital transformation like never before with our
              comprehensive solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/digitalbuilders_/"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
              >
                <Instagram className="h-5 w-5 text-[#9AE662]" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
              >
                <Twitter className="h-5 w-5 text-[#9AE662]" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/the-digital-builders-757/about/"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
              >
                <Linkedin className="h-5 w-5 text-[#9AE662]" />
              </Link>
              <Link
                href="https://www.youtube.com/@lionelthebuilder"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
              >
                <Youtube className="h-5 w-5 text-[#9AE662]"/>
              </Link>
            </div>
          </div>

          {/* Pages Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Page</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Section - Intentionally empty for layout */}
          <div className="hidden md:block"></div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a
                  href="mailto:contact@db757.com"
                  className="hover:text-green-400 transition-colors"
                >
                  contact@db757.com
                </a>
              </li>
              <li className="text-gray-400">
                <a
                  href="tel:+17573245145"
                  className="hover:text-green-400 transition-colors"
                >
                  (757) 324-5145
                </a>
              </li>
              <li className="text-gray-400">
                400 Granby St,
                <br />
                Norfolk, VA 23510
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 DB757. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                Cookies Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
