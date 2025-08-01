import { basics } from '@cv';
import { FlipWords } from './FlipWords';
import { motion } from 'motion/react';

const HeroText = () => {
  const { heroText1 } = basics;
  const words = ['Shit', 'Projects', 'Results'];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-display font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          {heroText1}
        </motion.h1>
        <motion.p
          className="text-5xl font-display font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          A Freelance Developer That Gets
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            className="font-black font-display text-white text-6xl"
            words={words}
          />
        </motion.div>
        <motion.p
          className="text-5xl font-display font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Done
        </motion.p>
      </div>
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          {heroText1}
        </motion.h1>
        <motion.p
          className="text-5xl font-display font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Getting
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            className="font-black font-display text-white text-7xl"
            words={words}
          />
        </motion.div>
        <motion.p
          className="text-5xl font-display font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Done
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
