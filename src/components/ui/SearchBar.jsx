import React from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';

export const SearchBar = ({
  placeholder = "What service do you need today? (e.g. Deep cleaning, Electrician)",
  location = "Indiranagar, Bengaluru",
  onSearch,
  onFilterClick,
  className = '',
}) => {
  return (
    <div
      className={`w-full bg-white rounded-2xl border border-[#E5E0D8] p-2 sm:p-2.5 shadow-tactile-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-2 transition-all duration-200 focus-within:border-[#1B4D3E] focus-within:ring-2 focus-within:ring-[#1B4D3E]/10 ${className}`}
    >
      <div className="flex items-center gap-3 px-3 py-2 flex-1 min-w-0">
        <Search className="w-5 h-5 text-[#8A9197] shrink-0" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-[#191C1D] placeholder-[#8A9197] text-sm sm:text-base focus:outline-none font-sans-ui"
          onChange={(e) => onSearch && onSearch(e.target.value)}
        />
      </div>

      <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border-l border-[#E5E0D8] text-xs text-[#5A6065]">
        <MapPin className="w-4 h-4 text-[#C87D55] shrink-0" />
        <span className="truncate max-w-[140px] font-medium">{location}</span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {onFilterClick && (
          <button
            type="button"
            onClick={onFilterClick}
            className="p-2.5 rounded-xl bg-[#F4F1EA] hover:bg-[#E5E0D8] text-[#191C1D] transition-colors"
            title="Filter Services"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        )}

        <button
          type="button"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1B4D3E] hover:bg-[#153E32] text-white text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2"
        >
          <span>Explore</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
