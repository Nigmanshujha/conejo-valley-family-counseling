import React from 'react';
import { AREAS_OF_EXPERTISE_COL1, AREAS_OF_EXPERTISE_COL2 } from '../data/siteData';

export const ExpertiseCloud: React.FC = () => {
  return (
    <section id="approach" className="bg-white py-18 md:py-24">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] font-light text-[#231f1d] leading-tight">
              Clinical areas of{' '}
              <span className="font-script-accent text-[#4e6f60] font-normal italic text-4xl sm:text-5xl md:text-[54px] pl-1">
                focus
              </span>
            </h2>
            <p className="font-sans-body text-xs uppercase tracking-[0.18em] text-[#59524c] mt-4">
              EVIDENCE-BASED INTEGRATIVE PSYCHOTHERAPY
            </p>
          </div>

          {/* Right Areas Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-0">
            {/* Column 1 */}
            <div>
              {AREAS_OF_EXPERTISE_COL1.map((item) => (
                <div key={item.label} className="border-b border-[#e3dbcf]/80 py-4.5">
                  <a 
                    href={item.href}
                    className="text-[12px] sm:text-[13px] uppercase tracking-[0.16em] font-medium text-[#231f1d] hover:text-[#4e6f60] transition-colors block"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div>
              {AREAS_OF_EXPERTISE_COL2.map((item) => (
                <div key={item.label} className="border-b border-[#e3dbcf]/80 py-4.5">
                  <a 
                    href={item.href}
                    className="text-[12px] sm:text-[13px] uppercase tracking-[0.16em] font-medium text-[#231f1d] hover:text-[#4e6f60] transition-colors block"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
