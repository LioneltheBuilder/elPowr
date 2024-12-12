import Image from "next/image";
import { Button } from "../../ui/button";

export const Navbar = () => {
  const navLinks = [
    { id: 1, name: 'About', href: '#about' },
    { id: 2, name: 'Schedule', href: '#schedule' },
    { id: 3, name: 'Sponsors', href: '#sponsors' },
    { id: 4, name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
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

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ id, name, href }) => (
              <a
                key={id}
                href={href}
                className="text-white/70 hover:text-white transition-colors"
              >
                {name}
              </a>
            ))}
          </div>

          <div className="items-center space-x-4 hidden md:flex">
            <Button className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 