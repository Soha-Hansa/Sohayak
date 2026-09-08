import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Rating from '../ui/Rating';
import CooperativeBadge from '../ui/CooperativeBadge';
import { ArrowRight, Users } from 'lucide-react';

export const PopularServiceCard = ({ service, className = '' }) => {
  const navigate = useNavigate();

  if (!service) return null;

  return (
    <Card variant="default" className={`p-5 flex flex-col justify-between space-y-4 group ${className}`}>
      <div className="space-y-3">
        {/* Service Image Visual */}
        <div className="h-40 rounded-xl overflow-hidden bg-[#E5E0D8] relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <CooperativeBadge size="sm" variant="emerald" className="absolute top-3 left-3" />
        </div>

        {/* Rating and Provider Count */}
        <div className="flex items-center justify-between text-xs">
          <Rating rating={service.rating} size="sm" />
          <span className="text-[#8A9197] font-sans-ui flex items-center gap-1">
            <Users className="w-3.5 h-3.5" /> {service.providerCount} providers
          </span>
        </div>

        {/* Title and Short Description */}
        <div>
          <h4 className="font-sans-ui text-lg font-bold text-[#191C1D] group-hover:text-[#1B4D3E] transition-colors">
            {service.title}
          </h4>
          <p className="text-xs text-[#5A6065] leading-relaxed pt-1 line-clamp-2">
            {service.description}
          </p>
        </div>
      </div>

      {/* Footer: Price & CTA */}
      <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#8A9197] uppercase font-bold tracking-wider">STARTING FROM</span>
          <p className="font-serif-heading text-lg font-bold text-[#191C1D]">
            ₹{service.startingPriceINR}
          </p>
        </div>

        <Button
          variant="primary"
          size="small"
          onClick={() => navigate(`/customer/providers?category=${service.categoryId}`)}
          icon={ArrowRight}
          iconPosition="right"
        >
          View Providers
        </Button>
      </div>
    </Card>
  );
};

export default PopularServiceCard;
