import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, SlidersHorizontal, Sparkles, Wrench, Droplet, Wind, BookOpen, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CustomerSearchPopover = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const popoverRef = useRef(null);

  const popularSearches = [
    { name: 'Electrician', category: 'electrician', icon: Wrench, count: '98 members' },
    { name: 'Plumber', category: 'plumber', icon: Droplet, count: '64 members' },
    { name: 'Home Cleaning', category: 'cleaning', icon: Sparkles, count: '142 members' },
    { name: 'AC Repair', category: 'ac-repair', icon: Wind, count: '52 members' },
    { name: 'Home Tutor', category: 'tutoring', icon: BookOpen, count: '88 members' },
  ];

  const filteredSearches = query
    ? popularSearches.filter(s => s.name.toLowerCase().includes(query.toLowerCase()))
    : popularSearches;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCategory = (category) => {
    setIsOpen(false);
    navigate(`/customer/services/${category}`);
  };

  return (
    <div ref={popoverRef} className={`relative w-full ${className}`}>
      {/* Search Input Bar */}
      <div
        className={`w-full bg-white rounded-2xl border transition-all duration-200 p-2 shadow-tactile-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-2 ${
          isOpen ? 'border-[#1B4D3E] ring-2 ring-[#1B4D3E]/10' : 'border-[#E5E0D8] hover:border-[#1B4D3E]/40'
        }`}
      >
        <div className="flex items-center gap-3 px-3 py-2 flex-1 min-w-0">
          <Search className="w-5 h-5 text-[#1B4D3E] shrink-0" />
          <input
            type="text"
            value={query}
            onFocus={() => setIsOpen(true)}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try electrician, cleaning, plumbing..."
            className="w-full bg-transparent text-[#191C1D] placeholder-[#8A9197] text-sm sm:text-base focus:outline-none font-sans-ui"
          />
        </div>

        <div className="hidden md:flex items-center gap-2 px-3.5 py-2 border-l border-[#E5E0D8] text-xs text-[#5A6065]">
          <MapPin className="w-4 h-4 text-[#C87D55] shrink-0" />
          <span className="truncate max-w-[150px] font-semibold text-[#191C1D]">Indiranagar, Bengaluru</span>
        </div>

        <button
          type="button"
          onClick={() => handleSelectCategory('cleaning')}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1B4D3E] hover:bg-[#153E32] text-white text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Search</span>
        </button>
      </div>

      {/* Interactive Search Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-[#E5E0D8] shadow-tactile-lg p-4 z-50 space-y-3"
          >
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#8A9197] px-2">
              <span>{query ? 'Search Results' : 'Popular Services Nearby'}</span>
              <span>Indiranagar Chapter</span>
            </div>

            <div className="space-y-1">
              {filteredSearches.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.category}
                    onClick={() => handleSelectCategory(item.category)}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#F4F1EA] transition-colors text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center font-semibold">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-sm text-[#191C1D] group-hover:text-[#1B4D3E] transition-colors">
                          {item.name}
                        </span>
                        <p className="text-xs text-[#8A9197]">{item.count}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-medium text-[#1B4D3E] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomerSearchPopover;
