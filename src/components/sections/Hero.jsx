'use client';
import React from 'react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { FlipWords } from '../ui/flip-words';
import { motion } from 'motion/react';

const Hero = () => {
  const flipWords = ['Codever', 'Innovative', 'Game-Changing', 'Next-Gen'];
  const description = "We craft tomorrow's digital solutions today. With cutting-edge technologies and creative approaches, we transform your business for the digital revolution.";

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black'>
      <BackgroundBeams />

      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 flex min-h-[calc(100vh-16px)] flex-col items-center justify-center px-4 pt-16 sm:px-6 lg:px-8 lg:pt-0'>
        <div className='mx-auto max-w-7xl text-center'>
          {/* Main Heading with Multiple Effects */}
          <motion.div className='mb-8' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <h1 className='mb-4 text-center text-4xl font-bold md:text-6xl lg:text-8xl'>
              <span className='block bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>The Future is</span>
              <div className='my-4 block'>
                <FlipWords words={flipWords} className='mb-4 text-center text-4xl font-bold md:text-6xl lg:text-8xl' />
              </div>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div className='mx-auto mb-12 max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words={description} className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>

          {/* Action Buttons */}
          <motion.div className='mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <div className='relative'>
              <InteractiveHoverButton className='bg-white px-8 py-4 text-lg font-semibold text-black hover:bg-gray-100'>Start Your Project</InteractiveHoverButton>
            </div>

            <InteractiveHoverButton className='border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/10'>View Our Portfolio</InteractiveHoverButton>
          </motion.div>

          {/* Stats Section with Enhanced Design */}
          <motion.div className='mx-auto grid max-w-5xl grid-cols-1 gap-y-8 md:grid-cols-3 lg:gap-8' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}>
            {[
              {
                number: '100+',
                label: 'Projects Delivered',
                gradient: 'from-blue-400 to-cyan-400',
              },
              {
                number: '150+',
                label: 'Happy Clients',
                gradient: 'from-purple-400 to-pink-400',
              },
              {
                number: '8+',
                label: 'Years Experience',
                gradient: 'from-green-400 to-emerald-400',
              },
            ].map((stat, index) => (
              <motion.div key={index} className='group relative' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20'>
                  <div className={`bg-gradient-to-r text-4xl font-bold md:text-5xl ${stat.gradient} mb-2 bg-clip-text text-transparent`}>{stat.number}</div>
                  <div className='text-lg font-medium text-neutral-300'>{stat.label}</div>
                </div>
                <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20' />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Modern Elements */}
          <motion.div className='mt-20 hidden justify-center space-x-8 opacity-60 lg:flex' initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ duration: 1, delay: 1.5 }}>
            {['Mobile App', 'Web App', 'Desktop App', 'Digital Solutions'].map((tech, index) => (
              <motion.span key={tech} className='rounded-full border border-neutral-800 px-3 py-1 font-mono text-sm text-neutral-400' whileHover={{ scale: 1.1, color: '#ffffff' }} transition={{ type: 'spring', stiffness: 400 }}>
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className='absolute top-20 left-10 h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-purple-500' />
      <div className='absolute top-40 right-20 h-3 w-3 animate-bounce rounded-full bg-gradient-to-r from-green-400 to-cyan-500' />
      <div className='absolute bottom-40 left-20 h-1 w-1 animate-ping rounded-full bg-gradient-to-r from-pink-400 to-red-500' />
    </div>
  );
};

export default Hero;
