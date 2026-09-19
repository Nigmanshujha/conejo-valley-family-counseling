import React from 'react';
import { IMAGES, ABOUT_DR_MAYA, PRACTICE_INFO } from '../data/siteData';

export const HopeSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#faf8f5] py-16 md:py-24 border-t border-[#e3dbcf]/60">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-8 space-y-7 pr-0 lg:pr-6">
            <div>
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#4e6f60] mb-2">
                ABOUT DR. MAYA REYNOLDS, PSYD
              </p>
              <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-light text-[#231f1d] leading-[1.2]">
                Therapy for thoughtful adults who feel functional on the outside, but exhausted within.
              </h2>
            </div>

            {/* Content paragraphs matching user prompt */}
            <div className="space-y-4 font-sans-body text-sm sm:text-[15.5px] leading-relaxed text-[#59524c]">
              <p className="text-[#231f1d] font-normal leading-relaxed text-base sm:text-[17px]">
                {ABOUT_DR_MAYA.intro}
              </p>
              <p className="leading-relaxed">
                {ABOUT_DR_MAYA.p2}
              </p>
            </div>

            {/* Focus callout badge / quote */}
            <div className="pt-2 border-l-2 border-[#4e6f60] pl-5 my-2">
              <p className="font-serif-heading italic text-lg sm:text-xl text-[#231f1d] leading-snug">
                “My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.”
              </p>
              <p className="text-xs uppercase tracking-widest text-[#736c65] font-sans-body mt-2">
                — {PRACTICE_INFO.name}, {PRACTICE_INFO.title}
              </p>
            </div>
          </div>

          {/* Right Image: Dr. Maya Reynolds */}
          <div className="lg:col-span-4">
            <div className="relative group max-w-[400px] mx-auto lg:ml-auto">
              <div className="overflow-hidden rounded-xl border border-[#ded5c7] shadow-sm aspect-[2/3] bg-[#f0ebe3]">
                <img
                  src={IMAGES.drMaya}
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 text-center sm:text-left">
                <p className="font-serif-heading text-xl text-[#231f1d]">
                  {PRACTICE_INFO.name}
                </p>
                <p className="font-sans-body text-xs text-[#59524c] tracking-wider uppercase">
                  {PRACTICE_INFO.title} · {PRACTICE_INFO.license}
                </p>
                <p className="font-sans-body text-xs text-[#736c65] mt-0.5">
                  Santa Monica Office &amp; Virtual Telehealth Statewide
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
