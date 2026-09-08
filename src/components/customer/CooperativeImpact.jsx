import React from 'react';
import Card from '../ui/Card';
import CooperativeBadge from '../ui/CooperativeBadge';
import { HeartHandshake, Users, CheckCircle2, TrendingUp, Award } from 'lucide-react';

export const CooperativeImpact = ({ className = '' }) => {
  return (
    <Card variant="feature" className={`p-6 sm:p-10 border-[#C0DCD3] space-y-6 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E0D8] pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
              COMMUNITY OWNERSHIP
            </span>
            <CooperativeBadge size="sm" variant="emerald" subtext="Democratic Network" />
          </div>
          <h3 className="font-serif-heading text-3xl sm:text-4xl font-normal text-[#191C1D]">
            Every booking strengthens the community.
          </h3>
          <p className="text-sm sm:text-base text-[#5A6065] font-sans-ui leading-relaxed">
            When you use cooperative services, value stays within the community and helps workers grow together with direct payouts, healthcare reserves, and patronage dividends.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#E5E0D8] shrink-0 self-start md:self-auto">
          <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] text-white flex items-center justify-center font-bold">
            <HeartHandshake className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <span className="text-[10px] text-[#8A9197] font-bold uppercase tracking-wider block">IMPACT MODEL</span>
            <span className="font-bold text-xs text-[#1B4D3E]">100% Worker Owned</span>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans-ui">
        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-semibold block">COOP WORKERS</span>
          <span className="font-sans-ui text-2xl font-bold text-[#191C1D]">1,284+</span>
          <span className="text-[11px] text-[#1B4D3E] font-medium block">Member-Owners</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-semibold block">SERVICES COMPLETED</span>
          <span className="font-sans-ui text-2xl font-bold text-[#191C1D]">5,826+</span>
          <span className="text-[11px] text-[#2D7D46] font-medium block">Verified Appointments</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-semibold block">WORKER EARNINGS</span>
          <span className="font-sans-ui text-2xl font-bold text-[#1B4D3E]">₹18.6L</span>
          <span className="text-[11px] text-[#1B4D3E] font-medium block">Zero Commission Cut</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-semibold block">SATISFACTION</span>
          <span className="font-sans-ui text-2xl font-bold text-[#2D7D46]">94%</span>
          <span className="text-[11px] text-[#2D7D46] font-medium block">Positive Feedback</span>
        </div>
      </div>
    </Card>
  );
};

export default CooperativeImpact;
