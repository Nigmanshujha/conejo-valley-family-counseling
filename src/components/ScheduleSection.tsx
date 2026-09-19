import React from 'react';
import { IMAGES, ABOUT_DR_MAYA, PRACTICE_INFO } from '../data/siteData';

interface ScheduleSectionProps {
  onOpenBooking: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#faf8f5] py-18 md:py-24 border-t border-[#e3dbcf]/60">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Detail Photo - Office 1 with brick and tall windows */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="overflow-hidden shadow-xs aspect-[3/4] max-w-[320px] rounded-xl border border-[#ded5c7]">
              <img
                src={IMAGES.office1}
                alt="Natural daylight and brick windows in Santa Monica therapy sanctuary"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Center Callout Text */}
          <div className="lg:col-span-5 text-left px-2 sm:px-6">
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#4e6f60] mb-4">
              TAKE THE FIRST STEP
            </p>

            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] font-light text-[#231f1d] leading-[1.2] mb-6">
              A space to slow down and feel{' '}
              <span className="font-script-accent text-[#4e6f60] font-normal italic text-4xl sm:text-5xl md:text-6xl pl-1">
                grounded
              </span>
              .
            </h2>

            <blockquote className="font-serif-heading text-lg sm:text-xl text-[#231f1d] italic mb-5 leading-snug border-l-2 border-[#4e6f60] pl-4">
              “{ABOUT_DR_MAYA.fit}”
            </blockquote>

            <p className="font-sans-body text-sm sm:text-[15px] text-[#59524c] leading-relaxed mb-4">
              {ABOUT_DR_MAYA.office}
            </p>

            <p className="font-sans-body text-xs text-[#736c65] uppercase tracking-wider mb-8">
              {PRACTICE_INFO.fullAddress} · Telehealth across California
            </p>

            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#231f1d] bg-[#231f1d] text-white rounded-full text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-[#4e6f60] hover:border-[#4e6f60] transition-colors cursor-pointer"
              >
                REQUEST CONSULTATION
              </button>
            </div>
          </div>

          {/* Right Office Photo - Office 2 with lounge and bookcase */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="overflow-hidden shadow-xs aspect-[4/3] lg:aspect-[3/3.5] max-w-[500px] ml-auto rounded-xl border border-[#ded5c7]">
              <img
                src={IMAGES.office2}
                alt="Counseling lounge and curated library in Dr. Maya Reynolds' Santa Monica office"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
