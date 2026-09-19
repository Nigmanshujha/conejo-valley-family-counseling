import React, { useState } from 'react';
import { OFFICE_FEATURES, PRACTICE_INFO, ABOUT_DR_MAYA } from '../data/siteData';
import { MapPin, Shield, Sun, Coffee, Maximize2, X } from 'lucide-react';

interface OurOfficeProps {
  onOpenBooking?: () => void;
}

export const OurOffice: React.FC<OurOfficeProps> = ({ onOpenBooking }) => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');

  const openLightbox = (image: string, title: string) => {
    setActivePhoto(image);
    setActiveTitle(title);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
  };

  return (
    <section id="office" className="bg-[#ece5da] py-20 md:py-28 border-y border-[#e3dbcf]/70">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        
        {/* Header Block with user-provided verbatim text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 md:mb-18">
          <div className="lg:col-span-7">
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#4e6f60] mb-3">
              SANTA MONICA IN-PERSON SANCTUARY
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light text-[#231f1d] leading-[1.18]">
              A quiet, grounding space in{' '}
              <span className="font-script-accent text-[#4e6f60] font-normal italic text-4xl sm:text-5xl md:text-6xl pl-1">
                Santa Monica
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-sans-body text-sm sm:text-[15.5px] text-[#59524c] leading-relaxed">
              {ABOUT_DR_MAYA.office}
            </p>
          </div>
        </div>

        {/* 4 Featured Office Views Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
          {OFFICE_FEATURES.map((feature) => (
            <div 
              key={feature.title} 
              className="group flex flex-col bg-[#faf8f5] overflow-hidden rounded-xl border border-[#ded5c7] shadow-xs hover:border-[#4e6f60]/50 transition-all duration-300"
            >
              {/* Photo with zoom icon overlay */}
              <div 
                className="overflow-hidden aspect-[4/3] relative cursor-pointer"
                onClick={() => openLightbox(feature.image, feature.title)}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-xs text-[#231f1d] text-[11px] uppercase tracking-wider font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5 text-[#4e6f60]" />
                    View Image
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10.5px] uppercase tracking-[0.16em] text-[#4e6f60] font-medium mb-1.5 block">
                    {feature.tag}
                  </span>
                  <h3 className="font-serif-heading text-xl font-light text-[#231f1d] mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-sans-body text-xs sm:text-[13px] text-[#59524c] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Amenities & Location Summary Card */}
        <div className="bg-[#faf8f5] p-8 sm:p-10 lg:p-12 rounded-xl border border-[#ded5c7] shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-full bg-[#ece5da] text-[#4e6f60] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif-heading text-lg font-medium text-[#231f1d]">Santa Monica Office</h4>
                <p className="font-sans-body text-xs sm:text-[13px] text-[#59524c] mt-1 leading-relaxed">
                  {PRACTICE_INFO.address}<br />
                  {PRACTICE_INFO.cityStateZip}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-full bg-[#ece5da] text-[#4e6f60] shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif-heading text-lg font-medium text-[#231f1d]">Acoustic Confidentiality</h4>
                <p className="font-sans-body text-xs sm:text-[13px] text-[#59524c] mt-1 leading-relaxed">
                  Dedicated soundproofing and discreet private entry to ensure total peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-full bg-[#ece5da] text-[#4e6f60] shrink-0">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif-heading text-lg font-medium text-[#231f1d]">Natural Light &amp; Calm</h4>
                <p className="font-sans-body text-xs sm:text-[13px] text-[#59524c] mt-1 leading-relaxed">
                  Tall windows with sheer linen drapery, uncluttered decor, and calming botanicals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2.5 rounded-full bg-[#ece5da] text-[#4e6f60] shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif-heading text-lg font-medium text-[#231f1d]">In-Person &amp; Telehealth</h4>
                <p className="font-sans-body text-xs sm:text-[13px] text-[#59524c] mt-1 leading-relaxed">
                  Sessions held at 123th Street 45 W or via secure HIPAA-compliant telehealth throughout California.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#e3dbcf] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#59524c] font-sans-body text-center sm:text-left">
              Prefer remote sessions? Confidential telehealth is available for adult California residents statewide.
            </p>
            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#231f1d] pb-0.5 border-b border-[#231f1d] hover:text-[#4e6f60] hover:border-[#4e6f60] transition-colors shrink-0 cursor-pointer"
              >
                REQUEST AN IN-PERSON VISIT
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full View */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#faf8f5] rounded-xl overflow-hidden shadow-2xl border border-[#ded5c7]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#ded5c7] bg-[#faf8f5]">
              <h4 className="font-serif-heading text-lg text-[#231f1d]">{activeTitle}</h4>
              <button 
                onClick={closeLightbox}
                className="p-1.5 text-[#59524c] hover:text-[#231f1d] transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-3 bg-black/5 aspect-[4/3] max-h-[75vh] flex items-center justify-center overflow-hidden">
              <img 
                src={activePhoto} 
                alt={activeTitle} 
                className="max-w-full max-h-[72vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
