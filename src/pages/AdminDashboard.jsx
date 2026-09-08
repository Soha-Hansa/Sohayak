import React, { useState } from 'react';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';

import AdminSidebar from '../components/layout/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';
import AdminMembersPage from '../components/admin/AdminMembersPage';
import AdminServicesPage from '../components/admin/AdminServicesPage';
import AdminProposalsPage from '../components/admin/AdminProposalsPage';
import AdminCooperativeFundPage from '../components/admin/AdminCooperativeFundPage';
import AdminAnalyticsPage from '../components/admin/AdminAnalyticsPage';
import AdminGovernanceSummaryCard from '../components/admin/AdminGovernanceSummaryCard';
import WorkerVerificationSection from '../components/admin/WorkerVerificationSection';

import {
  adminAnalytics,
  recentDisputesList
} from '../data/analytics';
import {
  Users,
  Wrench,
  FileText,
  CheckCircle2,
  CreditCard,
  AlertTriangle,
  Check,
  Megaphone,
  UserCheck
} from 'lucide-react';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [disputes, setDisputes] = useState(recentDisputesList);

  const handleResolveDispute = (id) => {
    setDisputes(
      disputes.map(d => d.id === id ? { ...d, status: 'Resolved' } : d)
    );
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex w-full">
      {/* Left Admin Sidebar */}
      <AdminSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Console Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Header */}
        <AdminHeader onMobileMenuOpen={() => setMobileMenuOpen(true)} />

        {/* Dashboard Main Container */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 space-y-10">
          <PageTransition key={activeTab}>
            {/* Conditional Tab Rendering */}
            {activeTab === 'members' && <AdminMembersPage />}
            {activeTab === 'services' && <AdminServicesPage />}
            {activeTab === 'proposals' && <AdminProposalsPage />}
            {activeTab === 'fund' && <AdminCooperativeFundPage />}
            {activeTab === 'analytics' && <AdminAnalyticsPage />}
            {activeTab === 'users' && <AdminMembersPage />}
            {activeTab === 'gigs' && <AdminServicesPage />}
            {activeTab === 'payments' && <AdminCooperativeFundPage />}
            {activeTab === 'disputes' && <AdminProposalsPage />}

            {/* Default Dashboard Overview */}
            {activeTab === 'dashboard' && (
              <div className="space-y-10">
                {/* ---------------------------------------------------- */}
                {/* 1. COOPERATIVE GOVERNANCE SUMMARY CARD */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal>
                  <AdminGovernanceSummaryCard />
                </ScrollReveal>

                {/* ---------------------------------------------------- */}
                {/* 2. SIX PLATFORM STATISTICS CARDS */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <StatCard
                    label="TOTAL USERS"
                    value={adminAnalytics.totalUsers.toLocaleString()}
                    change={adminAnalytics.userGrowthPct}
                    changeLabel="vs last month"
                    icon={Users}
                  />
                  <StatCard
                    label="ACTIVE WORKERS"
                    value={adminAnalytics.activeWorkerOwners.toLocaleString()}
                    change={adminAnalytics.workerGrowthPct}
                    changeLabel="vs last week"
                    icon={Wrench}
                  />
                  <StatCard
                    label="ACTIVE GIGS"
                    value={adminAnalytics.activeGigsCount}
                    subtitle={`${adminAnalytics.newGigsToday} new posted today`}
                    icon={FileText}
                  />
                  <StatCard
                    label="JOBS COMPLETED"
                    value={adminAnalytics.jobsCompletedCount.toLocaleString()}
                    subtitle={`${adminAnalytics.jobSuccessRatePct}% success rate`}
                    icon={CheckCircle2}
                  />
                  <StatCard
                    label="TOTAL TRANSACTIONS"
                    value={`₹${(adminAnalytics.monthlyGrossGMVINR / 100000).toFixed(1)}L`}
                    change={adminAnalytics.gmvGrowthPct}
                    changeLabel="Gross Platform GMV"
                    icon={CreditCard}
                  />
                  <StatCard
                    label="PENDING DISPUTES"
                    value={adminAnalytics.pendingDisputesCount}
                    subtitle="Requires admin resolution"
                    icon={AlertTriangle}
                  />
                </ScrollReveal>

                {/* ---------------------------------------------------- */}
                {/* 3. COOPERATIVE PROPOSALS PREVIEW */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal>
                  <AdminProposalsPage />
                </ScrollReveal>

                {/* ---------------------------------------------------- */}
                {/* 4. WORKER VERIFICATION SECTION */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal>
                  <WorkerVerificationSection />
                </ScrollReveal>

                {/* ---------------------------------------------------- */}
                {/* 5. COOPERATIVE FUND PREVIEW */}
                {/* ---------------------------------------------------- */}
                <ScrollReveal>
                  <AdminCooperativeFundPage />
                </ScrollReveal>
              </div>
            )}
          </PageTransition>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
