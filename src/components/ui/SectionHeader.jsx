import React from 'react';

export const SectionHeader = ({
  eyebrow,
  heading,
  description,
  action,
  align = 'left',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto max-w-2xl',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 ${className}`}>
      <div className={`flex flex-col ${alignClasses[align] || alignClasses.left}`}>
        {eyebrow && (
          <span className="text-xs font-bold tracking-widest uppercase text-[#C87D55] mb-2">
            {eyebrow}
          </span>
        )}
        {heading && (
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[#191C1D] leading-tight">
            {heading}
          </h2>
        )}
        {description && (
          <p className="mt-2 text-base text-[#5A6065] leading-relaxed max-w-2xl font-sans-ui">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0 pt-2 md:pt-0">
          {action}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
