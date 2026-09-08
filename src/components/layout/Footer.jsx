import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import Logo from '../ui/Logo';
import CooperativeBadge from '../ui/CooperativeBadge';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E5E0D8] pt-12 pb-16 text-[#191C1D] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="inline-block">
              <Logo size="md" showTagline={true} />
            </Link>
            <p className="text-xs text-[#5A6065] leading-relaxed font-sans-ui">
              Sohayak is a cooperative household services platform where workers are member-owners and share in platform governance.
            </p>
            <CooperativeBadge size="sm" variant="default" subtext="Democratic Network" />
          </div>

          {/* Customer Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A9197]">Marketplace</h4>
            <ul className="space-y-2 text-xs font-medium text-[#5A6065]">
              <li><Link to="/customer" className="hover:text-[#1B4D3E] transition-colors">Book Services</Link></li>
              <li><Link to="/customer/services/home-care" className="hover:text-[#1B4D3E] transition-colors">Home Care & Cleaning</Link></li>
              <li><Link to="/customer/services/repairs" className="hover:text-[#1B4D3E] transition-colors">Electric & Plumbing</Link></li>
              <li><Link to="/customer/services/elderly-care" className="hover:text-[#1B4D3E] transition-colors">Elderly & Nursing Care</Link></li>
            </ul>
          </div>

          {/* Worker Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A9197]">Worker Members</h4>
            <ul className="space-y-2 text-xs font-medium text-[#5A6065]">
              <li><Link to="/worker" className="hover:text-[#1B4D3E] transition-colors">Worker Dashboard</Link></li>
              <li><Link to="/worker/membership" className="hover:text-[#1B4D3E] transition-colors">Co-op Equity Shares</Link></li>
              <li><Link to="/worker/earnings" className="hover:text-[#1B4D3E] transition-colors">Surplus Dividends</Link></li>
              <li><Link to="/worker/jobs/job-901" className="hover:text-[#1B4D3E] transition-colors">Dispatch Console</Link></li>
            </ul>
          </div>

          {/* Governance Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A9197]">Governance</h4>
            <ul className="space-y-2 text-xs font-medium text-[#5A6065]">
              <li><Link to="/admin" className="hover:text-[#1B4D3E] transition-colors">Coop Admin Console</Link></li>
              <li><Link to="/admin/governance" className="hover:text-[#1B4D3E] transition-colors">Voting & Proposals</Link></li>
              <li><Link to="/admin/members" className="hover:text-[#1B4D3E] transition-colors">Member Registry</Link></li>
              <li><Link to="/admin/analytics" className="hover:text-[#1B4D3E] transition-colors">Surplus Analytics</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Statement */}
        <div className="pt-8 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9197]">
          <div className="flex flex-wrap items-center gap-2">
            <span>Built around people who provide the service.</span>
            <span className="hidden sm:inline text-[#D5D0C8]">•</span>
            <span className="text-[#5A6065]">
              Designed & Developed by <span className="font-semibold text-[#1B4D3E]">Soha Hansa</span>
            </span>
          </div>
          <div className="flex items-center gap-1 text-[#1B4D3E] font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Sohayak Cooperative Foundation • Demo Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
