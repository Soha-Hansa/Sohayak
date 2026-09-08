import React from 'react';
import Card from '../ui/Card';
import CooperativeBadge from '../ui/CooperativeBadge';
import { HeartHandshake, ShieldCheck, TrendingUp, Users, Award } from 'lucide-react';

export const CooperativeImpactCard = ({ className = '' }) => {
  return (
    <Card variant="feature" className={`p-6 sm:p-8 border-[#C0DCD3] space-y-6 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E0D8] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
              SIH COOPERATIVE METRICS
            </span>
            <CooperativeBadge size="sm" variant="emerald" subtext="Worker Owned" />
          </div>
          <h3 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#191C1D]">
            Cooperative Impact
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6065] font-sans-ui">
            Empowering local workers through cooperative gig opportunities.
          </p>
        </div>

        <div className="px-4 py-2 bg-white rounded-2xl border border-[#E5E0D8] shrink-0">
          <span className="text-[10px] text-[#8A9197] font-bold uppercase tracking-wider block">MODEL STATUS</span>
          <span className="font-bold text-xs text-[#1B4D3E] flex items-center gap-1 mt-0.5">
            <ShieldCheck className="w-4 h-4 text-[#1B4D3E]" /> Democratic Ownership
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans-ui">
        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-semibold block">ACTIVE WORKERS</span>
          <span className="font-sans-ui text-2xl font-bold text-[#191C1D]">1,284</span>
          <span className="text-[11px] text-[#1B4D3E] font-medium block">100% Equity Holders</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-semibold block">JOBS COMPLETED</span>
          <span className="font-sans-ui text-2xl font-bold text-[#191C1D]">5,826</span>
          <span className="text-[11px] text-[#2D7D46] font-medium block">Verified Appointments</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-semibold block">WORKER EARNINGS</span>
          <span className="font-sans-ui text-2xl font-bold text-[#1B4D3E]">₹18.6 Lakh</span>
          <span className="text-[11px] text-[#1B4D3E] font-medium block">Zero Private Commission</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-semibold block">SUCCESS RATE</span>
          <span className="font-sans-ui text-2xl font-bold text-[#2D7D46]">94.0%</span>
          <span className="text-[11px] text-[#2D7D46] font-medium block">Quality Guarantee</span>
        </div>
      </div>
    </Card>
  );
};

export default CooperativeImpactCard;
