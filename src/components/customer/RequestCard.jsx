import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import { MapPin, Users, Eye } from 'lucide-react';

export const RequestCard = ({ request, onView, className = '' }) => {
  if (!request) return null;

  return (
    <Card variant="default" className={`p-5 space-y-4 flex flex-col justify-between ${className}`}>
      <div className="space-y-3">
        {/* Header: Status & Category */}
        <div className="flex items-center justify-between gap-2">
          <StatusBadge status={request.status} size="sm" />
          <span className="text-[11px] font-bold text-[#1B4D3E] bg-[#E8F2EE] px-2.5 py-0.5 rounded-md">
            {request.category}
          </span>
        </div>

        {/* Title & Posted Date */}
        <div>
          <h4 className="font-serif-heading text-lg font-semibold text-[#191C1D]">{request.title}</h4>
          <span className="text-xs text-[#8A9197]">Posted {request.postedDate}</span>
        </div>

        {/* Details: Location & Applicants */}
        <div className="space-y-1 text-xs text-[#5A6065] bg-[#F4F1EA]/60 p-3 rounded-xl">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C87D55] shrink-0" />
            <span>Location: {request.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#1B4D3E] shrink-0" />
            <span className="font-semibold text-[#191C1D]">{request.applicantsCount} workers applied</span>
          </div>
        </div>
      </div>

      {/* Footer: Budget & Action */}
      <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#8A9197] font-bold uppercase">BUDGET</span>
          <p className="font-bold text-sm text-[#1B4D3E]">{request.budgetRange}</p>
        </div>

        <Button variant="secondary" size="small" onClick={() => onView(request)} icon={Eye}>
          View Request
        </Button>
      </div>
    </Card>
  );
};

export default RequestCard;
