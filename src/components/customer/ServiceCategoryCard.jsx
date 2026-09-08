import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
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

const iconMap = {
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

export const ServiceCategoryCard = ({ category, className = '' }) => {
  const navigate = useNavigate();

  if (!category) return null;

  const IconComponent = iconMap[category.icon] || Wrench;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.15 }}
      onClick={() => navigate(`/customer/services/${category.id}`)}
      className={`p-4 rounded-2xl bg-white border border-[#E5E0D8] hover:border-[#1B4D3E]/40 hover:shadow-tactile transition-all cursor-pointer space-y-3 group ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-[#F4F1EA] group-hover:bg-[#E8F2EE] text-[#1B4D3E] flex items-center justify-center transition-colors">
          <IconComponent className="w-5 h-5 stroke-[2]" />
        </div>
        <span className="text-[10px] font-bold text-[#1B4D3E] bg-[#E8F2EE] px-2 py-0.5 rounded-full border border-[#C0DCD3]">
          {category.memberCount} providers
        </span>
      </div>

      <div>
        <h4 className="font-sans-ui text-sm font-bold text-[#191C1D] group-hover:text-[#1B4D3E] transition-colors">
          {category.name}
        </h4>
        <p className="text-[11px] text-[#5A6065] leading-normal pt-0.5 line-clamp-1">
          {category.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCategoryCard;
