import React from 'react';
import { THREE_CORE_SERVICES } from '../data/siteData';

export const SpecialtiesGrid: React.FC = () => {
  return (
    <section id="services" className="bg-white py-18 md:py-24 border-t border-[#e3dbcf]/60">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-4">
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] font-light text-[#231f1d] leading-tight">
              Primary{' '}
              <span className="font-script-accent text-[#4e6f60] font-normal italic text-4xl sm:text-5xl md:text-[54px] pl-1">
                services
              </span>{' '}
              include…
            </h2>
            <p className="font-sans-body text-xs uppercase tracking-[0.2em] text-[#59524c] mt-4 leading-relaxed">
              SPECIALIZED CARE IN SANTA MONICA &amp; CALIFORNIA TELEHEALTH
            </p>
          </div>

          {/* Right 3 Services Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {THREE_CORE_SERVICES.map((item, index) => (
              <div 
                key={item.id} 
                className="flex flex-col justify-between p-7 md:p-8 bg-[#faf8f5] rounded-xl border border-[#e3dbcf]/60 hover:border-[#4e6f60]/40 transition-colors"
              >
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-[#4e6f60] uppercase mb-3 block">
                    SERVICE 0{index + 1}
                  </span>
                  <h3 className="font-serif-heading text-2xl sm:text-[26px] font-normal text-[#231f1d] mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans-body text-[#59524c] text-[13.5px] sm:text-[14.5px] leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div>
                  <a
                    href={item.href}
                    className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#231f1d] pb-0.5 border-b border-[#231f1d] hover:text-[#4e6f60] hover:border-[#4e6f60] transition-colors inline-block"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
