'use client';
import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { SparklesText } from '../magicui/sparkles-text';
import { AnimatedShinyText } from '../magicui/animated-shiny-text';
import { NumberTicker } from '../magicui/number-ticker';
import { TextReveal } from '../magicui/text-reveal';

// StepWithViewport componentini dışarı çıkar ve memoize et
const StepWithViewport = memo(({ step, index, children, onActiveChange }) => {
  const stepRef = useRef(null);
  const isStepInView = useInView(stepRef, {
    threshold: 0.6,
    margin: '-20% 0px -20% 0px',
  });

  // Viewport durumu değiştiğinde callback çağır
  useEffect(() => {
    if (isStepInView) {
      onActiveChange(index);
    }
  }, [isStepInView, index, onActiveChange]);

  return <div ref={stepRef}>{children}</div>;
});

StepWithViewport.displayName = 'StepWithViewport';

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [workflowSteps, setWorkflowSteps] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Callback'i memoize et
  const handleActiveChange = useCallback(index => {
    setActiveIndex(prevIndex => (prevIndex !== index ? index : prevIndex));
  }, []);

  useEffect(() => {
    let mounted = true;

    fetch('/api/howWeWork')
      .then(res => res.json())
      .then(data => {
        if (mounted) {
          setWorkflowSteps(data);
        }
      })
      .catch(error => {
        console.error('Error fetching workflow steps:', error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const companyStats = [
    { label: 'Happy Clients', value: 120, suffix: '+', gradient: 'from-purple-400 to-pink-400' },
    { label: 'Team Members', value: 25, suffix: '+', gradient: 'from-green-400 to-emerald-400' },
    { label: 'Years of Experience', value: 8, suffix: '+', gradient: 'from-orange-400 to-red-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black pb-20' ref={ref}>
      <BackgroundBeams />

      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div className='mb-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
          <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <motion.div className='mb-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
              <motion.div className='mb-4' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}></motion.div>
            </motion.div>
          </div>
          <motion.div className='mx-auto mb-8 max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words='Our proven methodologies and modern technologies ensure that we are by your side at every step of your project.' className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>

          <motion.div className='mb-12' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <AnimatedShinyText className='text-lg font-medium text-neutral-400'>✨ Success Guaranteed in 5 Steps</AnimatedShinyText>
          </motion.div>
        </motion.div>

        {/* Company Stats */}
        <motion.div className='mb-20 grid grid-cols-1 gap-6 md:grid-cols-3' variants={containerVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'}>
          {companyStats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className='group relative h-full' transition={{ type: 'spring', stiffness: 300 }}>
              <div className='h-full! rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300'>
                <div className={`bg-gradient-to-r text-3xl font-bold md:text-4xl ${stat.gradient} mb-2 bg-clip-text text-transparent`}>
                  {isInView && <NumberTicker value={stat.value} />}
                  {stat.suffix}
                </div>
                <div className='text-sm font-medium text-neutral-300 md:text-base'>{stat.label}</div>
              </div>
              <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20' />
            </motion.div>
          ))}
        </motion.div>

        {/* Workflow Steps Timeline */}
        {workflowSteps.length > 0 && (
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30' />

            {/* Timeline Dots */}
            {workflowSteps.map((step, index) => (
              <div key={step.id} className={`absolute left-1/2 -translate-x-1/2 ${index === 0 ? 'top-0' : ''}`} style={{ top: `${index * 25}%` }}>
                <motion.div className={`h-4 w-4 rounded-full bg-gradient-to-r ${step.gradient} border-4 border-black`} initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} />
              </div>
            ))}

            {/* Step Cards */}
            <div className='space-y-32'>
              {workflowSteps.map((step, index) => (
                <StepWithViewport key={step.id} step={step} index={index} onActiveChange={handleActiveChange}>
                  <motion.div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-16`} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }} transition={{ duration: 0.8, delay: index * 0.2 }}>
                    {/* Card Content */}
                    <div className='flex-1'>
                      <motion.div className='group relative h-full' transition={{ type: 'spring', stiffness: 300 }}>
                        <div className={`relative h-full rounded-2xl border p-8 backdrop-blur-md transition-all duration-300 ${activeIndex === index ? 'border-white/30 bg-white/15 shadow-2xl' : 'border-white/10 bg-white/5'}`}>
                          {/* Step Header */}
                          <div className='mb-6 flex items-center space-x-4'>
                            <div className={`flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${step.gradient} text-2xl font-bold text-white`}>{step.icon}</div>
                            <div>
                              <div className='flex items-center space-x-3'>
                                <h3 className='text-2xl font-bold text-white'>{step.title}</h3>
                                <span className={`rounded-full bg-gradient-to-r ${step.gradient} px-3 py-1 text-xs font-medium text-white`}>{step.duration}</span>
                              </div>
                              <p className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-lg font-medium text-transparent`}>{step.subtitle}</p>
                            </div>
                          </div>

                          {/* Description */}
                          <p className='mb-6 leading-relaxed text-neutral-300'>{step.description}</p>

                          {/* Features List */}
                          <div className='mb-6 grid grid-cols-1 gap-3 md:grid-cols-2'>
                            {step.features?.map((feature, idx) => (
                              <motion.div key={idx} className='flex items-center space-x-2' initial={{ opacity: 0, x: -10 }} animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }} transition={{ duration: 0.3, delay: idx * 0.1 }}>
                                <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${step.gradient}`} />
                                <span className='text-sm text-neutral-400'>{feature}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className='flex items-center justify-between border-t border-white/10 pt-4'>
                            <div className='flex space-x-6'>
                              {step.stats &&
                                Object.entries(step.stats).map(([key, value], idx) => (
                                  <div key={idx} className='text-center'>
                                    <div className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-xl font-bold text-transparent`}>{typeof value === 'string' ? value : `${value}${key === 'satisfaction' || key === 'coverage' ? '%' : key === 'uptime' ? '%' : '+'}`}</div>
                                    <div className='text-xs text-neutral-500 capitalize'>{key === 'satisfaction' ? 'Satisfaction' : key === 'coverage' ? 'Coverage' : key === 'uptime' ? 'Uptime' : key === 'response' ? 'Response Time (hour)' : key === 'support' ? 'Support (7/24)' : key}</div>
                                  </div>
                                ))}
                            </div>
                            <motion.div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${step.gradient} text-sm font-bold text-white`} transition={{ duration: 0.5 }}>
                              {step.id}
                            </motion.div>
                          </div>

                          {/* Active Effect */}
                          <AnimatePresence>{activeIndex === index && <motion.div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} />}</AnimatePresence>
                        </div>

                        {/* Background Glow - Viewport içinde olduğunda aktif */}
                        <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${step.gradient} blur-xl transition-opacity duration-300 ${activeIndex === index ? 'opacity-30' : 'opacity-0'}`} />
                      </motion.div>
                    </div>

                    {/* Spacer for timeline alignment */}
                    <div className='hidden flex-1 md:block' />
                  </motion.div>
                </StepWithViewport>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div className='mt-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 1.5 }}>
          <h3 className='mb-4 text-2xl font-bold text-white md:text-3xl'>Let's bring your project to life with our proven methodology</h3>
          <p className='mb-8 text-lg text-neutral-300'>Success guaranteed with our proven methodology</p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <InteractiveHoverButton className='border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-md'>Süreç Detayları</InteractiveHoverButton>
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

export default HowWeWork;
