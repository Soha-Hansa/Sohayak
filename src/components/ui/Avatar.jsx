import React, { useState } from 'react';

export const Avatar = ({
  src,
  alt = '',
  initials = 'CO',
  size = 'md',
  isCoopMember = false,
  status = null, // 'online', 'offline', 'busy'
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    xs: 'w-7 h-7 text-[10px]',
    sm: 'w-9 h-9 text-xs',
    md: 'w-11 h-11 text-sm',
    lg: 'w-14 h-14 text-base',
    xl: 'w-20 h-20 text-xl font-semibold',
  };

  const ringClasses = isCoopMember
    ? 'ring-2 ring-[#1B4D3E]/30 ring-offset-2 ring-offset-[#FBF9F5]'
    : '';

  const statusBg = {
    online: 'bg-[#2D7D46]',
    offline: 'bg-gray-400',
    busy: 'bg-[#D97706]',
  };

  return (
    <div className={`relative inline-block shrink-0 ${className}`}>
      <div
        className={`relative overflow-hidden rounded-full bg-[#E5E0D8] text-[#191C1D] font-medium flex items-center justify-center border border-[#E5E0D8] ${sizeClasses[size] || sizeClasses.md} ${ringClasses}`}
      >
        {src && !imgError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-sans-ui uppercase tracking-wider text-[#5A6065]">
            {initials.slice(0, 2)}
          </span>
        )}
      </div>

      {status && (
        <span
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${statusBg[status] || statusBg.online}`}
        />
      )}
    </div>
  );
};

export default Avatar;
