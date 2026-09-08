import React, { useState } from 'react';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import Rating from '../components/ui/Rating';
import CooperativeBadge from '../components/ui/CooperativeBadge';
import WorkerSidebar from '../components/worker/WorkerSidebar';
import WorkerHeader from '../components/worker/WorkerHeader';
import WorkerProfileCard from '../components/worker/WorkerProfileCard';
import GigCard from '../components/worker/GigCard';
import GigDetailsModal from '../components/worker/GigDetailsModal';
import WorkerTodayJobs from '../components/worker/WorkerTodayJobs';
import WorkerJobRequests from '../components/worker/WorkerJobRequests';
import WorkerEarnings from '../components/worker/WorkerEarnings';
import WorkerCooperativeFund from '../components/worker/WorkerCooperativeFund';
import WorkerDividend from '../components/worker/WorkerDividend';
import WorkerMembership from '../components/worker/WorkerMembership';
import CooperativeImpactCard from '../components/worker/CooperativeImpactCard';

import {
  currentWorkerProfile,
  recommendedGigs,
  activeJobsList,
  workerReviews
} from '../data/workers';
import { Search, Briefcase, Award, Wallet, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGig, setSelectedGig] = useState(null);
  const [appliedGigs, setAppliedGigs] = useState([]);

  const handleApplyGig = (gig) => {
    if (!appliedGigs.includes(gig.id)) {
      setAppliedGigs([...appliedGigs, gig.id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex w-full">
      {/* Left Sidebar Console */}
      <WorkerSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Console Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Header */}
        <WorkerHeader onMobileMenuOpen={() => setMobileMenuOpen(true)} />

        {/* Dashboard Main Container */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 space-y-10">
          <PageTransition key={activeTab}>
            {/* Conditional Tab Rendering */}
            {activeTab === 'today-jobs' && <WorkerTodayJobs />}
            {activeTab === 'job-requests' && <WorkerJobRequests />}
            {activeTab === 'earnings' && <WorkerEarnings />}
            {activeTab === 'fund' && <WorkerCooperativeFund />}
            {activeTab === 'dividend' && <WorkerDividend />}
            {activeTab === 'membership' && <WorkerMembership />}

            {/* Default Dashboard Overview */}
            {activeTab === 'dashboard' && (
              <div className="space-y-10">
                {/* ---------------------------------------------------- */}
                {/* 1. WORKER PROFILE CARD */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal>
                  <WorkerProfileCard
                    profile={currentWorkerProfile}
                    onViewProfile={() => setActiveTab('membership')}
                  />
                </ScrollReveal>

                {/* ---------------------------------------------------- */}
                {/* 2. RECOGNIZABLE COOPERATIVE IMPACT CARD */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal>
                  <CooperativeImpactCard />
                </ScrollReveal>

                {/* ---------------------------------------------------- */}
                {/* 3. FOUR QUICK STATISTIC CARDS */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard
                    label="AVAILABLE GIGS"
                    value={currentWorkerProfile.availableGigsCount}
                    change={+5}
                    changeLabel="New today in your area"
                    icon={Search}
                  />
                  <StatCard
                    label="ACTIVE JOBS"
                    value={currentWorkerProfile.activeJobsCount}
                    subtitle="3 scheduled for today"
                    icon={Briefcase}
                  />
                  <StatCard
                    label="COMPLETED JOBS"
                    value={currentWorkerProfile.completedJobs}
                    subtitle="Top 5% Co-op Member"
                    icon={Award}
                  />
                  <StatCard
                    label="THIS MONTH'S EARNINGS"
                    value={`₹${currentWorkerProfile.thisMonthEarningsINR.toLocaleString()}`}
                    change={currentWorkerProfile.earningsGrowthPct}
                    changeLabel="vs last month"
                    icon={Wallet}
                  />
                </ScrollReveal>

                {/* ---------------------------------------------------- */}
                {/* 4. TODAY'S JOBS DISPATCH PREVIEW */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal>
                  <WorkerTodayJobs />
                </ScrollReveal>

                {/* ---------------------------------------------------- */}
                {/* 5. JOB REQUESTS DISPATCH PREVIEW */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal>
                  <WorkerJobRequests />
                </ScrollReveal>

                {/* ---------------------------------------------------- */}
                {/* 6. COOPERATIVE FUND & DIVIDEND SECTION */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal>
                  <WorkerCooperativeFund />
                </ScrollReveal>

                <ScrollReveal>
                  <WorkerDividend />
                </ScrollReveal>

                <ScrollReveal>
                  <WorkerMembership />
                </ScrollReveal>
              </div>
            )}
          </PageTransition>
        </main>
      </div>

      {/* Gig Details Modal */}
      <GigDetailsModal
        gig={selectedGig}
        isOpen={Boolean(selectedGig)}
        onClose={() => setSelectedGig(null)}
        onApply={handleApplyGig}
      />
    </div>
  );
};

export default WorkerDashboard;

