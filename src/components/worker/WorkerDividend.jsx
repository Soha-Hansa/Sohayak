import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import CooperativeBadge from '../ui/CooperativeBadge';
import { Award, CheckCircle2, Calendar, TrendingUp, Info } from 'lucide-react';

export const WorkerDividend = () => {
  const [showHistory, setShowHistory] = useState(true);

  const dividendHistoryRecords = [
    { year: '2025 (FY25)', surplus: '₹14,50,000', memberShare: '3.2%', dividendReceived: '₹1,850', status: 'Paid Out' },
    { year: '2024 (FY24)', surplus: '₹9,80,000', memberShare: '2.8%', dividendReceived: '₹1,240', status: 'Paid Out' },
    { year: '2023 (FY23)', surplus: '₹4,20,000', memberShare: '2.1%', dividendReceived: '₹620', status: 'Paid Out' }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
            SURPLUS DISTRIBUTION ⭐
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
            Patronage Dividend
          </h2>
        </div>
        <CooperativeBadge size="md" variant="default" />
      </div>

      {/* Explanation Banner */}
      <Card variant="default" className="p-6 bg-white border-[#E5E0D8] space-y-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-[#1B4D3E]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#1B4D3E]">
            COOPERATIVE SURPLUS SHARING
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#5A6065] leading-relaxed">
          Eligible cooperative members can receive a share of cooperative surplus based on the platform's cooperative rules.
        </p>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-[#E8F2EE] border border-[#C0DCD3] rounded-2xl">
            <span className="text-[10px] text-[#1B4D3E] uppercase font-bold block">ESTIMATED ANNUAL DIVIDEND</span>
            <span className="font-serif-heading text-2xl font-bold text-[#1B4D3E]">₹3,240</span>
            <span className="text-[10px] text-[#5A6065] block">Next distribution: Dec 2026</span>
          </div>

          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-2xl">
            <span className="text-[10px] text-[#8A9197] uppercase font-bold block">LAST DIVIDEND</span>
            <span className="font-serif-heading text-2xl font-bold text-[#191C1D]">₹1,850</span>
            <span className="text-[10px] text-[#5A6065] block">Disbursed Jan 2026</span>
          </div>

          <div className="p-4 bg-[#FBF9F5] border border-[#E5E0D8] rounded-2xl">
            <span className="text-[10px] text-[#8A9197] uppercase font-bold block">DIVIDEND STATUS</span>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-[#1B4D3E] bg-white px-2.5 py-1 rounded-full border border-[#C0DCD3] mt-1">
              <CheckCircle2 className="w-4 h-4 text-[#1B4D3E]" />
              <span>Eligible Member</span>
            </span>
          </div>
        </div>
      </Card>

      {/* Dividend History Records Table/Cards */}
      <Card variant="default" className="p-6 bg-white border-[#E5E0D8] space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">Dividend History</h3>
          <Button variant="secondary" size="small" onClick={() => setShowHistory(!showHistory)}>
            {showHistory ? 'Hide History' : 'View Dividend History'}
          </Button>
        </div>

        {showHistory && (
          <div className="space-y-2 text-xs">
            <div className="hidden sm:grid grid-cols-5 font-bold text-[#8A9197] uppercase tracking-wider text-[10px] px-3 py-1">
              <span>Financial Year</span>
              <span>Co-op Surplus</span>
              <span>Member Share</span>
              <span>Dividend Received</span>
              <span>Status</span>
            </div>

            {dividendHistoryRecords.map((rec, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-5 gap-2 p-3 bg-[#FBF9F5] rounded-xl border border-[#E5E0D8] items-center">
                <span className="font-bold text-[#191C1D]">{rec.year}</span>
                <span className="text-[#5A6065] sm:text-left">Surplus: {rec.surplus}</span>
                <span className="text-[#5A6065]">Share: {rec.memberShare}</span>
                <span className="font-serif-heading text-sm font-bold text-[#1B4D3E]">{rec.dividendReceived}</span>
                <span className="text-[10px] font-bold text-[#1B4D3E] bg-[#E8F2EE] px-2 py-0.5 rounded w-fit">
                  {rec.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Prototype Disclaimer */}
        <div className="flex items-center gap-2 p-3 bg-[#F4F1EA]/60 rounded-xl text-[11px] text-[#8A9197]">
          <Info className="w-4 h-4 shrink-0 text-[#C87D55]" />
          <span>Note: Dividend values shown are prototype mock figures demonstrating cooperative surplus sharing principles.</span>
        </div>
      </Card>
    </div>
  );
};

export default WorkerDividend;
