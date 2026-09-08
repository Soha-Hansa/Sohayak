import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Rating from '../ui/Rating';
import CooperativeBadge from '../ui/CooperativeBadge';
import { MapPin, ArrowRight } from 'lucide-react';

export const ProviderCard = ({ provider, className = '' }) => {
  const navigate = useNavigate();

  if (!provider) return null;

  return (
    <Card
      variant="interactive"
      onClick={() => navigate(`/customer/provider/${provider.id}`)}
      className={`p-5 flex flex-col justify-between space-y-4 group hover:border-[#1B4D3E]/40 ${className}`}
    >
      <div className="space-y-3">
        {/* Top Header: Avatar + CooperativeBadge */}
        <div className="flex items-start justify-between gap-3">
          <div className="relative overflow-hidden rounded-full shrink-0">
            <Avatar
              src={provider.avatar}
              initials={provider.initials}
              size="lg"
              isCoopMember={true}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CooperativeBadge size="sm" variant="default" />
        </div>

        {/* Info Details */}
        <div className="space-y-1">
          <h4 className="font-sans-ui text-base font-bold text-[#191C1D] group-hover:text-[#1B4D3E] transition-colors">
            {provider.name}
          </h4>
          <p className="text-xs font-semibold text-[#1B4D3E]">{provider.category || provider.coopRole}</p>
          <div className="flex items-center gap-1 text-xs text-[#5A6065] pt-0.5">
            <MapPin className="w-3.5 h-3.5 text-[#C87D55] shrink-0" />
            <span className="truncate">{provider.locality}</span>
          </div>
        </div>

        {/* Rating and Job Count */}
        <div className="pt-2 flex items-center justify-between border-t border-[#E5E0D8] text-xs">
          <Rating rating={provider.rating} reviewCount={provider.totalJobs} size="sm" />
          <span className="text-[#8A9197] font-sans-ui">{provider.membershipYears || 2} yrs member</span>
        </div>
      </div>

      {/* Footer: Price + CTA */}
      <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#8A9197] uppercase font-bold tracking-wider">STARTING FROM</span>
          <p className="font-serif-heading text-lg font-bold text-[#191C1D]">
            ₹{provider.hourlyRate}
          </p>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B4D3E] group-hover:translate-x-1 transition-transform">
          <span>View Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Card>
  );
};

export default ProviderCard;
