import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4D3E]/20 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const variants = {
    primary: 'bg-[#1B4D3E] hover:bg-[#153E32] active:bg-[#103027] text-white shadow-sm border border-[#1B4D3E]/10',
    secondary: 'bg-[#F0EDE6] hover:bg-[#E5DFD4] active:bg-[#DAD3C7] text-[#191C1D] border border-[#E5E0D8]',
    ghost: 'bg-transparent hover:bg-[#F4F1EA] active:bg-[#EAE4D9] text-[#191C1D]',
    danger: 'bg-[#C53030] hover:bg-[#A82828] active:bg-[#8C2020] text-white border border-[#C53030]/10',
    earth: 'bg-[#C87D55] hover:bg-[#B56D46] active:bg-[#A15D37] text-white shadow-sm',
    outline: 'bg-transparent border border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E]/5',
  };

  const sizes = {
    small: 'px-3 py-1.5 text-xs gap-1.5 font-medium',
    medium: 'px-4 py-2.5 text-sm gap-2 font-medium',
    large: 'px-6 py-3.5 text-base gap-2.5 font-semibold',
  };

  return (
    <motion.button
      type={type}
      whileHover={disabled ? {} : { scale: 1.015 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeInOut' }}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.medium} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
};

export default Button;
