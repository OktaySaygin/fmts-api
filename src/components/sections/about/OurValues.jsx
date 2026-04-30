'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { Spotlight } from '@/components/ui/spotlight';
import { Heart, Lightbulb, Shield, Users, Zap, Star, Globe, Rocket, Target, Compass, Gem, Leaf, Phone, Mail } from 'lucide-react';

const OurValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });


  const description = 'Our values form the foundation of our identity. We live these values in every decision, every project, and every customer relationship.';

  const coreValues = [
    {
      id: 1,
      icon: <Heart className='h-8 w-8' />,
      title: 'Customer Focus',
      subtitle: 'Putting People First',
      description: 'Our customers\' success is our success. We understand their needs and provide solutions that exceed expectations.',
      details: ['Active listening and empathy', '24/7 customer support', 'Continuous feedback collection', 'Long-term partnerships'],
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-500/20 to-pink-500/20',
    },
    {
      id: 2,
      icon: <Lightbulb className='h-8 w-8' />,
      title: 'Innovation',
      subtitle: 'Continuous Innovation Pursuit',
      description: 'We track technological developments and develop innovative solutions that lead the industry.',
      details: ['Research and development', 'Following new technologies', 'Creative problem solving', 'Patents and copyrights'],
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      id: 3,
      icon: <Shield className='h-8 w-8' />,
      title: 'Reliability',
      subtitle: 'Being True to Our Word',
      description: 'We fulfill our commitments on time and with quality, building trust-based relationships.',
      details: ['On-time delivery', 'Quality assurance', 'Transparent communication', 'Continuous support'],
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      id: 4,
      icon: <Users className='h-8 w-8' />,
      title: 'Teamwork',
      subtitle: 'Achieving Together',
      description: 'With our strong team spirit, we bring different perspectives together to create synergistic solutions.',
      details: ['Open communication', 'Knowledge sharing', 'Mutual support', 'Common goals'],
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-500/20 to-violet-500/20',
    },
    {
      id: 5,
      icon: <Star className='h-8 w-8' />,
      title: 'Excellence',
      subtitle: 'Aiming for the Best',
      description: 'We target the highest quality standards in every project, maintaining our pursuit of excellence.',
      details: ['Quality control processes', 'Continuous improvement', 'Best practices', 'Performance measurement'],
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      id: 6,
      icon: <Leaf className='h-8 w-8' />,
      title: 'Sustainability',
      subtitle: 'Thinking About the Future',
      description: 'Considering our environmental and social responsibilities, we provide sustainable technology solutions.',
      details: ['Green technologies', 'Energy efficiency', 'Social responsibility', 'Carbon footprint reduction'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  const principles = [
    {
      icon: <Compass className='h-6 w-6' />,
      title: 'Ethical Values',
      description: 'We act with principles of honesty, justice, and respect.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Gem className='h-6 w-6' />,
      title: 'Quality Focus',
      description: 'We adopt the highest quality standards in all our work.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Target className='h-6 w-6' />,
      title: 'Result Orientation',
      description: 'We work with determination to achieve targeted results.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Star className='h-6 w-6' />,
      title: 'Perfectionism',
      description: 'We constantly improve ourselves to reach better outcomes.',
      gradient: 'from-yellow-500 to-amber-500',
    },
  ];

  const commitments = [
    {
      title: 'To Our Customers',
      description: 'Provide the highest quality service and exceed expectations',
      icon: '🤝',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'To Our Team',
      description: 'Provide development opportunities and create a supportive environment',
      icon: '👥',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'To Society',
      description: 'Contribute to social responsibility projects',
      icon: '🌍',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'To the Future',
      description: 'Contribute to tomorrow\'s world with sustainable technologies',
      icon: '🚀',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black py-20' ref={ref}>
      <Spotlight className='-top-40 right-0 md:-top-20 md:right-60' fill='white' />

      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <motion.div className='mb-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
          <motion.div className='mb-6' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}>
            <AnimatedShinyText className='mb-4 text-lg font-medium text-neutral-400'>💎 Our Values</AnimatedShinyText>
            <h2 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
              <SparklesText text='Core Values' className='text-gray-200! bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl' />
            </h2>
          </motion.div>

          <motion.div className='mx-auto max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words={description} className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div className='mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 0.8 }}>
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              className='group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-white/30 hover:bg-white/8 hover:shadow-2xl hover:-translate-y-2'

              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              custom={index}

            >
              {/* Value Header */}
              <div className='mb-6'>
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${value.gradient} text-white shadow-lg`}>
                  {value.icon}
                </div>
                <div className='mb-2 text-sm font-medium text-neutral-400'>{value.subtitle}</div>
                <h3 className={`bg-gradient-to-r text-2xl font-bold ${value.gradient} bg-clip-text text-transparent`}>{value.title}</h3>
              </div>

              {/* Value Description */}
              <p className='mb-6 text-neutral-300'>{value.description}</p>

              {/* Value Details - Always Visible */}
              <div className='space-y-3'>
                <h4 className='text-sm font-semibold text-white'>Application Areas:</h4>
                {value.details.map((detail, detailIndex) => (
                  <motion.div 
                    key={detailIndex} 
                    className='flex items-center space-x-3 text-neutral-300'
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.05) }}
                  >
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${value.gradient}`} />
                    <span className='text-sm'>{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Animated border gradient */}
              <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${value.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-15`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Principles Section */}
        <motion.div className='mb-20' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.2 }}>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              <span className='bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'>Work Principles</span>
            </h3>
            <p className='text-lg text-neutral-300'>Fundamental principles that guide our daily activities</p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                custom={index}
              >
                <div className='mb-4 flex items-center justify-center'>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${principle.gradient} text-white shadow-lg`}>{principle.icon}</div>
                </div>
                <h4 className={`mb-3 bg-gradient-to-r text-lg font-semibold ${principle.gradient} bg-clip-text text-transparent`}>{principle.title}</h4>
                <p className='text-sm text-neutral-300'>{principle.description}</p>
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${principle.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div className='mb-20' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.5 }}>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Our Commitments</span>
            </h3>
            <p className='text-lg text-neutral-300'>Our responsibilities to different stakeholders</p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {commitments.map((item, index) => (
              <motion.div
                key={index}
                className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                custom={index}
              >
                <div className='mb-4 text-4xl'>{item.icon}</div>
                <h4 className={`mb-3 bg-gradient-to-r text-lg font-semibold ${item.gradient} bg-clip-text text-transparent`}>{item.title}</h4>
                <p className='text-sm text-neutral-300'>{item.description}</p>
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div className='text-center' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.8 }}>
          <div className='rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-md'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>Do You Share Our Values?</h3>
            <p className='mb-8 text-lg text-neutral-300'>We are looking for customers and business partners with similar values. Let's achieve great things together!</p>
            <div className='flex items-center justify-center gap-4 sm:flex-row'>
              <InteractiveHoverButton className='bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600'>
                Contact Us
              </InteractiveHoverButton>
            </div>
          </div>
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

export default OurValues;
