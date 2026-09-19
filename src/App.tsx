import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HopeSection } from './components/HopeSection';
import { WhoWeHelp } from './components/WhoWeHelp';
import { BeliefBanner } from './components/BeliefBanner';
import { SpecialtiesGrid } from './components/SpecialtiesGrid';
import { OurOffice } from './components/OurOffice';
import { HowWeWork } from './components/HowWeWork';
import { HonorBanner } from './components/HonorBanner';
import { ExpertiseCloud } from './components/ExpertiseCloud';
import { FaqSection } from './components/FaqSection';
import { ScheduleSection } from './components/ScheduleSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#231f1d] selection:bg-[#4e6f60]/20 selection:text-[#231f1d]">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. About / Introduction */}
        <HopeSection />

        {/* 4. Who I Support */}
        <WhoWeHelp />

        {/* 5. Collaborative Philosophy Banner */}
        <BeliefBanner />

        {/* 6. Three Primary Services */}
        <SpecialtiesGrid />

        {/* 7. NEW SECTION: Our Office (Santa Monica In-Person Sanctuary) */}
        <OurOffice onOpenBooking={handleOpenBooking} />

        {/* 8. Clinical Methodology & Approach */}
        <HowWeWork onLearnMore={() => {
          const el = document.getElementById('approach');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 9. Resilience & Growth Banner */}
        <HonorBanner />

        {/* 10. Clinical Areas of Focus */}
        <ExpertiseCloud />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Consultation Callout */}
        <ScheduleSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 13. Footer & Legal Information */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 14. Consultation Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
