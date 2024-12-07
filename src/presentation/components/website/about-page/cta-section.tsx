import { Button } from "@/src/presentation/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className=" bg-black flex items-center justify-center p-4 pb-14">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#131412] to-black/50 rounded-3xl p-8 md:p-12 lg:p-16 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Want to join our journey?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn how you can become part of Digital Builders
          </p>
          <div>
            <Link href="https://discord.gg/9HD4gyP3" target="_blank">
              <Button className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
