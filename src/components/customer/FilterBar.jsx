import React from 'react';
import { Filter, Star, ArrowUpDown, ShieldCheck, Check, RotateCcw } from 'lucide-react';

export const FilterBar = ({
  ratingFilter,
  setRatingFilter,
  sortBy,
  setSortBy,
  experienceFilter,
  setExperienceFilter,
  selectedSubService,
  setSelectedSubService,
  subServices = [],
  resetFilters,
  totalResults = 0
}) => {
  return (
    <div className="bg-white border border-[#E5E0D8] rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
      {/* Sub-services chip bar (if subServices exist) */}
      {subServices.length > 0 && (
        <div className="space-y-2 border-b border-[#E5E0D8] pb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A9197]">
            SERVICE PACKAGES & CHECKS
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedSubService(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSubService === null
                  ? 'bg-[#1B4D3E] text-white shadow-sm'
                  : 'bg-[#FBF9F5] text-[#5A6065] hover:bg-[#E5E0D8] border border-[#E5E0D8]'
              }`}
            >
              All Specialists
            </button>
            {subServices.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubService(selectedSubService === sub.id ? null : sub.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  selectedSubService === sub.id
                    ? 'bg-[#1B4D3E] text-white shadow-sm'
                    : 'bg-[#FBF9F5] text-[#5A6065] hover:bg-[#E5E0D8] border border-[#E5E0D8]'
                }`}
              >
                <span>{sub.name}</span>
                <span className={`text-[10px] ${selectedSubService === sub.id ? 'text-[#C87D55] font-bold' : 'text-[#8A9197]'}`}>
                  ₹{sub.price}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Filter Control Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        {/* Left Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1 text-[#1B4D3E] font-bold pr-2 border-r border-[#E5E0D8]">
            <Filter className="w-4 h-4 text-[#C87D55]" />
            <span>Filters:</span>
          </div>

          {/* Rating Dropdown */}
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="px-3 py-1.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
          >
            <option value="all">Rating: All Stars</option>
            <option value="4.5">★ 4.5 & Above</option>
            <option value="4.8">★ 4.8 & Above</option>
          </select>

          {/* Experience / Member Years Filter */}
          <select
            value={experienceFilter}
            onChange={(e) => setExperienceFilter(e.target.value)}
            className="px-3 py-1.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
          >
            <option value="all">Member Tenure: All</option>
            <option value="2">2+ Years Member</option>
            <option value="3">3+ Years Senior</option>
          </select>
        </div>

        {/* Right Sort Dropdown + Reset */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-[#E5E0D8]">
          <span className="text-[#8A9197] font-semibold text-[11px]">
            {totalResults} provider{totalResults !== 1 ? 's' : ''} available
          </span>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#5A6065]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 bg-[#FBF9F5] border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
            >
              <option value="recommended">Sort: Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="jobs">Most Experienced</option>
            </select>
          </div>

          {(ratingFilter !== 'all' || experienceFilter !== 'all' || selectedSubService !== null || sortBy !== 'recommended') && (
            <button
              onClick={resetFilters}
              title="Reset Filters"
              className="p-1.5 rounded-lg text-[#C87D55] hover:bg-[#F9F0EA] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
