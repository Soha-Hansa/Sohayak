import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import CustomerNav from '../components/customer/CustomerNav';
import CategoryHeader from '../components/customer/CategoryHeader';
import FilterBar from '../components/customer/FilterBar';
import ProviderCard from '../components/customer/ProviderCard';
import ProviderDetailModal from '../components/customer/ProviderDetailModal';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

import { serviceCategories } from '../data/services';
import { providers } from '../data/providers';
import {
  Sparkles,
  Users,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export const CategoryServicePage = () => {
  const { category: categoryParam } = useParams();
  const navigate = useNavigate();

  // Find active category or fallback to cleaning
  const currentCategory = useMemo(() => {
    const slug = (categoryParam || 'cleaning').toLowerCase();
    return (
      serviceCategories.find(
        (c) => c.id === slug || c.name.toLowerCase() === slug
      ) || serviceCategories[2] // fallback cleaning
    );
  }, [categoryParam]);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');
  const [selectedSubService, setSelectedSubService] = useState(null);

  // Selected Provider for Modal
  const [selectedProvider, setSelectedProvider] = useState(null);

  // Filter & Sort Logic
  const filteredProviders = useMemo(() => {
    return providers.filter((p) => {
      // Category Match check
      const catMatch =
        p.categoryId === currentCategory.id ||
        p.category?.toLowerCase().includes(currentCategory.name.toLowerCase()) ||
        currentCategory.name.toLowerCase().includes(p.category?.toLowerCase());

      if (!catMatch) return false;

      // Search Query Match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const nameMatch = p.name.toLowerCase().includes(query);
        const skillMatch = p.skills?.some((s) => s.toLowerCase().includes(query));
        const localityMatch = p.locality?.toLowerCase().includes(query);
        if (!nameMatch && !skillMatch && !localityMatch) return false;
      }

      // Rating Filter
      if (ratingFilter === '4.5' && p.rating < 4.5) return false;
      if (ratingFilter === '4.8' && p.rating < 4.8) return false;

      // Experience Filter
      if (experienceFilter === '2' && (p.membershipYears || 0) < 2) return false;
      if (experienceFilter === '3' && (p.membershipYears || 0) < 3) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.hourlyRate - b.hourlyRate;
      if (sortBy === 'price-high') return b.hourlyRate - a.hourlyRate;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'jobs') return b.totalJobs - a.totalJobs;
      return 0; // recommended
    });
  }, [currentCategory, searchQuery, ratingFilter, experienceFilter, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setRatingFilter('all');
    setExperienceFilter('all');
    setSortBy('recommended');
    setSelectedSubService(null);
  };

  return (
    <PageTransition className="w-full">
      {/* Customer Header */}
      <CustomerNav />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Category Header */}
        <ScrollReveal>
          <CategoryHeader
            category={currentCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </ScrollReveal>

        {/* Filter Bar */}
        <ScrollReveal>
          <FilterBar
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            experienceFilter={experienceFilter}
            setExperienceFilter={setExperienceFilter}
            selectedSubService={selectedSubService}
            setSelectedSubService={setSelectedSubService}
            subServices={currentCategory.subServices || []}
            resetFilters={resetFilters}
            totalResults={filteredProviders.length}
          />
        </ScrollReveal>

        {/* Provider Cards Grid */}
        <ScrollReveal className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-heading text-2xl font-normal text-[#191C1D]">
              Verified {currentCategory.name} Co-op Specialists
            </h3>
            <span className="text-xs font-semibold text-[#5A6065]">
              Showing {filteredProviders.length} available
            </span>
          </div>

          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <div key={provider.id} onClick={() => setSelectedProvider(provider)} className="cursor-pointer">
                  <ProviderCard provider={provider} />
                </div>
              ))}
            </div>
          ) : (
            <Card variant="default" className="p-12 text-center space-y-4 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#F9F0EA] text-[#C87D55] mx-auto flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-[#191C1D]">No exact matches found</h4>
              <p className="text-xs text-[#5A6065] leading-relaxed">
                Try loosening your filters or resetting search keywords to view all active cooperative members in {currentCategory.name}.
              </p>
              <Button variant="secondary" size="small" onClick={resetFilters} icon={RotateCcw}>
                Reset All Filters
              </Button>
            </Card>
          )}
        </ScrollReveal>

        {/* Category Package Information & Co-op Pledge */}
        <ScrollReveal>
          <div className="bg-white border border-[#E5E0D8] rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
                TRANSPARENT SERVICE PROMISE
              </span>
              <h3 className="font-serif-heading text-3xl font-normal text-[#191C1D]">
                Why book {currentCategory.name} through Sohayak?
              </h3>
              <ul className="space-y-3 text-xs font-sans-ui text-[#5A6065]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                  <span><strong>Zero Middleman Markups:</strong> Standardized rate sheets agreed upon by the worker assembly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                  <span><strong>Cooperative Warranty:</strong> 7-day free rework guarantee on all completed jobs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                  <span><strong>Background Checked:</strong> Mandatory police verification & co-op peer review.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FBF9F5] p-6 rounded-2xl border border-[#E5E0D8] space-y-4 text-center">
              <Users className="w-8 h-8 text-[#1B4D3E] mx-auto" />
              <h4 className="font-bold text-base text-[#191C1D]">Need custom work or a large project?</h4>
              <p className="text-xs text-[#5A6065]">
                Post a custom service request to receive quotes from multiple cooperative members within 30 minutes.
              </p>
              <Button
                variant="earth"
                size="small"
                onClick={() => navigate('/customer/dashboard')}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full justify-center"
              >
                Post Service Request
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </main>

      {/* Provider Details Modal */}
      <ProviderDetailModal
        provider={selectedProvider}
        isOpen={Boolean(selectedProvider)}
        onClose={() => setSelectedProvider(null)}
      />

      {/* Footer */}
      <Footer />
    </PageTransition>
  );
};

export default CategoryServicePage;
