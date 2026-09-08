import React from 'react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Rating from '../ui/Rating';
import CooperativeBadge from '../ui/CooperativeBadge';
import Button from '../ui/Button';
import { MapPin, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export const WorkerProfileCard = ({ profile, onViewProfile, className = '' }) => {
  if (!profile) return null;

  return (
    <Card variant="feature" className={`p-6 border-[#C0DCD3] space-y-6 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <Avatar
            src={profile.avatar}
            initials={profile.initials}
            size="xl"
            isCoopMember={true}
            status="online"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#191C1D]">
                {profile.name}
              </h2>
              <CooperativeBadge size="sm" variant="emerald" subtext={profile.status} />
            </div>

            <p className="text-sm font-semibold text-[#1B4D3E]">{profile.skill}</p>

            <div className="flex items-center gap-3 text-xs text-[#5A6065] flex-wrap">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C87D55]" />
                {profile.location}
              </span>
              <span>•</span>
              <span className="font-semibold text-[#191C1D]">{profile.coopId}</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <Button
          variant="secondary"
          size="medium"
          onClick={onViewProfile}
          className="shrink-0 self-start sm:self-center"
        >
          View Profile
        </Button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#E5E0D8] text-xs">
        <div className="p-3 rounded-xl bg-white border border-[#E5E0D8]">
          <span className="text-[#8A9197] block">RATING</span>
          <Rating rating={profile.rating} reviewCount={profile.completedJobs} size="sm" />
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#E5E0D8]">
          <span className="text-[#8A9197] block">COMPLETED JOBS</span>
          <span className="font-bold text-base text-[#191C1D]">{profile.completedJobs}</span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#E5E0D8]">
          <span className="text-[#8A9197] block">EQUITY SHARES</span>
          <span className="font-bold text-base text-[#1B4D3E]">{profile.equityShareCount} Shares</span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#E5E0D8]">
          <span className="text-[#8A9197] block">STATUS</span>
          <span className="font-bold text-xs text-[#2D7D46] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Verified Owner
          </span>
        </div>
      </div>
    </Card>
  );
};

export default WorkerProfileCard;
