import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import CooperativeBadge from '../ui/CooperativeBadge';
import { currentWorkerProfile } from '../../data/workers';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  HeartHandshake,
  BookOpen,
  Sparkles,
  Users,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WorkerMembership = () => {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const benefitsList = [
    { title: 'Access to Cooperative Gigs', desc: 'First priority dispatch for verified local household service requests.' },
    { title: 'Community Fund Participation', desc: 'Shared reserve supporting healthcare emergency cover and equipment loans.' },
    { title: 'Patronage Dividend Eligibility', desc: 'Annual profit-share dividend distribution based on jobs completed.' },
    { title: 'Skill Development Opportunities', desc: 'Free government-recognized master technician certifications and workshops.' },
    { title: '24/7 Member Support', desc: 'Dedicated co-op helpline, legal assistance, and dispute resolution.' },
    { title: 'Transparent Low Platform Fees', desc: 'Fixed 5% platform fee with 85% direct payout and 10% patronage reserve.' }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
            MEMBER RIGHTS ⭐
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
            Membership & Benefits
          </h2>
        </div>
        <CooperativeBadge size="md" variant="default" />
      </div>

      {/* Visual Digital Membership ID Card */}
      <div className="bg-gradient-to-r from-[#1B4D3E] via-[#163E32] to-[#0F2D24] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <Avatar
              src={currentWorkerProfile.avatar}
              initials={currentWorkerProfile.initials}
              size="xl"
              isCoopMember={true}
              className="ring-4 ring-white/20"
            />
            <div>
              <span className="text-[10px] text-[#C87D55] font-bold uppercase tracking-widest block">
                DIGITAL MEMBER CARD
              </span>
              <h3 className="font-serif-heading text-2xl font-bold text-white">
                {currentWorkerProfile.name}
              </h3>
              <p className="text-xs text-[#E5E0D8] font-semibold">{currentWorkerProfile.skill}</p>
              <p className="text-[11px] text-[#E5E0D8]/70 pt-0.5">Member since: 2025 · ID #COOP-8902</p>
            </div>
          </div>

          <div className="sm:text-right shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full border border-white/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C87D55]" />
              <span>Status: Active</span>
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs relative z-10">
          <div className="flex items-center gap-2 text-[#E5E0D8]">
            <ShieldCheck className="w-4 h-4 text-[#C87D55]" />
            <span>Full Voting Rights · Board Eligible</span>
          </div>

          <Button
            variant="earth"
            size="small"
            onClick={() => setDetailsModalOpen(true)}
          >
            View Membership Details
          </Button>
        </div>
      </div>

      {/* Member Benefits Grid */}
      <Card variant="default" className="p-6 bg-white border-[#E5E0D8] space-y-6">
        <div className="space-y-1">
          <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">Cooperative Member Benefits</h3>
          <p className="text-xs text-[#5A6065]">
            As a co-op worker-owner, you enjoy benefits designed to empower your career and household.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans-ui">
          {benefitsList.map((b, i) => (
            <div key={i} className="p-4 bg-[#FBF9F5] rounded-2xl border border-[#E5E0D8] space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0" />
                <h4 className="font-bold text-sm text-[#191C1D]">{b.title}</h4>
              </div>
              <p className="text-[#5A6065] text-[11px] leading-relaxed pl-6">{b.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Details Modal */}
      <AnimatePresence>
        {detailsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailsModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#FBF9F5] border border-[#E5E0D8] rounded-3xl p-6 max-w-md w-full z-10 space-y-4 text-[#191C1D]"
            >
              <button
                onClick={() => setDetailsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white text-[#5A6065] hover:text-[#191C1D]"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="font-serif-heading text-2xl font-bold text-[#191C1D]">Membership Rights & Charter</h3>
              <p className="text-xs text-[#5A6065] leading-relaxed">
                Registered under the Cooperative Societies Act. Every worker-owner holds exactly 1 vote in chapter elections regardless of earnings.
              </p>

              <div className="space-y-2 text-xs font-semibold">
                <div className="p-3 bg-white rounded-xl border border-[#E5E0D8] flex items-center justify-between">
                  <span>Voting Right</span>
                  <span className="text-[#1B4D3E] font-bold">1 Member = 1 Vote</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E0D8] flex items-center justify-between">
                  <span>Patronage Share</span>
                  <span className="text-[#1B4D3E] font-bold">3.2% Equity</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E0D8] flex items-center justify-between">
                  <span>Dispute Resolution</span>
                  <span className="text-[#1B4D3E] font-bold">Peer Committee</span>
                </div>
              </div>

              <Button variant="secondary" size="small" onClick={() => setDetailsModalOpen(false)} className="w-full justify-center">
                Close Charter
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkerMembership;
