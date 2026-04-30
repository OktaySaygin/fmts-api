'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';
import SparklesText from '@/components/magicui/sparkles-text';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Heart, ExternalLink, Code, Smartphone, Globe, Palette, Users, Trophy, Target, ArrowRight } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Web Development', href: '/projects/web-development', icon: Globe },
    { name: 'Mobile App', href: '/projects/mobile-app', icon: Smartphone },
    { name: 'Software Development', href: '/projects/software-development', icon: Code },
    { name: 'UI/UX Design', href: '/projects/ui-ux-design', icon: Palette },
  ];

  const company = [
    { name: 'Our Team', href: '/about/team', icon: Users },
    { name: 'Achievements', href: '/about/achievements', icon: Trophy },
    { name: 'Mission & Vision', href: '/about/mission', icon: Target },
    { name: 'Careers', href: '/careers', icon: ArrowRight },
  ];
  


  

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@codever.com',
      href: 'mailto:info@codever.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+90 (555) 123 45 67',
      href: 'tel:+905551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Istanbul, Türkiye',
      href: '#',
    },
  ];

  return (
    <footer className='relative w-full border-t border-white/10 bg-gradient-to-b from-black to-gray-900'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />

      <div className='relative z-10 mx-auto w-full max-w-screen-xl'>
        {/* Main Footer Content */}
        <div className='p-8 py-16'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {/* Company Info */}
            <motion.div className='flex flex-col gap-6 lg:col-span-2' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <div>
                <SparklesText
                  text='Codever'
                  className='mb-4 text-3xl font-black text-white'
                  colors={{
                    first: '#3B82F6',
                    second: '#8B5CF6',
                  }}
                  sparklesCount={6}
                />
                <p className='max-w-md text-lg leading-relaxed text-white/70'>
                  Codever is one of the most prestigious software companies in Turkey, founded in 2025 by <strong className='text-white'>Oktay Saygın</strong> and <strong className='text-white'>Sedat Budak</strong>. We turn your dreams into reality using modern technologies.
                </p>
              </div>

              {/* Contact Info */}
              <div className='space-y-4'>
                <h3 className='mb-4 text-lg font-semibold text-white'>Contact Information</h3>
                {contactInfo.map((item, index) => (
                  <motion.a key={index} href={item.href} className='group flex items-center gap-3 text-white/70 transition-colors hover:text-white' whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <item.icon className='h-5 w-5 text-blue-400 group-hover:text-blue-300' />
                    <div>
                      <div className='text-sm text-white/50'>{item.label}</div>
                      <div className='font-medium'>{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className='mb-4 text-lg font-semibold text-white'>Social Media</h3>
                <div className='flex gap-4'>
                  {socialLinks.map((social, index) => (
                    <motion.a key={index} href={social.href} className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-blue-600 hover:text-white' whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                      <social.icon className='h-5 w-5' />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <h3 className='mb-6 text-lg font-semibold tracking-tight text-white'>Our Services</h3>
              <ul className='space-y-3'>
                {services.map((service, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <Link href={service.href} className='group flex items-center gap-3 text-white/70 transition-colors hover:text-white'>
                      <service.icon className='h-4 w-4 text-blue-400 group-hover:text-blue-300' />
                      <span>{service.name}</span>
                      <ExternalLink className='h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100' />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <h3 className='mb-6 text-lg font-semibold tracking-tight text-white'>Company</h3>
              <ul className='space-y-3'>
                {company.map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <Link href={item.href} className='group flex items-center gap-3 text-white/70 transition-colors hover:text-white'>
                      <item.icon className='h-4 w-4 text-blue-400 group-hover:text-blue-300' />
                      <span>{item.name}</span>
                      <ExternalLink className='h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100' />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div className='border-t border-white/10 p-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <div className='flex w-full items-center gap-2 text-sm text-white/60'>
              <span>© 2025 Codever. All rights reserved.</span>
              <Link href='https://www.linkedin.com/in/afkanozdemir/' className='flex items-center gap-2 text-white/60 transition-colors hover:text-white'>
                <span className='hidden md:inline'>•</span>
                <span className='hidden md:inline'>Created and designed by Afkan Özdemir</span>
                <span className='hidden md:inline'>with</span>
                <Heart className='h-4 w-4 animate-pulse text-red-500' />
              </Link>
            </div>
            <div className='flex gap-6 text-sm'>
              <Link href='/privacy' className='text-white/60 transition-colors hover:text-white'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-white/60 transition-colors hover:text-white'>
                Terms of Use
              </Link>
              <Link href='/cookies' className='text-white/60 transition-colors hover:text-white'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent' />
    </footer>
  );
};

export default Footer;
