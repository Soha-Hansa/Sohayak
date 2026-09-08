import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { weeklyEarningsData } from '../../data/workers';
import { Wallet, TrendingUp, ArrowUpRight, DollarSign } from 'lucide-react';

export const EarningsChart = ({ className = '' }) => {
  const maxAmount = Math.max(...weeklyEarningsData.map(d => d.amount));

  return (
    <Card variant="feature" className={`p-6 space-y-6 border-[#E5E0D8] ${className}`}>
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E0D8] pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
            WEEKLY EARNINGS ANALYTICS
          </span>
          <h3 className="font-serif-heading text-2xl font-semibold text-[#191C1D] mt-0.5">
            Earnings Overview
          </h3>
        </div>

        <Button variant="primary" size="small" icon={Wallet}>
          Withdraw ₹15,250
        </Button>
      </div>

      {/* Summary Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[10px] text-[#8A9197] font-bold uppercase tracking-wider">TOTAL EARNINGS</span>
          <p className="font-sans-ui text-2xl font-bold text-[#191C1D]">₹18,450</p>
          <span className="text-[11px] text-[#2D7D46] font-semibold flex items-center gap-0.5">
            <ArrowUpRight className="w-3.5 h-3.5" /> +12% from last month
          </span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[10px] text-[#8A9197] font-bold uppercase tracking-wider">PENDING CLEARANCE</span>
          <p className="font-sans-ui text-2xl font-bold text-[#D97706]">₹3,200</p>
          <span className="text-[11px] text-[#5A6065]">Processing from 2 jobs</span>
        </div>

        <div className="p-4 rounded-xl bg-[#E8F2EE] border border-[#C0DCD3] space-y-1">
          <span className="text-[10px] text-[#1B4D3E] font-bold uppercase tracking-wider">AVAILABLE WITHDRAWAL</span>
          <p className="font-sans-ui text-2xl font-bold text-[#1B4D3E]">₹15,250</p>
          <span className="text-[11px] text-[#1B4D3E] font-medium">Instant Co-op Transfer</span>
        </div>
      </div>

      {/* SVG Animated Weekly Bar Chart */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between text-xs font-semibold text-[#191C1D]">
          <span>Daily Payout Breakdown (Mon – Sun)</span>
          <span className="text-[#8A9197]">Highest: Thu (₹4,200)</span>
        </div>

        <div className="h-44 w-full bg-white rounded-2xl border border-[#E5E0D8] p-4 flex items-end justify-between gap-2">
          {weeklyEarningsData.map((d, idx) => {
            const heightPct = (d.amount / maxAmount) * 100;
            return (
              <div key={d.day} className="flex-1 flex flex-col items-center h-full justify-end gap-2 group">
                <div className="relative w-full flex items-end justify-center h-32">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${heightPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="w-full max-w-[28px] bg-[#1B4D3E] group-hover:bg-[#153E32] rounded-t-lg transition-colors relative"
                  >
                    {/* Tooltip on Hover */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#191C1D] text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      ₹{d.amount}
                    </div>
                  </motion.div>
                </div>
                <span className="text-xs font-bold text-[#5A6065]">{d.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default EarningsChart;
