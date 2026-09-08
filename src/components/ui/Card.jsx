import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'rounded-2xl border transition-all duration-200 overflow-hidden';

  const variants = {
    default: 'bg-white border-[#E5E0D8] text-[#191C1D] shadow-tactile',
    interactive: 'bg-white border-[#E5E0D8] text-[#191C1D] shadow-tactile hover:border-[#1B4D3E]/40 cursor-pointer',
    highlighted: 'bg-[#F9F6F0] border-[#C0DCD3] text-[#191C1D] shadow-tactile',
    dark: 'bg-[#191C1D] border-[#2A2E30] text-white shadow-tactile-lg',
    feature: 'bg-gradient-to-br from-white via-[#FBF9F5] to-[#F4EFF7] border-[#E5E0D8] text-[#191C1D] shadow-tactile',
    emerald: 'bg-[#1B4D3E] border-[#153E32] text-white shadow-tactile-lg',
  };

  const isClickable = Boolean(onClick) || variant === 'interactive';

  if (isClickable || hover) {
    return (
      <motion.div
        whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
        whileTap={isClickable ? { scale: 0.99 } : {}}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant] || variants.default} ${isClickable ? 'cursor-pointer' : ''} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
