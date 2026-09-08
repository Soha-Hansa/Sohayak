import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Wrench, ShieldCheck, Coins, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const CinematicWowSection = () => {
  const sectionRef = useRef(null);
  const ringRef = useRef(null);

  // Outer node references
  const nodeCommRef = useRef(null); // Governance (Top)
  const nodeWorkRef = useRef(null); // Workers (Left)
  const nodeFundRef = useRef(null); // Patronage Fund (Right)
  const nodeCustRef = useRef(null); // Customers (Bottom)

  // Central Hub reference
  const hubRef = useRef(null);

  // SVG Line references
  const lineTopRef = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);
  const lineBottomRef = useRef(null);

  // Statement reveal references
  const statementTagRef = useRef(null);
  const statementLine1Ref = useRef(null);
  const statementLine2Ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const navbarEl = document.getElementById('main-navbar');

      // 0. Setup SVG connection line stroke dash properties
      const svgLines = [lineTopRef.current, lineLeftRef.current, lineRightRef.current, lineBottomRef.current];
      svgLines.forEach((line) => {
        if (line) {
          const length = line.getTotalLength();
          gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        }
      });

      if (prefersReducedMotion) {
        // Fallback for reduced motion: show everything statically
        gsap.set([nodeCommRef.current, nodeWorkRef.current, nodeFundRef.current, nodeCustRef.current, hubRef.current], {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        });
        gsap.set(svgLines, { strokeDashoffset: 0 });
        gsap.set([statementTagRef.current, statementLine1Ref.current, statementLine2Ref.current], {
          opacity: 1,
          y: 0,
        });
        gsap.set(ringRef.current, { opacity: 0.35, scale: 1 });
        return;
      }

      // 1. Set explicit initial states before animation starts (elements are subtly visible immediately on entry)
      gsap.set(ringRef.current, { scale: 0.6, opacity: 0.25 });
      gsap.set(nodeCommRef.current, { xPercent: -50, y: -60, opacity: 0.5, scale: 0.9 });
      gsap.set(nodeWorkRef.current, { yPercent: -50, x: -60, opacity: 0.5, scale: 0.9 });
      gsap.set(nodeFundRef.current, { yPercent: -50, x: 60, opacity: 0.5, scale: 0.9 });
      gsap.set(nodeCustRef.current, { xPercent: -50, y: 60, opacity: 0.5, scale: 0.9 });

      gsap.set(hubRef.current, { xPercent: -50, yPercent: -50, scale: 0.85, opacity: 0.4, y: 20 });

      gsap.set(statementTagRef.current, { opacity: 0, y: 15 });
      gsap.set(statementLine1Ref.current, { opacity: 0, y: 20 });
      gsap.set(statementLine2Ref.current, { opacity: 0, y: 20 });

      // Helper function to show/hide navbar smoothly
      const toggleNavbar = (show) => {
        const nav = document.getElementById('main-navbar');
        if (nav) {
          if (show) {
            gsap.to(nav, { yPercent: 0, opacity: 1, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
          } else {
            gsap.to(nav, { yPercent: -100, opacity: 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
          }
        }
      };

      // 2. Build Single Master GSAP Timeline controlled by ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          anticipatePin: 1,
          start: 'top top',
          end: '+=2200',
          scrub: 1,
          invalidateOnRefresh: true,
          onToggle: (self) => {
            toggleNavbar(!self.isActive);
          },
          onLeave: () => toggleNavbar(true),
          onLeaveBack: () => toggleNavbar(true),
        },
      });

      // --- PHASE 1 & 2: Instant Ring & Outer Nodes Movement into Positions ---
      tl.to(ringRef.current, { scale: 1, opacity: 0.35, duration: 1.0, ease: 'power2.out' }, 0)
        .to(nodeCommRef.current, { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: 'power2.out' }, 0)
        .to(nodeWorkRef.current, { x: 0, opacity: 1, scale: 1, duration: 1.0, ease: 'power2.out' }, 0)
        .to(nodeFundRef.current, { x: 0, opacity: 1, scale: 1, duration: 1.0, ease: 'power2.out' }, 0)
        .to(nodeCustRef.current, { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: 'power2.out' }, 0);

      // --- PHASE 3: Connection Lines Draw From Nodes to Center ---
      tl.to(
        svgLines,
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: 'power1.inOut',
          stagger: 0.1,
        },
        '+=0.1'
      );

      // --- PHASE 4: Central Cooperative Hub Emerges & Settles ---
      tl.to(
        hubRef.current,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'back.out(1.4)',
        },
        '-=0.6'
      );

      // --- PHASE 5: Network Breathing / Alive Micro-Movement ---
      tl.to(ringRef.current, { scale: 1.06, opacity: 0.5, duration: 0.6, ease: 'sine.inOut' }, '+=0.1')
        .to(hubRef.current, { scale: 1.02, duration: 0.6, ease: 'sine.inOut' }, '<')
        .to(ringRef.current, { scale: 1, opacity: 0.35, duration: 0.6, ease: 'sine.inOut' })
        .to(hubRef.current, { scale: 1, duration: 0.6, ease: 'sine.inOut' }, '<');

      // --- PHASE 6: Main Statement Sequential Reveal ---
      tl.to(statementTagRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '+=0.2')
        .to(statementLine1Ref.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, '+=0.2')
        .to(statementLine2Ref.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, '+=0.2');

    }, sectionRef);

    return () => {
      // Ensure navbar is always restored on component unmount
      const nav = document.getElementById('main-navbar');
      if (nav) {
        gsap.to(nav, { yPercent: 0, opacity: 1, duration: 0.2, overwrite: 'auto' });
      }
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col items-center justify-center bg-[#0F2C24] overflow-hidden text-white select-none py-6 px-4"
    >
      {/* Seamless Top Transition Gradient from light section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FBF9F5]/90 via-[#0F2C24]/60 to-transparent z-20 pointer-events-none" />
      {/* Background Energy Particle Ring */}
      <div
        ref={ringRef}
        className="absolute w-[460px] h-[460px] sm:w-[620px] sm:h-[620px] rounded-full border-2 border-[#C0DCD3]/30 pointer-events-none opacity-0 z-0"
      />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-10 h-full max-h-[850px]">

        {/* Outer Network & Central Hub Interactive Stage */}
        <div className="relative w-full max-w-3xl h-[340px] sm:h-[420px] flex items-center justify-center shrink-0">

          {/* SVG Connection Lines Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGradTop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C0DCD3" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E8F2EE" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="lineGradBottom" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#C0DCD3" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E8F2EE" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F0D4C5" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E8F2EE" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="lineGradRight" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#C0DCD3" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E8F2EE" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Top Line (Governance -> Hub) */}
            <path ref={lineTopRef} d="M 400 95 L 400 175" stroke="url(#lineGradTop)" strokeWidth="3" strokeLinecap="round" />
            {/* Left Line (Workers -> Hub) */}
            <path ref={lineLeftRef} d="M 210 250 L 305 250" stroke="url(#lineGradLeft)" strokeWidth="3" strokeLinecap="round" />
            {/* Right Line (Patronage Fund -> Hub) */}
            <path ref={lineRightRef} d="M 590 250 L 495 250" stroke="url(#lineGradRight)" strokeWidth="3" strokeLinecap="round" />
            {/* Bottom Line (Customers -> Hub) */}
            <path ref={lineBottomRef} d="M 400 405 L 400 325" stroke="url(#lineGradBottom)" strokeWidth="3" strokeLinecap="round" />
          </svg>

          {/* 1. Governance Node (TOP) */}
          <div
            ref={nodeCommRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-10 p-3 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-center w-[150px] sm:w-[210px] shadow-lg"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center mx-auto mb-1 font-bold">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#C0DCD3] uppercase block">
              VOICE
            </span>
            <h4 className="font-serif-heading text-xs sm:text-lg text-white font-normal">
              Governance
            </h4>
          </div>

          {/* 2. Workers Node (LEFT) */}
          <div
            ref={nodeWorkRef}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-center w-[130px] sm:w-[200px] shadow-lg"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F9F0EA] text-[#C87D55] flex items-center justify-center mx-auto mb-1 font-bold">
              <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#F0D4C5] uppercase block">
              OWNERS
            </span>
            <h4 className="font-serif-heading text-xs sm:text-lg text-white font-normal">
              Workers
            </h4>
          </div>

          {/* 3. Patronage Fund Node (RIGHT) */}
          <div
            ref={nodeFundRef}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-center w-[130px] sm:w-[200px] shadow-lg"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F4F1EA] text-[#1B4D3E] flex items-center justify-center mx-auto mb-1 font-bold">
              <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#C0DCD3] uppercase block">
              SURPLUS
            </span>
            <h4 className="font-serif-heading text-xs sm:text-lg text-white font-normal">
              Patronage Fund
            </h4>
          </div>

          {/* 4. Customers Node (BOTTOM) */}
          <div
            ref={nodeCustRef}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 p-3 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-center w-[150px] sm:w-[210px] shadow-lg"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center mx-auto mb-1 font-bold">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#C0DCD3] uppercase block">
              PATRONS
            </span>
            <h4 className="font-serif-heading text-xs sm:text-lg text-white font-normal">
              Customers
            </h4>
          </div>

          {/* Central Converged Cooperative Hub */}
          <div
            ref={hubRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-5 sm:p-8 rounded-3xl bg-[#1B4D3E] text-white border-2 border-[#C0DCD3] shadow-2xl text-center max-w-[260px] sm:max-w-md w-full overflow-hidden"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-white/15 text-white flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-white/30">
              <HeartHandshake className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-[#E8F2EE] block">
              SHARED COOPERATIVE SYSTEM
            </span>
            <h3 className="font-serif-heading text-xl sm:text-3xl font-normal text-white mt-0.5 sm:mt-1">
              Sohayak Network
            </h3>
            <p className="text-[11px] sm:text-xs text-[#E8F2EE]/90 leading-relaxed mt-1 sm:mt-2 hidden sm:block">
              Where service delivery, equity creation, patronage dividends, and democratic voice unite.
            </p>
          </div>
        </div>

        {/* Large Statement Reveal */}
        <div className="text-center space-y-2 sm:space-y-3 max-w-3xl mx-auto shrink-0 z-10">
          <span
            ref={statementTagRef}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C0DCD3] block"
          >
            THE COOPERATIVE PRINCIPLE
          </span>
          <div className="space-y-1">
            <span
              ref={statementLine1Ref}
              className="block font-serif-heading text-2xl sm:text-5xl font-normal text-white leading-tight"
            >
              Many independent people.
            </span>
            <span
              ref={statementLine2Ref}
              className="block font-serif-heading text-2xl sm:text-5xl font-normal text-white leading-tight"
            >
              One cooperative system.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicWowSection;
