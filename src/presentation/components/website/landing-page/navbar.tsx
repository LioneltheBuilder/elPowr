import { Button } from "../../ui/button";

export const Navbar = () => {
  return (
    <nav className="border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-medium tracking-tight">
              <span className="text-[#29d1e0]">{`{`}</span>
              <span className="text-[#29d1e0]">bl</span>
              <span className="text-[#29d1e0]">{`}`}</span>
              <span className="text-[#a2d719]">hack</span>
              <span className="text-[#f29b1b]">athon</span>
              <span className="text-[#ee0672]">;</span>
            </div>
          </div>

          <div className="items-center hidden md:flex">
            <Button className="bg-[#29d1e0] text-[#202731] hover:bg-[#29d1e0]/90 font-medium">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 