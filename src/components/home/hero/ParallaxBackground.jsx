import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mtn3Y = useTransform(x, [0, 0.5], ['0%', '70%']);
  const planetsX = useTransform(x, [0, 0.5], ['0%', '-20%']);
  const mtn2Y = useTransform(x, [0, 0.5], ['0%', '30%']);
  const mtn1Y = useTransform(x, [0, 0.5], ['0%', '0%']);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: 'url(/home/hero/sky.jpg)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        ></div>
        <motion.div
          className="absolute inset-0 w-full h-screen -z-40"
          style={{
            backgroundImage: 'url(/home/hero/mountain-3.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mtn3Y,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 w-full h-screen -z-30"
          style={{
            backgroundImage: 'url(/home/hero/planets.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            x: planetsX,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 w-full h-screen -z-20"
          style={{
            backgroundImage: 'url(/home/hero/mountain-2.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mtn2Y,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 w-full h-screen -z-10"
          style={{
            backgroundImage: 'url(/home/hero/mountain-1.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mtn1Y,
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
