import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { PiggyBank, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export const CooperativeFundChart = () => {
  const fundAllocations = [
    { label: 'Member Dividend Pool', amount: '₹4.86 Lakh', pct: 38, color: '#1B4D3E' },
    { label: 'Healthcare & Emergency Reserve', amount: '₹3.20 Lakh', pct: 25, color: '#C87D55' },
    { label: 'Equipment & Training Grants', amount: '₹2.56 Lakh', pct: 20, color: '#2D7D46' },
    { label: 'Cooperative Chapter Reserve', amount: '₹2.18 Lakh', pct: 17, color: '#8A9197' },
  ];

  return (
    <Card variant="feature" className="p-6 sm:p-10 space-y-8 relative overflow-hidden">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E0D8] pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
            TRANSPARENT VALUE ALLOCATION
          </span>
          <h3 className="font-serif-heading text-3xl font-normal text-[#191C1D] mt-1">
            Where the collective value goes.
          </h3>
          <p className="text-xs text-[#8A9197] mt-1 font-sans-ui italic">
            * Illustrative demo data for prototype evaluation
          </p>
        </div>

        <div className="bg-[#E8F2EE] border border-[#C0DCD3] px-4 py-2.5 rounded-2xl flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center font-bold text-xs">
            ₹
          </div>
          <div>
            <span className="text-[10px] text-[#5A6065] uppercase font-bold tracking-wider">TOTAL COOPERATIVE FUND</span>
            <p className="font-serif-heading text-2xl font-bold text-[#1B4D3E]">₹12.80 Lakh</p>
          </div>
        </div>
      </div>

      {/* Main Grid Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Animated Stacked Visual Bar */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-[#191C1D]">
              <span>Surplus Distribution Breakdown</span>
              <span>100% Accounted</span>
            </div>

            <div className="h-5 w-full bg-[#F4F1EA] rounded-full overflow-hidden flex p-1 border border-[#E5E0D8]">
              {fundAllocations.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
                  style={{ backgroundColor: item.color }}
                  className="h-full rounded-full mr-0.5 last:mr-0"
                  title={`${item.label}: ${item.pct}%`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {fundAllocations.map((item) => (
              <div key={item.label} className="p-3.5 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-[#5A6065] font-medium truncate">{item.label}</span>
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <span className="font-sans-ui text-lg font-bold text-[#191C1D]">{item.amount}</span>
                  <span className="text-xs font-mono font-semibold text-[#8A9197]">{item.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Member Share Highlight Card */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E5E0D8] space-y-4 shadow-tactile">
          <div className="flex items-center gap-3 text-[#1B4D3E]">
            <PiggyBank className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">MEMBER DIVIDEND SHARE</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[#8A9197]">Avg. Annual Member Dividend</span>
            <div className="font-serif-heading text-3xl font-bold text-[#191C1D]">
              ₹18,450 <span className="text-xs font-sans-ui font-normal text-[#2D7D46] bg-[#E8F5E9] px-2 py-0.5 rounded-md">+14.2% payout</span>
            </div>
          </div>

          <p className="text-xs text-[#5A6065] leading-relaxed">
            Worker-owners with over 120 completed services automatically qualify for quarterly patronage dividends proportional to their service hours.
          </p>

          <div className="pt-2 border-t border-[#E5E0D8] flex items-center justify-between text-xs text-[#8A9197]">
            <span>437 Members Shareholder Eligible</span>
            <ShieldCheck className="w-4 h-4 text-[#1B4D3E]" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CooperativeFundChart;
