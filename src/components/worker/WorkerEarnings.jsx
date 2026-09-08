import React from 'react';
import Card from '../ui/Card';
import StatCard from '../ui/StatCard';
import EarningsChart from './EarningsChart';
import { Wallet, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

export const WorkerEarnings = () => {
  const recentEarningsList = [
    { id: 'tx-101', job: 'Home Electrical Circuit Diagnosis & Repair', date: 'Today, Sep 6', amount: 499, status: 'Completed' },
    { id: 'tx-102', job: 'BLDC Fan & Modular Switch Fitting', date: 'Yesterday, Sep 5', amount: 349, status: 'Completed' },
    { id: 'tx-103', job: 'Full House Meter Panel Safety Inspection', date: 'Sep 3, 2026', amount: 999, status: 'Completed' },
    { id: 'tx-104', job: 'Inverter Dual Battery Terminal Rewiring', date: 'Sep 1, 2026', amount: 599, status: 'Completed' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
          FINANCIAL SUMMARY
        </span>
        <h2 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#191C1D]">
          Earnings & Payouts
        </h2>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="TOTAL EARNINGS"
          value="₹1,48,500"
          subtitle="Lifetime earnings on Sohayak"
          icon={Wallet}
        />
        <StatCard
          label="THIS MONTH"
          value="₹18,450"
          change={+14}
          changeLabel="vs last month"
          icon={TrendingUp}
        />
        <StatCard
          label="PENDING ESCROW"
          value="₹3,200"
          subtitle="Will clear upon customer signoff"
          icon={Clock}
        />
      </div>

      {/* Mock Earnings Chart Visual */}
      <EarningsChart />

      {/* Recent Earnings List */}
      <Card variant="default" className="p-6 space-y-4 bg-white border-[#E5E0D8]">
        <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">Recent Service Payouts</h3>
        <div className="space-y-2 text-xs">
          {recentEarningsList.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-3 bg-[#FBF9F5] rounded-xl border border-[#E5E0D8]">
              <div>
                <span className="font-bold text-[#191C1D] block">{tx.job}</span>
                <span className="text-[#8A9197] text-[11px]">{tx.date}</span>
              </div>
              <div className="text-right">
                <span className="font-serif-heading text-base font-bold text-[#1B4D3E] block">₹{tx.amount}</span>
                <span className="text-[10px] text-[#1B4D3E] font-bold bg-[#E8F2EE] px-2 py-0.5 rounded">
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default WorkerEarnings;
