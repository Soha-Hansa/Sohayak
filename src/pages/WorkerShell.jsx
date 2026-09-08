import React from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import CooperativeBadge from '../components/ui/CooperativeBadge';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import { currentWorkerProfile, workerJobs } from '../data/workers';
import { earningsSummary } from '../data/earnings';
import { Wallet, Award, Calendar, CheckCircle2, TrendingUp, ShieldCheck, Briefcase } from 'lucide-react';

export const WorkerShell = () => {
  const location = useLocation();
  const params = useParams();

  const getSubShellTitle = () => {
    if (location.pathname.includes('/jobs')) return `Job Details: ${params.id || 'job-901'}`;
    if (location.pathname.includes('/membership')) return 'Worker Ownership & Co-op Equity Shares';
    if (location.pathname.includes('/earnings')) return 'Transparent Payouts & Dividend Ledger';
    return 'Worker-Owner Dashboard';
  };

  return (
    <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Worker Profile Header Shell */}
      <ScrollReveal className="bg-white rounded-2xl border border-[#E5E0D8] p-6 shadow-tactile flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Avatar src={currentWorkerProfile.avatar} size="xl" isCoopMember={true} status="online" />
          <div className="space-y-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#191C1D]">
                {currentWorkerProfile.name}
              </h2>
              <CooperativeBadge size="md" variant="emerald" subtext={currentWorkerProfile.tier} />
            </div>
            <p className="text-xs text-[#5A6065]">
              {currentWorkerProfile.coopId} • Member since {currentWorkerProfile.memberSince} • {currentWorkerProfile.assignedHub}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/worker/earnings">
            <Button variant="primary" size="medium" icon={Wallet}>
              View Earnings
            </Button>
          </Link>
          <Link to="/worker/membership">
            <Button variant="secondary" size="medium" icon={Award}>
              Co-op Equity
            </Button>
          </Link>
        </div>
      </ScrollReveal>

      {/* Sub-shell Switcher Pills */}
      <ScrollReveal className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-medium text-[#8A9197] shrink-0">Worker views:</span>
        <Link to="/worker" className={`px-3 py-1 rounded-full text-xs font-medium border ${location.pathname === '/worker' ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]' : 'bg-white text-[#5A6065] border-[#E5E0D8]'}`}>
          Overview
        </Link>
        <Link to="/worker/jobs/job-901" className={`px-3 py-1 rounded-full text-xs font-medium border ${location.pathname.includes('/jobs') ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]' : 'bg-white text-[#5A6065] border-[#E5E0D8]'}`}>
          /jobs/job-901
        </Link>
        <Link to="/worker/membership" className={`px-3 py-1 rounded-full text-xs font-medium border ${location.pathname.includes('/membership') ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]' : 'bg-white text-[#5A6065] border-[#E5E0D8]'}`}>
          /membership
        </Link>
        <Link to="/worker/earnings" className={`px-3 py-1 rounded-full text-xs font-medium border ${location.pathname.includes('/earnings') ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]' : 'bg-white text-[#5A6065] border-[#E5E0D8]'}`}>
          /earnings
        </Link>
      </ScrollReveal>

      {/* Dashboard Key Metrics Grid */}
      <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="MONTHLY EARNINGS"
          value={`₹${earningsSummary.monthlyEarningsINR.toLocaleString()}`}
          change={earningsSummary.monthlyChangePct}
          changeLabel="vs last month"
          icon={Wallet}
        />
        <StatCard
          label="COOP SURPLUS DIVIDEND"
          value={`₹${earningsSummary.coopSurplusShareINR.toLocaleString()}`}
          change={12.5}
          changeLabel="Q3 Co-op share"
          icon={TrendingUp}
        />
        <StatCard
          label="EQUITY SHARES"
          value={currentWorkerProfile.equityShareCount}
          subtitle={`Valued at ₹${currentWorkerProfile.equityValueINR.toLocaleString()}`}
          icon={Award}
        />
        <StatCard
          label="REPUTATION SCORE"
          value={`${currentWorkerProfile.reputationScore}%`}
          subtitle="Top 5% Co-op Member"
          icon={ShieldCheck}
        />
      </ScrollReveal>

      {/* Active Service Requests & Dispatch */}
      <ScrollReveal className="space-y-6">
        <SectionHeader
          eyebrow="SCHEDULED DISPATCH"
          heading="Assigned Co-op Jobs"
          description="Service requests matched with guaranteed zero-commission co-op rates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workerJobs.map((job) => (
            <Card key={job.id} variant="default" className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <StatusBadge status={job.status} size="md" />
                <span className="text-xs text-[#8A9197] font-medium">{job.date}</span>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif-heading text-xl text-[#191C1D]">{job.serviceTitle}</h4>
                <p className="text-sm font-medium text-[#5A6065]">Customer: {job.customerName}</p>
                <p className="text-xs text-[#8A9197]">{job.location}</p>
              </div>

              <div className="p-3 bg-[#F4F1EA] rounded-xl flex items-center justify-between text-xs font-sans-ui">
                <div>
                  <span className="text-[#8A9197]">Net Worker Payout</span>
                  <p className="font-bold text-base text-[#1B4D3E]">₹{job.netEarningsINR}</p>
                </div>
                <div className="text-right">
                  <span className="text-[#8A9197]">Co-op Reserve Fee</span>
                  <p className="font-semibold text-xs text-[#5A6065]">₹{job.coopFeeINR} (Co-op Health)</p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <CooperativeBadge size="sm" variant="default" label="Coop Protected" />
                <Link to={`/worker/jobs/${job.id}`}>
                  <Button variant="primary" size="small">
                    Job Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </ScrollReveal>
    </PageTransition>
  );
};

export default WorkerShell;
