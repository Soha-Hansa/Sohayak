import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from '../ui/Avatar';
import Rating from '../ui/Rating';
import CooperativeBadge from '../ui/CooperativeBadge';
import Button from '../ui/Button';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  Briefcase,
  Award,
  DollarSign,
  Calendar,
  MessageSquare,
  ArrowRight,
  Star
} from 'lucide-react';

export const ProviderDetailModal = ({ provider, isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen || !provider) return null;

  const handleBookNow = () => {
    onClose();
    navigate(`/customer/book/${provider.id}`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#191C1D]/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#FBF9F5] border border-[#E5E0D8] rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 space-y-6 p-6 sm:p-8 text-[#191C1D]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white border border-[#E5E0D8] text-[#5A6065] hover:text-[#191C1D] hover:bg-[#E5E0D8]/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start gap-5 border-b border-[#E5E0D8] pb-6">
            <Avatar
              src={provider.avatar}
              initials={provider.initials}
              size="xl"
              isCoopMember={true}
              className="shrink-0"
            />
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-serif-heading text-2xl font-bold text-[#191C1D]">
                  {provider.name}
                </h2>
                <CooperativeBadge size="sm" variant="default" />
              </div>

              <p className="text-sm font-semibold text-[#1B4D3E]">
                {provider.coopRole || provider.category}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#5A6065]">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C87D55]" />
                  <span>{provider.locality}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#1B4D3E]" />
                  <span>{provider.membershipYears || 2}+ years Co-op Member</span>
                </div>
              </div>

              <div className="pt-1 flex items-center gap-3">
                <Rating rating={provider.rating} reviewCount={provider.totalJobs} size="md" />
                <span className="text-xs font-bold text-[#191C1D] px-2 py-0.5 rounded bg-[#E8F2EE]">
                  {provider.totalJobs} Jobs Done
                </span>
              </div>
            </div>
          </div>

          {/* Co-op Revenue Distribution Breakdown Card */}
          <div className="bg-[#1B4D3E] text-white rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C87D55]" />
                <span className="font-bold text-sm">Worker Ownership Transparency</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#C87D55] bg-white/10 px-2 py-0.5 rounded">
                Fair Work Model
              </span>
            </div>

            <p className="text-xs text-[#E5E0D8]/90 leading-relaxed">
              Booking {provider.name} guarantees fair wages. Unlike traditional platforms charging 25-35% commission:
            </p>

            <div className="grid grid-cols-3 gap-2 text-center pt-2 text-xs">
              <div className="bg-white/10 rounded-xl p-2">
                <span className="block font-bold text-lg text-white">85%</span>
                <span className="text-[10px] text-[#E5E0D8]">Direct to Worker</span>
              </div>
              <div className="bg-white/10 rounded-xl p-2">
                <span className="block font-bold text-lg text-[#C87D55]">10%</span>
                <span className="text-[10px] text-[#E5E0D8]">Co-op Dividend Fund</span>
              </div>
              <div className="bg-white/10 rounded-xl p-2">
                <span className="block font-bold text-lg text-white/80">5%</span>
                <span className="text-[10px] text-[#E5E0D8]">Tech & Operations</span>
              </div>
            </div>
          </div>

          {/* Verified Credentials */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#191C1D] uppercase tracking-wider text-xs">
              Verified Credentials & Guarantees
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#E5E0D8]">
                <CheckCircle2 className="w-4 h-4 text-[#1B4D3E]" />
                <span>Govt / Police Verified Identity</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#E5E0D8]">
                <Award className="w-4 h-4 text-[#1B4D3E]" />
                <span>Cooperative Skill Certified</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#E5E0D8]">
                <ShieldCheck className="w-4 h-4 text-[#C87D55]" />
                <span>₹10,000 Property Damage Cover</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#E5E0D8]">
                <Clock className="w-4 h-4 text-[#1B4D3E]" />
                <span>On-Time Arrival Commitment</span>
              </div>
            </div>
          </div>

          {/* Bio & Skills */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#191C1D]">About {provider.name}</h4>
            <p className="text-xs text-[#5A6065] leading-relaxed font-sans-ui bg-white p-4 rounded-2xl border border-[#E5E0D8]">
              {provider.bio}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {provider.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#E8F2EE] text-[#1B4D3E] font-bold text-xs rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          {provider.reviews && provider.reviews.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-[#191C1D]">Recent Customer Reviews</h4>
              <div className="space-y-2">
                {provider.reviews.map((rev) => (
                  <div key={rev.id} className="bg-white p-3.5 rounded-2xl border border-[#E5E0D8] text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#191C1D]">{rev.author}</span>
                      <div className="flex items-center gap-1 text-[#C87D55]">
                        <Star className="w-3.5 h-3.5 fill-[#C87D55]" />
                        <span className="font-bold">{rev.rating}</span>
                      </div>
                    </div>
                    <p className="text-[#5A6065]">{rev.text}</p>
                    <span className="text-[10px] text-[#8A9197]">{rev.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sticky Modal Action Footer */}
          <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-[#8A9197] uppercase font-bold">STARTING RATE</span>
              <p className="font-serif-heading text-2xl font-bold text-[#191C1D]">
                ₹{provider.hourlyRate} <span className="text-xs font-normal text-[#5A6065]">/ hr</span>
              </p>
            </div>

            <Button
              variant="earth"
              size="medium"
              onClick={handleBookNow}
              icon={ArrowRight}
              iconPosition="right"
              className="shrink-0"
            >
              Book {provider.name} Now
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProviderDetailModal;
