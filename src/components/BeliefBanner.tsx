import React from 'react';
import { IMAGES, ABOUT_DR_MAYA, PRACTICE_INFO } from '../data/siteData';

export const BeliefBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 md:py-36 bg-[#212b26]">
      {/* Background Image with Gentle Coastal Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.coastalCalm})` }}
      >
        <div className="absolute inset-0 bg-[#19241f]/65 backdrop-brightness-90" />
      </div>

      {/* Quote Content - Left Aligned */}
      <div className="relative w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="max-w-[860px] text-left space-y-4">
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#c4d7cd]">
            THERAPEUTIC PHILOSOPHY
          </p>
          <blockquote className="font-serif-heading text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-light text-[#faf8f5] leading-[1.3] tracking-normal">
            “{ABOUT_DR_MAYA.philosophy}”
          </blockquote>
          <p className="font-sans-body text-xs sm:text-sm text-[#e3dbcf]/90 pt-2 tracking-wide">
            — {PRACTICE_INFO.name}, {PRACTICE_INFO.title} · Santa Monica, CA
          </p>
        </div>
      </div>
    </section>
  );
};
