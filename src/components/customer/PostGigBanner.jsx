import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { PlusCircle, Search, Sparkles } from 'lucide-react';

export const PostGigBanner = ({ onOpenPostModal, className = '' }) => {
  const navigate = useNavigate();

  return (
    <Card variant="feature" className={`p-6 sm:p-8 border-[#C0DCD3] relative overflow-hidden ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
              QUICK SERVICE DISPATCH
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F2EE] text-[#1B4D3E]">
              Zero Markup Fee
            </span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-normal text-[#191C1D]">
            Need a service?
          </h2>
          <p className="text-sm sm:text-base text-[#5A6065] font-sans-ui leading-relaxed">
            Post your requirement and find the right worker near you within minutes. Direct co-op rates with background-verified providers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Button
            variant="earth"
            size="large"
            onClick={onOpenPostModal}
            icon={PlusCircle}
            className="w-full sm:w-auto shadow-md"
          >
            + Post a Gig
          </Button>

          <Button
            variant="secondary"
            size="large"
            onClick={() => navigate('/customer')}
            icon={Search}
            className="w-full sm:w-auto"
          >
            Browse Workers
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PostGigBanner;
