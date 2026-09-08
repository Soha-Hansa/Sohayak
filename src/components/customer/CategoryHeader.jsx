import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  Droplet,
  Sparkles,
  Hammer,
  Paintbrush,
  Wind,
  Package,
  BookOpen,
  Grid
} from 'lucide-react';
import CooperativeBadge from '../ui/CooperativeBadge';

const categoryIconMap = {
  Wrench,
  Droplet,
  Sparkles,
  Hammer,
  Paintbrush,
  Wind,
  Package,
  BookOpen,
  Grid,
};

export const CategoryHeader = ({ category, searchQuery, setSearchQuery }) => {
  const IconComponent = categoryIconMap[category.icon] || Sparkles;

  return (
    <div className="bg-[#1B4D3E] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden space-y-6 shadow-xl">
      {/* Background Decorative Pattern */}
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute right-1/4 -top-12 w-48 h-48 rounded-full bg-[#C87D55]/10 blur-xl pointer-events-none" />

      {/* Breadcrumb Trail */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-[#E5E0D8]/70 relative z-10">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/customer" className="hover:text-white transition-colors">Marketplace</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#C87D55] font-bold capitalize">{category.name}</span>
      </nav>

      {/* Main Title & Co-op Badge Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <div className="p-2 rounded-xl bg-white/10 text-white backdrop-blur-md">
              <IconComponent className="w-6 h-6 text-[#C87D55]" />
            </div>
            <CooperativeBadge size="sm" variant="patron" />
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            {category.name} <span className="italic text-[#E5E0D8]">Services</span>
          </h1>

          <p className="text-sm sm:text-base text-[#E5E0D8]/90 font-sans-ui leading-relaxed">
            {category.description || 'Verified worker-owners providing transparent home services with guaranteed quality.'}
          </p>
        </div>

        {/* Quick Co-op Guarantee Badge Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 space-y-2 shrink-0 max-w-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E5E0D8]">
            <ShieldCheck className="w-4 h-4 text-[#C87D55]" />
            <span>Co-op Payout Guarantee</span>
          </div>
          <p className="text-[11px] text-[#E5E0D8]/80 leading-normal">
            85% of your service fee goes directly to the worker-owner, and 10% enters the patronage dividend fund.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans-ui relative z-10">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#C87D55]" />
          <div>
            <span className="block font-bold text-white text-sm">{category.memberCount || 120}+</span>
            <span className="text-white/70 text-[11px]">Active Members</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-[#C87D55] fill-[#C87D55]" />
          <div>
            <span className="block font-bold text-white text-sm">4.9 ★</span>
            <span className="text-white/70 text-[11px]">Average Rating</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#C87D55]" />
          <div>
            <span className="block font-bold text-white text-sm">Nearby</span>
            <span className="text-white/70 text-[11px]">Howrah & Kolkata</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C87D55]" />
          <div>
            <span className="block font-bold text-white text-sm">From ₹{category.startingPrice || 299}</span>
            <span className="text-white/70 text-[11px]">Transparent Rate</span>
          </div>
        </div>
      </div>

      {/* Live Search Pill inside Header */}
      <div className="pt-2 relative z-10 max-w-xl">
        <div className="relative">
          <Search className="w-4 h-4 text-[#8A9197] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${category.name.toLowerCase()} specialists by skill or locality...`}
            className="w-full pl-10 pr-4 py-2.5 bg-white text-[#191C1D] text-xs font-semibold rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-[#C87D55] shadow-md placeholder:text-[#8A9197]"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
