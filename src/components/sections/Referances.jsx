'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { SparklesText } from '../magicui/sparkles-text';
import { AnimatedShinyText } from '../magicui/animated-shiny-text';
import { StarIcon } from 'lucide-react';

const References = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [references, setReferences] = useState([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReferences(data));
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Completed', gradient: 'from-blue-400 to-cyan-400' },
    { number: '98%', label: 'Client Satisfaction', gradient: 'from-purple-400 to-pink-400' },
    { number: '24/7', label: 'Support Availability', gradient: 'from-green-400 to-emerald-400' },
    { number: '100%', label: 'Average Rating', gradient: 'from-orange-400 to-red-400' },
  ];

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black py-20'>
      <BackgroundBeams />

      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div className='mb-16 text-center' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className='mb-4' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <SparklesText className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl'>Our References</SparklesText>
          </motion.div>

          <motion.div className='mx-auto mb-8 max-w-3xl' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words='Stories of our successful projects and happy clients. Every project is proof of the perfect fusion of technology and creativity.' className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>

          <motion.div className='mb-12' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <AnimatedShinyText className='text-lg font-medium text-neutral-400'>✨ Growing with 100+ Happy Clients</AnimatedShinyText>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div className='mb-20 grid grid-cols-2 gap-6 md:grid-cols-4' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
          {stats.map((stat, index) => (
            <motion.div key={index} className='group relative' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <div className='flex h-full items-center justify-center space-x-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'>
                <div className={`bg-gradient-to-r text-3xl font-bold md:text-4xl ${stat.gradient} bg-clip-text text-transparent`}>{stat.number}</div>
                <div className='text-sm font-medium text-neutral-300 md:text-base'>{stat.label}</div>
              </div>
              <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20' />
            </motion.div>
          ))}
        </motion.div>

        {/* References Grid */}
        <motion.div className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}>
          {references.map((ref, index) => (
            <motion.div key={ref.id} className='group relative h-full' onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <div className='relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'>
                <div className='mb-4 flex items-center space-x-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-neutral-700 to-neutral-600'>
                    <div className='h-8 w-8 rounded-full bg-white/20'></div>
                  </div>
                  <div>
                    <h3 className='font-semibold text-white'>{ref.company}</h3>
                    <p className={`bg-gradient-to-r text-sm ${ref.gradient} bg-clip-text font-medium text-transparent`}>{ref.project}</p>
                  </div>
                </div>

                <div className='mb-6'>
                  <p className='text-sm leading-relaxed text-neutral-300 md:text-base'>"{ref.review}"</p>
                </div>

                <div className='mb-4 flex items-center space-x-1'>
                  {[...Array(ref.rating)].map((_, i) => (
                    <motion.div key={i} className='text-yellow-400' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}>
                      <StarIcon className='h-5 w-5' />
                    </motion.div>
                  ))}
                </div>

                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium text-white'>{ref.name}</p>
                    <p className='text-sm text-neutral-400'>{ref.position}</p>
                  </div>
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${ref.gradient}`}></div>
                </div>

                <AnimatePresence>{hoveredIndex === index && <motion.div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} />}</AnimatePresence>
              </div>

              <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20' />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className='text-center' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }}>
          <h3 className='mb-4 text-2xl font-bold text-white md:text-3xl'>Be Part of Our Story</h3>
          <p className='mb-8 text-lg text-neutral-300'>Let’s bring your dream project to life together</p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <InteractiveHoverButton className='bg-white px-8 py-4 text-lg font-semibold text-black hover:bg-gray-100'>Start Your Project</InteractiveHoverButton>
            <InteractiveHoverButton className='border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/10'>View All References</InteractiveHoverButton>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className='absolute top-20 left-10 h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-purple-500' />
        <div className='absolute top-40 right-20 h-3 w-3 animate-bounce rounded-full bg-gradient-to-r from-green-400 to-cyan-500' />
        <div className='absolute bottom-40 left-20 h-1 w-1 animate-ping rounded-full bg-gradient-to-r from-pink-400 to-red-500' />
      </div>
    </div>
  );
};

export default References;
