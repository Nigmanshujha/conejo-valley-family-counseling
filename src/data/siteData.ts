import { NavItem, SpecialtyItem, TeamMember, FaqItem, OfficeFeature } from '../types';

// Authentic visual assets matching Dr. Maya Reynolds and her Santa Monica practice
import drMayaPortrait from '../assets/images/dr_maya_theme_1789732063879.jpg';
import officeBrickWindow from '../assets/images/office_brick_window_1789730925254.jpg';
import officeLoungeBook from '../assets/images/office_lounge_book_1789730949071.jpg';
import officeSunlight from '../assets/images/office_coastal_sunlight_1789731354769.jpg';
import officeBookshelf from '../assets/images/office_bookshelf_corner_1789731373246.jpg';
import santaMonicaCalm from '../assets/images/santa_monica_calm_1789730293836.jpg';
import clientReflective from '../assets/images/client_reflective_theme_1789732079574.jpg';

export const PRACTICE_INFO = {
  name: "Dr. Maya Reynolds, PsyD",
  title: "Licensed Clinical Psychologist",
  license: "PSY #34129",
  address: "123th Street 45 W",
  cityStateZip: "Santa Monica, CA 90401",
  fullAddress: "123th Street 45 W, Santa Monica, CA 90401",
  phone: "310.458.2910",
  email: "maya@mayareynoldspsyd.com",
  tagline: "Therapy for anxiety, trauma, and burnout for thoughtful adults in Santa Monica & across California.",
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Anxiety & Panic Therapy", href: "#service-anxiety" },
      { label: "Trauma & EMDR Therapy", href: "#service-trauma" },
      { label: "Burnout & Perfectionism", href: "#service-burnout" },
    ],
  },
  {
    label: "Approach",
    href: "#approach",
    children: [
      { label: "Cognitive Behavioral Therapy (CBT)", href: "#approach-cbt" },
      { label: "EMDR Therapy", href: "#approach-emdr" },
      { label: "Mindfulness-Based Practices", href: "#approach-mindfulness" },
      { label: "Body-Oriented Somatics", href: "#approach-somatic" },
    ],
  },
  {
    label: "Our Office",
    href: "#office",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
];

export const IMAGES = {
  // Dr. Maya Reynolds portrait
  drMaya: drMayaPortrait,
  
  // Santa Monica coastal grounding & calm
  coastalCalm: santaMonicaCalm,
  
  // Office photographs reflecting Santa Monica sanctuary
  office1: officeBrickWindow,
  office2: officeLoungeBook,
  officeSunlight: officeSunlight,
  officeBookshelf: officeBookshelf,

  // Reflective and coastal imagery
  heroReflective: clientReflective,
  gentleOceanSunset: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80",
  mindfulSlowing: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
};

// All 8 paragraphs from Dr. Maya Reynolds' profile document preserved verbatim
export const ABOUT_DR_MAYA = {
  headline: "About Dr. Maya Reynolds, PsyD",
  // Paragraph 1
  intro: "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
  // Paragraph 2
  p2: "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
  // Paragraph 3
  approach: "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.",
  // Paragraph 4
  trauma: "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.",
  // Paragraph 5
  burnout: "In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
  // Paragraph 6
  office: "I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
  // Paragraph 7
  philosophy: "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
  // Paragraph 8
  fit: "If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.",
};

export const THERAPIST_BIO: TeamMember = {
  name: "Dr. Maya Reynolds",
  title: "PsyD, Licensed Clinical Psychologist",
  href: "#about",
  credentials: "PSY #34129 · Santa Monica, CA & Statewide Telehealth",
  bio: ABOUT_DR_MAYA.intro,
  image: drMayaPortrait,
};

// 3 Core Services with verbatim text from Dr. Maya Reynolds' profile
export const THREE_CORE_SERVICES: SpecialtyItem[] = [
  {
    id: "anxiety-panic",
    title: "Anxiety & Panic Therapy",
    description: "Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Together, we unpack persistent overthinking and restore calm to your physiology.",
    href: "#service-anxiety",
  },
  {
    id: "trauma-emdr",
    title: "Trauma & EMDR Therapy",
    description: "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as complex patterns stemming from childhood, relationships, or chronic stress. Paced carefully with an emphasis on safety, stabilization, and daily regulation.",
    href: "#service-trauma",
  },
  {
    id: "burnout-perfectionism",
    title: "Burnout & Executive Stress",
    description: "Supporting clients dealing with professional burnout, perfectionism, and high internal pressure—especially entrepreneurs, creatives, and professionals who feel disconnected after years of pushing through stress. A structured space to slow down, reconnect, and build sustainable ways of living.",
    href: "#service-burnout",
  },
];

// Evidence-based methods integrated in Dr. Maya Reynolds' approach
export const APPROACH_MODALITIES = [
  {
    id: "cbt",
    name: "Cognitive-Behavioral Therapy (CBT)",
    summary: "Practical tools to recognize and unhook from exhausting thought cycles, cognitive distortions, and persistent rumination.",
    focus: "Cognitive Restructuring & Behavioral Shifts",
  },
  {
    id: "emdr",
    name: "EMDR Therapy",
    summary: "Carefully paced bilateral stimulation to reprocess traumatic memories and distress so past experiences stop hijacking the present.",
    focus: "Trauma Processing & Desensitization",
  },
  {
    id: "mindfulness",
    name: "Mindfulness-Based Practices",
    summary: "Grounded present-moment awareness to cultivate stillness, emotional non-reactivity, and self-compassion amid high demands.",
    focus: "Attention & Stress Reduction",
  },
  {
    id: "somatic",
    name: "Body-Oriented Somatic Work",
    summary: "Techniques targeting physical tension, breathing patterns, and autonomic nervous system regulation for felt physiological ease.",
    focus: "Nervous System Stabilization",
  },
];

export const AREAS_OF_EXPERTISE_COL1 = [
  { label: "Anxiety & Panic Disorders", href: "#service-anxiety" },
  { label: "Trauma & EMDR Therapy", href: "#service-trauma" },
  { label: "Professional Burnout", href: "#service-burnout" },
  { label: "Perfectionism & High Pressure", href: "#service-burnout" },
  { label: "Nervous System Regulation", href: "#approach" },
  { label: "Somatic Body-Oriented Practices", href: "#approach" },
];

export const AREAS_OF_EXPERTISE_COL2 = [
  { label: "Cognitive Behavioral Therapy (CBT)", href: "#approach" },
  { label: "Mindfulness-Based Therapy", href: "#approach" },
  { label: "Overthinking & Rumination", href: "#service-anxiety" },
  { label: "Complex Relational Trauma", href: "#service-trauma" },
  { label: "Entrepreneurs & Creative Executives", href: "#service-burnout" },
  { label: "Santa Monica Office & California Telehealth", href: "#office" },
];

// Detailed Office Features matching user uploaded office photos
export const OFFICE_FEATURES: OfficeFeature[] = [
  {
    title: "Sunlit Loft & Exposed Brick",
    tag: "Main Seating Area · Santa Monica Office",
    description: "Exposed red brick pillars frame tall industrial multipane windows draped in sheer linen curtains. Warm California sunlight pours across honey hardwood floors onto a plush charcoal-gray sofa and inviting modern armchair.",
    image: officeBrickWindow,
  },
  {
    title: "Counseling Lounge & Library",
    tag: "Uncluttered & Calming Atmosphere",
    description: "A serene, private room with comfortable seating, living botanical greenery, an indoor olive tree, coastal aerial artwork, and curated books designed to help clients feel an immediate sense of ease upon arriving.",
    image: officeLoungeBook,
  },
  {
    title: "Natural California Daylight",
    tag: "Peaceful Morning Light & Gentle Shadows",
    description: "Abundant natural light filters gently into the consultation room, creating an airy, peaceful ambiance that soothes the sensory system and supports quiet emotional reflection.",
    image: officeSunlight,
  },
  {
    title: "Thoughtful & Grounding Details",
    tag: "Acoustic Privacy & Comfort",
    description: "From warm travertine and ceramic textures to soundproofing and dedicated privacy, every physical element at 123th Street 45 W is curated for emotional safety and clinical discretion.",
    image: officeBookshelf,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Who do you typically work with in your practice?",
    answer: "I specialize in working with thoughtful, high-achieving, and self-aware adults who often appear completely functional on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they are always bracing for something to go wrong. Many of my clients are entrepreneurs, creatives, or professionals living and working in fast-paced environments.",
  },
  {
    question: "Do you offer in-person sessions, virtual therapy, or both?",
    answer: "I offer both in-person therapy from my Santa Monica office located at 123th Street 45 W, Santa Monica, CA 90401, as well as secure, HIPAA-compliant telehealth sessions for adult clients located anywhere in California.",
  },
  {
    question: "What is your clinical approach to therapy?",
    answer: "I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological sides of what you are experiencing.",
  },
  {
    question: "How do you approach trauma and EMDR therapy?",
    answer: "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life—not just during sessions.",
  },
  {
    question: "How do you help with burnout and perfectionism?",
    answer: "Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through high stress. Therapy becomes a confidential space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.",
  },
  {
    question: "What is your office environment like in Santa Monica?",
    answer: "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the physical space itself helps them feel more at ease the moment they arrive.",
  },
  {
    question: "How do I schedule an initial consultation?",
    answer: "You can click 'Book a Consultation' on this page or email maya@mayareynoldspsyd.com to request an initial phone consultation. We will discuss your goals, answer any questions, and determine if working together feels like the right fit.",
  },
];
