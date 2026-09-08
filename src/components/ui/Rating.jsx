import React from 'react';
import { Star } from 'lucide-react';

export const Rating = ({
  rating = 5.0,
  reviewCount,
  size = 'sm',
  className = '',
}) => {
  const iconSize = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base font-semibold',
  };

  return (
    <div className={`inline-flex items-center gap-1 font-medium text-[#191C1D] ${textSize[size] || textSize.sm} ${className}`}>
      <Star className={`${iconSize[size] || iconSize.sm} fill-[#C87D55] text-[#C87D55] shrink-0`} />
      <span className="font-semibold">{Number(rating).toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-[#5A6065] font-normal text-xs">
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default Rating;
