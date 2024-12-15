import { Logo } from "../common/Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo className="text-xl" />
          <p className="text-white/60 text-sm">
            © 2024 BL Hackathon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
