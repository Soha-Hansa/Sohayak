import React from 'react';
import Card from '../ui/Card';
import CooperativeBadge from '../ui/CooperativeBadge';
import { ShieldCheck, Vote, Users, Coins, FileCheck2 } from 'lucide-react';

export const AdminGovernanceSummaryCard = ({ className = '' }) => {
  return (
    <Card
      variant="default"
      className={`p-6 bg-gradient-to-br from-[#1B4D3E] via-[#163E32] to-[#0F2D24] text-white border-none shadow-xl relative overflow-hidden ${className}`}
    >
      {/* Background Decorative Pattern */}
      <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-white/5 blur-xl pointer-events-none" />
      <div className="absolute right-1/3 -top-10 w-32 h-32 rounded-full bg-[#C87D55]/15 blur-lg pointer-events-none" />

      <div className="relative z-10 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-white/10 text-[#C87D55] backdrop-blur-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-heading text-xl font-normal text-white">
              Cooperative Governance Overview
            </h3>
          </div>
          <CooperativeBadge size="sm" variant="patron" />
        </div>

        {/* 4 Governance Highlight Metric Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4">
          <div className="space-y-1">
            <span className="text-[10px] text-[#E5E0D8] font-bold uppercase tracking-wider block">
              Total Members
            </span>
            <span className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
              2,486
            </span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Workers & Requesters</span>
          </div>

          <div className="space-y-1 border-l border-white/10 pl-2 sm:border-x sm:px-2">
            <span className="text-[10px] text-[#C87D55] font-bold uppercase tracking-wider block">
              Active Voters
            </span>
            <span className="font-serif-heading text-xl sm:text-2xl font-bold text-[#C87D55]">
              842
            </span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Chapter Assembly</span>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0 sm:border-r sm:pr-2">
            <span className="text-[10px] text-[#E5E0D8] font-bold uppercase tracking-wider block">
              Co-op Fund
            </span>
            <span className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
              ₹2.84L
            </span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Community Reserve</span>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0">
            <span className="text-[10px] text-[#E5E0D8] font-bold uppercase tracking-wider block">
              Proposals
            </span>
            <span className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
              12 Active
            </span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Open for Voting</span>
          </div>
        </div>

        {/* Supporting Text */}
        <p className="text-xs text-[#E5E0D8]/90 font-sans-ui leading-relaxed text-center sm:text-left">
          Members participate in decisions that shape the cooperative. Every member holds equal voting rights (1 Member = 1 Vote) on fund allocations and policy charters.
        </p>
      </div>
    </Card>
  );
};

export default AdminGovernanceSummaryCard;
