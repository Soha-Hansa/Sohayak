import React from 'react';
import Card from '../ui/Card';
import StatCard from '../ui/StatCard';
import PlatformActivityChart from './PlatformActivityChart';
import { BarChart3, Users, Wrench, CheckCircle2, Wallet, Coins, Vote } from 'lucide-react';

export const AdminAnalyticsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
          IMPACT MEASUREMENT
        </span>
        <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
          Cooperative Analytics
        </h2>
      </div>

      {/* 6 Key Analytics Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard label="TOTAL MEMBERS" value="2,486" change={+12} changeLabel="vs last month" icon={Users} />
        <StatCard label="ACTIVE WORKERS" value="482" subtitle="Top 5% verified co-op" icon={Wrench} />
        <StatCard label="JOBS COMPLETED" value="5,826" subtitle="98.2% completion rate" icon={CheckCircle2} />
        <StatCard label="WORKER EARNINGS" value="₹48.5L" change={+18} changeLabel="Gross payout" icon={Wallet} />
        <StatCard label="CO-OP FUND" value="₹2.84L" subtitle="Community reserve" icon={Coins} />
        <StatCard label="VOTER PARTICIPATION" value="842" change={+68} changeLabel="Voted in last proposal" icon={Vote} />
      </div>

      {/* 2 Simple Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Platform Growth */}
        <Card variant="default" className="p-6 bg-white border-[#E5E0D8] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">Platform Growth</h3>
            <span className="text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-2.5 py-0.5 rounded">Monthly Members & Jobs</span>
          </div>

          {/* Simple visual bar chart */}
          <div className="h-48 flex items-end justify-between gap-3 pt-6 px-4 border-b border-[#E5E0D8]">
            {[
              { month: 'Apr', members: 40, jobs: 60 },
              { month: 'May', members: 55, jobs: 75 },
              { month: 'Jun', members: 70, jobs: 90 },
              { month: 'Jul', members: 85, jobs: 110 },
              { month: 'Aug', members: 100, jobs: 140 }
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full flex items-end justify-center gap-1.5 h-full">
                  <div className="w-1/2 bg-[#1B4D3E] rounded-t-md transition-all duration-500" style={{ height: `${d.members}%` }} />
                  <div className="w-1/2 bg-[#C87D55] rounded-t-md transition-all duration-500" style={{ height: `${d.jobs}%` }} />
                </div>
                <span className="text-[10px] font-bold text-[#8A9197]">{d.month}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-[#5A6065]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#1B4D3E]" />
              <span>Members</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#C87D55]" />
              <span>Completed Jobs</span>
            </div>
          </div>
        </Card>

        {/* Chart 2: Cooperative Participation */}
        <Card variant="default" className="p-6 bg-white border-[#E5E0D8] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">Cooperative Participation</h3>
            <span className="text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-2.5 py-0.5 rounded">Active Engagement</span>
          </div>

          <div className="space-y-4 pt-2 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>Active Member Assembly</span>
                <span className="text-[#1B4D3E]">84% (842 / 1,000)</span>
              </div>
              <div className="h-3 bg-[#F4F1EA] rounded-full overflow-hidden">
                <div className="h-full bg-[#1B4D3E] rounded-full" style={{ width: '84%' }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>Fund Contribution Rate</span>
                <span className="text-[#C87D55]">96% of Jobs</span>
              </div>
              <div className="h-3 bg-[#F4F1EA] rounded-full overflow-hidden">
                <div className="h-full bg-[#C87D55] rounded-full" style={{ width: '96%' }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>Proposal Voting Rate</span>
                <span className="text-[#191C1D]">68% Chapter Turnout</span>
              </div>
              <div className="h-3 bg-[#F4F1EA] rounded-full overflow-hidden">
                <div className="h-full bg-[#191C1D] rounded-full" style={{ width: '68%' }} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;
