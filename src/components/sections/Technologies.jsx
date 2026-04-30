'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { SparklesText } from '../magicui/sparkles-text';
import { AnimatedShinyText } from '../magicui/animated-shiny-text';
import { NumberTicker } from '../magicui/number-ticker';
import { iconFormatter } from '@/hooks/iconFormatter';

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    fetch('/api/techs')
      .then(res => res.json())
      .then(data => setTechnologies(data));
  }, []);

  const categories = ['All', 'Frontend', 'Business', 'Mobile', 'Backend', 'Innovation', 'Infrastructure', 'Security', 'Analytics', 'Integration', 'Optimization', 'Support', 'Design'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTechnologies = selectedCategory === 'All' ? technologies : technologies.filter(tech => tech.category === selectedCategory);

  const stats = [
    { number: 50, label: 'Business Solutions', suffix: '+', gradient: 'from-blue-400 to-cyan-400' },
    { number: 1000, label: 'Successful Projects', suffix: '+', gradient: 'from-purple-400 to-pink-400' },
    { number: 5, label: 'Years Experience', suffix: '+', gradient: 'from-green-400 to-emerald-400' },
    { number: 99, label: 'Client Satisfaction', suffix: '%', gradient: 'from-orange-400 to-red-400' },
  ];

  // Orbiting Circles Component
  const OrbitingCircles = ({ radius = 160, duration = 20, delay = 0, reverse = false, children }) => {
    return (
      <motion.div
        className='absolute inset-0 flex items-center justify-center'
        animate={{
          rotate: reverse ? -360 : 360,
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className='absolute flex items-center justify-center'
          style={{
            width: radius * 2,
            height: radius * 2,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
          }}
        >
          {React.Children.map(children, (child, index) => {
            const angle = (index * 360) / React.Children.count(children);
            return (
              <div
                key={index}
                className='absolute flex items-center justify-center'
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(${reverse ? angle : -angle}deg)`,
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black py-20' ref={ref}>
      <BackgroundBeams />

      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div className='mb-16 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
          <motion.div className='mb-4' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}>
            <SparklesText className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl'>Our Solutions</SparklesText>
          </motion.div>

          <motion.div className='mx-auto mb-8 max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words='We use cutting-edge technologies to deliver business solutions that drive growth, improve efficiency, and delight your customers.' className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>

          <motion.div className='mb-12' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <AnimatedShinyText className='text-lg font-medium text-neutral-400'>✨ Technology That Transforms Business</AnimatedShinyText>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div className='mb-20 grid grid-cols-2 gap-6 md:grid-cols-4' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1 }}>
          {stats.map((stat, index) => (
            <motion.div key={index} className='group relative h-full' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <div className='h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'>
                <div className={`bg-gradient-to-r text-3xl font-bold md:text-4xl ${stat.gradient} mb-2 bg-clip-text text-transparent`}>
                  {isInView && <NumberTicker value={stat.number} />}
                  {stat.suffix}
                </div>
                <div className='text-sm font-medium text-neutral-300 md:text-base'>{stat.label}</div>
              </div>
              <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20' />
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div className='mb-12 flex flex-wrap justify-center gap-4' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 1.4 }}>
          {categories.map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`relative rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-white/20 text-white shadow-lg' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'}`}>
              {category}
              {selectedCategory === category && <motion.div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20' layoutId='categoryHighlight' initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 0.3 }} />}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div className='mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.6 }}>
          {filteredTechnologies.map((tech, index) => (
            <motion.div key={tech.id} className='h-full group relative' onMouseEnter={() => setHoveredTech(tech.id)} onMouseLeave={() => setHoveredTech(null)} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} layout>
              <div className='h-full relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'>
                {/* Tech Icon */}
                <div className='mb-4 flex items-center justify-between'>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r text-white ${tech.gradient} text-2xl shadow-lg`}>
                    {/* Lucide Icon */}
                    {iconFormatter(tech.icon)}
                  </div>
                  <span className='rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-neutral-300'>{tech.category}</span>
                </div>

                {/* Tech Name */}
                <h3 className='mb-2 text-xl font-bold text-white'>{tech.name}</h3>

                {/* Description */}
                <p className='mb-4 text-sm leading-relaxed text-neutral-400'>{tech.description}</p>

                {/* Skill Level */}
                <div className='mb-4'>
                  <div className='mb-2 flex items-center justify-between'>
                    <span className='text-sm font-medium text-neutral-300'>Expertise</span>
                    <span className={`bg-gradient-to-r text-sm font-bold ${tech.gradient} bg-clip-text text-transparent`}>{tech.level}%</span>
                  </div>
                  <div className='h-2 rounded-full bg-white/10'>
                    <motion.div className={`h-full rounded-full bg-gradient-to-r ${tech.gradient}`} initial={{ width: 0 }} animate={isInView ? { width: `${tech.level}%` } : { width: 0 }} transition={{ duration: 1, delay: 1.8 + index * 0.1 }} />
                  </div>
                </div>

                {/* Projects Count */}
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-neutral-500'>Projects</span>
                  <span className={`bg-gradient-to-r text-lg font-bold ${tech.gradient} bg-clip-text text-transparent`}>{tech.projects}+</span>
                </div>

                {/* Business Value */}
                <div className='mt-4'>
                  <span className='text-sm font-medium text-neutral-300'>Business Value</span>
                  <p className='text-sm text-neutral-400'>{tech.businessValue}</p>
                </div>

                {/* Hover Effect */}
                {hoveredTech === tech.id && <motion.div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} />}
              </div>

              {/* Background Glow */}
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${tech.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className='text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 2 }}>
          <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>Ready to Grow Your Business?</h3>
          <p className='mb-8 text-lg text-neutral-300'>Let's discuss how our solutions can increase your revenue and efficiency</p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <InteractiveHoverButton className='bg-white px-8 py-4 text-lg font-semibold text-black hover:bg-gray-100'>Get Free Consultation</InteractiveHoverButton>
            <InteractiveHoverButton className='border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/10'>View Success Stories</InteractiveHoverButton>
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

export default Technologies;
