import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import Avatar from '../ui/Avatar';
import { MapPin, Clock, Check, Eye } from 'lucide-react';

export const GigCard = ({ gig, onViewDetails, className = '' }) => {
  const [applied, setApplied] = useState(false);

  if (!gig) return null;

  return (
    <Card variant="default" className={`p-5 space-y-4 flex flex-col justify-between ${className}`}>
      <div className="space-y-3">
        {/* Header: Priority & Distance */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
              gig.priority === 'Urgent'
                ? 'bg-[#FEE2E2] text-[#C53030] border border-[#FCA5A5]'
                : gig.priority === 'High Priority'
                ? 'bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A]'
                : 'bg-[#E8F2EE] text-[#1B4D3E] border border-[#C0DCD3]'
            }`}
          >
            {gig.priority}
          </span>
          <span className="text-xs font-semibold text-[#8A9197]">{gig.distance} away</span>
        </div>

        {/* Title & Customer */}
        <div>
          <h4 className="font-serif-heading text-xl font-semibold text-[#191C1D]">{gig.title}</h4>
          <div className="flex items-center gap-2 mt-1">
            <Avatar src={gig.customerAvatar} initials={gig.customerName.slice(0, 2)} size="xs" />
            <span className="text-xs font-medium text-[#5A6065]">Customer: {gig.customerName}</span>
          </div>
        </div>

        {/* Details: Location & Date */}
        <div className="space-y-1 text-xs text-[#5A6065] bg-[#F4F1EA]/60 p-3 rounded-xl">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C87D55] shrink-0" />
            <span className="truncate">{gig.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#1B4D3E] shrink-0" />
            <span>{gig.date}</span>
          </div>
        </div>
      </div>

      {/* Footer: Payment & Actions */}
      <div className="pt-3 border-t border-[#E5E0D8] space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A9197]">ESTIMATED PAY</span>
          <span className="font-bold text-base text-[#1B4D3E]">{gig.paymentRange}</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="small"
            onClick={() => onViewDetails(gig)}
            icon={Eye}
            className="flex-1"
          >
            View Details
          </Button>

          <Button
            variant={applied ? 'ghost' : 'primary'}
            size="small"
            disabled={applied}
            onClick={() => setApplied(true)}
            icon={applied ? Check : null}
            className={`flex-1 ${applied ? 'bg-[#E8F5E9] text-[#2D7D46] border border-[#C8E6C9]' : ''}`}
          >
            {applied ? 'Applied' : 'Apply Now'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default GigCard;
