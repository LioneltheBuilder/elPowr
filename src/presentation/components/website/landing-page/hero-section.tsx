'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroScene } from '../../three/scenes/HeroScene';
import { Button } from "../../ui/button";

export const HeroSection = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <HeroScene />
      <div className="absolute inset-0 z-10">
        <motion.div 
          style={{ y: y1, opacity }}
          className="relative max-w-4xl mx-auto text-center space-y-8 pt-24 px-4"
        >
          <div className="backdrop-blur-md bg-black/30 rounded-2xl p-8 shadow-2xl border border-white/5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center rounded-full border border-[#29d1e0]/20 bg-[#29d1e0]/10 px-3 py-1 text-sm text-[#29d1e0] code-font"
            >
              <span className="mr-1">+</span> Coming Soon
            </motion.div>

            <motion.h1 
              style={{ y: y2 }}
              className="text-5xl md:text-7xl leading-tight tracking-tight mt-8"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-[#29d1e0] drop-shadow-[0_2px_8px_rgba(41,209,224,0.5)]"
              >
                Not your
              </motion.span>{" "}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-[#a2d719] drop-shadow-[0_2px_8px_rgba(162,215,25,0.5)]"
              >
                typical
              </motion.span>{" "}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-[#f29b1b] drop-shadow-[0_2px_8px_rgba(242,155,27,0.5)]"
              >
                hackathon
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-[#ee0672] drop-shadow-[0_2px_8px_rgba(238,6,114,0.5)]"
              >
                !
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto font-light mt-8"
            >
              Where code, culture, and community come together to shape a new future
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="flex justify-center gap-4 mt-8"
            >
              <Button className="h-12 px-6 bg-[#29d1e0] text-[#202731] hover:bg-[#29d1e0]/90 font-medium text-lg shadow-lg hover:shadow-xl transition-all">
                Register Interest
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
