import React from 'react';
import { IMAGES } from '../data/siteData';

export const HonorBanner: React.FC = () => {
  return (
    <section className="bg-white py-18 md:py-24">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Wide Peaceful Ocean Image */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden shadow-xs aspect-[16/10] w-full max-w-[760px] mx-auto lg:mx-0">
              <img
                src={IMAGES.gentleOceanSunset}
                alt="Tranquil California coast horizon with gentle sunlight reflecting across the water"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Heading with Sage Script Ampersand */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-light text-[#231f1d] leading-[1.22]">
              Honoring what you carry{' '}
              <span className="font-script-accent text-[#4e6f60] font-normal italic text-4xl sm:text-5xl md:text-6xl inline-block px-1 align-baseline">
                &amp;
              </span>{' '}
              cultivating genuine resilience.
            </h2>
            <p className="font-sans-body text-sm sm:text-[15px] text-[#59524c] leading-relaxed mt-5">
              Therapy is not about pushing harder. It’s an intentional practice of stepping out of survival mode and rediscovering a steady, secure relationship with yourself.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
