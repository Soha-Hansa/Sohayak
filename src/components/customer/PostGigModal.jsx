import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { X, UploadCloud, CheckCircle2, Sparkles, MapPin, Calendar, Clock, DollarSign } from 'lucide-react';

export const PostGigModal = ({ isOpen, onClose, onGigPosted }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Electrical',
    description: '',
    location: 'Howrah, West Bengal',
    date: 'Today',
    time: '04:00 PM',
    budget: '1000',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onGigPosted) {
      onGigPosted(formData);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs"
        />

        {/* Modal Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-3xl border border-[#E5E0D8] shadow-tactile-lg max-w-xl w-full p-6 sm:p-8 space-y-6 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar Header */}
          <div className="flex items-start justify-between gap-4 border-b border-[#E5E0D8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C87D55]">
                SERVICE REQUIREMENT DISPATCH
              </span>
              <h3 className="font-serif-heading text-2xl font-semibold text-[#191C1D] mt-0.5">
                {submitted ? 'Request Confirmation' : 'Post a New Gig'}
              </h3>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-1.5 rounded-full hover:bg-[#F4F1EA] text-[#8A9197] hover:text-[#191C1D]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form vs Success State */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Service Required Title */}
              <div className="space-y-1">
                <label className="font-bold text-[#191C1D] block">Service Required *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Repair my ceiling fan, fix kitchen tap"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D8] text-sm text-[#191C1D] focus:outline-none focus:border-[#1B4D3E] focus:ring-2 focus:ring-[#1B4D3E]/10"
                />
              </div>

              {/* Category Dropdown & Budget Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-[#191C1D] block">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D8] text-sm text-[#191C1D] bg-white focus:outline-none focus:border-[#1B4D3E]"
                  >
                    <option value="Electrical">Electrical</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Painting">Painting</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="Tutor">Home Tutor</option>
                    <option value="Other">Other Category</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#191C1D] block">Estimated Budget (₹) *</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 1000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D8] text-sm text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="font-bold text-[#191C1D] block">Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe what needs repair or servicing in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D8] text-sm text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                />
              </div>

              {/* Location & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-[#191C1D] block">Location *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D8] text-sm text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#191C1D] block">Preferred Date & Time *</label>
                  <input
                    type="text"
                    required
                    value={`${formData.date}, ${formData.time}`}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0D8] text-sm text-[#191C1D] focus:outline-none focus:border-[#1B4D3E]"
                  />
                </div>
              </div>

              {/* Mock Photo Upload Dropzone */}
              <div className="space-y-1 pt-1">
                <label className="font-bold text-[#191C1D] block">Upload Photos (Optional)</label>
                <div className="border-2 border-dashed border-[#E5E0D8] hover:border-[#1B4D3E] p-4 rounded-2xl bg-[#F4F1EA]/50 text-center space-y-1 cursor-pointer transition-colors">
                  <UploadCloud className="w-6 h-6 text-[#1B4D3E] mx-auto" />
                  <span className="text-xs font-semibold text-[#191C1D] block">Click to upload photos or drag and drop</span>
                  <span className="text-[10px] text-[#8A9197]">PNG, JPG up to 10MB</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E5E0D8]">
                <Button variant="ghost" size="medium" type="button" onClick={handleResetAndClose}>
                  Cancel
                </Button>
                <Button variant="earth" size="medium" type="submit">
                  Post Gig
                </Button>
              </div>
            </form>
          ) : (
            /* Animated Success Screen */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#2D7D46] flex items-center justify-center mx-auto border border-[#C8E6C9]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-heading text-3xl font-semibold text-[#191C1D]">
                Gig Posted Successfully!
              </h4>
              <p className="text-sm text-[#5A6065] max-w-md mx-auto leading-relaxed">
                Workers matching your requirements in <strong>{formData.location}</strong> can now review and apply. You will receive notifications when applications arrive.
              </p>

              <div className="pt-4 flex justify-center">
                <Button variant="primary" size="medium" onClick={handleResetAndClose}>
                  Back to Dashboard
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PostGigModal;
