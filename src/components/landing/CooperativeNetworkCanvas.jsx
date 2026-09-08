import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, ShieldCheck, Coins, HeartHandshake } from 'lucide-react';

export const CooperativeNetworkCanvas = () => {
  const nodes = [
    {
      id: 'customer',
      label: 'CUSTOMER',
      role: 'Direct Booking & Dividend Recipient',
      icon: Users,
      color: '#1B4D3E',
      bgColor: '#E8F2EE',
      borderColor: '#C0DCD3',
      x: 15,
      y: 30,
    },
    {
      id: 'worker',
      label: 'WORKER-OWNER',
      role: 'Service Delivery & Equity Holder',
      icon: Wrench,
      color: '#C87D55',
      bgColor: '#F9F0EA',
      borderColor: '#F0D4C5',
      x: 85,
      y: 30,
    },
    {
      id: 'coop',
      label: 'COOPERATIVE PLATFORM',
      role: 'Governance & Democratic Surplus',
      icon: ShieldCheck,
      color: '#1B4D3E',
      bgColor: '#E8F2EE',
      borderColor: '#1B4D3E',
      x: 50,
      y: 65,
    },
    {
      id: 'fund',
      label: 'COMMUNITY FUND',
      role: 'Healthcare & Patronage Dividends',
      icon: Coins,
      color: '#2F6B58',
      bgColor: '#F4F1EA',
      borderColor: '#E5E0D8',
      x: 50,
      y: 10,
    },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-white border border-[#E5E0D8] shadow-tactile-lg overflow-hidden">
      {/* SVG Animated Beams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#1B4D3E]/25" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Customer to Coop */}
        <motion.path
          d="M 25 35 L 50 65"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        {/* Worker to Coop */}
        <motion.path
          d="M 75 35 L 50 65"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        />
        {/* Coop to Community Fund */}
        <motion.path
          d="M 50 65 L 50 20"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeInOut' }}
        />
        {/* Customer to Worker Direct Connection */}
        <motion.path
          d="M 25 35 L 75 35"
          strokeWidth="0.6"
          strokeDasharray="1 1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </svg>

      {/* Center Pulse Emblem */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="w-24 h-24 rounded-full bg-[#E8F2EE] border border-[#1B4D3E]/20"
        />
      </div>

      {/* Nodes Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Customer Node */}
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-white border border-[#E5E0D8] space-y-3 shadow-tactile text-center group hover:border-[#1B4D3E]/40"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B4D3E]">
            PATRON MEMBER
          </span>
          <h4 className="font-serif-heading text-xl font-normal text-[#191C1D]">Customer</h4>
          <p className="text-xs text-[#5A6065] leading-relaxed font-sans-ui">
            Books verified local services with upfront rates and earns patronage dividend rewards.
          </p>
        </motion.div>

        {/* Cooperative Platform Center Node */}
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-2xl bg-[#1B4D3E] text-white border border-[#1B4D3E] space-y-3 shadow-tactile-lg text-center relative group"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto group-hover:rotate-6 transition-transform">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8F2EE]">
            SHARED COOP HUB
          </span>
          <h4 className="font-serif-heading text-xl font-normal text-white">Sohayak Cooperative</h4>
          <p className="text-xs text-[#E8F2EE]/90 leading-relaxed font-sans-ui">
            Coordinates fair payouts, emergency healthcare funds, and 1-member-1-vote democratic decisions.
          </p>
        </motion.div>

        {/* Worker Node */}
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 rounded-2xl bg-white border border-[#E5E0D8] space-y-3 shadow-tactile text-center group hover:border-[#C87D55]/50"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#F9F0EA] text-[#C87D55] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
            <Wrench className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C87D55]">
            MEMBER-OWNER
          </span>
          <h4 className="font-serif-heading text-xl font-normal text-[#191C1D]">Worker Member</h4>
          <p className="text-xs text-[#5A6065] leading-relaxed font-sans-ui">
            Keeps full direct payouts, accumulates equity dividends, and shapes platform policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CooperativeNetworkCanvas;
