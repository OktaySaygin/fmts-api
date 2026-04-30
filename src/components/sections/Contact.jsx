'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { SparklesText } from '../magicui/sparkles-text';
import { AnimatedShinyText } from '../magicui/animated-shiny-text';
import { NumberTicker } from '../magicui/number-ticker';
import { Mail, Phone, MapPin, Send, User, MessageCircle, Clock, Globe, Github, Linkedin, Twitter, Youtube, Calendar, CheckCircle, ArrowRight, Star, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitStatus('success');
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className='h-6 w-6' />,
      title: 'Email',
      info: 'hello@codever.com',
      link: 'mailto:hello@codever.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className='h-6 w-6' />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <MapPin className='h-6 w-6' />,
      title: 'Location',
      info: 'New York, NY 10001',
      link: 'https://maps.google.com',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Clock className='h-6 w-6' />,
      title: 'Working Hours',
      info: 'Mon-Fri: 9AM-6PM EST',
      link: null,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className='h-6 w-6' />,
      name: 'GitHub',
      link: 'https://github.com/codever',
      gradient: 'from-gray-500 to-gray-700',
      followers: '12.5K',
    },
    {
      icon: <Linkedin className='h-6 w-6' />,
      name: 'LinkedIn',
      link: 'https://linkedin.com/company/codever',
      gradient: 'from-blue-500 to-blue-700',
      followers: '8.2K',
    },
    {
      icon: <Twitter className='h-6 w-6' />,
      name: 'Twitter',
      link: 'https://twitter.com/codever',
      gradient: 'from-blue-400 to-blue-600',
      followers: '15.8K',
    },
    {
      icon: <Youtube className='h-6 w-6' />,
      name: 'YouTube',
      link: 'https://youtube.com/codever',
      gradient: 'from-red-500 to-red-700',
      followers: '22.1K',
    },
  ];

  const stats = [
    { number: 24, label: 'Response Time', suffix: 'h', gradient: 'from-blue-400 to-cyan-400' },
    { number: 98, label: 'Client Satisfaction', suffix: '%', gradient: 'from-purple-400 to-pink-400' },
    { number: 500, label: 'Projects Delivered', suffix: '+', gradient: 'from-green-400 to-emerald-400' },
    { number: 50, label: 'Countries Served', suffix: '+', gradient: 'from-orange-400 to-red-400' },
  ];

  const services = ['Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce', 'Digital Marketing', 'Consulting'];

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black py-20' ref={ref}>
      <BackgroundBeams />

      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div className='mb-16 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
          <motion.div className='mb-4' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}>
            <SparklesText className='bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl'>Get In Touch</SparklesText>
          </motion.div>

          <motion.div className='mx-auto mb-8 max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words="Ready to grow your business? Let's discuss how we can help increase your revenue, reduce costs, and reach more customers. We're here to help you succeed." className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>

          <motion.div className='mb-12' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <AnimatedShinyText className='text-lg font-medium text-neutral-400'>✨ Let's Grow Your Business Together</AnimatedShinyText>
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

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          {/* Contact Form */}
          <motion.div className='space-y-8' initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.8, delay: 1.2 }}>
            <div className='relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md'>

              <div className='mb-8'>
                <h3 className='mb-2 text-2xl font-bold text-white'>Send us a message</h3>
                <p className='text-neutral-400'>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name Field */}
                <div className='relative'>
                  <div className='absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400'>
                    <User className='h-5 w-5' />
                  </div>
                  <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleInputChange} required className='w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-4 pl-12 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none' />
                </div>

                {/* Email Field */}
                <div className='relative'>
                  <div className='absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400'>
                    <Mail className='h-5 w-5' />
                  </div>
                  <input type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleInputChange} required className='w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-4 pl-12 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none' />
                </div>

                {/* Subject Field */}
                <div className='relative'>
                  <div className='absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400'>
                    <MessageCircle className='h-5 w-5' />
                  </div>
                  <input type='text' name='subject' placeholder='Subject' value={formData.subject} onChange={handleInputChange} required className='w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-4 pl-12 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none' />
                </div>

                {/* Message Field */}
                <div className='relative'>
                  <textarea name='message' placeholder='Your Message' value={formData.message} onChange={handleInputChange} required rows={6} className='w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none' />
                </div>

                {/* Submit Button */}
                <motion.button type='submit' disabled={isSubmitting} className='w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 disabled:cursor-not-allowed disabled:opacity-50' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {isSubmitting ? (
                    <div className='flex items-center justify-center space-x-2'>
                      <div className='h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white' />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center space-x-2'>
                      <Send className='h-5 w-5' />
                      <span>Send Message</span>
                    </div>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div className='flex items-center space-x-2 rounded-xl bg-green-500/20 p-4 text-green-400' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <CheckCircle className='h-5 w-5' />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Services We Offer */}
            <motion.div className='rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 1.6 }}>
              <h3 className='mb-6 text-xl font-bold text-white'>Services We Offer</h3>
              <div className='grid grid-cols-2 gap-4'>
                {services.map((service, index) => (
                  <motion.div key={index} className='flex items-center space-x-3 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10' whileHover={{ scale: 1.05 }}>
                    <div className='h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500' />
                    <span className='text-sm font-medium text-neutral-300'>{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className='space-y-8' initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 1.4 }}>
            {/* Contact Info Cards */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {contactInfo.map((info, index) => (
                <motion.div key={index} className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10' whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <div className='flex items-center space-x-4'>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${info.gradient} text-white shadow-lg`}>{info.icon}</div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-white'>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} target='_blank' rel='noopener noreferrer' className='text-sm text-neutral-400 transition-colors hover:text-white'>
                          {info.info}
                        </a>
                      ) : (
                        <p className='text-sm text-neutral-400'>{info.info}</p>
                      )}
                    </div>
                  </div>
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${info.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div className='rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md'>
              <h3 className='mb-6 text-xl font-bold text-white'>Follow Us</h3>
              <div className='grid grid-cols-2 gap-4'>
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.link} target='_blank' rel='noopener noreferrer' className='group relative flex items-center space-x-4 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10' onMouseEnter={() => setHoveredSocial(social.name)} onMouseLeave={() => setHoveredSocial(null)} whileHover={{ scale: 1.05 }}>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${social.gradient} text-white shadow-lg`}>{social.icon}</div>
                    <div className='flex-1'>
                      <div className='font-medium text-white'>{social.name}</div>
                      <div className='text-sm text-neutral-400'>{social.followers} followers</div>
                    </div>
                    {hoveredSocial === social.name && <ArrowRight className='h-5 w-5 text-white' />}
                    <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${social.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className='space-y-4'>
              <motion.div className='flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md' whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className='flex items-center space-x-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white'>
                    <Calendar className='h-6 w-6' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-white'>Schedule a Call</h4>
                    <p className='text-sm text-neutral-400'>Book a free consultation</p>
                  </div>
                </div>
                <ArrowRight className='h-5 w-5 text-white' />
              </motion.div>

              <motion.div className='flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md' whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className='flex items-center space-x-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
                    <Star className='h-6 w-6' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-white'>Get a Quote</h4>
                    <p className='text-sm text-neutral-400'>Project estimation in 24h</p>
                  </div>
                </div>
                <ArrowRight className='h-5 w-5 text-white' />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div className='mt-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 2 }}>
          <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>Ready to Start Your Project?</h3>
          <p className='mb-8 text-lg text-neutral-300'>Join hundreds of satisfied clients who trusted us with their digital transformation</p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <InteractiveHoverButton className='bg-white px-8 py-4 text-lg font-semibold text-black hover:bg-gray-100'>Get Started Today</InteractiveHoverButton>
            <InteractiveHoverButton className='border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/10'>View Our Work</InteractiveHoverButton>
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

export default Contact;
