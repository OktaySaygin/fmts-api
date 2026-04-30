'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { Marquee } from '@/components/magicui/marquee';
import { Users, Code, Globe, Award, Clock, Heart, TrendingUp, Building, Laptop, Smartphone, Database, Shield, Zap, Star } from 'lucide-react';

const CompanyStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('general');

  const description = 'Numbers tell our story. Every project, every client, and every success is part of our growing journey.';

  const categories = [
    { id: 'general', label: 'General', icon: <TrendingUp className='h-5 w-5' /> },
    { id: 'projects', label: 'Projects', icon: <Code className='h-5 w-5' /> },
    { id: 'customers', label: 'Customers', icon: <Users className='h-5 w-5' /> },
    { id: 'achievements', label: 'Achievements', icon: <Award className='h-5 w-5' /> },
  ];

  const stats = {
    general: [
      { 
        number: 1, 
        label: 'Year Experience', 
        suffix: '', 
        icon: <Clock className='h-6 w-6' />, 
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Our newly founded dynamic team',
      },
      { 
        number: 8, 
        label: 'Expert Team', 
        suffix: '', 
        icon: <Users className='h-6 w-6' />, 
        gradient: 'from-purple-500 to-pink-500',
        description: 'Specialists in their respective fields',
      },
      { 
        number: 3, 
        label: 'Service Areas', 
        suffix: '', 
        icon: <Globe className='h-6 w-6' />, 
        gradient: 'from-green-500 to-emerald-500',
        description: 'Core service areas we focus on',
      },
      { 
        number: 100, 
        label: 'Quality Target', 
        suffix: '%', 
        icon: <Heart className='h-6 w-6' />, 
        gradient: 'from-red-500 to-pink-500',
        description: 'Our customer satisfaction goal',
      },
    ],
    projects: [
      { 
        number: 15, 
        label: 'Target Projects', 
        suffix: '', 
        icon: <Code className='h-6 w-6' />, 
        gradient: 'from-blue-500 to-indigo-500',
        description: 'First year project target',
      },
      { 
        number: 8, 
        label: 'Web Projects', 
        suffix: '', 
        icon: <Laptop className='h-6 w-6' />, 
        gradient: 'from-green-500 to-teal-500',
        description: 'Web development projects',
      },
      { 
        number: 4, 
        label: 'Mobile Projects', 
        suffix: '', 
        icon: <Smartphone className='h-6 w-6' />, 
        gradient: 'from-purple-500 to-violet-500',
        description: 'Mobile application goals',
      },
      { 
        number: 3, 
        label: 'Enterprise Solutions', 
        suffix: '', 
        icon: <Database className='h-6 w-6' />, 
        gradient: 'from-orange-500 to-red-500',
        description: 'Enterprise software solutions',
      },
    ],
    customers: [
      { 
        number: 25, 
        label: 'Target Clients', 
        suffix: '', 
        icon: <Users className='h-6 w-6' />, 
        gradient: 'from-pink-500 to-rose-500',
        description: 'First year client target',
      },
      { 
        number: 10, 
        label: 'Enterprise Target', 
        suffix: '', 
        icon: <Building className='h-6 w-6' />, 
        gradient: 'from-blue-500 to-purple-500',
        description: 'Enterprise client goal',
      },
      { 
        number: 24, 
        label: 'Support Hours', 
        suffix: '/7', 
        icon: <Shield className='h-6 w-6' />, 
        gradient: 'from-green-500 to-blue-500',
        description: 'Uninterrupted customer support',
      },
      { 
        number: 1, 
        label: 'Hour Response', 
        suffix: 'hr', 
        icon: <Zap className='h-6 w-6' />, 
        gradient: 'from-yellow-500 to-orange-500',
        description: 'Target response time',
      },
    ],
    achievements: [
      { 
        number: 3, 
        label: 'Tech Areas', 
        suffix: '', 
        icon: <Award className='h-6 w-6' />, 
        gradient: 'from-yellow-500 to-amber-500',
        description: 'Technology areas we specialize in',
      },
      { 
        number: 100, 
        label: 'Success Target', 
        suffix: '%', 
        icon: <Star className='h-6 w-6' />, 
        gradient: 'from-green-500 to-emerald-500',
        description: 'Project success goal',
      },
      { 
        number: 2, 
        label: 'Tech Partners', 
        suffix: '', 
        icon: <Globe className='h-6 w-6' />, 
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Initial technology partnerships',
      },
      { 
        number: 90, 
        label: 'Satisfaction Goal', 
        suffix: '%', 
        icon: <Heart className='h-6 w-6' />, 
        gradient: 'from-purple-500 to-pink-500',
        description: 'Customer satisfaction target',
      },
    ],
  };

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      text: 'Working with Codever was an amazing experience. Their professional approach and quality solutions helped us complete our project successfully.',
      avatar: '👨‍💼',
    },
    {
      name: 'Sarah Johnson',
      company: 'Digital Solutions',
      text: 'The dedication and technical expertise they showed while developing our mobile app was truly impressive.',
      avatar: '👩‍💻',
    },
    {
      name: 'Michael Brown',
      company: 'E-Commerce Plus',
      text: 'When modernizing our e-commerce platform, the Codever team worked with us step by step. We are very satisfied with the results.',
      avatar: '👨‍🚀',
    },
    {
      name: 'Emily Davis',
      company: 'StartupHub',
      text: 'Thanks to their experience in the startup ecosystem, they understood our needs very well and provided the most suitable solution.',
      avatar: '👩‍🎨',
    },
    {
      name: 'David Wilson',
      company: 'InnovateTech',
      text: 'The solution they developed for our enterprise software needs greatly facilitated our business operations.',
      avatar: '👨‍🔬',
    },
  ];

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black py-20' ref={ref}>
      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <motion.div className='mb-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
          <motion.div className='mb-6' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}>
            <AnimatedShinyText className='mb-4 text-lg font-medium text-neutral-400'>📊 Codever by Numbers</AnimatedShinyText>
            <h2 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
              <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Success Statistics</span>
            </h2>
          </motion.div>

          <motion.div className='mx-auto max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words={description} className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div className='mb-12 flex flex-wrap justify-center gap-4' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.4 }}>
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 rounded-2xl border px-6 py-3 backdrop-blur-md transition-all duration-300 ${activeCategory === category.id ? 'border-white/20 bg-white/10 text-white' : 'border-white/10 bg-white/5 text-neutral-400 hover:border-white/15 hover:bg-white/8 hover:text-neutral-300'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span className='font-medium'>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div className='mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 0.6 }} key={activeCategory}>
          {stats[activeCategory].map((stat, index) => (
            <motion.div key={index} className='group relative h-full' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} custom={index}>
              <div className='h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'>
                <div className='mb-4 flex items-center justify-center'>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${stat.gradient} text-white`}>{stat.icon}</div>
                </div>
                <div className={`bg-gradient-to-r text-3xl font-bold md:text-4xl ${stat.gradient} mb-2 bg-clip-text text-transparent`}>
                  {isInView && <NumberTicker value={stat.number} />}
                  {stat.suffix}
                </div>
                <div className='mb-2 text-lg font-semibold text-white'>{stat.label}</div>
                <div className='text-sm text-neutral-400'>{stat.description}</div>
              </div>
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div className='mb-20' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 0.8 }}>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              <span className='bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'>Customer Reviews</span>
            </h3>
            <p className='text-lg text-neutral-300'>Examples from our customers' experiences</p>
          </div>

          <Marquee className='py-4' pauseOnHover={true}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='mx-4 w-80 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md'>
                <div className='mb-4 flex items-center space-x-4'>
                  <div className='text-2xl'>{testimonial.avatar}</div>
                  <div>
                    <div className='font-semibold text-white'>{testimonial.name}</div>
                    <div className='text-sm text-neutral-400'>{testimonial.company}</div>
                  </div>
                </div>
                <p className='text-sm text-neutral-300'>"{testimonial.text}"</p>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyStats;
