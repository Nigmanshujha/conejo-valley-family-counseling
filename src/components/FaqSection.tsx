import React, { useState } from 'react';
import { FAQS } from '../data/siteData';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="bg-white py-18 md:py-24 border-t border-[#e3dbcf]/60">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#59524c] mb-3">
              HELPFUL CLARITY
            </p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-[44px] font-light text-[#231f1d] leading-tight">
              Frequently asked{' '}
              <span className="font-script-accent text-[#4e6f60] font-normal italic text-4xl sm:text-5xl md:text-[54px] pl-1">
                questions
              </span>
            </h2>
            <p className="font-sans-body text-sm sm:text-[15px] text-[#59524c] mt-4 leading-relaxed max-w-sm">
              Here are common questions about in-person therapy in Santa Monica, California telehealth, insurance, and my clinical approach.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-8 divide-y divide-[#e3dbcf]/70">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="py-5 sm:py-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-serif-heading text-xl sm:text-2xl text-[#231f1d] group-hover:text-[#4e6f60] transition-colors pr-6 font-light">
                      {faq.question}
                    </h3>
                    <div className="p-1 rounded-full text-[#4e6f60] shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 transition-transform duration-200" />
                      ) : (
                        <Plus className="w-5 h-5 transition-transform duration-200" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 font-sans-body text-sm sm:text-[15px] text-[#59524c] leading-relaxed animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
