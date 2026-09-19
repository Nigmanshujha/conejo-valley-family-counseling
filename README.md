# Practice Website & Client Consultation Platform

A modern, responsive client-facing web platform designed for clinical practices, private therapy offices, and mental health professionals. This application provides prospective clients with a clear, calm, and accessible introduction to practice details, therapeutic modalities, office locations, and consultation scheduling.

---

## Features

- **Modern Editorial Design**: Built with a calm, coastal design system featuring custom typography, soothing color palettes, and responsive grid layouts.
- **Clinician Profiles & Bio Sections**: Dedicated layout components to highlight credentials, core philosophies, client focus areas, and evidence-based clinical approaches (CBT, EMDR, Somatic Regulation, Mindfulness).
- **Interactive Office Gallery**: Expandable lightbox image views allowing prospective clients to explore physical consultation spaces and office amenities before booking.
- **Service & Specialty Breakdowns**: Structured overview cards for specialized care tracks including Anxiety, Trauma, Executive Pressure, and Burnout.
- **Frictionless Consultation Requests**: Integrated request modal allowing visitors to select their preferred format (In-Person vs. Telehealth), primary focus, and contact information.
- **Fully Responsive & Accessible**: Optimized for desktop, tablet, and mobile browsers with touch-friendly navigation and clear visual hierarchy.

---

## Tech Stack

- **Framework**: React / Next.js (or Vite)
- **Styling**: Tailwind CSS / PostCSS
- **Icons**: Lucide React / Heroicons
- **Language**: TypeScript / JavaScript
- **Deployment**: Vercel / Netlify

---

## Getting Started

### Prerequisites

Ensure you have Node.js (v18.0 or higher) and npm/yarn installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/conejo-valley-family-counseling.git](https://github.com/your-username/conejo-valley-family-counseling.git)
Navigate into the project directory:

Bash
cd conejo-valley-family-counseling
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal).

Project Structure
├── public/              # Static assets and media files
├── src/
│   ├── components/      # UI components (Hero, About, Office, Modalities, Contact)
│   ├── data/            # Site configuration, text content, and practitioner data
│   ├── styles/          # Global styles and Tailwind configuration
│   └── App.tsx          # Main application entry point
├── package.json
└── README.md
