import React from 'react';

export const StatusBadge = ({
  status = 'Active',
  type = 'default',
  size = 'md',
  className = '',
}) => {
  const normalizedStatus = status.toLowerCase();

  const getStyle = () => {
    switch (normalizedStatus) {
      case 'available':
      case 'active':
      case 'completed':
      case 'verified':
      case 'passed':
        return 'bg-[#E8F5E9] text-[#2D7D46] border-[#C8E6C9]';
      case 'pending':
      case 'in progress':
      case 'voting open':
        return 'bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]';
      case 'scheduled':
      case 'confirmed':
        return 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]';
      case 'cancelled':
      case 'closed':
      case 'rejected':
        return 'bg-[#FEE2E2] text-[#C53030] border-[#FCA5A5]';
      default:
        return 'bg-[#F4F1EA] text-[#5A6065] border-[#E5E0D8]';
    }
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border border-solid transition-colors ${getStyle()} ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      <span>{status}</span>
    </span>
  );
};

export default StatusBadge;
