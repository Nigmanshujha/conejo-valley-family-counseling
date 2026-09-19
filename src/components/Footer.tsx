import React from 'react';
import { PRACTICE_INFO } from '../data/siteData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="border-t border-[#e3dbcf]">
      {/* Upper Main Footer */}
      <div className="bg-white py-16 md:py-20">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Logo & Welcome text */}
            <div className="lg:col-span-4 space-y-4">
              <a href="/" className="inline-block group">
                <span className="font-serif-heading text-2xl md:text-[26px] tracking-tight font-normal text-[#231f1d] group-hover:text-[#4e6f60] transition-colors block">
                  Dr. Maya Reynolds<span className="text-[#4e6f60]">, PsyD</span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#59524c] font-sans-body block mt-0.5">
                  {PRACTICE_INFO.title} · {PRACTICE_INFO.license}
                </span>
              </a>
              <p className="font-sans-body text-sm sm:text-[14.5px] text-[#59524c] leading-relaxed max-w-sm pt-2">
                Providing grounded, evidence-based psychotherapy for anxiety, EMDR trauma recovery, and burnout in Santa Monica, California, as well as secure virtual sessions statewide.
              </p>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Navigate Column */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#231f1d]">
                NAVIGATE
              </p>
              <ul className="space-y-2.5 font-sans-body text-sm text-[#59524c]">
                <li>
                  <a href="/" className="hover:text-[#4e6f60] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#4e6f60] transition-colors">
                    About Dr. Reynolds
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#4e6f60] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#office" className="hover:text-[#4e6f60] transition-colors">
                    Our Office
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-[#4e6f60] transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <button 
                    onClick={onOpenBooking} 
                    className="text-left hover:text-[#4e6f60] transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Clinical Services Column */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#231f1d]">
                SPECIALTIES
              </p>
              <ul className="space-y-2.5 font-sans-body text-sm text-[#59524c]">
                <li>
                  <a href="#service-anxiety" className="hover:text-[#4e6f60] transition-colors">
                    Anxiety &amp; Panic
                  </a>
                </li>
                <li>
                  <a href="#service-trauma" className="hover:text-[#4e6f60] transition-colors">
                    Trauma &amp; EMDR
                  </a>
                </li>
                <li>
                  <a href="#service-burnout" className="hover:text-[#4e6f60] transition-colors">
                    Burnout &amp; High Achievers
                  </a>
                </li>
                <li>
                  <a href="#approach-regulation" className="hover:text-[#4e6f60] transition-colors">
                    Nervous System Regulation
                  </a>
                </li>
                <li>
                  <a href="#approach-somatic" className="hover:text-[#4e6f60] transition-colors">
                    Somatic Practices
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3 space-y-4 font-sans-body text-sm text-[#59524c]">
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#231f1d]">
                SANTA MONICA OFFICE
              </p>
              <p className="leading-relaxed">
                {PRACTICE_INFO.address}<br />
                {PRACTICE_INFO.cityStateZip}
              </p>
              <p className="space-y-1">
                <a 
                  href={`mailto:${PRACTICE_INFO.email}`} 
                  className="block hover:text-[#4e6f60] transition-colors"
                >
                  {PRACTICE_INFO.email}
                </a>
                <a 
                  href={`tel:${PRACTICE_INFO.phone.replace(/\./g, '')}`} 
                  className="block hover:text-[#4e6f60] transition-colors"
                >
                  {PRACTICE_INFO.phone}
                </a>
              </p>
              <p className="text-xs text-[#736c65] pt-1 leading-relaxed">
                In-person appointments in Santa Monica, CA · Telehealth throughout California
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Strip in Coastal Sage */}
      <div className="bg-[#4e6f60] text-white py-4 px-6 text-center text-xs font-sans-body">
        <div className="w-full max-w-[1700px] mx-auto flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-white/95">
          <a href="#terms" className="hover:underline transition-colors">Terms of Use</a>
          <span>|</span>
          <a href="#privacy" className="hover:underline transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#disclaimer" className="hover:underline transition-colors">Good Faith Estimate &amp; Disclaimer</a>
          <span>|</span>
          <span>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
