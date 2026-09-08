import React from 'react';
import { Check } from 'lucide-react';

export const CooperativeBadge = ({
  size = 'md',
  variant = 'default',
  showLabel = true,
  label = 'Cooperative Member',
  subtext,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px] gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2',
  };

  const checkSize = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
  };

  const variants = {
    default: 'bg-[#E8F2EE] text-[#1B4D3E] border border-[#C0DCD3]/80 shadow-[0_1px_2px_rgba(27,77,62,0.06)]',
    emerald: 'bg-[#1B4D3E] text-white border border-[#153D31] shadow-xs',
    gold: 'bg-[#FDF8EB] text-[#9E5A3C] border border-[#EAC8B4] shadow-xs',
    outline: 'bg-white/80 backdrop-blur-xs text-[#1B4D3E] border border-[#1B4D3E]/30',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full tracking-tight transition-all select-none ${variants[variant] || variants.default} ${sizeClasses[size] || sizeClasses.md} ${className}`}
      title="Verified Worker-Owner in the Cooperative Network"
    >
      <span className={`inline-flex items-center justify-center rounded-full ${variant === 'emerald' ? 'bg-white/20 text-white' : 'bg-[#1B4D3E] text-white'} p-0.5 shrink-0`}>
        <Check className={`${checkSize[size] || checkSize.md} stroke-[2.5]`} />
      </span>
      {showLabel && <span>{label}</span>}
      {subtext && (
        <span className="opacity-75 font-normal border-l border-current/30 pl-1.5 ml-0.5">
          {subtext}
        </span>
      )}
    </span>
  );
};

export default CooperativeBadge;
