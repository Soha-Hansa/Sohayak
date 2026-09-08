import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import CustomerNav from '../components/customer/CustomerNav';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import StatusBadge from '../components/ui/StatusBadge';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Star,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const CustomerBookingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  // Initial mock list of customer bookings
  const mockBookingsList = [
    {
      id: 'bk-501',
      serviceTitle: 'Cooperative Deep Home Cleaning',
      providerId: 'p-106',
      providerName: 'Moumita Roy',
      providerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80',
      providerSkill: 'Deep Cleaning Specialist',
      scheduledTime: 'Today at 2:30 PM',
      date: 'Today, Sep 6',
      status: 'In Progress',
      amountINR: 1299,
      address: 'Flat 3B, Howrah AC Market, Howrah',
      canReview: false,
    },
    {
      id: 'bk-502',
      serviceTitle: 'Electrical Safety Audit & Circuit Repair',
      providerId: 'p-102',
      providerName: 'Rahul Das',
      providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
      providerSkill: 'Master Electrician',
      scheduledTime: 'Tomorrow at 10:00 AM',
      date: 'Tomorrow, Sep 7',
      status: 'Confirmed',
      amountINR: 549,
      address: 'Flat 3B, Howrah AC Market, Howrah',
      canReview: false,
    },
    {
      id: 'bk-503',
      serviceTitle: 'Kitchen Plumbing Leak Fix',
      providerId: 'p-104',
      providerName: 'Suman Mondal',
      providerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=250&q=80',
      providerSkill: 'Licensed Plumber',
      scheduledTime: '02 Sept 2026',
      date: '02 Sept 2026',
      status: 'Completed',
      amountINR: 399,
      address: 'Flat 3B, Howrah AC Market, Howrah',
      canReview: true,
      hasReviewed: false,
    },
    {
      id: 'bk-504',
      serviceTitle: 'Full Room Paint Touchup',
      providerId: 'p-111',
      providerName: 'Debabrata Santra',
      providerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=250&q=80',
      providerSkill: 'Master Painter',
      scheduledTime: '28 Aug 2026',
      date: '28 Aug 2026',
      status: 'Completed',
      amountINR: 999,
      address: 'Flat 3B, Howrah AC Market, Howrah',
      canReview: true,
      hasReviewed: true,
    },
    {
      id: 'bk-505',
      serviceTitle: 'AC Gas Top-up & Service',
      providerId: 'p-112',
      providerName: 'Ranjit Kumar',
      providerAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=250&q=80',
      providerSkill: 'HVAC Specialist',
      scheduledTime: '15 Aug 2026',
      date: '15 Aug 2026',
      status: 'Cancelled',
      amountINR: 499,
      address: 'Flat 3B, Howrah AC Market, Howrah',
      canReview: false,
    }
  ];

  // Tab Filtering
  const filteredBookings = mockBookingsList.filter((b) => {
    if (activeTab === 'upcoming') return b.status === 'Confirmed';
    if (activeTab === 'ongoing') return b.status === 'In Progress';
    if (activeTab === 'completed') return b.status === 'Completed';
    if (activeTab === 'cancelled') return b.status === 'Cancelled';
    return true; // all
  });

  return (
    <PageTransition className="w-full">
      {/* Navigation Bar */}
      <CustomerNav />

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
              CUSTOMER MARKETPLACE
            </span>
            <h1 className="font-serif-heading text-3xl sm:text-4xl font-normal text-[#191C1D]">
              My Service Bookings
            </h1>
            <p className="text-xs text-[#5A6065] pt-1">
              Track upcoming appointments, active jobs, and leave reviews for completed services.
            </p>
          </div>

          <Button
            variant="earth"
            size="small"
            onClick={() => navigate('/customer/services/cleaning')}
            icon={ArrowRight}
            iconPosition="right"
          >
            Book New Service
          </Button>
        </ScrollReveal>

        {/* Status Filter Tabs */}
        <ScrollReveal>
          <div className="flex items-center gap-2 border-b border-[#E5E0D8] pb-3 overflow-x-auto text-xs">
            {[
              { id: 'all', label: 'All Bookings' },
              { id: 'upcoming', label: 'Upcoming' },
              { id: 'ongoing', label: 'In Progress' },
              { id: 'completed', label: 'Completed' },
              { id: 'cancelled', label: 'Cancelled' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-[#1B4D3E] text-white shadow-sm'
                    : 'bg-white text-[#5A6065] border border-[#E5E0D8] hover:border-[#1B4D3E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Bookings List Cards */}
        <ScrollReveal className="space-y-4">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((b) => (
              <Card key={b.id} variant="default" className="p-5 sm:p-6 space-y-4 bg-white border-[#E5E0D8]">
                {/* Header: Service Title & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E0D8] pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#8A9197]">#{b.id}</span>
                    <h3 className="font-bold text-base text-[#191C1D]">{b.serviceTitle}</h3>
                  </div>

                  <StatusBadge status={b.status} />
                </div>

                {/* Body: Provider + Appointment Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Provider Info */}
                  <div className="flex items-center gap-3">
                    <Avatar src={b.providerAvatar} size="md" isCoopMember={true} />
                    <div>
                      <h4 className="font-bold text-sm text-[#191C1D]">{b.providerName}</h4>
                      <p className="text-xs font-semibold text-[#1B4D3E]">{b.providerSkill}</p>
                    </div>
                  </div>

                  {/* Date & Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5A6065]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#1B4D3E]" />
                      <span>{b.scheduledTime}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C87D55]" />
                      <span className="truncate max-w-[200px]">{b.address}</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between md:flex-col md:items-end gap-2 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-[#E5E0D8]">
                    <div className="text-left md:text-right">
                      <span className="text-[10px] text-[#8A9197] uppercase font-bold block">AMOUNT</span>
                      <span className="font-serif-heading text-lg font-bold text-[#191C1D]">₹{b.amountINR}</span>
                    </div>

                    {b.status === 'Completed' && (
                      <Button
                        variant={b.hasReviewed ? "secondary" : "earth"}
                        size="small"
                        disabled={b.hasReviewed}
                        onClick={() => navigate(`/customer/review/${b.providerId}`)}
                        icon={Star}
                      >
                        {b.hasReviewed ? 'Reviewed ★' : 'Leave a Review'}
                      </Button>
                    )}

                    {b.status === 'Confirmed' && (
                      <span className="text-xs text-[#1B4D3E] font-bold bg-[#E8F2EE] px-2.5 py-1 rounded-md">
                        Scheduled
                      </span>
                    )}

                    {b.status === 'In Progress' && (
                      <span className="text-xs text-[#C87D55] font-bold bg-[#F9F0EA] px-2.5 py-1 rounded-md animate-pulse">
                        Worker On Site
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card variant="default" className="p-12 text-center space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#F4F1EA] text-[#1B4D3E] mx-auto flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-[#191C1D]">No bookings in this tab</h4>
              <p className="text-xs text-[#5A6065]">
                You don't have any {activeTab !== 'all' ? activeTab : ''} service appointments at the moment.
              </p>
              <Button variant="secondary" size="small" onClick={() => setActiveTab('all')}>
                Show All Bookings
              </Button>
            </Card>
          )}
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </PageTransition>
  );
};

export default CustomerBookingsPage;
