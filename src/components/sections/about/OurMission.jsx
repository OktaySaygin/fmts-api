'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { Spotlight } from '@/components/ui/spotlight';
import { Target, Eye, Heart, Lightbulb, Globe, Rocket, Users, Shield, Zap, Star, TrendingUp, Building, Award } from 'lucide-react';

const OurMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState(null);

  const description = "Our mission and vision shape our path forward. Every step we take is guided by these fundamental principles that define who we are.";

  const missionVision = [
    {
      type: 'Mission',
      title: 'Our Mission',
      content: 'To create innovative technology solutions that empower businesses to achieve digital transformation and sustainable growth.',
      icon: <Target className='h-8 w-8' />,
      gradient: 'from-blue-500 to-purple-500',
      details: [
        'Innovative solution development',
        'Digital transformation support',
        'Customer success focus',
        'Quality service delivery'
      ]
    },
    {
      type: 'Vision',
      title: 'Our Vision',
      content: 'To become a leading technology company recognized nationally and internationally for innovative solutions.',
      icon: <Eye className='h-8 w-8' />,
      gradient: 'from-green-500 to-teal-500',
      details: [
        'Technology leadership',
        'Global recognition',
        'Innovation pioneer',
        'Sustainable growth'
      ]
    }
  ];

  const principles = [
    {
      icon: <Heart className='h-6 w-6' />,
      title: 'Customer-Centric',
      description: 'We prioritize customer satisfaction in everything we do',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Lightbulb className='h-6 w-6' />,
      title: 'Innovation',
      description: 'We continuously seek creative and forward-thinking solutions',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className='h-6 w-6' />,
      title: 'Reliability',
      description: 'We deliver on our promises with consistent quality',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: <Star className='h-6 w-6' />,
      title: 'Excellence',
      description: 'We strive for the highest standards in every project',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Globe className='h-6 w-6' />,
      title: 'Global Perspective',
      description: 'We think globally while acting locally',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const goals = [
    {
      icon: <TrendingUp className='h-6 w-6' />,
      title: 'Market Leadership',
      description: 'Become a recognized leader in our technology sectors',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Rocket className='h-6 w-6' />,
      title: 'Innovation Hub',
      description: 'Establish ourselves as a center for technological innovation',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Building className='h-6 w-6' />,
      title: 'Sustainable Growth',
      description: 'Achieve consistent and sustainable business expansion',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Award className='h-6 w-6' />,
      title: 'Industry Recognition',
      description: 'Gain recognition for our contributions to the tech industry',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black py-20' ref={ref}>
      <Spotlight className='-top-40 left-0 md:-top-20 md:left-60' fill='white' />

      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <motion.div className='mb-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
          <motion.div className='mb-6' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}>
            <AnimatedShinyText className='mb-4 text-lg font-medium text-neutral-400'>🎯 Mission & Vision</AnimatedShinyText>
            <h2 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
              <SparklesText text='Our Direction' className='text-gray-200! bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl' />
            </h2>
          </motion.div>

          <motion.div className='mx-auto max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words={description} className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div className='mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 0.8 }}>
          {/* Mission Card */}
          <motion.div className='group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10' whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }} onMouseEnter={() => setHoveredCard('mission')} onMouseLeave={() => setHoveredCard(null)}>
            <div className='mb-6'>
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${missionVision[0].gradient} text-white shadow-lg`}>{missionVision[0].icon}</div>
              <div className='mb-2 text-sm font-medium text-neutral-400'>{missionVision[0].type}</div>
              <h3 className={`bg-gradient-to-r text-3xl font-bold ${missionVision[0].gradient} bg-clip-text text-transparent`}>{missionVision[0].title}</h3>
            </div>

            <p className='mb-6 text-lg text-neutral-300'>{missionVision[0].content}</p>

            <div className='space-y-3'>
              {missionVision[0].details.map((detail, index) => (
                <motion.div key={index} className='flex items-center space-x-3 text-neutral-300' initial={{ opacity: 0, x: -20 }} animate={hoveredCard === 'mission' ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${missionVision[0].gradient}`} />
                  <span className='text-sm'>{detail}</span>
                </motion.div>
              ))}
            </div>

            <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${missionVision[0].gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
          </motion.div>

          {/* Vision Card */}
          <motion.div className='group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10' whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }} onMouseEnter={() => setHoveredCard('vision')} onMouseLeave={() => setHoveredCard(null)}>
            <div className='mb-6'>
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${missionVision[1].gradient} text-white shadow-lg`}>{missionVision[1].icon}</div>
              <div className='mb-2 text-sm font-medium text-neutral-400'>{missionVision[1].type}</div>
              <h3 className={`bg-gradient-to-r text-3xl font-bold ${missionVision[1].gradient} bg-clip-text text-transparent`}>{missionVision[1].title}</h3>
            </div>

            <p className='mb-6 text-lg text-neutral-300'>{missionVision[1].content}</p>

            <div className='space-y-3'>
              {missionVision[1].details.map((detail, index) => (
                <motion.div key={index} className='flex items-center space-x-3 text-neutral-300' initial={{ opacity: 0, x: -20 }} animate={hoveredCard === 'vision' ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${missionVision[1].gradient}`} />
                  <span className='text-sm'>{detail}</span>
                </motion.div>
              ))}
            </div>

            <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${missionVision[1].gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
          </motion.div>
        </motion.div>

        {/* Principles Section */}
        <motion.div className='mb-20' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.2 }}>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              <span className='bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'>Our Principles</span>
            </h3>
            <p className='text-lg text-neutral-300'>Core values that guide our daily operations</p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {principles.map((principle, index) => (
              <motion.div key={index} className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10' whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} custom={index}>
                <div className='mb-4 flex items-center space-x-4'>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${principle.gradient} text-white shadow-lg`}>{principle.icon}</div>
                  <h4 className={`bg-gradient-to-r text-xl font-semibold ${principle.gradient} bg-clip-text text-transparent`}>{principle.title}</h4>
                </div>
                <p className='text-sm text-neutral-300'>{principle.description}</p>
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${principle.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Goals Timeline */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.5 }}>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              <span className='bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>Our Goals</span>
            </h3>
            <p className='text-lg text-neutral-300'>Strategic objectives for sustainable growth</p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                custom={index}
              >
                <div className='mb-4'>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${goal.gradient} text-white shadow-lg`}>{goal.icon}</div>
                </div>
                                 <h4 className={`mb-2 text-lg font-semibold bg-gradient-to-r ${goal.gradient} bg-clip-text text-transparent`}>{goal.title}</h4>
                 <p className='text-sm text-neutral-400'>{goal.description}</p>
                                 <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${goal.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;
