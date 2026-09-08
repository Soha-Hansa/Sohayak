import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams, Link, useParams } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import CustomerNav from '../components/customer/CustomerNav';
import ListingProviderCard from '../components/customer/ListingProviderCard';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProviderDetailModal from '../components/customer/ProviderDetailModal';

import { providers } from '../data/providers';
import {
  ArrowLeft,
  MapPin,
  Search,
  Filter,
  ArrowUpDown,
  RotateCcw,
  ShieldCheck,
  Star,
  Check,
  ChevronDown,
  X,
  Sparkles
} from 'lucide-react';

export const CustomerProviderListingPage = () => {
  const navigate = useNavigate();
  const { id: routeProviderId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Search and Category params
  const categoryQuery = searchParams.get('category') || 'electrical';
  const categoryTitle = categoryQuery.toLowerCase() === 'electrical' || categoryQuery.toLowerCase() === 'electrician'
    ? 'Electricians near you'
    : `${categoryQuery.charAt(0).toUpperCase() + categoryQuery.slice(1)} Specialists near you`;

  // State Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [distanceFilter, setDistanceFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  // Mobile Filter Drawer Toggle
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Modal preview state for /customer/providers/:id if clicked
  const activeRouteProvider = useMemo(() => {
    if (!routeProviderId) return null;
    return providers.find((p) => p.id === routeProviderId) || providers[0];
  }, [routeProviderId]);

  // Filter & Sort Provider List
  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const nameMatch = provider.name.toLowerCase().includes(q);
        const skillMatch = provider.mainSkill?.toLowerCase().includes(q) || provider.skills?.some(s => s.toLowerCase().includes(q));
        const localityMatch = provider.locality?.toLowerCase().includes(q);
        if (!nameMatch && !skillMatch && !localityMatch) return false;
      }

      // Rating Filter
      if (ratingFilter === '4.5' && provider.rating < 4.5) return false;
      if (ratingFilter === '4.8' && provider.rating < 4.8) return false;

      // Distance Filter
      if (distanceFilter === '3' && (provider.distanceValue || 3) > 3.0) return false;
      if (distanceFilter === '5' && (provider.distanceValue || 5) > 5.0) return false;

      // Price Filter
      if (priceFilter === '350' && (provider.startingPrice || provider.hourlyRate) > 350) return false;
      if (priceFilter === '500' && (provider.startingPrice || provider.hourlyRate) > 500) return false;

      // Availability Filter
      if (availabilityFilter === 'today' && !provider.isAvailableToday) return false;

      // Verified Only
      if (verifiedOnly && !provider.isVerified) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'nearest') return (a.distanceValue || 0) - (b.distanceValue || 0);
      if (sortBy === 'price-low') return (a.startingPrice || a.hourlyRate) - (b.startingPrice || b.hourlyRate);
      return 0; // recommended
    });
  }, [searchQuery, ratingFilter, distanceFilter, priceFilter, availabilityFilter, verifiedOnly, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setRatingFilter('all');
    setDistanceFilter('all');
    setPriceFilter('all');
    setAvailabilityFilter('all');
    setVerifiedOnly(false);
    setSortBy('recommended');
  };

  const activeFiltersCount =
    (ratingFilter !== 'all' ? 1 : 0) +
    (distanceFilter !== 'all' ? 1 : 0) +
    (priceFilter !== 'all' ? 1 : 0) +
    (availabilityFilter !== 'all' ? 1 : 0) +
    (verifiedOnly ? 1 : 0);

  return (
    <PageTransition className="w-full">
      {/* Customer Navigation Bar */}
      <CustomerNav />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* ---------------------------------------------------- */}
        {/* HEADER SECTION: BACK NAV + TITLE + LOCATION + SEARCH */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal className="space-y-6">
          {/* Back Link */}
          <div>
            <button
              onClick={() => navigate('/customer')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1B4D3E] hover:text-[#C87D55] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Marketplace</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#5A6065]">
                <MapPin className="w-4 h-4 text-[#C87D55]" />
                <span>Location: <strong className="text-[#191C1D]">Howrah, West Bengal</strong></span>
              </div>

              <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#191C1D]">
                {categoryTitle}
              </h1>

              <p className="text-xs sm:text-sm text-[#5A6065] font-sans-ui max-w-xl">
                Verified cooperative members available for local household service with transparent co-op rates.
              </p>
            </div>

            {/* Header Search Input */}
            <div className="w-full md:w-80 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-[#8A9197] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search provider by name or skill..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white text-[#191C1D] text-xs font-semibold rounded-xl border border-[#E5E0D8] focus:outline-none focus:border-[#1B4D3E] shadow-sm placeholder:text-[#8A9197]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9197] hover:text-[#191C1D]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* FILTERS & SORTING BAR */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal>
          <div className="bg-white border border-[#E5E0D8] rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
            {/* Desktop Filters Row */}
            <div className="hidden lg:flex items-center justify-between gap-4 text-xs">
              {/* Left Filters Group */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-[#1B4D3E] font-bold pr-2 border-r border-[#E5E0D8]">
                  <Filter className="w-4 h-4 text-[#C87D55]" />
                  <span>Filters:</span>
                </div>

                {/* Rating Filter */}
                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  className="px-3 py-2 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                >
                  <option value="all">Rating: All Stars</option>
                  <option value="4.5">⭐ 4.5 & Above</option>
                  <option value="4.8">⭐ 4.8 & Above</option>
                </select>

                {/* Distance Filter */}
                <select
                  value={distanceFilter}
                  onChange={(e) => setDistanceFilter(e.target.value)}
                  className="px-3 py-2 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                >
                  <option value="all">Distance: All</option>
                  <option value="3">Within 3 km</option>
                  <option value="5">Within 5 km</option>
                </select>

                {/* Price Filter */}
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="px-3 py-2 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                >
                  <option value="all">Price: All Rates</option>
                  <option value="350">Under ₹350</option>
                  <option value="500">Under ₹500</option>
                </select>

                {/* Availability Filter */}
                <select
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value)}
                  className="px-3 py-2 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                >
                  <option value="all">Availability: Any</option>
                  <option value="today">Available Today</option>
                </select>

                {/* Verified Only Toggle */}
                <label className="flex items-center gap-2 px-3 py-2 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] cursor-pointer hover:border-[#1B4D3E] transition-colors">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="w-3.5 h-3.5 rounded text-[#1B4D3E] focus:ring-0 cursor-pointer"
                  />
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1B4D3E]" />
                    <span>Verified only</span>
                  </span>
                </label>
              </div>

              {/* Right Sort Controls */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[#8A9197] font-semibold text-[11px]">
                  {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''}
                </span>

                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#5A6065]" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                  >
                    <option value="recommended">Sort: Recommended</option>
                    <option value="rating">Highest Rated</option>
                    <option value="nearest">Nearest</option>
                    <option value="price-low">Lowest Price</option>
                  </select>
                </div>

                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetFilters}
                    title="Reset Filters"
                    className="p-2 rounded-xl text-[#C87D55] hover:bg-[#F9F0EA] transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile / Tablet Compact Filter Toggle Bar */}
            <div className="flex lg:hidden items-center justify-between gap-3 text-xs">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-bold text-[#1B4D3E]"
              >
                <Filter className="w-4 h-4 text-[#C87D55]" />
                <span>Filters {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#8A9197] font-semibold">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2.5 py-1.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D]"
                >
                  <option value="recommended">Recommended</option>
                  <option value="rating">Highest Rated</option>
                  <option value="nearest">Nearest</option>
                  <option value="price-low">Lowest Price</option>
                </select>
              </div>
            </div>

            {/* Mobile Collapsible Filters Area */}
            {mobileFiltersOpen && (
              <div className="lg:hidden pt-3 border-t border-[#E5E0D8] grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-[#8A9197] uppercase mb-1">Rating</label>
                  <select
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                    className="w-full px-2 py-1.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg font-semibold"
                  >
                    <option value="all">All Stars</option>
                    <option value="4.5">⭐ 4.5+</option>
                    <option value="4.8">⭐ 4.8+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#8A9197] uppercase mb-1">Distance</label>
                  <select
                    value={distanceFilter}
                    onChange={(e) => setDistanceFilter(e.target.value)}
                    className="w-full px-2 py-1.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg font-semibold"
                  >
                    <option value="all">All Distance</option>
                    <option value="3">Within 3 km</option>
                    <option value="5">Within 5 km</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#8A9197] uppercase mb-1">Price</label>
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="w-full px-2 py-1.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-lg font-semibold"
                  >
                    <option value="all">All Prices</option>
                    <option value="350">Under ₹350</option>
                    <option value="500">Under ₹500</option>
                  </select>
                </div>

                <div className="col-span-2 flex items-center justify-between pt-2">
                  <label className="flex items-center gap-2 font-semibold text-[#191C1D]">
                    <input
                      type="checkbox"
                      checked={verifiedOnly}
                      onChange={(e) => setVerifiedOnly(e.target.checked)}
                      className="w-3.5 h-3.5 rounded text-[#1B4D3E]"
                    />
                    <span>Verified only</span>
                  </label>

                  <button
                    onClick={resetFilters}
                    className="text-xs text-[#C87D55] font-bold underline underline-offset-2"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* ---------------------------------------------------- */}
        {/* PROVIDER CARDS GRID (6-8 Mock Providers) */}
        {/* ---------------------------------------------------- */}
        <ScrollReveal className="space-y-6">
          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <ListingProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          ) : (
            <Card variant="default" className="p-12 text-center space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#F9F0EA] text-[#C87D55] mx-auto flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-[#191C1D]">No providers found</h4>
              <p className="text-xs text-[#5A6065] leading-relaxed">
                No local service providers matched your exact filter combination.
              </p>
              <Button variant="secondary" size="small" onClick={resetFilters} icon={RotateCcw}>
                Reset All Filters
              </Button>
            </Card>
          )}
        </ScrollReveal>
      </main>

      {/* Provider Detail Preview Modal if route /customer/providers/:id is active */}
      <ProviderDetailModal
        provider={activeRouteProvider}
        isOpen={Boolean(activeRouteProvider)}
        onClose={() => navigate('/customer/providers')}
      />

      {/* Footer */}
      <Footer />
    </PageTransition>
  );
};

export default CustomerProviderListingPage;
