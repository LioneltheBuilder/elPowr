import { Button } from "../../ui/button";
import { Logo } from "../common/Logo";

export const Navbar = () => {
  return (
    <nav className="border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo className="text-2xl" />
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