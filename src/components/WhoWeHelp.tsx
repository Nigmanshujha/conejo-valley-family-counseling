import React from 'react';
import { IMAGES, ABOUT_DR_MAYA } from '../data/siteData';

export const WhoWeHelp: React.FC = () => {
  const cards = [
    {
      title: "Anxiety & Chronic Worry",
      tag: "Persistent Overthinking & Insomnia",
      image: IMAGES.heroReflective,
      alt: "Thoughtful adult taking a quiet moment of reflection in natural light",
      description: "For thoughtful, self-aware adults who feel functional on the outside while quietly struggling with constant worry, racing thoughts, muscle tension, difficulty sleeping, or a nagging sense that you’re always bracing for something to go wrong.",
    },
    {
      title: "Trauma & EMDR Therapy",
      tag: "Paced Healing in Santa Monica",
      image: IMAGES.office1,
      alt: "Quiet sunlit consultation space with exposed brick pillars and comfortable sofa",
      description: "For adults carrying the impact of single-incident trauma or complex, long-standing patterns from childhood, relationships, or chronic stress. Paced carefully with an emphasis on safety, nervous system stabilization, and gentle reprocessing.",
    },
    {
      title: "Burnout & High Achievers",
      tag: "Entrepreneurs, Creatives & Executives",
      image: IMAGES.office2,
      alt: "Serene counseling lounge with comfortable seating and curated library",
      description: "For entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress and perfectionism. Therapy becomes a space to slow down, reconnect, and build sustainable ways of living.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        {/* Section Heading - Left Aligned */}
        <div className="text-left mb-14 md:mb-18 max-w-3xl">
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#4e6f60] mb-2">
            CLIENT FOCUS &amp; AREAS OF CARE
          </p>
          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-light text-[#231f1d]">
            Who I{' '}
            <span className="font-script-accent text-[#4e6f60] font-normal italic text-5xl sm:text-6xl md:text-7xl align-middle pl-1">
              support
            </span>
          </h2>
          <p className="font-sans-body text-sm sm:text-[15.5px] text-[#59524c] mt-4 leading-relaxed">
            {ABOUT_DR_MAYA.intro}
          </p>
        </div>

        {/* 3 Columns Grid with Square/4:3 Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col group">
              {/* Photo */}
              <div className="overflow-hidden aspect-[4/3] rounded-xl border border-[#ded5c7] mb-6 bg-[#faf8f5] shadow-xs">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Tag */}
              <span className="text-[10.5px] uppercase tracking-[0.16em] text-[#4e6f60] font-medium mb-1.5 block">
                {card.tag}
              </span>

              {/* Title */}
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-normal text-[#231f1d] mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-sans-body text-[#59524c] text-sm sm:text-[15px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
