import React from 'react';
import { IMAGES, PRACTICE_INFO } from '../data/siteData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#faf8f5] overflow-hidden pt-3 pb-16 md:pt-6 md:pb-24">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-end">
          
          {/* Main Left Image (Peaceful Santa Monica Coastal Shoreline) */}
          <div className="order-2 lg:order-1 lg:col-span-5 relative">
            <div className="relative overflow-hidden aspect-[3/3.8] sm:aspect-[4/4.8] lg:aspect-[3/3.7] w-full max-w-[500px] mx-auto lg:mx-0 rounded-xl border border-[#ded5c7] shadow-xs bg-[#f0ebe3]">
              <img
                src={IMAGES.coastalCalm}
                alt="Tranquil Santa Monica coastal shore at morning twilight"
                className="w-full h-full object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Center Copy Block */}
          <div className="order-1 lg:order-2 lg:col-span-5 text-left flex flex-col justify-center py-4 lg:py-2 lg:pl-4 xl:pl-6">
            {/* SEO Eyebrow */}
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#4e6f60] mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              IN-PERSON THERAPY IN SANTA MONICA &amp; SECURE<br className="hidden sm:inline" /> TELEHEALTH ACROSS CALIFORNIA
            </p>

            {/* Main SEO H1 Title with Script Accent on "settle." */}
            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-[46px] lg:text-[46px] xl:text-[54px] font-light text-[#231f1d] leading-[1.18] tracking-tight">
              <span className="block">Step out of chronic stress and</span>
              <span className="block">overthinking, and begin to</span>
              <span className="block font-script-accent text-[#4e6f60] font-normal italic text-6xl sm:text-7xl lg:text-[74px] xl:text-[84px] leading-[1.05] pt-1">
                settle.
              </span>
            </h1>

            {/* Description Subtext directly from profile */}
            <p className="font-sans-body text-[13.5px] sm:text-[14.5px] text-[#59524c] leading-relaxed mt-6 sm:mt-8 mb-8 sm:mb-10 max-w-[480px]">
              Evidence-based psychotherapy for thoughtful, high-achieving adults navigating anxiety, trauma, and burnout. Practical tools combined with depth-oriented care to cultivate lasting regulation.
            </p>

            {/* CTA Link */}
            <div>
              <button
                onClick={onOpenBooking}
                className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#231f1d] pb-0.5 border-b border-[#231f1d] hover:text-[#4e6f60] hover:border-[#4e6f60] transition-colors cursor-pointer"
              >
                SCHEDULE A CONSULTATION
              </button>
            </div>
          </div>

          {/* Right Accent Image: Dr. Maya Reynolds Portrait */}
          <div className="order-3 hidden lg:block lg:col-span-2">
            <div className="relative max-w-[280px] xl:max-w-[320px] ml-auto">
              <div className="overflow-hidden aspect-[3/3.9] w-full rounded-xl border border-[#ded5c7] shadow-xs bg-[#f0ebe3]">
                <img
                  src={IMAGES.drMaya}
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2.5 text-right">
                <p className="font-serif-heading text-xs text-[#231f1d] font-normal">
                  {PRACTICE_INFO.name}
                </p>
                <p className="font-sans-body text-[10px] text-[#736c65] uppercase tracking-wider">
                  Santa Monica, CA
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
