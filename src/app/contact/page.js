'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageCircle, Calendar, Star, ArrowRight, Github, Linkedin, Twitter, Globe, Zap, Shield, Award, Users } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');

    try {
      // Send mail to info@codever.com
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          budget: '',
          timeline: '',
        });
      } else {
        setSubmitStatus('error');
        console.error('Error sending email:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);

      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className='h-6 w-6' />,
      title: 'Email Address',
      info: 'hello@codever.com',
      description: 'Send us an email anytime!',
      link: 'mailto:hello@codever.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className='h-6 w-6' />,
      title: 'Phone Number',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm',
      link: 'tel:+15551234567',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <MapPin className='h-6 w-6' />,
      title: 'Office Address',
      info: '123 Business St, Tech City, TC 12345',
      description: 'Visit our modern office',
      link: 'https://maps.google.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Clock className='h-6 w-6' />,
      title: 'Business Hours',
      info: 'Mon - Fri: 8:00 AM - 6:00 PM',
      description: "We're here to help",
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications',
      gradient: 'from-blue-500 to-cyan-500',
      icon: <Globe className='h-5 w-5' />,
    },
    {
      title: 'Mobile Apps',
      description: 'iOS and Android applications',
      gradient: 'from-purple-500 to-pink-500',
      icon: <Phone className='h-5 w-5' />,
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and functional designs',
      gradient: 'from-green-500 to-emerald-500',
      icon: <Star className='h-5 w-5' />,
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, PPC, and social media',
      gradient: 'from-orange-500 to-red-500',
      icon: <Zap className='h-5 w-5' />,
    },
    {
      title: 'E-commerce',
      description: 'Online stores and marketplaces',
      gradient: 'from-indigo-500 to-blue-500',
      icon: <Shield className='h-5 w-5' />,
    },
    {
      title: 'Consulting',
      description: 'Strategic tech guidance',
      gradient: 'from-teal-500 to-cyan-500',
      icon: <Users className='h-5 w-5' />,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className='h-5 w-5' />,
      link: '#',
      followers: '100',
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className='h-5 w-5' />,
      link: '#',
      followers: '100',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      name: 'Twitter',
      icon: <Twitter className='h-5 w-5' />,
      link: '#',
      followers: '100',
      gradient: 'from-sky-500 to-blue-600',
    },
  ];

  const stats = [
    { number: 24, label: 'Hour Response', suffix: 'h', icon: <Clock className='h-5 w-5' />, gradient: 'from-blue-400 to-cyan-400' },
    { number: 98, label: 'Client Satisfaction', suffix: '%', icon: <Star className='h-5 w-5' />, gradient: 'from-purple-400 to-pink-400' },
    { number: 500, label: 'Projects Delivered', suffix: '+', icon: <Award className='h-5 w-5' />, gradient: 'from-green-400 to-emerald-400' },
    { number: 50, label: 'Countries Served', suffix: '+', icon: <Globe className='h-5 w-5' />, gradient: 'from-orange-400 to-red-400' },
  ];

  const budgetRanges = ['$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $100,000', '$100,000+'];

  const timelineOptions = ['1-2 weeks', '1 month', '2-3 months', '3-6 months', '6+ months'];

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-black py-20' ref={ref}>
      <BackgroundBeams />

      {/* Grid Background Pattern */}
      <div className='bg-grid-white/[0.02] bg-grid-small absolute inset-0 bg-black' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <motion.div className='mb-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
          <motion.div className='mb-6' initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 1, delay: 0.2 }}>
            <h1 className='text-4xl font-bold text-white'>Get In Touch</h1>
          </motion.div>

          <motion.div className='mx-auto mb-8 max-w-4xl' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <TextGenerateEffect words="Ready to transform your business with cutting-edge technology? Let's discuss your project and create something extraordinary together. We're here to turn your vision into reality." className='text-lg leading-relaxed text-neutral-300 md:text-xl' />
          </motion.div>

          <motion.div className='mb-12' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <AnimatedShinyText className='text-lg font-medium text-neutral-400'>✨ Your Success Story Starts Here</AnimatedShinyText>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div className='mb-20 grid grid-cols-2 gap-6 md:grid-cols-4' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1 }}>
          {stats.map((stat, index) => (
            <motion.div key={index} className='group relative h-full' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <div className='h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10'>
                <div className='mb-3 flex items-center justify-center'>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${stat.gradient} text-white`}>{stat.icon}</div>
                </div>
                <div className={`bg-gradient-to-r text-3xl font-bold md:text-4xl ${stat.gradient} mb-2 bg-clip-text text-transparent`}>
                  {isInView && <NumberTicker value={stat.number} />}
                  {stat.suffix}
                </div>
                <div className='text-sm font-medium text-neutral-300 md:text-base'>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          {/* Contact Form */}
          <motion.div className='space-y-8' initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.8, delay: 1.2 }}>
            <div className='relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md'>
              <div className='mb-8'>
                <h3 className='mb-2 text-3xl font-bold text-white'>Start Your Project</h3>
                <p className='text-neutral-400'>Tell us about your vision and we'll bring it to life.</p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name and Email Row */}
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div className='relative'>
                    <div className='absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400'>
                      <User className='h-5 w-5' />
                    </div>
                    <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleInputChange} required className='w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-4 pl-12 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none' />
                  </div>

                  <div className='relative'>
                    <div className='absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400'>
                      <Mail className='h-5 w-5' />
                    </div>
                    <input type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleInputChange} required className='w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-4 pl-12 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none' />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div className='relative'>
                    <div className='absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400'>
                      <Phone className='h-5 w-5' />
                    </div>
                    <input type='tel' name='phone' placeholder='Phone Number' value={formData.phone} onChange={handleInputChange} className='w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-4 pl-12 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none' />
                  </div>

                  <div className='relative'>
                    <div className='absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400'>
                      <Users className='h-5 w-5' />
                    </div>
                    <input type='text' name='company' placeholder='Company Name' value={formData.company} onChange={handleInputChange} className='w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-4 pl-12 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none' />
                  </div>
                </div>

                {/* Subject Field */}
                <div className='relative'>
                  <div className='absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400'>
                    <MessageCircle className='h-5 w-5' />
                  </div>
                  <input type='text' name='subject' placeholder='Project Subject' value={formData.subject} onChange={handleInputChange} required className='w-full rounded-xl border border-white/10 bg-white/5 py-4 pr-4 pl-12 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none' />
                </div>

                {/* Budget and Timeline Row */}
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <label className='mb-2 block text-sm font-medium text-neutral-300'>Budget Range</label>
                    <select name='budget' value={formData.budget} onChange={handleInputChange} className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none'>
                      <option value='' className='bg-black text-white'>
                        Select Budget
                      </option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range} className='bg-black text-white'>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className='mb-2 block text-sm font-medium text-neutral-300'>Timeline</label>
                    <select name='timeline' value={formData.timeline} onChange={handleInputChange} className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none'>
                      <option value='' className='bg-black text-white'>
                        Select Timeline
                      </option>
                      {timelineOptions.map((option, index) => (
                        <option key={index} value={option} className='bg-black text-white'>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className='relative'>
                  <textarea
                    name='message'
                    placeholder='Tell us about your project details, goals, and requirements...'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-neutral-400 backdrop-blur-md transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none'
                  />
                </div>

                {/* Submit Button */}
                <motion.button type='submit' disabled={isSubmitting} className='w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 disabled:cursor-not-allowed disabled:opacity-50' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {isSubmitting ? (
                    <div className='flex items-center justify-center space-x-2'>
                      <div className='h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white' />
                      <span>Sending Your Message...</span>
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
                    <span>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div className='flex items-center space-x-2 rounded-xl bg-red-500/20 p-4 text-red-400' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <div className='flex h-5 w-5 items-center justify-center'>
                      <div className='h-2 w-2 rounded-full bg-red-400'></div>
                    </div>
                    <span>Sorry, there was an error sending your message. Please try again or contact us directly at info@codever.com.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information & Services */}
          <motion.div className='space-y-8' initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 1.4 }}>
            {/* Contact Info Cards */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {contactInfo.map((info, index) => (
                <motion.a href={info.link} target='_blank' rel='noopener noreferrer' key={index} className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10' whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <div className='flex items-start space-x-4'>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${info.gradient} text-white shadow-lg`}>{info.icon}</div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-white'>{info.title}</h4>
                      {info.link ? (
                        <div href={info.link} target='_blank' rel='noopener noreferrer' className='text-sm text-neutral-300 transition-colors hover:text-white'>
                          {info.info}
                        </div>
                      ) : (
                        <p className='text-sm text-neutral-300'>{info.info}</p>
                      )}
                      <p className='mt-1 text-xs text-neutral-500'>{info.description}</p>
                    </div>
                  </div>
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${info.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
                </motion.a>
              ))}
            </div>

            {/* Services We Offer */}
            <div className='rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md'>
              <h3 className='mb-6 text-xl font-bold text-white'>Services We Offer</h3>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                {services.map((service, index) => (
                  <motion.div key={index} className='flex items-center space-x-3 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10' onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)} whileHover={{ scale: 1.05 }}>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r ${service.gradient} text-white`}>{service.icon}</div>
                    <div className='flex-1'>
                      <div className='font-medium text-white'>{service.title}</div>
                      <div className='text-xs text-neutral-400'>{service.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media & Quick Actions */}
            <div className='space-y-6'>
              {/* Social Media */}
              <div className='rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md'>
                <h3 className='mb-6 text-xl font-bold text-white'>Connect With Us</h3>
                <div className='space-y-4'>
                  {socialLinks.map((social, index) => (
                    <motion.a key={index} href={social.link} target='_blank' rel='noopener noreferrer' className='group relative flex items-center space-x-4 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10' onMouseEnter={() => setHoveredSocial(social.name)} onMouseLeave={() => setHoveredSocial(null)} whileHover={{ scale: 1.05 }}>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${social.gradient} text-white shadow-lg`}>{social.icon}</div>
                      <div className='flex-1'>
                        <div className='font-medium text-white'>{social.name}</div>
                        <div className='text-sm text-neutral-400'>{social.followers} followers</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div className='mt-20 rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-md' initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 1, delay: 1.8 }}>
          <div className='mb-8 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white'>Frequently Asked Questions</h3>
            <p className='text-lg text-neutral-300'>Everything you need to know about working with us</p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div>
              <h4 className='mb-2 text-lg font-semibold text-white'>How long does a typical project take?</h4>
              <p className='text-neutral-400'>Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.</p>
            </div>

            <div>
              <h4 className='mb-2 text-lg font-semibold text-white'>Do you provide ongoing support?</h4>
              <p className='text-neutral-400'>Yes! We offer comprehensive maintenance packages including updates, security monitoring, performance optimization, and 24/7 technical support.</p>
            </div>

            <div>
              <h4 className='mb-2 text-lg font-semibold text-white'>What technologies do you work with?</h4>
              <p className='text-neutral-400'>We specialize in modern technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS. We choose the best stack for your specific needs.</p>
            </div>

            <div>
              <h4 className='mb-2 text-lg font-semibold text-white'>Can you work with our existing team?</h4>
              <p className='text-neutral-400'>Absolutely! We seamlessly integrate with your existing development team and follow your established workflows and coding standards.</p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div className='mt-20 text-center' initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 2 }}>
          <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>Ready to Start Something Amazing?</h3>
          <p className='mb-8 text-lg text-neutral-300'>Join hundreds of satisfied clients who transformed their business with our solutions</p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <InteractiveHoverButton className='bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600'>Start Your Project Today</InteractiveHoverButton>
            <InteractiveHoverButton className='border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/10'>View Our Portfolio</InteractiveHoverButton>
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

export default ContactPage;
