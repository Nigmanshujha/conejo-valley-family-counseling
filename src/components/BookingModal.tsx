import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { PRACTICE_INFO } from '../data/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Anxiety & Panic Therapy',
    format: 'In-Person (Santa Monica Office)',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-xl bg-[#faf8f5] border border-[#ded5c7] rounded-xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#231f1d]/70 hover:text-[#231f1d] p-1.5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="w-14 h-14 text-[#4e6f60]" />
            </div>
            <h3 className="font-serif-heading text-3xl font-light text-[#231f1d]">
              Thank you for reaching out
            </h3>
            <p className="font-sans-body text-[#59524c] text-sm leading-relaxed max-w-md mx-auto">
              Dr. Maya Reynolds has received your consultation request. You will receive a response within 1 business day to schedule an initial phone conversation.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#231f1d] text-white text-xs uppercase tracking-widest hover:bg-[#4e6f60] transition-colors rounded-full cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-center">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#4e6f60] mb-1">
                {PRACTICE_INFO.name}
              </p>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-light text-[#231f1d]">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-[#59524c] mt-1 font-sans-body">
                In-person in Santa Monica or confidential virtual telehealth across California.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans-body text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#231f1d] font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white border border-[#ded5c7] rounded-md px-3.5 py-2.5 text-sm text-[#231f1d] focus:outline-hidden focus:border-[#4e6f60]"
                  />
                </div>

                <div>
                  <label className="block text-[#231f1d] font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-white border border-[#ded5c7] rounded-md px-3.5 py-2.5 text-sm text-[#231f1d] focus:outline-hidden focus:border-[#4e6f60]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#231f1d] font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(310) 000-0000"
                    className="w-full bg-white border border-[#ded5c7] rounded-md px-3.5 py-2.5 text-sm text-[#231f1d] focus:outline-hidden focus:border-[#4e6f60]"
                  />
                </div>

                <div>
                  <label className="block text-[#231f1d] font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Session Format
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full bg-white border border-[#ded5c7] rounded-md px-3.5 py-2.5 text-sm text-[#231f1d] focus:outline-hidden focus:border-[#4e6f60]"
                  >
                    <option value="In-Person (Santa Monica Office)">In-Person (Santa Monica Office)</option>
                    <option value="Virtual Telehealth (California)">Virtual Telehealth (California)</option>
                    <option value="Undecided / Discuss on Call">Undecided / Discuss on Call</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#231f1d] font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Primary Area of Focus
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-[#ded5c7] rounded-md px-3.5 py-2.5 text-sm text-[#231f1d] focus:outline-hidden focus:border-[#4e6f60]"
                >
                  <option value="Anxiety & Panic Therapy">Anxiety &amp; Panic Therapy</option>
                  <option value="Trauma & EMDR Therapy">Trauma &amp; EMDR Therapy</option>
                  <option value="Burnout, Perfectionism & Executive Stress">Burnout, Perfectionism &amp; Executive Stress</option>
                  <option value="Nervous System & Somatic Regulation">Nervous System &amp; Somatic Regulation</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-[#231f1d] font-medium mb-1 uppercase tracking-wider text-[11px]">
                  How can I help you? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a brief overview of what brings you to therapy..."
                  className="w-full bg-white border border-[#ded5c7] rounded-md px-3.5 py-2.5 text-sm text-[#231f1d] focus:outline-hidden focus:border-[#4e6f60] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#231f1d] text-white text-xs uppercase tracking-widest font-medium rounded-full hover:bg-[#4e6f60] transition-colors cursor-pointer"
                >
                  Request Consultation Call
                </button>
              </div>

              <p className="text-[10px] text-[#736c65] text-center pt-1 leading-relaxed">
                Communications are confidential. If you are experiencing a medical or psychiatric emergency, please call 911 or dial 988.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
