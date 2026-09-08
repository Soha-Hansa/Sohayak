import React from 'react';
import Card from '../ui/Card';
import StatCard from '../ui/StatCard';
import CooperativeBadge from '../ui/CooperativeBadge';
import { Coins, TrendingUp, ShieldCheck, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';

export const AdminCooperativeFundPage = () => {
  const recentFundActivity = [
    { id: 'act-1', item: 'Member Contributions (Aug Pool)', amount: '+₹8,500', type: 'credit', category: 'Worker Reserve', date: 'Today' },
    { id: 'act-2', item: 'Skill Development Program Grant', amount: '-₹25,000', type: 'debit', category: 'Training Allocation', date: 'Sep 3, 2026' },
    { id: 'act-3', item: 'Emergency Healthcare Subsidy Payout', amount: '-₹12,000', type: 'debit', category: 'Support Allocation', date: 'Aug 28, 2026' },
    { id: 'act-4', item: 'Platform Match Contribution', amount: '+₹15,000', type: 'credit', category: 'Co-op Grant', date: 'Aug 25, 2026' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
            TREASURY AUDIT ⭐
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
            Cooperative Fund Ledger
          </h2>
        </div>
        <CooperativeBadge size="md" variant="patron" />
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="TOTAL FUND POOL"
          value="₹2,84,500"
          change={+8.5}
          changeLabel="vs last month"
          icon={Coins}
        />
        <StatCard
          label="WORKER CONTRIBUTIONS"
          value="₹1,82,000"
          subtitle="64% of total treasury"
          icon={TrendingUp}
        />
        <StatCard
          label="PLATFORM CONTRIBUTION"
          value="₹72,500"
          subtitle="Matching co-op grant"
          icon={ShieldCheck}
        />
        <StatCard
          label="COMMUNITY SUPPORT"
          value="₹30,000"
          subtitle="Allocated to healthcare"
          icon={Coins}
        />
      </div>

      {/* Visual Breakdown Bar */}
      <Card variant="default" className="p-6 bg-white border-[#E5E0D8] space-y-4">
        <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">Treasury Pool Breakdown</h3>
        <div className="h-4 w-full bg-[#F4F1EA] rounded-full overflow-hidden flex">
          <div className="h-full bg-[#1B4D3E]" style={{ width: '64%' }} title="Worker Contributions (64%)" />
          <div className="h-full bg-[#C87D55]" style={{ width: '25%' }} title="Platform Contribution (25%)" />
          <div className="h-full bg-[#8A9197]" style={{ width: '11%' }} title="Community Support (11%)" />
        </div>
        <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-[#5A6065]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1B4D3E]" />
            <span>Worker Contributions (64% - ₹1,82,000)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C87D55]" />
            <span>Platform Contribution (25% - ₹72,500)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#8A9197]" />
            <span>Community Support (11% - ₹30,000)</span>
          </div>
        </div>
      </Card>

      {/* Recent Ledger Activity */}
      <Card variant="default" className="p-6 bg-white border-[#E5E0D8] space-y-4">
        <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">Recent Fund Activity</h3>
        <div className="space-y-2 text-xs">
          {recentFundActivity.map((act) => (
            <div key={act.id} className="flex items-center justify-between p-3.5 bg-[#FBF9F5] rounded-xl border border-[#E5E0D8]">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${act.type === 'credit' ? 'bg-[#E8F2EE] text-[#1B4D3E]' : 'bg-[#FEE2E2] text-[#C53030]'}`}>
                  {act.type === 'credit' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                </div>
                <div>
                  <span className="font-bold text-[#191C1D] block">{act.item}</span>
                  <span className="text-[10px] text-[#8A9197]">{act.category} · {act.date}</span>
                </div>
              </div>

              <span className={`font-serif-heading text-base font-bold ${act.type === 'credit' ? 'text-[#1B4D3E]' : 'text-[#C53030]'}`}>
                {act.amount}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminCooperativeFundPage;
