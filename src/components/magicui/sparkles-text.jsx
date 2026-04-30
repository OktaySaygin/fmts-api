'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function SparklesText({
  text,
  colors = {
    first: '#9E7AFF',
    second: '#FE8BBB',
  },
  className,
  sparklesCount = 10,
  ...props
}) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generatedSparkles = Array.from({ length: sparklesCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }));
    setSparkles(generatedSparkles);
  }, [sparklesCount]);

  return (
    <div className={cn('relative inline-block', className)} {...props}>
      <span className='relative z-10'>{text}</span>
      <div className='absolute inset-0 overflow-hidden'>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            className='absolute rounded-full'
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: sparkle.size,
              height: sparkle.size,
              background: `linear-gradient(45deg, ${colors.first}, ${colors.second})`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: sparkle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export { SparklesText };
