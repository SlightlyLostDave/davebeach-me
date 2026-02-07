'use client';

import { useEffect } from 'react';

import initEarth from '@/components/home/hero/Earth';

const Hero = () => {
  useEffect(() => {
    initEarth();
  });

  return (
    <section className="relative">
      <canvas className="earth-3d relative pointer-events-none user-select-none z-2"></canvas>
    </section>
  );
};

export default Hero;
