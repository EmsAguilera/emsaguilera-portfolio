'use client'; 

import { motion } from 'framer-motion';

type FadeInOnScrollProps = {
  children: React.ReactNode;
};

export const FadeInOnScroll = ({ children }: FadeInOnScrollProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};