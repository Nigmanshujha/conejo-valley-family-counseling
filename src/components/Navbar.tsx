import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, PRACTICE_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileFolders, setExpandedMobileFolders] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileFolder = (label: string) => {
    setExpandedMobileFolders(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <header className="relative w-full bg-[#faf8f5] border-b border-[#e3dbcf]/60 z-30">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-14 py-5 md:py-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="/" 
          className="group inline-flex flex-col transition-opacity hover:opacity-90"
          aria-label="Dr. Maya Reynolds, PsyD Home"
        >
          <span className="font-serif-heading text-xl sm:text-2xl md:text-[26px] tracking-tight font-normal text-[#231f1d] group-hover:text-[#4e6f60] transition-colors">
            Dr. Maya Reynolds<span className="text-[#4e6f60] font-light">, PsyD</span>
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#59524c] font-sans-body">
            Clinical Psychologist · Santa Monica
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-[#231f1d]">
          {NAV_ITEMS.map((item) => {
            const hasDropdown = item.children && item.children.length > 0;
            return (
              <div 
                key={item.label} 
                className="relative group py-2"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-medium text-[#231f1d] hover:text-[#4e6f60] transition-colors relative py-1"
                >
                  <span>{item.label}</span>
                </a>

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <div 
                    className={`absolute top-full left-0 min-w-[260px] bg-[#faf8f5] border border-[#e3dbcf] shadow-lg py-2 transition-all duration-200 origin-top-left z-50 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 scale-100 pointer-events-auto visible' 
                        : 'opacity-0 scale-95 pointer-events-none invisible'
                    }`}
                  >
                    {item.children!.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-[13px] text-[#231f1d] hover:text-[#4e6f60] hover:bg-[#ece5da]/60 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Contact CTA & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium text-[#231f1d] border border-[#231f1d] rounded-full hover:bg-[#231f1d] hover:text-[#ffffff] transition-all duration-300 cursor-pointer"
          >
            BOOK CONSULTATION
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#231f1d] hover:text-[#4e6f60] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] md:top-[85px] bottom-0 bg-[#faf8f5] z-40 overflow-y-auto px-6 py-8 border-t border-[#e3dbcf]">
          <div className="flex flex-col space-y-5">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isExpanded = expandedMobileFolders[item.label];

              return (
                <div key={item.label} className="border-b border-[#e3dbcf]/60 pb-3">
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileFolder(item.label)}
                        className="w-full flex items-center justify-between text-lg font-serif-heading text-[#231f1d] py-1 text-left"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className={`w-4 h-4 text-[#59524c] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="pl-4 pt-2 pb-1 space-y-2.5">
                          {item.children!.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-[14px] text-[#59524c] hover:text-[#4e6f60] transition-colors py-1"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-serif-heading text-[#231f1d] hover:text-[#4e6f60] transition-colors py-1"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}

            <div className="pt-6 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-[12px] tracking-[0.18em] uppercase font-medium text-white bg-[#231f1d] rounded-full hover:bg-[#4e6f60] transition-colors cursor-pointer"
              >
                Book Consultation
              </button>

              <div className="text-xs text-[#59524c] font-sans-body space-y-1 pt-2">
                <p className="font-medium text-[#231f1d]">{PRACTICE_INFO.name}</p>
                <p>{PRACTICE_INFO.address}, {PRACTICE_INFO.cityStateZip}</p>
                <p>Phone: {PRACTICE_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
