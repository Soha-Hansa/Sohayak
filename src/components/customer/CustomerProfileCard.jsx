import React from 'react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import CooperativeBadge from '../ui/CooperativeBadge';
import { MapPin, Calendar, FileText, CheckCircle2 } from 'lucide-react';

export const CustomerProfileCard = ({ profile, onEditProfile, className = '' }) => {
  if (!profile) return null;

  return (
    <Card variant="default" className={`p-6 space-y-6 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <Avatar src={profile.avatar} initials={profile.initials} size="xl" />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-serif-heading text-2xl font-semibold text-[#191C1D]">{profile.name}</h3>
              <CooperativeBadge size="sm" variant="default" subtext="Patron Member" />
            </div>
            <p className="text-xs text-[#5A6065] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C87D55]" /> {profile.location}
            </p>
            <p className="text-[11px] text-[#8A9197]">Member since {profile.memberSince}</p>
          </div>
        </div>

        {/* Edit Button */}
        <Button variant="secondary" size="small" onClick={onEditProfile}>
          Edit Profile
        </Button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E5E0D8] text-xs">
        <div className="p-3 rounded-xl bg-[#F4F1EA]/60 border border-[#E5E0D8]">
          <span className="text-[#8A9197] block">REQUESTS POSTED</span>
          <span className="font-bold text-base text-[#191C1D]">{profile.requestsPosted}</span>
        </div>

        <div className="p-3 rounded-xl bg-[#F4F1EA]/60 border border-[#E5E0D8]">
          <span className="text-[#8A9197] block">COMPLETED SERVICES</span>
          <span className="font-bold text-base text-[#1B4D3E]">{profile.completedServices}</span>
        </div>

        <div className="p-3 rounded-xl bg-[#E8F2EE] border border-[#C0DCD3] col-span-2 sm:col-span-1">
          <span className="text-[#1B4D3E] block font-semibold">PATRON REWARDS</span>
          <span className="font-bold text-xs text-[#1B4D3E] flex items-center gap-1 mt-0.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4D3E]" /> Dividend Eligible
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CustomerProfileCard;
