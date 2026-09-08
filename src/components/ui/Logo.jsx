import React from 'react';

import logoImg from '../../assets/sohayak-logo.png';
import iconImg from '../../assets/sohayak-icon.png';

export const Logo = ({ size = 'md', showTagline = false, iconOnly = false, className = '' }) => {
  const sizeClasses = {
    sm: {
      icon: 'w-7 h-7',
      text: 'text-lg',
      subtext: 'text-[9px]',
      logoImg: 'h-8',
    },
    md: {
      icon: 'w-9 h-9 sm:w-10 sm:h-10',
      text: 'text-xl sm:text-2xl',
      subtext: 'text-[10px]',
      logoImg: 'h-10 sm:h-11',
    },
    lg: {
      icon: 'w-12 h-12',
      text: 'text-2xl sm:text-3xl',
      subtext: 'text-xs',
      logoImg: 'h-14',
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  if (iconOnly) {
    return (
      <img
        src={iconImg}
        alt="Sohayak Icon"
        className={`${currentSize.icon} object-contain rounded-full shadow-xs ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={iconImg}
        alt="Sohayak Emblem"
        className={`${currentSize.icon} object-contain drop-shadow-xs transition-transform group-hover:scale-105`}
      />
      <div className="flex flex-col">
        <span className={`font-serif-heading font-extrabold tracking-tight text-[#1B4D3E] ${currentSize.text} leading-none`}>
          SOHAYAK
        </span>
        {showTagline ? (
          <span className={`text-[#2F6B58] font-sans-ui font-medium ${currentSize.subtext} leading-tight mt-0.5 tracking-wide uppercase`}>
            Empowering Households
          </span>
        ) : (
          <span className={`text-[#5A6065] font-sans-ui ${currentSize.subtext} leading-tight`}>
            Empowering Households
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
