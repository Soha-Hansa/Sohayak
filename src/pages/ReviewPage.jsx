import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import ScrollReveal from '../components/layout/ScrollReveal';
import CustomerNav from '../components/customer/CustomerNav';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';

import { providers } from '../data/providers';
import {
  Star,
  ArrowLeft,
  CheckCircle2,
  Send,
  MessageSquare,
  ThumbsUp
} from 'lucide-react';

export const ReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Get matching provider details
  const provider = useMemo(() => {
    return providers.find((p) => p.id === id) || providers[0];
  }, [id]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition className="w-full">
      {/* Customer Header Navigation */}
      <CustomerNav />

      {/* Main Container */}
      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        {/* Back Link */}
        <ScrollReveal>
          <button
            onClick={() => navigate('/customer/bookings')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1B4D3E] hover:text-[#C87D55] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to My Bookings</span>
          </button>
        </ScrollReveal>

        <ScrollReveal>
          <Card variant="default" className="p-6 sm:p-8 space-y-6 bg-white border-[#E5E0D8]">
            {!submitted ? (
              <form onSubmit={handleSubmitReview} className="space-y-6">
                {/* Form Title & Subtitle */}
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
                    COOPERATIVE FEEDBACK
                  </span>
                  <h1 className="font-serif-heading text-3xl font-normal text-[#191C1D]">
                    Leave a Review
                  </h1>
                  <p className="text-xs text-[#5A6065]">
                    Your rating helps cooperative workers build trust and earn patronage bonuses.
                  </p>
                </div>

                {/* Target Provider Header */}
                <div className="flex items-center gap-4 p-4 bg-[#FBF9F5] rounded-2xl border border-[#E5E0D8]">
                  <Avatar src={provider.avatar} initials={provider.initials} size="lg" isCoopMember={true} />
                  <div>
                    <h3 className="font-bold text-base text-[#191C1D]">{provider.name}</h3>
                    <p className="text-xs font-semibold text-[#1B4D3E]">{provider.mainSkill || provider.coopRole}</p>
                    <p className="text-xs text-[#5A6065]">{provider.locality}</p>
                  </div>
                </div>

                {/* 1-5 Star Interactive Selector */}
                <div className="space-y-2 text-center">
                  <label className="block text-xs font-bold text-[#191C1D] uppercase tracking-wider">
                    Rating Score
                  </label>
                  <div className="flex items-center justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                      <button
                        type="button"
                        key={starIndex}
                        onClick={() => setRating(starIndex)}
                        onMouseEnter={() => setHoverRating(starIndex)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-2xl transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            (hoverRating || rating) >= starIndex
                              ? 'text-[#C87D55] fill-[#C87D55]'
                              : 'text-[#E5E0D8] fill-transparent'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#1B4D3E] block pt-1">
                    {rating === 5 ? '★ 5.0 - Excellent Service' : rating === 4 ? '★ 4.0 - Very Good' : '★ Rating Selected'}
                  </span>
                </div>

                {/* Comment Box */}
                <div className="space-y-1.5 text-xs">
                  <label className="block font-bold text-[#191C1D]">Write Your Feedback Comment</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    placeholder="Share your experience working with this cooperative member..."
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E5E0D8] rounded-2xl text-xs font-semibold text-[#191C1D] focus:outline-none focus:border-[#1B4D3E] resize-none"
                    required
                  />
                </div>

                {/* Submit Action */}
                <Button
                  type="submit"
                  variant="earth"
                  size="medium"
                  icon={Send}
                  iconPosition="right"
                  className="w-full justify-center py-3 text-sm"
                >
                  Submit Review
                </Button>
              </form>
            ) : (
              /* Success Submission State */
              <div className="text-center space-y-6 py-6">
                <div className="w-16 h-16 bg-[#E8F2EE] text-[#1B4D3E] rounded-full mx-auto flex items-center justify-center border-2 border-[#C0DCD3] shadow-sm">
                  <ThumbsUp className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#191C1D]">
                    Thank you for your review!
                  </h2>
                  <p className="text-xs text-[#5A6065] leading-relaxed max-w-sm mx-auto">
                    Your feedback for <strong>{provider.name}</strong> has been published and added to their cooperative record.
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => navigate('/customer/bookings')}
                  className="w-full justify-center"
                >
                  Return to My Bookings
                </Button>
              </div>
            )}
          </Card>
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </PageTransition>
  );
};

export default ReviewPage;
