'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export const BackgroundBeams = ({ className }) => {
  const [beamData, setBeamData] = useState([]);
  const [sparkData, setSparkData] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Client-side'da rastgele değerleri oluştur
    const generateBeamData = () => {
      const verticalBeams = Array.from({ length: 20 }, (_, i) => ({
        id: `vertical-${i}`,
        x1: Math.random() * 100,
        x2: Math.random() * 100,
        duration: Math.random() * 8 + 4,
        delay: Math.random() * 2,
      }));

      const horizontalBeams = Array.from({ length: 20 }, (_, i) => ({
        id: `horizontal-${i}`,
        y1: Math.random() * 100,
        y2: Math.random() * 100,
        duration: Math.random() * 8 + 4,
        delay: Math.random() * 2,
      }));

      return { verticalBeams, horizontalBeams };
    };

    const generateSparkData = () => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: `spark-${i}`,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }));
    };

    const beams = generateBeamData();
    setBeamData(beams);
    setSparkData(generateSparkData());
    setMounted(true);
  }, []);

  // Server-side rendering sırasında boş div döndür
  if (!mounted) {
    return <div className={cn('absolute inset-0 overflow-hidden bg-slate-950', className)} />;
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden bg-slate-950', className)}>
      <svg className='absolute inset-0 h-full w-full' width='100%' height='100%' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <linearGradient id='beam1' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#18CCFC' stopOpacity='0' />
            <stop offset='50%' stopColor='#18CCFC' stopOpacity='1' />
            <stop offset='100%' stopColor='#6344F5' stopOpacity='0' />
          </linearGradient>
          <linearGradient id='beam2' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#6344F5' stopOpacity='0' />
            <stop offset='50%' stopColor='#6344F5' stopOpacity='1' />
            <stop offset='100%' stopColor='#18CCFC' stopOpacity='0' />
          </linearGradient>
        </defs>
        {beamData.verticalBeams?.map(beam => (
          <motion.line
            key={beam.id}
            x1={beam.x1}
            y1={-10}
            x2={beam.x2}
            y2={110}
            stroke='url(#beam1)'
            strokeWidth='0.5'
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              y1: [-10, 110],
              y2: [-10, 110],
            }}
            transition={{
              duration: beam.duration,
              repeat: Infinity,
              repeatType: 'loop',
              delay: beam.delay,
            }}
          />
        ))}
        {beamData.horizontalBeams?.map(beam => (
          <motion.line
            key={beam.id}
            x1={-10}
            y1={beam.y1}
            x2={110}
            y2={beam.y2}
            stroke='url(#beam2)'
            strokeWidth='0.5'
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              x1: [-10, 110],
              x2: [-10, 110],
            }}
            transition={{
              duration: beam.duration,
              repeat: Infinity,
              repeatType: 'loop',
              delay: beam.delay,
            }}
          />
        ))}
      </svg>
      {sparkData.map(spark => (
        <motion.div
          key={spark.id}
          className='absolute h-px w-px rounded-full bg-blue-500'
          style={{
            top: `${spark.top}%`,
            left: `${spark.left}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: spark.duration,
            repeat: Infinity,
            repeatType: 'loop',
            delay: spark.delay,
          }}
        />
      ))}
    </div>
  );
};
