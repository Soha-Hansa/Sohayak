import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import CooperativeBadge from '../components/ui/CooperativeBadge';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';
import AdminSidebar from '../components/layout/AdminSidebar';
import { adminAnalytics } from '../data/analytics';
import { governanceProposals } from '../data/proposals';
import { memberRegistry } from '../data/members';
import { Users, PiggyBank, BarChart3, Vote, ShieldCheck, ArrowRight } from 'lucide-react';

export const AdminShell = () => {
  const location = useLocation();

  const getSubShellTitle = () => {
    if (location.pathname.includes('/members')) return 'Cooperative Member & Worker Registry';
    if (location.pathname.includes('/services')) return 'Service Standard & Pricing Governance';
    if (location.pathname.includes('/governance')) return 'Democratic Voting & Surplus Allocation';
    if (location.pathname.includes('/analytics')) return 'Cooperative Impact & GMV Analytics';
    return 'Cooperative Governance Console';
  };

  return (
    <div className="flex min-h-[calc(100vh-5rem)] max-w-7xl mx-auto w-full">
      {/* Desktop Operations Sidebar */}
      <AdminSidebar />

      {/* Main Admin Console Container */}
      <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <PageTransition>
          {/* Sub-shell Title */}
          <ScrollReveal className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1B4D3E] tracking-wider uppercase">
              <Link to="/admin" className="hover:underline">Coop Governance</Link>
              <span>/</span>
              <span className="text-[#8A9197]">{location.pathname}</span>
            </div>

            <SectionHeader
              eyebrow="DEMOCRATIC COOPERATIVE CONSOLE"
              heading={getSubShellTitle()}
              description="Transparent oversight for worker equity, surplus fund allocation, and community service standards."
            />
          </ScrollReveal>

          {/* Sub-route Prototype Pills */}
          <ScrollReveal className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none my-6">
            <span className="text-xs font-medium text-[#8A9197] shrink-0">Admin views:</span>
            <Link to="/admin" className={`px-3 py-1 rounded-full text-xs font-medium border ${location.pathname === '/admin' ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]' : 'bg-white text-[#5A6065] border-[#E5E0D8]'}`}>
              Overview
            </Link>
            <Link to="/admin/members" className={`px-3 py-1 rounded-full text-xs font-medium border ${location.pathname.includes('/members') ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]' : 'bg-white text-[#5A6065] border-[#E5E0D8]'}`}>
              /members
            </Link>
            <Link to="/admin/services" className={`px-3 py-1 rounded-full text-xs font-medium border ${location.pathname.includes('/services') ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]' : 'bg-white text-[#5A6065] border-[#E5E0D8]'}`}>
              /services
            </Link>
            <Link to="/admin/governance" className={`px-3 py-1 rounded-full text-xs font-medium border ${location.pathname.includes('/governance') ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]' : 'bg-white text-[#5A6065] border-[#E5E0D8]'}`}>
              /governance
            </Link>
            <Link to="/admin/analytics" className={`px-3 py-1 rounded-full text-xs font-medium border ${location.pathname.includes('/analytics') ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]' : 'bg-white text-[#5A6065] border-[#E5E0D8]'}`}>
              /analytics
            </Link>
          </ScrollReveal>

          {/* Governance Metric Cards */}
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              label="WORKER-OWNERS"
              value={adminAnalytics.activeWorkerOwners}
              change={adminAnalytics.workerGrowthPct}
              changeLabel="YTD Growth"
              icon={Users}
            />
            <StatCard
              label="MONTHLY GMV"
              value={`₹${(adminAnalytics.monthlyGrossGMVINR / 100000).toFixed(2)}L`}
              change={18.2}
              changeLabel="Platform Volume"
              icon={BarChart3}
            />
            <StatCard
              label="SURPLUS FUND RESERVE"
              value={`₹${(adminAnalytics.cooperativeSurplusFundINR / 100000).toFixed(2)}L`}
              subtitle="Community Pool Reserve"
              icon={PiggyBank}
            />
            <StatCard
              label="WORKER TAKE-HOME"
              value={`₹${adminAnalytics.averageWorkerHourlyTakeHomeINR}/hr`}
              subtitle={`vs Market ₹${adminAnalytics.traditionalMarketTakeHomeINR}/hr`}
              icon={ShieldCheck}
            />
          </ScrollReveal>

          {/* Active Democratic Proposals */}
          <ScrollReveal className="space-y-6 mb-8">
            <h3 className="font-serif-heading text-2xl text-[#191C1D]">Active Policy & Surplus Proposals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {governanceProposals.map((prop) => (
                <Card key={prop.id} variant="default" className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <StatusBadge status={prop.status} size="sm" />
                    <span className="text-xs text-[#8A9197] font-semibold">{prop.deadline}</span>
                  </div>
                  <div>
                    <h4 className="font-serif-heading text-xl text-[#191C1D]">{prop.title}</h4>
                    <p className="text-xs text-[#8A9197] mt-1">Proposed by: {prop.author}</p>
                  </div>
                  <p className="text-xs text-[#5A6065] leading-relaxed">{prop.summary}</p>
                  <div className="p-3 bg-[#F4F1EA] rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-[#1B4D3E]">{prop.votesFor} YES</span> / {prop.votesAgainst} NO
                    </div>
                    <div className="text-[#8A9197]">Quorum: {prop.quorumPct}%</div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollReveal>

          {/* Member Registry Table Component Preview */}
          <ScrollReveal className="space-y-4">
            <h3 className="font-serif-heading text-2xl text-[#191C1D]">Worker-Owner Governance Registry</h3>
            <Card variant="default" className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-[#191C1D]">
                  <thead className="bg-[#F4F1EA] text-xs uppercase tracking-wider text-[#8A9197] border-b border-[#E5E0D8]">
                    <tr>
                      <th className="p-4">Member Name</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Tier</th>
                      <th className="p-4">Equity Shares</th>
                      <th className="p-4">Governance Votes</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E0D8]">
                    {memberRegistry.map((m) => (
                      <tr key={m.id} className="hover:bg-[#FBF9F5]">
                        <td className="p-4 font-semibold flex items-center gap-2">
                          <span>{m.name}</span>
                          <CooperativeBadge size="sm" showLabel={false} />
                        </td>
                        <td className="p-4 text-[#5A6065]">{m.category}</td>
                        <td className="p-4 text-[#1B4D3E] font-medium">{m.tier}</td>
                        <td className="p-4 font-mono font-semibold">{m.sharesOwned}</td>
                        <td className="p-4">{m.governanceVotesCast} votes</td>
                        <td className="p-4"><StatusBadge status={m.status} size="sm" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </ScrollReveal>
        </PageTransition>
      </main>
    </div>
  );
};

export default AdminShell;
