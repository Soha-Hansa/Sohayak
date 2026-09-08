import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import Rating from '../components/ui/Rating';
import CooperativeBadge from '../components/ui/CooperativeBadge';

import CustomerSidebar from '../components/customer/CustomerSidebar';
import CustomerHeader from '../components/customer/CustomerHeader';
import PostGigBanner from '../components/customer/PostGigBanner';
import PostGigModal from '../components/customer/PostGigModal';
import RequestCard from '../components/customer/RequestCard';
import OngoingJobCard from '../components/customer/OngoingJobCard';
import SpendingOverview from '../components/customer/SpendingOverview';
import CustomerProfileCard from '../components/customer/CustomerProfileCard';

import {
  currentCustomerProfile,
  customerRequestsList,
  customerOngoingJobs,
  customerReviewsGiven
} from '../data/bookings';
import { providers } from '../data/providers';
import {
  FileText,
  Clock,
  CheckCircle2,
  CreditCard,
  Search,
  SlidersHorizontal,
  PlusCircle,
  Star,
  MapPin,
  ArrowRight
} from 'lucide-react';

export const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [hiredWorkers, setHiredWorkers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilterCategory, setSelectedFilterCategory] = useState('All');

  const navigate = useNavigate();

  const handleHireWorker = (workerId) => {
    if (!hiredWorkers.includes(workerId)) {
      setHiredWorkers([...hiredWorkers, workerId]);
    }
  };

  const filterCategories = ['All', 'Electrician', 'Plumber', 'Cleaning', 'AC Repair', 'Tutor'];

  const filteredWorkers = providers.filter(w => {
    const matchesSearch = w.name.toLowerCase().includes(searchQuery.toLowerCase()) || w.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFilterCategory === 'All' || w.category.toLowerCase().includes(selectedFilterCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex w-full">
      {/* Left Sidebar Console */}
      <CustomerSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPostModal={() => setPostModalOpen(true)}
      />

      {/* Main Console Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Header */}
        <CustomerHeader onMobileMenuOpen={() => setMobileMenuOpen(true)} />

        {/* Main Dashboard Container */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 space-y-10">
          <PageTransition>
            {/* ---------------------------------------------------- */}
            {/* 1. QUICK ACTION BANNER: POST A GIG */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal>
              <PostGigBanner onOpenPostModal={() => setPostModalOpen(true)} />
            </ScrollReveal>

            {/* ---------------------------------------------------- */}
            {/* 2. FOUR STATISTICS CARDS */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              <StatCard
                label="ACTIVE REQUESTS"
                value={currentCustomerProfile.activeRequestsCount}
                subtitle="2 pending worker responses"
                icon={FileText}
              />
              <StatCard
                label="ONGOING JOBS"
                value={currentCustomerProfile.ongoingJobsCount}
                subtitle="1 in progress right now"
                icon={Clock}
              />
              <StatCard
                label="COMPLETED JOBS"
                value={currentCustomerProfile.completedServices}
                subtitle="100% Verified Co-op"
                icon={CheckCircle2}
              />
              <StatCard
                label="TOTAL SPENT"
                value={`₹${currentCustomerProfile.totalSpentINR.toLocaleString()}`}
                change={+8.0}
                changeLabel="vs last month"
                icon={CreditCard}
              />
            </ScrollReveal>

            {/* ---------------------------------------------------- */}
            {/* 3. MY SERVICE REQUESTS SECTION */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal className="space-y-6 my-10">
              <SectionHeader
                eyebrow="YOUR DISPATCHED REQUESTS"
                heading="My Recent Requests"
                description="Manage open service requests and review worker applications."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {customerRequestsList.map((req) => (
                  <RequestCard
                    key={req.id}
                    request={req}
                    onView={() => navigate('/customer/bookings')}
                  />
                ))}
              </div>
            </ScrollReveal>

            {/* ---------------------------------------------------- */}
            {/* 4. ONGOING JOBS SECTION WITH PROGRESS STEPPER */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal className="space-y-6 my-10">
              <SectionHeader
                eyebrow="ACTIVE SERVICE APPOINTMENTS"
                heading="Ongoing Jobs"
                description="Track live status and scheduled arrival times."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {customerOngoingJobs.map((job) => (
                  <OngoingJobCard
                    key={job.id}
                    job={job}
                    onViewJob={(j) => navigate('/customer/booking-success')}
                  />
                ))}
              </div>
            </ScrollReveal>

            {/* ---------------------------------------------------- */}
            {/* 5. FIND WORKERS SEARCH & FILTER AREA */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal className="space-y-6 my-10">
              <SectionHeader
                eyebrow="DIRECTORY SEARCH"
                heading="Find the Right Worker"
                description="Filter certified cooperative members by skill, location, and rating."
              />

              <Card variant="default" className="p-5 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex-1 flex items-center gap-3 bg-[#F4F1EA] px-3.5 py-2.5 rounded-xl border border-[#E5E0D8]">
                    <Search className="w-4 h-4 text-[#8A9197] shrink-0" />
                    <input
                      type="text"
                      placeholder="Search for a service or skill (e.g. Electrician, Plumbing)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-sm text-[#191C1D] placeholder-[#8A9197] focus:outline-none"
                    />
                  </div>

                  <button className="px-4 py-2.5 bg-[#F4F1EA] rounded-xl border border-[#E5E0D8] text-xs font-semibold text-[#191C1D] flex items-center justify-center gap-2 hover:bg-[#E5E0D8] transition-colors shrink-0">
                    <SlidersHorizontal className="w-4 h-4 text-[#C87D55]" />
                    <span>Filter Options</span>
                  </button>
                </div>

                {/* Filter Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
                  <span className="text-[#8A9197] font-semibold shrink-0">Category:</span>
                  {filterCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedFilterCategory(cat)}
                      className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
                        selectedFilterCategory === cat
                          ? 'bg-[#1B4D3E] text-white'
                          : 'bg-[#F4F1EA] text-[#5A6065] hover:bg-[#E5E0D8]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </Card>

              {/* Recommended Workers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredWorkers.map((w) => {
                  const isHired = hiredWorkers.includes(w.id);
                  return (
                    <Card key={w.id} variant="interactive" className="p-5 space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <Avatar src={w.avatar} initials={w.initials} size="lg" isCoopMember={true} />
                          <CooperativeBadge size="sm" variant="default" showLabel={false} />
                        </div>
                        <div>
                          <h4 className="font-bold text-base text-[#191C1D]">{w.name}</h4>
                          <p className="text-xs font-semibold text-[#1B4D3E]">{w.category}</p>
                          <p className="text-[11px] text-[#8A9197] flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3.5 h-3.5 text-[#C87D55]" /> {w.locality}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#E5E0D8] flex items-center justify-between text-xs">
                          <Rating rating={w.rating} reviewCount={w.totalJobs} size="sm" />
                          <span className="font-bold text-[#191C1D]">₹{w.hourlyRate}/hr</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#E5E0D8] flex items-center gap-2">
                        <Button
                          variant="secondary"
                          size="small"
                          onClick={() => navigate(`/customer/provider/${w.id}`)}
                          className="flex-1"
                        >
                          View Profile
                        </Button>
                        <Button
                          variant={isHired ? 'ghost' : 'earth'}
                          size="small"
                          disabled={isHired}
                          onClick={() => handleHireWorker(w.id)}
                          className={`flex-1 ${isHired ? 'bg-[#E8F5E9] text-[#2D7D46] border border-[#C8E6C9]' : ''}`}
                        >
                          {isHired ? 'Request Sent' : 'Hire'}
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* ---------------------------------------------------- */}
            {/* 6. SPENDING OVERVIEW */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal className="my-10">
              <SpendingOverview />
            </ScrollReveal>

            {/* ---------------------------------------------------- */}
            {/* 7. CUSTOMER PROFILE CARD & RECENT REVIEWS */}
            {/* ---------------------------------------------------- */}
            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-10">
              {/* Profile Card */}
              <div className="lg:col-span-5">
                <CustomerProfileCard
                  profile={currentCustomerProfile}
                  onEditProfile={() => navigate('/customer/dashboard')}
                />
              </div>

              {/* Customer Reviews Section */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-heading text-2xl font-normal text-[#191C1D]">Your Given Reviews</h3>
                  <Button variant="secondary" size="small" icon={Star} onClick={() => navigate('/customer/bookings')}>
                    Leave a Review
                  </Button>
                </div>

                <div className="space-y-4">
                  {customerReviewsGiven.map((rev) => (
                    <Card key={rev.id} variant="default" className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar src={rev.workerAvatar} initials={rev.workerName.slice(0, 2)} size="sm" />
                          <div>
                            <h4 className="font-bold text-sm text-[#191C1D]">{rev.workerName}</h4>
                            <span className="text-[10px] text-[#8A9197]">{rev.serviceTitle} • {rev.date}</span>
                          </div>
                        </div>
                        <Rating rating={rev.rating} size="sm" />
                      </div>
                      <p className="text-xs text-[#5A6065] italic bg-[#F4F1EA]/60 p-2.5 rounded-xl">
                        "{rev.comment}"
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </PageTransition>
        </main>
      </div>

      {/* Post a Gig Interactive Modal */}
      <PostGigModal
        isOpen={postModalOpen}
        onClose={() => setPostModalOpen(false)}
        onGigPosted={(data) => {
          console.log('Gig Posted:', data);
        }}
      />
    </div>
  );
};

export default CustomerDashboard;
