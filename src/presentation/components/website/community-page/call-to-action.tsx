import { Button } from '@/src/presentation/components/ui/button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <section className="px-4 py-16 mx-4 md:mx-8 ">
        <div className="rounded-3xl bg-gradient-to-br from-[#131412] to-black/50 px-4 py-16 md:py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let`s Build the Future, Together
            </h2>
            
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#9AE662] text-black hover:bg-[#9AE662]/90"
              >
                <Link href="https://discord.gg/PzS4n2XW" target="_blank">
                  Join Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
