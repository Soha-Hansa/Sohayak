import React from 'react';
import Card from '../ui/Card';
import StatusBadge from '../ui/StatusBadge';
import { financialSummary } from '../../data/analytics';
import { CreditCard, DollarSign, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const PaymentsOverviewSection = ({ className = '' }) => {
  return (
    <Card variant="default" className={`p-6 space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
            TRANSACTION & REVENUE LEDGER
          </span>
          <h3 className="font-serif-heading text-2xl font-semibold text-[#191C1D] mt-0.5">
            Payments Overview
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1B4D3E] bg-[#E8F2EE] px-3 py-1 rounded-full border border-[#C0DCD3]">
          <ShieldCheck className="w-4 h-4 text-[#1B4D3E]" />
          <span>Cooperative Escrow Audited</span>
        </div>
      </div>

      {/* 4 Financial Stat Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="p-4 rounded-xl bg-[#F4F1EA]/60 border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-bold uppercase block">TOTAL REVENUE</span>
          <p className="font-sans-ui text-xl font-bold text-[#191C1D]">
            ₹{financialSummary.totalRevenueINR.toLocaleString()}
          </p>
          <span className="text-[11px] text-[#2D7D46] font-semibold flex items-center gap-0.5">
            <ArrowUpRight className="w-3.5 h-3.5" /> Gross Platform Volume
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#E8F2EE] border border-[#C0DCD3] space-y-1">
          <span className="text-[#1B4D3E] font-bold uppercase block">WORKER PAYOUTS</span>
          <p className="font-sans-ui text-xl font-bold text-[#1B4D3E]">
            ₹{financialSummary.workerPayoutsINR.toLocaleString()}
          </p>
          <span className="text-[11px] text-[#1B4D3E] font-semibold">79.5% Direct Member Share</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-bold uppercase block">PLATFORM FEES</span>
          <p className="font-sans-ui text-xl font-bold text-[#191C1D]">
            ₹{financialSummary.platformFeesINR.toLocaleString()}
          </p>
          <span className="text-[11px] text-[#5A6065]">Reserve & Operations</span>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-1">
          <span className="text-[#8A9197] font-bold uppercase block">PENDING PAYMENTS</span>
          <p className="font-sans-ui text-xl font-bold text-[#D97706]">
            ₹{financialSummary.pendingEscrowINR.toLocaleString()}
          </p>
          <span className="text-[11px] text-[#5A6065]">Held in Escrow</span>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="space-y-3 pt-2">
        <h4 className="font-semibold text-sm text-[#191C1D]">Recent Transactions</h4>
        <div className="overflow-x-auto rounded-xl border border-[#E5E0D8]">
          <table className="w-full text-left text-xs text-[#191C1D]">
            <thead className="bg-[#F4F1EA] uppercase tracking-wider text-[#8A9197] font-bold">
              <tr>
                <th className="p-3">Tx ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Worker</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E0D8] bg-white">
              {financialSummary.recentTransactions.map((tx) => (
                <tr key={tx.txId} className="hover:bg-[#FBF9F5]">
                  <td className="p-3 font-mono font-bold text-[#1B4D3E]">{tx.txId}</td>
                  <td className="p-3 font-medium">{tx.customer}</td>
                  <td className="p-3 text-[#5A6065]">{tx.worker}</td>
                  <td className="p-3 font-bold text-[#191C1D]">₹{tx.amountINR}</td>
                  <td className="p-3 text-[#8A9197]">{tx.date}</td>
                  <td className="p-3">
                    <StatusBadge status={tx.status} size="sm" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default PaymentsOverviewSection;
