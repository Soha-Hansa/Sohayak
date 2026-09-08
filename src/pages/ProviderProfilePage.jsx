import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import CustomerNav from '../components/customer/CustomerNav';
import Footer from '../components/layout/Footer';
import Avatar from '../components/ui/Avatar';
import Rating from '../components/ui/Rating';
import CooperativeBadge from '../components/ui/CooperativeBadge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import BookingModal from '../components/customer/BookingModal';

import { providers } from '../data/providers';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Calendar,
  Award,
  Star,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const ProviderProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [bookingModalOpen, setBookingModalOpen] = useState(
    Boolean(location.state?.autoOpenBooking || location.pathname.includes('/customer/book'))
  );

  // Find target provider from dataset
  const provider = useMemo(() => {
    return providers.find((p) => p.id === id) || providers[0];
  }, [id]);

  return (
    <PageTransition className="w-full">
      {/* Customer Header Navigation */}
      <CustomerNav />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Back Link */}
        <ScrollReveal>
          <button
            onClick={() => navigate('/customer/providers')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1B4D3E] hover:text-[#C87D55] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Providers</span>
          </button>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* PROVIDER PROFILE HEADER CARD */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal>
          <Card variant="default" className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 border-b border-[#E5E0D8] pb-6">
              <div className="flex items-start gap-5">
                <Avatar
                  src={provider.avatar}
                  initials={provider.initials}
                  size="xl"
                  isCoopMember={true}
                  className="shrink-0"
                />
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191C1D]">
                      {provider.name}
                    </h1>
                    {provider.isVerified ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1B4D3E] bg-[#E8F2EE] px-2.5 py-0.5 rounded-full border border-[#C0DCD3]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    ) : (
                      <CooperativeBadge size="sm" variant="default" />
                    )}
                  </div>

                  <p className="text-sm font-bold text-[#1B4D3E]">
                    {provider.mainSkill || provider.coopRole || provider.category}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#5A6065]">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C87D55]" />
                      <span>{provider.locality} ({provider.distance || '2.4 km away'})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1B4D3E]" />
                      <span>{provider.membershipYears || 2}+ Years Co-op Member</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center gap-3">
                    <Rating rating={provider.rating} reviewCount={provider.totalJobs} size="md" />
                    <span className="text-xs font-bold text-[#191C1D] px-2.5 py-0.5 rounded-md bg-[#E8F2EE]">
                      {provider.totalJobs} Completed Jobs
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & CTA Column */}
              <div className="sm:text-right shrink-0 space-y-3 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-[#E5E0D8]">
                <div>
                  <span className="text-[10px] text-[#8A9197] uppercase font-bold tracking-wider block">
                    STARTING RATE
                  </span>
                  <p className="font-serif-heading text-3xl font-bold text-[#191C1D]">
                    From ₹{provider.startingPrice || provider.hourlyRate}
                  </p>
                </div>

                <Button
                  variant="earth"
                  size="medium"
                  onClick={() => setBookingModalOpen(true)}
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto justify-center"
                >
                  Book Service
                </Button>
              </div>
            </div>

            {/* Short Bio Introduction */}
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-[#191C1D]">Introduction</h3>
              <p className="text-xs text-[#5A6065] leading-relaxed font-sans-ui bg-[#FBF9F5] p-4 rounded-2xl border border-[#E5E0D8]">
                {provider.bio}
              </p>
            </div>

            {/* Services Offered / Skills */}
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-[#191C1D]">Services Offered</h3>
              <div className="flex flex-wrap items-center gap-2">
                {provider.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#E8F2EE] text-[#1B4D3E] font-bold text-xs rounded-xl border border-[#C0DCD3]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Guarantees */}
            <div className="pt-4 border-t border-[#E5E0D8] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2 p-3 bg-[#FBF9F5] rounded-xl border border-[#E5E0D8]">
                <CheckCircle2 className="w-4 h-4 text-[#1B4D3E]" />
                <span>Identity & KYC Verified</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#FBF9F5] rounded-xl border border-[#E5E0D8]">
                <Award className="w-4 h-4 text-[#1B4D3E]" />
                <span>Co-op Certified Skill</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#FBF9F5] rounded-xl border border-[#E5E0D8]">
                <ShieldCheck className="w-4 h-4 text-[#C87D55]" />
                <span>Fair Transparent Pricing</span>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* REVIEWS SECTION */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-heading text-xl font-bold text-[#191C1D]">
              Customer Reviews ({provider.reviews?.length || 2})
            </h3>
            <div className="flex items-center gap-1 text-xs font-bold text-[#191C1D]">
              <Star className="w-4 h-4 text-[#C87D55] fill-[#C87D55]" />
              <span>{provider.rating} / 5.0 Rating</span>
            </div>
          </div>

          <div className="space-y-3">
            {(provider.reviews || [
              { id: 'r1', author: 'Anita S.', rating: 5, text: 'Very punctual and thorough work. Extremely professional co-op member.', date: '2 days ago' },
              { id: 'r2', author: 'Debashis P.', rating: 4.8, text: 'Clean job done on time. Transparent pricing.', date: '1 week ago' }
            ]).map((rev) => (
              <Card key={rev.id} variant="default" className="p-4 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#191C1D] text-sm">{rev.author}</span>
                  <div className="flex items-center gap-1 text-[#C87D55]">
                    <Star className="w-3.5 h-3.5 fill-[#C87D55]" />
                    <span className="font-bold">{rev.rating}</span>
                  </div>
                </div>
                <p className="text-[#5A6065] leading-relaxed font-sans-ui">{rev.text}</p>
                <span className="text-[10px] text-[#8A9197] block">{rev.date}</span>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </main>

      {/* Booking Modal */}
      <BookingModal
        provider={provider}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </PageTransition>
  );
};

export default ProviderProfilePage;
