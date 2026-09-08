import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Rating from '../ui/Rating';
import CooperativeBadge from '../ui/CooperativeBadge';
import Button from '../ui/Button';
import { MapPin, ShieldCheck, ArrowRight, Star, Clock } from 'lucide-react';

export const ListingProviderCard = ({ provider, className = '' }) => {
  const navigate = useNavigate();

  if (!provider) return null;

  const handleViewProfile = (e) => {
    e.stopPropagation();
    navigate(`/customer/providers/${provider.id}`);
  };

  return (
    <Card
      variant="interactive"
      onClick={handleViewProfile}
      className={`p-5 sm:p-6 flex flex-col justify-between space-y-4 group hover:border-[#1B4D3E]/40 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <div className="space-y-3.5">
        {/* Top Header: Avatar + Co-op/Verified Badges */}
        <div className="flex items-start justify-between gap-3">
          <div className="relative shrink-0">
            <Avatar
              src={provider.avatar}
              initials={provider.initials}
              size="lg"
              isCoopMember={true}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            {provider.isVerified && (
              <span
                className="absolute -bottom-1 -right-1 bg-[#1B4D3E] text-white p-0.5 rounded-full ring-2 ring-white"
                title="Verified Cooperative Provider"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C87D55]" />
              </span>
            )}
          </div>

          <div className="flex flex-col items-end gap-1.5">
            {provider.isVerified ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1B4D3E] bg-[#E8F2EE] px-2 py-0.5 rounded-md">
                <ShieldCheck className="w-3 h-3 text-[#1B4D3E]" />
                <span>Verified</span>
              </span>
            ) : (
              <CooperativeBadge size="sm" variant="default" />
            )}
            {provider.isAvailableToday && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#C87D55] bg-[#F9F0EA] px-2 py-0.5 rounded-md">
                <Clock className="w-2.5 h-2.5" />
                <span>Available Today</span>
              </span>
            )}
          </div>
        </div>

        {/* Info: Name, Main Skill & Distance */}
        <div className="space-y-1">
          <h3 className="font-sans-ui text-lg font-bold text-[#191C1D] group-hover:text-[#1B4D3E] transition-colors leading-snug">
            {provider.name}
          </h3>
          <p className="text-xs font-bold text-[#1B4D3E]">
            {provider.mainSkill || provider.coopRole || provider.category}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#5A6065] pt-0.5">
            <MapPin className="w-3.5 h-3.5 text-[#C87D55] shrink-0" />
            <span className="font-semibold text-[#191C1D]">{provider.distance || '2.4 km away'}</span>
            <span className="text-[#8A9197]">· {provider.locality}</span>
          </div>
        </div>

        {/* Rating & Jobs Count Line */}
        <div className="pt-2 flex items-center justify-between border-t border-[#E5E0D8] text-xs">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#C87D55] fill-[#C87D55]" />
            <span className="font-bold text-[#191C1D]">{provider.rating}</span>
            <span className="text-[#8A9197]">({provider.totalJobs} jobs)</span>
          </div>
          <span className="text-[#8A9197] font-sans-ui text-[11px]">
            {provider.membershipYears || 2} yrs co-op
          </span>
        </div>

        {/* Short Bio Description */}
        <p className="text-xs text-[#5A6065] font-sans-ui line-clamp-2 leading-relaxed">
          {provider.bio}
        </p>
      </div>

      {/* Card Footer: Starting Price & View Profile CTA */}
      <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] text-[#8A9197] uppercase font-bold tracking-wider block">
            STARTING PRICE
          </span>
          <p className="font-serif-heading text-xl font-bold text-[#191C1D]">
            From ₹{provider.startingPrice || provider.hourlyRate}
          </p>
        </div>

        <Button
          variant="secondary"
          size="small"
          onClick={handleViewProfile}
          icon={ArrowRight}
          iconPosition="right"
          className="group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors"
        >
          View Profile
        </Button>
      </div>
    </Card>
  );
};

export default ListingProviderCard;
