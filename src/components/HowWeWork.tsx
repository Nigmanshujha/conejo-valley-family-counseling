import React from 'react';
import { IMAGES, ABOUT_DR_MAYA, APPROACH_MODALITIES } from '../data/siteData';

interface HowWeWorkProps {
  onLearnMore?: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onLearnMore }) => {
  return (
    <section id="approach" className="bg-[#ece5da] py-20 md:py-28 text-[#231f1d] border-t border-[#e3dbcf]/70">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#4e6f60]">
              CLINICAL METHODOLOGY &amp; MODALITIES
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-light text-[#231f1d] leading-[1.18]">
              A warm, collaborative, and grounded approach.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-sans-body text-sm sm:text-[15.5px] text-[#59524c] leading-relaxed">
              {ABOUT_DR_MAYA.approach}
            </p>
          </div>
        </div>

        {/* 4 Modalities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {APPROACH_MODALITIES.map((modality, idx) => (
            <div 
              key={modality.id}
              className="bg-[#faf8f5] p-6 sm:p-7 rounded-xl border border-[#ded5c7] flex flex-col justify-between hover:border-[#4e6f60]/50 transition-colors shadow-xs"
            >
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#4e6f60] uppercase mb-2 block">
                  MODALITY 0{idx + 1}
                </span>
                <h3 className="font-serif-heading text-xl sm:text-[22px] font-normal text-[#231f1d] mb-2 leading-snug">
                  {modality.name}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-[#736c65] font-sans-body mb-3">
                  {modality.focus}
                </p>
                <p className="font-sans-body text-xs sm:text-[13.5px] text-[#59524c] leading-relaxed">
                  {modality.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Feature Strip with Office Photography */}
        <div className="bg-[#faf8f5] rounded-xl border border-[#ded5c7] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Image: Office Bookshelf & Greenery */}
            <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden bg-[#e8e2d8]">
              <img
                src={IMAGES.officeBookshelf}
                alt="Curated therapy library in Dr. Maya Reynolds' Santa Monica office"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Copy: Pacing, Safety, and Stabilization */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#4e6f60]">
                TRAUMA RECOVERY &amp; NERVOUS SYSTEM HEALING
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-[34px] font-light text-[#231f1d] leading-snug">
                Paced carefully with safety, stabilization, and daily regulation.
              </h3>
              <p className="font-sans-body text-sm sm:text-[15px] text-[#59524c] leading-relaxed">
                {ABOUT_DR_MAYA.trauma}
              </p>
              <p className="font-sans-body text-sm sm:text-[15px] text-[#59524c] leading-relaxed">
                {ABOUT_DR_MAYA.burnout}
              </p>
              <div className="pt-2">
                <a
                  href="#services"
                  onClick={onLearnMore}
                  className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#231f1d] pb-0.5 border-b border-[#231f1d] hover:text-[#4e6f60] hover:border-[#4e6f60] transition-colors inline-block"
                >
                  VIEW FULL PRACTICE SPECIALTIES
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
