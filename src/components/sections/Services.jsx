'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { SparklesText } from '../magicui/sparkles-text';
import { AnimatedShinyText } from '../magicui/animated-shiny-text';
import { NumberTicker } from '../magicui/number-ticker';
import { Code, Smartphone, Monitor, Palette, Zap, Shield, Database, Rocket, Brain, Globe, Users, Settings } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      id: 1,
      icon: <Code className='h-8 w-8' />,
             title: 'Professional Websites',
       description: 'Beautiful, fast websites that attract customers and drive sales. Mobile-friendly and search engine optimized.',
       features: ['Mobile-Responsive Design', 'Fast Loading Speed', 'SEO Optimized', 'Easy to Update'],
      gradient: 'from-blue-500 to-cyan-500',
      stats: { projects: 50, satisfaction: 98 },
    },
    {
      id: 2,
      icon: <Smartphone className='h-8 w-8' />,
             title: 'Mobile Apps',
       description: 'Custom mobile applications that keep your customers engaged and increase business reach.',
       features: ['iOS & Android Apps', 'User-Friendly Interface', 'Push Notifications', 'App Store Publishing'],
      gradient: 'from-purple-500 to-pink-500',
      stats: { projects: 30, satisfaction: 95 },
    },
    {
      id: 3,
      icon: <Monitor className='h-8 w-8' />,
             title: 'Business Software',
       description: 'Custom desktop applications that streamline your business processes and increase productivity.',
       features: ['Process Automation', 'Data Management', 'User Training', 'Ongoing Support'],
      gradient: 'from-green-500 to-emerald-500',
      stats: { projects: 25, satisfaction: 97 },
    },
    {
      id: 4,
      icon: <Palette className='h-8 w-8' />,
             title: 'Design & Branding',
       description: 'Professional designs that make your brand stand out and attract more customers.',
       features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'User Experience'],
      gradient: 'from-orange-500 to-red-500',
      stats: { projects: 80, satisfaction: 99 },
    },
    {
      id: 5,
      icon: <Database className='h-8 w-8' />,
             title: 'Data Management',
       description: 'Secure data storage and management systems that protect your business information.',
       features: ['Data Security', 'Backup Solutions', 'Cloud Storage', 'Performance Monitoring'],
      gradient: 'from-indigo-500 to-blue-500',
      stats: { projects: 45, satisfaction: 96 },
    },
    {
      id: 6,
      icon: <Shield className='h-8 w-8' />,
             title: 'IT Support & Maintenance',
       description: 'Ongoing technical support and maintenance to keep your systems running smoothly.',
       features: ['24/7 Support', 'Regular Updates', 'Security Monitoring', 'Performance Optimization'],
      gradient: 'from-teal-500 to-cyan-500',
      stats: { projects: 35, satisfaction: 94 },
    },
  ];

  const stats = [
    { number: 200, label: 'Projects Completed', suffix: '+', gradient: 'from-blue-400 to-cyan-400' },
    { number: 150, label: 'Happy Clients', suffix: '+', gradient: 'from-purple-400 to-pink-400' },
    { number: 98, label: 'Satisfaction Rate', suffix: '%', gradient: 'from-green-400 to-emerald-400' },
    { number: 24, label: 'Support Hours', suffix: '/7', gradient: 'from-orange-400 to-red-400' },
  ];

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black py-20' ref={ref}>
      <BackgroundBeams />

      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div className='mb-16 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
          <motion.div className='mb-4' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}>
            <SparklesText className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl'>Our Services</SparklesText>
          </motion.div>

          <motion.div className='mx-auto mb-8 max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words='We help businesses grow through digital transformation. Our solutions increase revenue, reduce costs, and improve customer satisfaction.' className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>

          <motion.div className='mb-12' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <AnimatedShinyText className='text-lg font-medium text-neutral-400'>✨ Full-Stack Development Excellence</AnimatedShinyText>
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

        {/* Services Grid */}
        <motion.div className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.2 }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className='group relative h-full'
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                duration: 0.6,
                delay: 1.4 + index * 0.1,
              }}
            >
              <div className='relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'>
                {/* Service Icon */}
                <div className='mb-6 flex items-center space-x-4'>
                  <div className={`flex aspect-square h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-2xl`}>{service.icon}</div>
                  <div>
                    <h3 className='text-2xl font-bold text-white'>{service.title}</h3>
                    <div className='mt-1 flex items-center space-x-2'>
                      <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className='text-sm text-neutral-400'>Professional Service</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className='mb-6 leading-relaxed text-neutral-300'>{service.description}</p>

                {/* Features */}
                <div className='mb-6 space-y-3'>
                  {service.features.map((feature, idx) => (
                    <motion.div key={idx} className='flex items-center space-x-3' initial={{ opacity: 0, x: -10 }} animate={hoveredCard === service.id ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }} transition={{ duration: 0.3, delay: idx * 0.1 }}>
                      <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className='text-sm text-neutral-400'>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className='flex items-center justify-between border-t border-white/10 pt-6'>
                  <div className='flex space-x-6'>
                    <div className='text-center'>
                      <div className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-xl font-bold text-transparent`}>{service.stats.projects}+</div>
                      <div className='text-xs text-neutral-500'>Projects</div>
                    </div>
                    <div className='text-center'>
                      <div className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-xl font-bold text-transparent`}>{service.stats.satisfaction}%</div>
                      <div className='text-xs text-neutral-500'>Satisfaction</div>
                    </div>
                  </div>
                  <motion.div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-lg`} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400 }}>
                    <Rocket className='h-5 w-5' />
                  </motion.div>
                </div>

                {/* Hover Effect */}
                {hoveredCard === service.id && <motion.div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} />}
              </div>

              {/* Background Glow */}
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className='text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 1.8 }}>
                     <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>Ready to Grow Your Business?</h3>
           <p className='mb-8 text-lg text-neutral-300'>Let's discuss how we can help increase your revenue and efficiency</p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
                         <InteractiveHoverButton className='bg-white px-8 py-4 text-lg font-semibold text-black hover:bg-gray-100'>Get Free Quote</InteractiveHoverButton>
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

export default Services;
