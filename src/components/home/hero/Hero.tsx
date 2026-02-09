'use client';

import { useEffect } from 'react';

import initEarth from '@/components/home/hero/Earth';

const Hero = () => {
  useEffect(() => {
    initEarth();
  });

  return (
    <section className="hero-main relative">
      <div className="hero-content absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center max-w-[1000px] flex flex-col items-center gap-[1.4rem] w-dvw z-2">
        <h1 className="font-display font-medium text-balance leading-[115%] text-primary">
          Crafting Code, Mapping Data, Telling Stories
        </h1>
        <p className="max-w-[400px]">
          Combining software engineering and geospatial expertise with hands-on
          exploration to document and analyze the world around us.
        </p>
        <button className="btn">Get in touch.</button>
      </div>
      <canvas className="earth-3d relative pointer-events-none user-select-none z-1"></canvas>
    </section>
  );
};

export default Hero;
