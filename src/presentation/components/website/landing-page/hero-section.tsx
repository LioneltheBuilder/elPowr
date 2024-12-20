'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useState } from 'react';
import { HeroScene } from '../../three/scenes/HeroScene';
import { Button } from "../../ui/button";


export const HeroSection = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const supabase = createClientComponentClient()

  const handleSubscribe = async (email: string) => {
    try {
      setStatus('loading')
      await supabase.from('email_subscriptions').insert([{ email }])
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

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
              {['Not', 'your', 'typical', 'hackathon'].map((text, index) => {
                const colors = ['#29d1e0', '#29d1e0', '#a2d719', '#f29b1b'];
                const delays = [0.7, 0.7, 0.9, 1.1];
                
                return (
                  <React.Fragment key={index}>
                    <motion.div className="relative inline-block">
                      <motion.span
                        initial={{ 
                          opacity: 0,
                          filter: 'blur(10px)',
                          y: 20,
                          textShadow: '0 0 0px currentColor'
                        }}
                        animate={{ 
                          opacity: [0, 0.5, 1],
                          filter: ['blur(10px)', 'blur(0px)', 'blur(0px)'],
                          y: [20, 0, 0],
                          textShadow: ['0 0 20px currentColor', '0 0 10px currentColor', '0 0 20px currentColor']
                        }}
                        transition={{
                          duration: 1.5,
                          times: [0, 0.7, 1],
                          delay: delays[index],
                          ease: "easeOut",
                          textShadow: {
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                          }
                        }}
                        className={`text-[${colors[index]}] relative`}
                      >
                        {text}
                      </motion.span>
                    </motion.div>
                    {index < 3 && " "}
                  </React.Fragment>
                );
              })}
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
              className="flex justify-center mt-8"
            >
              <div className="flex gap-4 max-w-md w-full flex-col">
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 h-12 px-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#29d1e0]"
                  />
                  <Button 
                    onClick={() => handleSubscribe(email)}
                    disabled={status === 'loading'}
                    className="h-12 px-6 bg-[#29d1e0] text-[#202731] hover:bg-[#29d1e0]/90 font-medium text-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Registering...' : 'Register Interest'}
                  </Button>
                </div>
                {status === 'success' && (
                  <p className="text-[#a2d719] text-sm">Thanks for registering your interest!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
