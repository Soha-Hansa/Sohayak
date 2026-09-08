import React from 'react';
import Card from '../ui/Card';
import CooperativeBadge from '../ui/CooperativeBadge';
import { Coins, Award, TrendingUp, HeartHandshake } from 'lucide-react';

export const CooperativeImpactCard = ({ className = '' }) => {
  return (
    <Card
      variant="default"
      className={`p-6 bg-gradient-to-br from-[#1B4D3E] via-[#163E32] to-[#0F2D24] text-white border-none shadow-xl relative overflow-hidden ${className}`}
    >
      {/* Background Decorative Graphic Elements */}
      <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-white/5 blur-xl pointer-events-none" />
      <div className="absolute right-1/3 -top-10 w-32 h-32 rounded-full bg-[#C87D55]/15 blur-lg pointer-events-none" />

      <div className="relative z-10 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-white/10 text-[#C87D55] backdrop-blur-md">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif-heading text-xl font-normal text-white">
              Your Cooperative Impact
            </h3>
          </div>
          <CooperativeBadge size="sm" variant="patron" />
        </div>

        {/* 3 Major Metric Columns */}
        <div className="grid grid-cols-3 gap-3 text-center py-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4">
          <div className="space-y-1">
            <span className="text-[10px] text-[#E5E0D8] font-bold uppercase tracking-wider block">
              Contribution
            </span>
            <span className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
              ₹4,850
            </span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Co-op Fund</span>
          </div>

          <div className="space-y-1 border-x border-white/10 px-2">
            <span className="text-[10px] text-[#C87D55] font-bold uppercase tracking-wider block">
              Est. Dividend
            </span>
            <span className="font-serif-heading text-xl sm:text-2xl font-bold text-[#C87D55]">
              ₹3,240
            </span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Annual Share</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-[#E5E0D8] font-bold uppercase tracking-wider block">
              Jobs Completed
            </span>
            <span className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
              126
            </span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Lifetime</span>
          </div>
        </div>

        {/* Supporting Text */}
        <p className="text-xs text-[#E5E0D8]/90 font-sans-ui leading-relaxed text-center sm:text-left">
          Your work helps strengthen the cooperative community. 85% of your earnings go straight to you, while your contributions fuel member welfare and patronage dividends.
        </p>
      </div>
    </Card>
  );
};

export default CooperativeImpactCard;
