import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import CooperativeBadge from '../ui/CooperativeBadge';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Coins,
  ShieldCheck,
  ArrowRight,
  HeartHandshake,
  Users,
  Award,
  Sparkles,
  Info,
  X
} from 'lucide-react';

export const WorkerCooperativeFund = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Section Title */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
            COOPERATIVE OWNERSHIP ⭐
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
            Cooperative Community Fund
          </h2>
        </div>
        <CooperativeBadge size="md" variant="patron" />
      </div>

      {/* Explanation Banner */}
      <Card variant="default" className="p-6 bg-gradient-to-r from-[#1B4D3E] to-[#2C6B58] text-white border-none shadow-xl space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-white/10 text-[#C87D55] backdrop-blur-md">
            <Coins className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-[#E5E0D8] uppercase tracking-wider">
            SHARED COMMUNITY RESERVE
          </span>
        </div>

        <p className="text-sm sm:text-base font-sans-ui text-[#E5E0D8] leading-relaxed max-w-2xl">
          A portion of cooperative activity contributes to a shared community fund that supports members and future growth.
        </p>

        {/* 3 Main Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-center">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
            <span className="text-[10px] text-[#E5E0D8] uppercase font-bold block">YOUR CONTRIBUTION</span>
            <span className="font-serif-heading text-2xl font-bold text-white">₹4,850</span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Saved in co-op reserve</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
            <span className="text-[10px] text-[#C87D55] uppercase font-bold block">COMMUNITY FUND</span>
            <span className="font-serif-heading text-2xl font-bold text-[#C87D55]">₹2,84,500</span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Total chapter pool</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
            <span className="text-[10px] text-[#E5E0D8] uppercase font-bold block">YOUR SHARE</span>
            <span className="font-serif-heading text-2xl font-bold text-white">3.2%</span>
            <span className="text-[10px] text-[#E5E0D8]/70 block">Equity ownership</span>
          </div>
        </div>
      </Card>

      {/* Visual Flow: Member Contributions → Cooperative Fund → Member Benefits */}
      <Card variant="default" className="p-6 bg-white border-[#E5E0D8] space-y-6">
        <div className="text-center space-y-1">
          <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">How the Fund Works</h3>
          <p className="text-xs text-[#5A6065]">Transparent wealth distribution powered by worker ownership.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs relative">
          <div className="p-5 bg-[#FBF9F5] rounded-2xl border border-[#E5E0D8] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#E8F2EE] text-[#1B4D3E] mx-auto flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="font-bold text-sm text-[#191C1D]">Member Contributions</h4>
            <p className="text-[#5A6065] text-[11px]">
              10% of every completed job is allocated automatically to the co-op reserve.
            </p>
          </div>

          <div className="p-5 bg-[#FBF9F5] rounded-2xl border border-[#E5E0D8] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F9F0EA] text-[#C87D55] mx-auto flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="font-bold text-sm text-[#191C1D]">Cooperative Fund</h4>
            <p className="text-[#5A6065] text-[11px]">
              Funds are managed transparently by member-elected board directors.
            </p>
          </div>

          <div className="p-5 bg-[#FBF9F5] rounded-2xl border border-[#E5E0D8] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#E8F2EE] text-[#1B4D3E] mx-auto flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="font-bold text-sm text-[#191C1D]">Member Benefits</h4>
            <p className="text-[#5A6065] text-[11px]">
              Dividends, emergency healthcare cover, tool upgrades, and skill training.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <Button
            variant="earth"
            size="medium"
            onClick={() => setDetailsOpen(true)}
            icon={ArrowRight}
            iconPosition="right"
          >
            View Fund Details
          </Button>
        </div>
      </Card>

      {/* Fund Details Modal */}
      <AnimatePresence>
        {detailsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#FBF9F5] border border-[#E5E0D8] rounded-3xl p-6 max-w-md w-full z-10 space-y-4 text-[#191C1D]"
            >
              <button
                onClick={() => setDetailsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white text-[#5A6065] hover:text-[#191C1D]"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="font-serif-heading text-2xl font-bold text-[#191C1D]">Cooperative Fund Breakdown</h3>
              <p className="text-xs text-[#5A6065]">
                Your ₹4,850 contribution is split across key member support pools:
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-3 bg-white rounded-xl border border-[#E5E0D8]">
                  <span>Patronage Dividend Reserve (60%)</span>
                  <span className="font-bold text-[#1B4D3E]">₹2,910</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-xl border border-[#E5E0D8]">
                  <span>Emergency Health Cover Pool (25%)</span>
                  <span className="font-bold text-[#1B4D3E]">₹1,212.50</span>
                </div>
                <div className="flex justify-between p-3 bg-white rounded-xl border border-[#E5E0D8]">
                  <span>Skill & Tool Subsidy (15%)</span>
                  <span className="font-bold text-[#1B4D3E]">₹727.50</span>
                </div>
              </div>

              <Button variant="secondary" size="small" onClick={() => setDetailsOpen(false)} className="w-full justify-center">
                Close Breakdown
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkerCooperativeFund;
