import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import CooperativeBadge from '../components/ui/CooperativeBadge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import Rating from '../components/ui/Rating';
import Footer from '../components/layout/Footer';

import CustomerNav from '../components/customer/CustomerNav';
import ServiceCategoryCard from '../components/customer/ServiceCategoryCard';
import PopularServiceCard from '../components/customer/PopularServiceCard';
import CooperativeImpact from '../components/customer/CooperativeImpact';
import CustomerSearchPopover from '../components/customer/CustomerSearchPopover';

import { serviceCategories, popularServicesNearYou } from '../data/services';
import { providers } from '../data/providers';
import {
  Search,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Coins,
  HeartHandshake,
  Users,
  ArrowRight,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const CustomerShell = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const featuredWorkers = providers.slice(0, 3);

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Choose a Service',
      desc: 'Browse transparent service categories or post your custom requirement.',
    },
    {
      step: '02',
      title: 'Choose a Worker',
      desc: 'Compare trusted cooperative members, ratings, reviews, and starting prices.',
    },
    {
      step: '03',
      title: 'Get It Done',
      desc: 'Book the worker and get your household service completed with guaranteed quality.',
    },
  ];

  return (
    <PageTransition className="w-full">
      {/* Customer Navigation Header */}
      <CustomerNav onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* ---------------------------------------------------- */}
        {/* SECTION 4: CUSTOMER HERO SECTION */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
              COOPERATIVE SERVICE MARKETPLACE
            </span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-[#191C1D] leading-tight">
            What do you need help with <span className="italic text-[#1B4D3E] underline decoration-[#C87D55]/30 underline-offset-8">today</span>?
          </h1>

          <p className="text-base sm:text-lg text-[#5A6065] font-sans-ui leading-relaxed max-w-2xl mx-auto">
            Find trusted local workers, book services, and support your cooperative community.
          </p>

          {/* Large Search Bar & Location Selector */}
          <div className="pt-2 max-w-2xl mx-auto">
            <CustomerSearchPopover />
          </div>

          {/* Location Indicator Pill */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-[#5A6065]">
            <MapPin className="w-4 h-4 text-[#C87D55]" />
            <span>Location: <strong className="text-[#191C1D]">Howrah, West Bengal</strong></span>
          </div>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* SECTION 5: QUICK SERVICE CATEGORIES (9 CATEGORIES) */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal className="space-y-6">
          <SectionHeader
            eyebrow="SERVICE DIRECTORY"
            heading="Browse Services"
            description="Find the right professional for your needs."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {serviceCategories.map((cat) => (
              <ServiceCategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* SECTION 6: POPULAR SERVICES NEAR YOU */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal className="space-y-6">
          <SectionHeader
            eyebrow="COMMUNITY FAVOURITES"
            heading="Popular Services Near You"
            description="Top booked household services with transparent starting prices."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServicesNearYou.map((srv) => (
              <PopularServiceCard key={srv.id} service={srv} />
            ))}
          </div>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* SECTION 7: TRUST / COOPERATIVE MESSAGE */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal>
          <Card variant="default" className="p-6 sm:p-10 bg-[#FBF9F5] border-[#E5E0D8] space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
                WHY CHOOSE SOHAYAK
              </span>
              <h3 className="font-serif-heading text-3xl font-normal text-[#191C1D]">
                Services powered by our cooperative community
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans-ui">
              <div className="space-y-2 p-4 bg-white rounded-xl border border-[#E5E0D8]">
                <div className="w-8 h-8 rounded-lg bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#191C1D]">Verified Workers</h4>
                <p className="text-[#5A6065]">Work with trusted and verified service providers.</p>
              </div>

              <div className="space-y-2 p-4 bg-white rounded-xl border border-[#E5E0D8]">
                <div className="w-8 h-8 rounded-lg bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#191C1D]">Fair Pricing</h4>
                <p className="text-[#5A6065]">Transparent pricing with no hidden surprises.</p>
              </div>

              <div className="space-y-2 p-4 bg-white rounded-xl border border-[#E5E0D8]">
                <div className="w-8 h-8 rounded-lg bg-[#F9F0EA] text-[#C87D55] flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#191C1D]">Local Community</h4>
                <p className="text-[#5A6065]">Support skilled workers in your own community.</p>
              </div>

              <div className="space-y-2 p-4 bg-white rounded-xl border border-[#E5E0D8]">
                <div className="w-8 h-8 rounded-lg bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center font-bold">
                  <Coins className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-[#191C1D]">Cooperative Growth</h4>
                <p className="text-[#5A6065]">Your spending helps strengthen the cooperative ecosystem.</p>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* SECTION 8: FEATURED WORKERS PREVIEW */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal className="space-y-6">
          <SectionHeader
            eyebrow="EXPERT PROVIDERS"
            heading="Top Rated Workers"
            description="Verified cooperative members in your local chapter."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWorkers.map((w) => (
              <Card key={w.id} variant="interactive" className="p-5 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Avatar src={w.avatar} initials={w.initials} size="lg" isCoopMember={true} />
                    <CooperativeBadge size="sm" variant="default" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#191C1D]">{w.name}</h4>
                    <p className="text-xs font-semibold text-[#1B4D3E]">{w.category || w.skill}</p>
                    <p className="text-[11px] text-[#8A9197]">{w.locality}</p>
                  </div>

                  <div className="pt-2 border-t border-[#E5E0D8] flex items-center justify-between text-xs">
                    <Rating rating={w.rating} reviewCount={w.totalJobs} size="sm" />
                    <span className="font-bold text-[#191C1D]">Starting ₹{w.hourlyRate}</span>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => navigate(`/customer/provider/${w.id}`)}
                  className="w-full"
                >
                  View Profile
                </Button>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* SECTION 9: HOW IT WORKS */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal className="space-y-8">
          <SectionHeader
            eyebrow="SIMPLE 3-STEP PROCESS"
            heading="How It Works"
            description="Choose → Connect → Get It Done"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step) => (
              <Card key={step.step} variant="default" className="p-6 space-y-3 text-center">
                <span className="font-serif-heading text-4xl font-normal text-[#1B4D3E]">
                  {step.step}
                </span>
                <h4 className="font-sans-ui text-lg font-bold text-[#191C1D]">{step.title}</h4>
                <p className="text-xs text-[#5A6065] leading-relaxed font-sans-ui">{step.desc}</p>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* SECTION 10: COOPERATIVE IMPACT SECTION */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal>
          <CooperativeImpact />
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* SECTION 11: CUSTOMER CTA */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal className="text-center max-w-2xl mx-auto space-y-4 py-8">
          <h3 className="font-serif-heading text-3xl font-normal text-[#191C1D]">
            Ready to find the right help?
          </h3>
          <p className="text-sm text-[#5A6065] font-sans-ui max-w-lg mx-auto">
            Choose a service and connect with a trusted worker today.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="earth"
              size="medium"
              onClick={() => navigate('/customer/services/cleaning')}
              icon={ArrowRight}
              iconPosition="right"
            >
              Browse Services
            </Button>
            <Button
              variant="secondary"
              size="medium"
              onClick={() => navigate('/customer/dashboard')}
            >
              Post a Request
            </Button>
          </div>
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </PageTransition>
  );
};

export default CustomerShell;
