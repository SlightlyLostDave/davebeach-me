import type React from 'react';
import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

import { projects } from '@cv';
import Project from './Project.tsx';

const Projects = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section
      id="projects"
      className="relative c-space mt-20 md:mt-30"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-heading">Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {projects.map((project) => (
        <Project key={project.slug} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
