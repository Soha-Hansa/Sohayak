import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import StatusBadge from '../ui/StatusBadge';
import { Vote, ArrowRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

export const GovernanceVotingPreview = () => {
  return (
    <Card variant="default" className="p-6 sm:p-10 space-y-8 border-[#1B4D3E]/30 bg-gradient-to-b from-white via-[#FBF9F5] to-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">DEMOCRATIC PARTICIPATION</span>
            <StatusBadge status="Voting Open" size="sm" />
          </div>
          <h3 className="font-serif-heading text-3xl sm:text-4xl font-normal text-[#191C1D]">
            Members don't just work here. They have a voice.
          </h3>
          <p className="text-sm text-[#5A6065] leading-relaxed font-sans-ui">
            Important cooperative service expansions, pricing caps, and health fund allocations are brought directly to members for democratic voting.
          </p>
        </div>

        <Link to="/admin/governance" className="shrink-0">
          <Button variant="primary" size="medium" icon={ArrowRight} iconPosition="right">
            See how governance works
          </Button>
        </Link>
      </div>

      {/* Live Proposal Sample Visual Card */}
      <div className="bg-[#F4F1EA] p-6 sm:p-8 rounded-2xl border border-[#E5E0D8] space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center font-bold text-xs">
              #18
            </div>
            <div>
              <span className="text-xs font-bold text-[#8A9197] uppercase tracking-wider">ACTIVE PROPOSAL</span>
              <p className="text-xs text-[#5A6065]">Submitted by: Executive Member Council</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#1B4D3E] bg-[#E8F2EE] px-3 py-1 rounded-full border border-[#C0DCD3]">
            Quorum Reached (84.2%)
          </span>
        </div>

        <h4 className="font-serif-heading text-2xl font-normal text-[#191C1D]">
          "Should we add Urban Gardening & Landscape Care as a new cooperative service category?"
        </h4>

        {/* Voting Horizontal Progress Bars */}
        <div className="space-y-4 pt-2">
          {/* YES Option */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-[#191C1D]">
              <span className="flex items-center gap-1.5 text-[#2D7D46]">
                <CheckCircle2 className="w-4 h-4" /> YES (Approve Expansion)
              </span>
              <span>73%</span>
            </div>
            <div className="h-3 w-full bg-white rounded-full overflow-hidden p-0.5 border border-[#E5E0D8]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '73%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-[#2D7D46] rounded-full"
              />
            </div>
          </div>

          {/* NO Option */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-[#191C1D]">
              <span>NO (Maintain Current Scope)</span>
              <span>18%</span>
            </div>
            <div className="h-3 w-full bg-white rounded-full overflow-hidden p-0.5 border border-[#E5E0D8]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '18%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                className="h-full bg-[#C53030] rounded-full"
              />
            </div>
          </div>

          {/* ABSTAIN Option */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-[#191C1D]">
              <span>ABSTAIN</span>
              <span>9%</span>
            </div>
            <div className="h-3 w-full bg-white rounded-full overflow-hidden p-0.5 border border-[#E5E0D8]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '9%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="h-full bg-gray-400 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between text-xs text-[#5A6065] flex-wrap gap-2">
          <span className="flex items-center gap-1.5 font-semibold text-[#191C1D]">
            <Users className="w-4 h-4 text-[#1B4D3E]" /> 842 members voted
          </span>
          <span className="text-[#8A9197]">Voting Closes in 2 days</span>
        </div>
      </div>
    </Card>
  );
};

export default GovernanceVotingPreview;
