// utils/utils.js
import { motion } from 'framer-motion';

// Fade-in animation
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Stagger animation for children
export const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

// Scale-up animation
export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

// Rotate animation
export const rotate = {
  hidden: { rotate: -90, opacity: 0 },
  visible: { rotate: 0, opacity: 1, transition: { duration: 0.8 } },
};