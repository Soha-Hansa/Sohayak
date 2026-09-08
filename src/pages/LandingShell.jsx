import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Lenis from 'lenis';

import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';
import CooperativeBadge from '../components/ui/CooperativeBadge';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';
import Card from '../components/ui/Card';
import Rating from '../components/ui/Rating';
import Avatar from '../components/ui/Avatar';
import MagneticWrapper from '../components/ui/MagneticWrapper';
import CooperativeFundChart from '../components/landing/CooperativeFundChart';
import GovernanceVotingPreview from '../components/landing/GovernanceVotingPreview';
import CooperativeNetworkCanvas from '../components/landing/CooperativeNetworkCanvas';
import CinematicWowSection from '../components/landing/CinematicWowSection';
import Footer from '../components/layout/Footer';
import {
  ArrowRight,
  ShieldCheck,
  Check,
  CheckCircle2,
  Sparkles,
  Wrench,
  Droplet,
  BookOpen,
  Utensils,
  Wind,
  Hammer,
  Leaf,
  ChevronRight,
  ArrowDown,
  TrendingUp,
  Coins,
  Vote,
  Users
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const LandingShell = () => {
  const navigate = useNavigate();

  // GSAP Container & Section References
  const containerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroSearchRef = useRef(null);
  const heroTrustRef = useRef(null);

  const diffSectionRef = useRef(null);
  const tradCardRef = useRef(null);
  const coopCardRef = useRef(null);

  const timelineSectionRef = useRef(null);
  const timelineTrackRef = useRef(null);
  const categoriesRef = useRef(null);
  const equityRef = useRef(null);
  const equityTrackRef = useRef(null);
  const fundRef = useRef(null);
  const govRef = useRef(null);

  // Framer Motion Velocity Scroll Setup for Ultra-Smooth Kinetic Skewing
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 90, stiffness: 200 });
  const skewVelocity = useTransform(smoothVelocity, [-3000, 3000], [-1.2, 1.2]);

  const serviceCategories = [
    { id: 'electrician', name: 'Electrician', desc: 'Repairs, wiring & safety inspections', icon: Wrench },
    { id: 'plumber', name: 'Plumber', desc: 'Pipe repairs, fittings & leak fixes', icon: Droplet },
    { id: 'home-cleaning', name: 'Home Cleaning', desc: 'Eco-friendly deep cleaning & sanitization', icon: Sparkles },
    { id: 'tutoring', name: 'Home Tutor', desc: 'K-12 academic support & skill coaching', icon: BookOpen },
    { id: 'cooking', name: 'Home Cooking', desc: 'Fresh regional meal preparation', icon: Utensils },
    { id: 'ac-repair', name: 'AC Repair', desc: 'Servicing, gas top-ups & installation', icon: Wind },
    { id: 'carpentry', name: 'Carpentry', desc: 'Furniture repairs, custom fittings', icon: Hammer },
    { id: 'gardening', name: 'Urban Gardening', desc: 'Plant doctor, soil care & maintenance', icon: Leaf },
  ];

  const providerSpotlights = [
    {
      id: 'p-102',
      name: 'Arindam Das',
      role: 'Master Electrician',
      location: 'Howrah, Kolkata',
      rating: 4.9,
      jobsCount: 386,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
      initials: 'AD',
    },
    {
      id: 'p-104',
      name: 'Suman Mondal',
      role: 'Senior Plumber',
      location: 'Kolkata Central',
      rating: 4.8,
      jobsCount: 291,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
      initials: 'SM',
    },
    {
      id: 'p-105',
      name: 'Priya Sharma',
      role: 'Home Educator',
      location: 'Salt Lake, Kolkata',
      rating: 4.9,
      jobsCount: 214,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
      initials: 'PS',
    },
    {
      id: 'p-101',
      name: 'Sunita Devi',
      role: 'Deep Cleaning Specialist',
      location: 'Indiranagar, Bengaluru',
      rating: 4.95,
      jobsCount: 1420,
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=250&q=80',
      initials: 'SD',
    },
  ];

  const howItWorksSteps = [
    {
      number: '01',
      title: 'BOOK',
      subtitle: 'Find trusted local professionals',
      desc: 'Customers browse verified worker-owners with upfront, transparent rates and zero hidden commissions.',
    },
    {
      number: '02',
      title: 'WORK',
      subtitle: 'Certified service delivery',
      desc: 'Cooperative members perform household services with guaranteed quality standards and insurance.',
    },
    {
      number: '03',
      title: 'EARN',
      subtitle: 'Fair pay & surplus shares',
      desc: 'Workers keep their full service earnings while accumulating patronage dividends from platform profits.',
    },
    {
      number: '04',
      title: 'DECIDE',
      subtitle: 'Democratic governance',
      desc: 'Member-owners vote on key cooperative policies, service additions, and surplus distributions.',
    },
  ];

  // GSAP & Lenis Smooth Scroll Setup
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lenis;
    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      lenis.on('scroll', ScrollTrigger.update);

      const updateTicker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);
    }

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 1. Cinematic Hero Word-by-Word Headline & Component Reveal
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .fromTo(
          '.hero-eyebrow',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
        )
        .fromTo(
          '.hero-word',
          { y: '110%', opacity: 0, rotateX: 35 },
          { y: '0%', opacity: 1, rotateX: 0, duration: 1, stagger: 0.06 },
          '-=0.5'
        )
        .fromTo(
          heroSubRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          heroSearchRef.current,
          { y: 25, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          heroTrustRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          heroImageRef.current,
          { scale: 1.15, opacity: 0.8 },
          { scale: 1.03, opacity: 1, duration: 1.4, ease: 'power2.out' },
          '-=1.2'
        );

      // 2. Hero Visual Parallax & Scroll Compress Fade Out
      if (heroImageRef.current && heroSectionRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 16,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.to(heroContentRef.current, {
          opacity: 0.15,
          y: -45,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: 'center top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // 3. Cooperative Difference Side-by-Side Card Morph Reveal
      if (diffSectionRef.current) {
        gsap.fromTo(
          tradCardRef.current,
          { x: -60, opacity: 0, rotateY: 8 },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: diffSectionRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          coopCardRef.current,
          { x: 60, opacity: 0, scale: 0.95 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: diffSectionRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 4. Pinned Horizontal Scroll Story for Section 8 ("How Sohayak Works" Timeline)
      // Enabled on desktop screens (width >= 768px)
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop && timelineSectionRef.current && timelineTrackRef.current) {
        const track = timelineTrackRef.current;
        const container = timelineSectionRef.current;
        const scrollAmount = track.scrollWidth - container.clientWidth + 200;

        gsap.to(track, {
          x: -scrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineSectionRef.current,
            pin: true,
            anticipatePin: 1,
            start: 'center center',
            end: () => `+=${scrollAmount + 500}`,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
      } else if (timelineSectionRef.current) {
        // Mobile vertical stagger animation
        gsap.fromTo(
          '.timeline-step-card',
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: timelineSectionRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // 5. Service Categories Stagger Grid Reveal
      if (categoriesRef.current) {
        gsap.fromTo(
          '.category-card-item',
          { y: 35, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.06,
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // 6. Member Equity (EARN / SHARE / DECIDE) Card Depth Stacking Sequence
      if (equityRef.current) {
        gsap.fromTo(
          '.equity-card-item',
          { y: 60, opacity: 0, scale: 0.92, rotateX: 6 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.18,
            scrollTrigger: {
              trigger: equityRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 7. Cooperative Fund Chart Reveal
      if (fundRef.current) {
        gsap.fromTo(
          fundRef.current,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: fundRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 8. Democratic Governance Voting Preview Reveal
      if (govRef.current) {
        gsap.fromTo(
          govRef.current,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: govRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      ctx.revert();
    };
  }, []);

  return (
    <PageTransition className="w-full overflow-x-hidden">
      <div ref={containerRef}>
        {/* ---------------------------------------------------- */}
        {/* HERO SECTION WITH GSAP WORD REVEAL, PARALLAX & MAGNETIC CTAS */}
        {/* ---------------------------------------------------- */}
        <section
          ref={heroSectionRef}
          className="min-h-[85vh] lg:min-h-[90vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14 flex flex-col justify-between"
        >
          <div ref={heroContentRef} className="space-y-8 max-w-4xl mx-auto text-center">
            {/* Top Eyebrow */}
            <div className="hero-eyebrow inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
                COOPERATIVE MEMBER-OWNED SERVICES
              </span>
            </div>

            {/* Word-by-Word Headline Animation Wrapper */}
            <motion.h1
              style={{ skewY: skewVelocity }}
              className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-normal text-[#191C1D] leading-[1.1] tracking-tight"
            >
              <span className="inline-block overflow-hidden pb-1">
                <span className="hero-word inline-block">Household</span>{' '}
                <span className="hero-word inline-block">services</span>
              </span>{' '}
              <br className="hidden sm:inline" />
              <span className="inline-block overflow-hidden pb-1">
                <span className="hero-word inline-block">that</span>{' '}
                <span className="hero-word inline-block">work</span>{' '}
                <span className="hero-word inline-block">for</span>{' '}
                <span className="hero-word inline-block italic text-[#1B4D3E] underline decoration-[#C87D55]/30 underline-offset-8">
                  everyone
                </span>
                <span className="hero-word inline-block">.</span>
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <p
              ref={heroSubRef}
              className="text-base sm:text-lg text-[#5A6065] leading-relaxed max-w-2xl mx-auto font-sans-ui"
            >
              Book trusted local professionals while supporting a worker-owned cooperative where the people who provide the service also have a stake in what comes next.
            </p>

            {/* Hero Search Bar Component with Magnetic Wrapper */}
            <div ref={heroSearchRef} className="pt-2 max-w-2xl mx-auto">
              <MagneticWrapper strength={0.15} className="w-full">
                <SearchBar placeholder="What service do you need today?" />
              </MagneticWrapper>
            </div>

            {/* Hero Trust Strip */}
            <div
              ref={heroTrustRef}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-[#5A6065]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1B4D3E]" />
                <span>Background Verified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#1B4D3E] stroke-[2.5]" />
                <span>Cooperative Member</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C87D55]" />
                <span>Shared Value</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Direction with GSAP Parallax */}
          <div className="mt-12 relative max-w-5xl mx-auto w-full rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-tactile-lg">
            <div className="h-64 sm:h-96 lg:h-[420px] w-full bg-[#E5E0D8] relative overflow-hidden">
              <img
                ref={heroImageRef}
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                alt="Cooperative technician performing electrical inspection"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191C1D]/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating UI Overlays */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/40 shadow-tactile flex items-center gap-3"
                >
                  <Avatar
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
                    initials="RK"
                    size="sm"
                    isCoopMember={true}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs text-[#191C1D]">Rajesh Kumar</span>
                      <CooperativeBadge size="sm" showLabel={false} />
                    </div>
                    <span className="text-[11px] text-[#5A6065]">Master Electrician • Koramangala Hub</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/40 shadow-tactile flex items-center gap-4 text-xs font-semibold text-[#191C1D]"
                >
                  <span>★ 4.9 Rating</span>
                  <span className="border-l border-[#E5E0D8] pl-3 text-[#5A6065]">386 Jobs Completed</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 6: SCROLL TRANSITION & KINETIC TYPOGRAPHY */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 text-center space-y-4">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
              A FAIRER MODEL FOR GIG SERVICES
            </span>
            <motion.h2
              style={{ skewY: skewVelocity }}
              className="font-serif-heading text-3xl sm:text-5xl font-normal text-[#191C1D] mt-2"
            >
              Not just another gig platform.
            </motion.h2>
            <p className="text-base sm:text-xl text-[#5A6065] leading-relaxed max-w-2xl mx-auto font-sans-ui mt-4">
              Most service platforms connect customers with workers. Sohayak connects customers with workers who also share ownership of the platform.
            </p>
          </ScrollReveal>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 7: THE COOPERATIVE DIFFERENCE (GSAP PARALLAX REVEAL) */}
        {/* ---------------------------------------------------- */}
        <section ref={diffSectionRef} className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            eyebrow="STRUCTURAL DIFFERENCE"
            heading="Why Cooperative Ownership Matters"
            description="A side-by-side contrast between traditional extractive marketplaces and Sohayak's member-owned model."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Traditional Gig Platform */}
            <div ref={tradCardRef}>
              <Card variant="default" className="p-8 space-y-6 bg-[#F4F1EA]/60 border-[#E5E0D8] h-full">
                <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8A9197]">
                    TRADITIONAL GIG PLATFORM
                  </span>
                  <span className="text-xs font-semibold text-[#8A9197]">Extractive Model</span>
                </div>

                <div className="space-y-4 text-sm font-sans-ui text-[#5A6065]">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E0D8]">
                    <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-500">1</span>
                    <span>Worker accepts gig assignment</span>
                  </div>
                  <div className="flex justify-center text-[#8A9197]"><ArrowDown className="w-4 h-4" /></div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E0D8]">
                    <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-500">2</span>
                    <span>Completes job for customer</span>
                  </div>
                  <div className="flex justify-center text-[#8A9197]"><ArrowDown className="w-4 h-4" /></div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5E0D8]">
                    <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-500">3</span>
                    <span>Gets payout minus 25–35% platform commission</span>
                  </div>
                </div>

                <p className="text-xs text-[#8A9197] italic border-t border-[#E5E0D8] pt-4">
                  Zero equity accumulated. Zero decision rights over platform fees or working conditions.
                </p>
              </Card>
            </div>

            {/* Sahayog Cooperative Model */}
            <div ref={coopCardRef}>
              <Card variant="feature" className="p-8 space-y-6 border-[#1B4D3E]/40 shadow-tactile-lg relative h-full">
                <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4D3E]">
                    SOHAYAK COOPERATIVE
                  </span>
                  <CooperativeBadge size="sm" variant="emerald" subtext="Worker Owned" />
                </div>

                <div className="space-y-3 text-sm font-sans-ui text-[#191C1D]">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#C0DCD3] shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center font-bold text-xs">1</span>
                    <span className="font-semibold">Worker completes service</span>
                  </div>
                  <div className="flex justify-center text-[#1B4D3E]"><ArrowDown className="w-4 h-4" /></div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#C0DCD3] shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center font-bold text-xs">2</span>
                    <span className="font-semibold">Receives full direct payout</span>
                  </div>
                  <div className="flex justify-center text-[#1B4D3E]"><ArrowDown className="w-4 h-4" /></div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#C0DCD3] shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center font-bold text-xs">3</span>
                    <span className="font-semibold">Builds cooperative equity & patronage dividends</span>
                  </div>
                  <div className="flex justify-center text-[#1B4D3E]"><ArrowDown className="w-4 h-4" /></div>
                  <div className="flex items-center gap-3 p-3 bg-[#E8F2EE] rounded-xl border border-[#1B4D3E]/30 shadow-xs text-[#1B4D3E]">
                    <span className="w-6 h-6 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center font-bold text-xs">4</span>
                    <span className="font-bold">Participates in democratic governance votes</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 8: "HOW SAHAYOG WORKS" PINNED HORIZONTAL STORY */}
        {/* ---------------------------------------------------- */}
        <section ref={timelineSectionRef} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 overflow-hidden">
          <SectionHeader
            eyebrow="THE CYCLE OF OWNERSHIP"
            heading="One platform. Shared value."
            description="How the cooperative cycle connects customers, workers, and community surplus."
          />

          {/* Timeline Track (Horizontal on Desktop via GSAP Pin, Vertical Grid on Mobile) */}
          <div ref={timelineTrackRef} className="flex flex-col md:flex-row gap-6 md:w-[180%] md:pr-24 shrink-0">
            {howItWorksSteps.map((step, idx) => (
              <div key={step.number} className="timeline-step-card flex-1 min-w-[280px] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif-heading text-4xl font-normal text-[#1B4D3E]">
                    {step.number}
                  </span>
                  {idx < 3 && (
                    <ChevronRight className="hidden md:block w-5 h-5 text-[#8A9197]" />
                  )}
                </div>

                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-white border border-[#E5E0D8] space-y-2 shadow-tactile h-full hover:border-[#1B4D3E]/40 transition-colors"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
                    {step.title}
                  </span>
                  <h4 className="font-serif-heading text-xl font-normal text-[#191C1D]">
                    {step.subtitle}
                  </h4>
                  <p className="text-xs text-[#5A6065] leading-relaxed font-sans-ui">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 9: SERVICE DISCOVERY SECTION */}
        {/* ---------------------------------------------------- */}
        <section ref={categoriesRef} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            eyebrow="MARKETPLACE CATEGORIES"
            heading="Everything your home needs."
            description="Browse certified cooperative service categories. Click any tile to explore available worker-owners."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  onClick={() => navigate(`/customer/services/${cat.id}`)}
                  className="category-card-item p-6 rounded-2xl bg-white border border-[#E5E0D8] hover:border-[#1B4D3E]/50 cursor-pointer space-y-4 shadow-tactile group transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F4F1EA] group-hover:bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center transition-colors group-hover:rotate-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans-ui text-lg font-semibold text-[#191C1D] group-hover:text-[#1B4D3E] transition-colors">
                      {cat.name}
                    </h4>
                    <p className="text-xs text-[#5A6065] leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center text-xs font-semibold text-[#1B4D3E] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore category</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 10: FEATURED COOPERATIVE MEMBERS */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            eyebrow="FEATURED WORKER-OWNERS"
            heading="Meet the people behind the service."
            description="Skilled local professionals, background-verified and part of the cooperative network."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {providerSpotlights.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.2 }}
                onClick={() => navigate(`/customer/provider/${p.id}`)}
                className="cursor-pointer"
              >
                <Card
                  variant="interactive"
                  className="p-5 space-y-4 flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <Avatar src={p.avatar} initials={p.initials} size="lg" isCoopMember={true} />
                    <div>
                      <h4 className="font-semibold text-base text-[#191C1D]">{p.name}</h4>
                      <p className="text-xs text-[#1B4D3E] font-medium">{p.role}</p>
                      <p className="text-xs text-[#8A9197]">{p.location}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E5E0D8] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <Rating rating={p.rating} reviewCount={p.jobsCount} />
                    </div>
                    <CooperativeBadge size="sm" variant="default" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 11: MEMBER OWNERSHIP DEPTH STACKING SECTION */}
        {/* ---------------------------------------------------- */}
        <section ref={equityRef} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            eyebrow="WORKER EQUITY & BENEFITS"
            heading="Your work should build more than a payout."
            description="Every cooperative member contributes to a community where value can be shared beyond individual jobs."
            align="center"
          />

          <div ref={equityTrackRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -6 }} className="equity-card-item">
              <Card variant="default" className="p-8 space-y-4 border-l-4 border-l-[#1B4D3E] h-full shadow-tactile hover:shadow-tactile-lg transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-serif-heading text-2xl font-normal text-[#191C1D]">EARN</h3>
                <p className="text-xs text-[#8A9197] uppercase tracking-wider font-semibold">Direct Service Income</p>
                <p className="text-sm text-[#5A6065] leading-relaxed">
                  Transparent, guaranteed rates for completed services with zero middleman deductions or arbitrary algorithmic penalties.
                </p>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="equity-card-item">
              <Card variant="default" className="p-8 space-y-4 border-l-4 border-l-[#C87D55] h-full shadow-tactile hover:shadow-tactile-lg transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#F9F0EA] text-[#C87D55] flex items-center justify-center font-bold">
                  <Coins className="w-5 h-5" />
                </div>
                <h3 className="font-serif-heading text-2xl font-normal text-[#191C1D]">SHARE</h3>
                <p className="text-xs text-[#8A9197] uppercase tracking-wider font-semibold">Cooperative Surplus</p>
                <p className="text-sm text-[#5A6065] leading-relaxed">
                  Quarterly patronage dividends and healthcare fund distributions based on your overall service contributions.
                </p>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="equity-card-item">
              <Card variant="default" className="p-8 space-y-4 border-l-4 border-l-[#1B4D3E] h-full shadow-tactile hover:shadow-tactile-lg transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center font-bold">
                  <Vote className="w-5 h-5" />
                </div>
                <h3 className="font-serif-heading text-2xl font-normal text-[#191C1D]">DECIDE</h3>
                <p className="text-xs text-[#8A9197] uppercase tracking-wider font-semibold">Democratic Voice</p>
                <p className="text-sm text-[#5A6065] leading-relaxed">
                  One member, one vote. Equal governance rights on pricing policies, new service additions, and board elections.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 12: COOPERATIVE FUND VISUAL */}
        {/* ---------------------------------------------------- */}
        <section ref={fundRef} className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CooperativeFundChart />
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 13: DEMOCRATIC GOVERNANCE SECTION */}
        {/* ---------------------------------------------------- */}
        <section ref={govRef} className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GovernanceVotingPreview />
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 14: ONE BIG "WOW" MOMENT (THE COOPERATIVE CONVERGENCE) */}
        {/* ---------------------------------------------------- */}
        <CinematicWowSection />

        {/* ---------------------------------------------------- */}
        {/* SECTION 15: FINAL CTA WITH MAGNETIC CTAS */}
        {/* ---------------------------------------------------- */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1B4D3E] text-white rounded-3xl p-8 sm:p-14 shadow-tactile-lg flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8F2EE]">
                SOHAYAK COOPERATIVE PLATFORM
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal text-white leading-tight">
                Better services. <br className="hidden sm:inline" />
                A fairer way to build them.
              </h2>
              <p className="text-sm sm:text-base text-[#E8F2EE]/90 leading-relaxed font-sans-ui pt-1">
                Discover local professionals or explore what it means to be part of a worker-owned service cooperative.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <MagneticWrapper strength={0.25} className="w-full sm:w-auto">
                <Button
                  variant="earth"
                  size="large"
                  onClick={() => navigate('/customer')}
                  className="w-full sm:w-auto shadow-md"
                >
                  Book a Service
                </Button>
              </MagneticWrapper>
              <MagneticWrapper strength={0.25} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="large"
                  onClick={() => navigate('/worker')}
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                >
                  Explore Cooperative
                </Button>
              </MagneticWrapper>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 16: FOOTER */}
        {/* ---------------------------------------------------- */}
        <Footer />
      </div>
    </PageTransition>
  );
};

export default LandingShell;
