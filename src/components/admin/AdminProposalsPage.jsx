import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import CooperativeBadge from '../ui/CooperativeBadge';
import { Vote, CheckCircle2, XCircle, Clock, Users, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AdminProposalsPage = () => {
  const [proposals, setProposals] = useState([
    {
      id: 'P102',
      title: 'Increase the cooperative emergency support fund allocation',
      proposedBy: 'Rahul Das (Master Electrician)',
      deadline: 'Sep 12, 2026',
      forPct: 68,
      againstPct: 32,
      totalVoted: 842,
      status: 'Voting Open',
      userVoted: null,
      question: 'Should the cooperative increase its emergency support allocation from 20% to 25% of annual surplus?'
    },
    {
      id: 'P103',
      title: 'Subsidize BLDC Fan & Eco-Tool purchasing for all active worker-owners',
      proposedBy: 'Sunita Devi (Board Member)',
      deadline: 'Sep 18, 2026',
      forPct: 82,
      againstPct: 18,
      totalVoted: 1120,
      status: 'Voting Open',
      userVoted: null,
      question: 'Should co-op funds cover 40% of specialized eco-friendly tool upgrades for verified members?'
    },
    {
      id: 'P104',
      title: 'Establish Howrah Chapter Community Skill Training Center',
      proposedBy: 'Priya Sharma (Senior Educator)',
      deadline: 'Sep 25, 2026',
      forPct: 91,
      againstPct: 9,
      totalVoted: 1450,
      status: 'Voting Open',
      userVoted: null,
      question: 'Approve ₹50,000 grant from patronage reserve to lease physical skill workshop space?'
    }
  ]);

  const [selectedProposal, setSelectedProposal] = useState(null);

  const handleCastVote = (propId, voteType) => {
    setProposals((prev) =>
      prev.map((p) => {
        if (p.id === propId) {
          const newTotal = p.totalVoted + 1;
          const newFor = voteType === 'for' ? p.forPct + 1 : p.forPct;
          const newAgainst = voteType === 'against' ? p.againstPct + 1 : p.againstPct;
          return {
            ...p,
            userVoted: voteType,
            totalVoted: newTotal,
            forPct: newFor,
            againstPct: newAgainst
          };
        }
        return p;
      })
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
            DEMOCRATIC GOVERNANCE ⭐
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
            Cooperative Proposals & Voting
          </h2>
        </div>
        <CooperativeBadge size="md" variant="patron" />
      </div>

      {/* Proposals Grid */}
      <div className="space-y-4">
        {proposals.map((prop) => (
          <Card key={prop.id} variant="default" className="p-6 space-y-4 bg-white border-[#E5E0D8]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E0D8] pb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-2.5 py-0.5 rounded border border-[#C0DCD3]">
                  Proposal #{prop.id}
                </span>
                <span className="text-xs font-bold text-[#C87D55] bg-[#F9F0EA] px-2.5 py-0.5 rounded-full">
                  {prop.status}
                </span>
              </div>
              <span className="text-xs text-[#8A9197] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Deadline: {prop.deadline}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">{prop.title}</h3>
              <p className="text-xs text-[#5A6065]">
                Proposed by: <strong className="text-[#191C1D]">{prop.proposedBy}</strong>
              </p>
              <p className="text-xs font-semibold text-[#191C1D] bg-[#FBF9F5] p-3 rounded-xl border border-[#E5E0D8]">
                "{prop.question}"
              </p>
            </div>

            {/* Voting Results Progress Bars */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between font-bold">
                <span className="text-[#1B4D3E]">For — {prop.forPct}%</span>
                <span className="text-[#C53030]">Against — {prop.againstPct}%</span>
              </div>
              <div className="h-3 w-full bg-[#FEE2E2] rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-[#1B4D3E] transition-all duration-500"
                  style={{ width: `${prop.forPct}%` }}
                />
              </div>
              <span className="text-[11px] text-[#8A9197] block text-right">
                Total Members Voted: <strong>{prop.totalVoted}</strong> (1 Member = 1 Vote)
              </span>
            </div>

            {/* Interactive Voting Controls */}
            <div className="pt-3 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-3">
              {prop.userVoted === null ? (
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button
                    variant="earth"
                    size="small"
                    onClick={() => handleCastVote(prop.id, 'for')}
                    icon={CheckCircle2}
                  >
                    Vote For
                  </Button>
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={() => handleCastVote(prop.id, 'against')}
                    icon={XCircle}
                  >
                    Vote Against
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-4 py-2 rounded-xl border border-[#C0DCD3] w-full sm:w-auto">
                  <Check className="w-4 h-4 text-[#1B4D3E]" />
                  <span>Your vote ({prop.userVoted.toUpperCase()}) has been recorded.</span>
                </div>
              )}

              <Button
                variant="ghost"
                size="small"
                onClick={() => setSelectedProposal(prop)}
              >
                View Full Proposal Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal for full proposal details */}
      <AnimatePresence>
        {selectedProposal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProposal(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#FBF9F5] border border-[#E5E0D8] rounded-3xl p-6 max-w-lg w-full z-10 space-y-4 text-[#191C1D]"
            >
              <h3 className="font-serif-heading text-2xl font-bold">Proposal #{selectedProposal.id}</h3>
              <p className="text-xs text-[#5A6065]">{selectedProposal.title}</p>
              <p className="text-xs bg-white p-4 rounded-xl border border-[#E5E0D8]">
                {selectedProposal.question}
              </p>
              <Button variant="secondary" size="small" onClick={() => setSelectedProposal(null)} className="w-full justify-center">
                Close Proposal
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminProposalsPage;
