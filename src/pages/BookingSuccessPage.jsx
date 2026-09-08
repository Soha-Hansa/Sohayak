import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import CustomerNav from '../components/customer/CustomerNav';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Home
} from 'lucide-react';

export const BookingSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get passed booking state or fallback mock
  const booking = location.state?.booking || {
    bookingId: 'SYG-8921',
    providerName: 'Rahul Das',
    providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    providerSkill: 'Master Electrician',
    serviceTitle: 'Electrical Safety Audit & Repair',
    date: 'Tomorrow, Sep 7',
    timeSlot: '10:00 AM - 12:00 PM',
    address: 'Flat 3B, Howrah AC Market, Howrah, West Bengal',
    totalAmount: 549,
    status: 'Confirmed'
  };

  return (
    <PageTransition className="w-full">
      {/* Navigation Header */}
      <CustomerNav />

      {/* Main Container */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <ScrollReveal className="text-center space-y-4">
          {/* Animated Success Check Visual */}
          <div className="w-20 h-20 bg-[#E8F2EE] text-[#1B4D3E] rounded-full mx-auto flex items-center justify-center border-4 border-[#C0DCD3] shadow-md">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
              SUCCESSFUL APPOINTMENT
            </span>
            <h1 className="font-serif-heading text-3xl sm:text-4xl font-normal text-[#191C1D]">
              Booking Confirmed!
            </h1>
            <p className="text-xs sm:text-sm text-[#5A6065] font-sans-ui">
              Your service appointment has been scheduled with the cooperative worker.
            </p>
          </div>
        </ScrollReveal>

        {/* Booking Receipt Summary Card */}
        <ScrollReveal>
          <Card variant="default" className="p-6 sm:p-8 space-y-6 bg-white border-[#E5E0D8]">
            {/* Top ID & Status Badge */}
            <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-4">
              <div>
                <span className="text-[10px] text-[#8A9197] uppercase font-bold tracking-wider">BOOKING ID</span>
                <p className="font-mono text-base font-bold text-[#191C1D]">#{booking.bookingId}</p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8F2EE] text-[#1B4D3E] text-xs font-bold rounded-full border border-[#C0DCD3]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{booking.status}</span>
              </span>
            </div>

            {/* Provider & Service Details */}
            <div className="flex items-center gap-4 bg-[#FBF9F5] p-4 rounded-2xl border border-[#E5E0D8]">
              <Avatar src={booking.providerAvatar} size="lg" isCoopMember={true} />
              <div>
                <h4 className="font-bold text-base text-[#191C1D]">{booking.providerName}</h4>
                <p className="text-xs font-semibold text-[#1B4D3E]">{booking.providerSkill}</p>
                <p className="text-xs text-[#5A6065] pt-0.5">{booking.serviceTitle}</p>
              </div>
            </div>

            {/* Appointment Breakdown Table */}
            <div className="space-y-3 text-xs font-sans-ui">
              <div className="flex items-start gap-3 p-3 bg-[#FBF9F5] rounded-xl">
                <Calendar className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-[#191C1D]">Date & Time</span>
                  <span className="text-[#5A6065]">{booking.date} · {booking.timeSlot}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#FBF9F5] rounded-xl">
                <MapPin className="w-4 h-4 text-[#C87D55] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-[#191C1D]">Service Location</span>
                  <span className="text-[#5A6065]">{booking.address}</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#1B4D3E] text-white rounded-2xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C87D55]" />
                  <span className="font-bold">Estimated Amount (Escrowed)</span>
                </div>
                <span className="font-serif-heading text-xl font-bold">₹{booking.totalAmount}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="earth"
                size="medium"
                onClick={() => navigate('/customer/bookings')}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto justify-center"
              >
                View Booking
              </Button>

              <Button
                variant="secondary"
                size="medium"
                onClick={() => navigate('/customer')}
                icon={Home}
                className="w-full sm:w-auto justify-center"
              >
                Back to Home
              </Button>
            </div>
          </Card>
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </PageTransition>
  );
};

export default BookingSuccessPage;
