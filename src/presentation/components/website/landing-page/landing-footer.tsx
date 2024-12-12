import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold flex items-center">
              <Image
                alt="BL Hackathon"
                width={50}
                height={50}
                src="/hackathon/logo.png"
                className=""
              />
              <span className="font-bold text-white text-lg">
                BL Hackathon
              </span>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
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
                href="#"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
              >
                <Linkedin className="h-5 w-5 text-[#9AE662]" />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a
                  href="mailto:bl.hackathoninfo@gmail.com"
                  className="hover:text-green-400 transition-colors"
                >
                  bl.hackathoninfo@gmail.com
                </a>
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
