import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import CooperativeBadge from '../ui/CooperativeBadge';
import { X, MapPin, Clock, ShieldCheck, Check } from 'lucide-react';

export const GigDetailsModal = ({ gig, isOpen, onClose, onApply }) => {
  if (!isOpen || !gig) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-3xl border border-[#E5E0D8] shadow-tactile-lg max-w-lg w-full p-6 sm:p-8 space-y-6 z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
                GIG REQUIREMENT DETAILS
              </span>
              <h3 className="font-serif-heading text-2xl font-semibold text-[#191C1D]">
                {gig.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#F4F1EA] text-[#8A9197] hover:text-[#191C1D]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Customer & Location Details */}
          <div className="flex items-center gap-3 p-4 bg-[#F4F1EA] rounded-2xl border border-[#E5E0D8]">
            <Avatar src={gig.customerAvatar} initials={gig.customerName.slice(0, 2)} size="md" />
            <div>
              <span className="text-xs text-[#8A9197] uppercase font-bold tracking-wider">REQUESTER</span>
              <h4 className="font-bold text-sm text-[#191C1D]">{gig.customerName}</h4>
              <p className="text-xs text-[#5A6065] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#C87D55]" /> {gig.location} ({gig.distance})
              </p>
            </div>
          </div>

          {/* Job Description */}
          <div className="space-y-2 text-xs text-[#5A6065]">
            <span className="font-bold uppercase text-[#191C1D]">Service Requirements:</span>
            <p className="leading-relaxed bg-white p-3.5 rounded-xl border border-[#E5E0D8]">
              {gig.description}
            </p>
          </div>

          {/* Payment & Guarantees */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-[#E8F2EE] rounded-xl border border-[#C0DCD3]">
              <span className="text-[#1B4D3E] font-semibold block">ESTIMATED PAY</span>
              <span className="font-bold text-lg text-[#1B4D3E]">{gig.paymentRange}</span>
            </div>
            <div className="p-3 bg-[#F4F1EA] rounded-xl border border-[#E5E0D8]">
              <span className="text-[#5A6065] font-semibold block">SCHEDULED TIME</span>
              <span className="font-bold text-xs text-[#191C1D]">{gig.date}</span>
            </div>
          </div>

          {/* Co-op Protection Note */}
          <div className="flex items-center gap-2 text-xs text-[#1B4D3E] bg-[#E8F2EE]/60 p-3 rounded-xl">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Protected by Sohayak Member Fair Payout Policy</span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button variant="ghost" size="medium" onClick={onClose}>
              Close
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={() => {
                onApply(gig);
                onClose();
              }}
            >
              Confirm Application
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GigDetailsModal;
