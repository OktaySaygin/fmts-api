'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { Heart, Users, Target, Rocket, Star, Award, Code, Globe, Shield, Zap } from 'lucide-react';

const AboutHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const description = "As Codever, we harness the power of technology for business growth. Founded in 2025 with our young and dynamic team, we turn our clients' dreams into reality.";

  const stats = [
    { number: 25, label: 'Target Clients', suffix: '+', icon: <Heart className='h-5 w-5' />, gradient: 'from-red-400 to-pink-400' },
    { number: 50, label: 'Target Projects', suffix: '+', icon: <Code className='h-5 w-5' />, gradient: 'from-blue-400 to-cyan-400' },
    { number: 1, label: 'Year Goal', suffix: '', icon: <Star className='h-5 w-5' />, gradient: 'from-yellow-400 to-orange-400' },
    { number: 100, label: 'Excellence Target', suffix: '%', icon: <Award className='h-5 w-5' />, gradient: 'from-green-400 to-emerald-400' },
  ];

  const highlights = [
    {
      icon: <Rocket className='h-6 w-6' />,
      title: 'Innovation',
      description: 'Leading the way with cutting-edge technologies',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: 'Expert Team',
      description: 'Specialized professionals in their fields',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <Shield className='h-6 w-6' />,
      title: 'Quality Assurance',
      description: 'Highest standards in every project',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Zap className='h-6 w-6' />,
      title: 'Fast Delivery',
      description: 'Quick and efficient project completion',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black' ref={ref}>
      <BackgroundBeams />

      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mb-16 flex min-h-[calc(100vh-16px)] flex-col items-center justify-center px-4 pt-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl text-center'>
          {/* Badge */}
          <motion.div className='mb-8' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
            <AnimatedShinyText className='text-lg font-medium text-neutral-400'>✨ Pioneer of Digital Transformation</AnimatedShinyText>
          </motion.div>

          {/* Main Heading */}
          <motion.div className='mb-8' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}>
            <h1 className='mb-6 text-center text-4xl font-bold md:text-6xl lg:text-7xl'>
              <span className='block bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>About Us</span>
              <div className='my-4 block'>
                <SparklesText text='Codever' className='text-gray-200! bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-bold md:text-6xl lg:text-7xl' />
              </div>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div className='mx-auto mb-12 max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words={description} className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>

          {/* Action Buttons */}
          <motion.div className='mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <InteractiveHoverButton className='bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600'>Meet Our Team</InteractiveHoverButton>
            <InteractiveHoverButton className='border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/10'>Contact Us</InteractiveHoverButton>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div className='mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1 }}>
                     {stats.map((stat, index) => (
             <motion.div key={index} className='group relative h-full' whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 400 }}>
               <div className='h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'>
                <div className='mb-3 flex items-center justify-center'>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${stat.gradient} text-white`}>{stat.icon}</div>
                </div>
                <div className={`bg-gradient-to-r text-2xl font-bold md:text-3xl ${stat.gradient} mb-2 bg-clip-text text-transparent`}>
                  {isInView && <NumberTicker value={stat.number} />}
                  {stat.suffix}
                </div>
                <div className='text-sm font-medium text-neutral-300 md:text-base'>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Section */}
        <motion.div className='mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.3 }}>
                     {highlights.map((highlight, index) => (
             <motion.div key={index} className='group relative' whileHover={{ scale: 1.005 }} transition={{ type: 'spring', stiffness: 500 }}>
               <div className='h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'>
                <div className='mb-4 flex items-center justify-center'>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${highlight.gradient} text-white shadow-lg`}>{highlight.icon}</div>
                </div>
                <h3 className='mb-2 text-lg font-semibold text-white'>{highlight.title}</h3>
                <p className='text-sm text-neutral-400'>{highlight.description}</p>
              </div>
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${highlight.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className='absolute top-20 left-10 h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-purple-500' />
        <div className='absolute top-40 right-20 h-3 w-3 animate-bounce rounded-full bg-gradient-to-r from-green-400 to-cyan-500' />
        <div className='absolute bottom-40 left-20 h-1 w-1 animate-ping rounded-full bg-gradient-to-r from-pink-400 to-red-500' />
        <div className='absolute right-10 bottom-20 h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-yellow-400 to-orange-500' />
      </div>
    </div>
  );
};

export default AboutHero;
