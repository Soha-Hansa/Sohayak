import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileText
} from 'lucide-react';

export const BookingModal = ({ provider, isOpen, onClose }) => {
  const navigate = useNavigate();

  const [date, setDate] = useState('Tomorrow, Sep 7');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [address, setAddress] = useState('Flat 3B, Howrah AC Market, Howrah, West Bengal');
  const [description, setDescription] = useState('General electrical repair and safety check');

  if (!isOpen || !provider) return null;

  const basePrice = provider.startingPrice || provider.hourlyRate || 499;
  const coopPatronageFee = Math.round(basePrice * 0.1);
  const totalPrice = basePrice + coopPatronageFee;

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    onClose();

    // Create mock booking state payload
    const bookingPayload = {
      bookingId: `SYG-${Math.floor(1000 + Math.random() * 9000)}`,
      providerName: provider.name,
      providerAvatar: provider.avatar,
      providerSkill: provider.mainSkill || provider.coopRole || provider.category,
      serviceTitle: `${provider.mainSkill || provider.category} Service`,
      date,
      timeSlot,
      address,
      description,
      totalAmount: totalPrice,
      status: 'Confirmed'
    };

    // Navigate to confirmation page
    navigate('/customer/booking-success', { state: { booking: bookingPayload } });
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
          className="relative bg-[#FBF9F5] border border-[#E5E0D8] rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-8 text-[#191C1D] space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white border border-[#E5E0D8] text-[#5A6065] hover:text-[#191C1D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
              STEP 2 OF 2 · BOOKING CONFIRMATION
            </span>
            <h2 className="font-serif-heading text-2xl font-bold text-[#191C1D]">
              Book Service Appointment
            </h2>
          </div>

          {/* Selected Provider Card Summary */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#E5E0D8]">
            <Avatar src={provider.avatar} initials={provider.initials} size="lg" isCoopMember={true} />
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-[#191C1D] truncate">{provider.name}</h4>
              <p className="text-xs font-semibold text-[#1B4D3E]">{provider.mainSkill || provider.coopRole}</p>
              <div className="flex items-center gap-1 text-[11px] text-[#5A6065] pt-0.5">
                <MapPin className="w-3 h-3 text-[#C87D55]" />
                <span>{provider.locality}</span>
              </div>
            </div>
          </div>

          {/* Booking Form Fields */}
          <form onSubmit={handleConfirmBooking} className="space-y-4 text-xs font-sans-ui">
            {/* Date Selection */}
            <div className="space-y-1.5">
              <label className="block font-bold text-[#191C1D] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#1B4D3E]" />
                <span>Select Appointment Date</span>
              </label>
              <select
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
              >
                <option value="Today, Sep 6">Today, Sep 6 (Express 2-hr)</option>
                <option value="Tomorrow, Sep 7">Tomorrow, Sep 7</option>
                <option value="Monday, Sep 8">Monday, Sep 8</option>
                <option value="Tuesday, Sep 9">Tuesday, Sep 9</option>
              </select>
            </div>

            {/* Time Slot Selection */}
            <div className="space-y-1.5">
              <label className="block font-bold text-[#191C1D] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1B4D3E]" />
                <span>Select Time Slot</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '09:00 AM - 11:00 AM',
                  '10:00 AM - 12:00 PM',
                  '02:00 PM - 04:00 PM',
                  '05:00 PM - 07:00 PM'
                ].map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    className={`py-2 px-3 rounded-xl border text-center font-semibold transition-all ${
                      timeSlot === slot
                        ? 'bg-[#1B4D3E] text-white border-[#1B4D3E]'
                        : 'bg-white text-[#5A6065] border-[#E5E0D8] hover:border-[#1B4D3E]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <label className="block font-bold text-[#191C1D] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C87D55]" />
                <span>Service Address</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter complete house address..."
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                required
              />
            </div>

            {/* Short Request Note */}
            <div className="space-y-1.5">
              <label className="block font-bold text-[#191C1D] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#1B4D3E]" />
                <span>Short Requirement Note</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                placeholder="Describe what needs to be repaired or checked..."
                className="w-full px-3.5 py-2.5 bg-white border border-[#E5E0D8] rounded-xl font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E] resize-none"
              />
            </div>

            {/* Price Summary */}
            <div className="p-4 bg-[#E8F2EE] border border-[#C0DCD3] rounded-2xl space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#5A6065]">
                <span>Base Service Rate</span>
                <span>₹{basePrice}</span>
              </div>
              <div className="flex items-center justify-between text-[#5A6065]">
                <span>Co-op Patronage & Safety Reserve (10%)</span>
                <span>₹{coopPatronageFee}</span>
              </div>
              <div className="pt-2 border-t border-[#C0DCD3] flex items-center justify-between font-bold text-[#191C1D] text-sm">
                <span>Estimated Total Payout</span>
                <span className="font-serif-heading text-lg text-[#1B4D3E]">₹{totalPrice}</span>
              </div>
            </div>

            {/* Submit Action */}
            <Button
              type="submit"
              variant="earth"
              size="medium"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full justify-center text-sm py-3"
            >
              Confirm Booking
            </Button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
