'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Scroll direction detection
  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Background blur effect when scrolled
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <AnimatePresence mode='wait'>
        <motion.header
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : -100,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`sticky top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-xl' : 'bg-black/10 backdrop-blur-md'}`}
        >
          {/* Grid Background Effect */}
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]' />

          <div className='relative container mx-auto w-full px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              {/* Logo */}
              <motion.div className='flex items-center' whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                <Link href='/' className='flex items-center space-x-3'>
                  <Image src='/logo/codever-icon.svg' alt='Codever' width={36} height={36} priority className='h-9 w-9' />
                  <SparklesText text='Codever' className='text-2xl font-black text-white' colors={{ first: '#3B82F6', second: '#8B5CF6' }} sparklesCount={8} />
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className='hidden items-center space-x-1 md:flex'>
                {navItems.map((item, index) => (
                  <motion.div key={item.name} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                    <Link href={item.href}>
                      <motion.div className='group relative px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <span className='relative z-10 flex items-center space-x-2'>
                          <span>{item.name}</span>
                        </span>

                        {/* Hover Effect */}
                        <motion.div className='absolute inset-0 rounded-lg bg-white/10 backdrop-blur-sm' initial={{ opacity: 0, scale: 0.8 }} whileHover={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }} />

                        {/* Gradient Border */}
                        <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100' />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <div className='flex items-center md:hidden'>
                <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20' whileTap={{ scale: 0.95 }}>
                  <motion.div className='flex h-5 w-5 flex-col justify-center space-y-1' animate={isMobileMenuOpen ? 'open' : 'closed'}>
                    <motion.span
                      className='h-0.5 w-full bg-white'
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: 45, y: 6 },
                      }}
                    />
                    <motion.span
                      className='h-0.5 w-full bg-white'
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                      }}
                    />
                    <motion.span
                      className='h-0.5 w-full bg-white'
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: -45, y: -6 },
                      }}
                    />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden' />

            {/* Mobile Menu Panel */}
            <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className='fixed top-0 right-0 z-50 h-full w-full border-l border-white/10 bg-black/90 backdrop-blur-xl md:hidden'>
              {/* Mobile Menu Header */}
              <div className='flex h-16 items-center justify-between px-6'>
                <div className='flex items-center space-x-2'>
                  <SparklesText text='Codever' className='text-2xl font-black text-white' colors={{ first: '#3B82F6', second: '#8B5CF6' }} sparklesCount={8} />
                </div>
                <motion.button onClick={() => setIsMobileMenuOpen(false)} className='flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20' whileTap={{ scale: 0.95 }}>
                  ✕
                </motion.button>
              </div>

              {/* Mobile Navigation */}
              <nav className='px-6 py-8'>
                <div className='space-y-2'>
                  {navItems.map((item, index) => (
                    <motion.div key={item.name} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                      <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                        <motion.div className='group flex items-center space-x-3 rounded-xl p-3 text-white/80 transition-all hover:bg-white/10 hover:text-white' whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                          <span className='text-lg'>{item.icon}</span>
                          <span className='font-medium'>{item.name}</span>
                          <motion.div className='ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100' transition={{ duration: 0.2 }} />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
