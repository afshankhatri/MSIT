export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  date: string;
  initials: string;
  color: string;
}

// Hardcoded testimonials styled to look like Google Reviews.
// Clicking a card opens the Google reviews page (see REVIEWS_URL).
export const REVIEWS_URL = 'https://www.google.com/maps';

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Operations Manager',
    company: 'Stellar Logistics',
    rating: 5,
    text: 'Meridian IT Solutions has been our AMC partner for over three years. Their response time is incredible and they have never let us down. Our entire office runs smoothly because of their proactive maintenance.',
    date: '2 weeks ago',
    initials: 'RK',
    color: 'from-brand-500 to-brand-700',
  },
  {
    name: 'Priya Sharma',
    role: 'Principal',
    company: 'Greenwood Academy',
    rating: 5,
    text: 'We had 40 lab computers that needed maintenance and upgrades. Meridian handled everything — RAM upgrades, SSD installations, and software setup — all during the summer break. Highly professional team.',
    date: '1 month ago',
    initials: 'PS',
    color: 'from-accent-500 to-accent-700',
  },
  {
    name: 'Mohammed Faisal',
    role: 'Small Business Owner',
    company: 'Faisal Trading Co.',
    rating: 5,
    text: 'My laptop would not turn on right before a major client presentation. Meridian diagnosed a motherboard issue and had it fixed the same day. They saved my business deal. I cannot thank them enough.',
    date: '3 weeks ago',
    initials: 'MF',
    color: 'from-brand-400 to-accent-500',
  },
  {
    name: 'Anita Desai',
    role: 'Freelance Designer',
    company: 'Independent',
    rating: 5,
    text: 'I bought a refurbished MacBook from Meridian and it has been running flawlessly for over a year. The price was unbeatable and they were completely transparent about the device condition. Trustworthy people.',
    date: '2 months ago',
    initials: 'AD',
    color: 'from-brand-600 to-brand-800',
  },
  {
    name: 'Vikram Reddy',
    role: 'IT Head',
    company: 'Nova Healthcare',
    rating: 5,
    text: 'Managing IT for a clinic with 60+ computers is no small task. Meridian AMC takes that burden off our shoulders completely. Their quarterly visits keep everything running and their remote support is instant.',
    date: '1 month ago',
    initials: 'VR',
    color: 'from-accent-400 to-accent-600',
  },
  {
    name: 'Sneha Patel',
    role: 'College Student',
    company: 'City University',
    rating: 5,
    text: 'Cracked my laptop screen and thought I would have to buy a new one. Meridian replaced the screen for a fraction of the cost and had it ready the next day. Friendly, honest, and fast service.',
    date: '3 weeks ago',
    initials: 'SP',
    color: 'from-brand-500 to-brand-600',
  },
  {
    name: 'Arjun Mehta',
    role: 'Store Manager',
    company: 'TechMart Retail',
    rating: 5,
    text: 'We needed to dispose of 30 old computers and monitors. Meridian collected everything for free, gave us a disposal certificate, and even paid us for the devices that still had resale value. Excellent e-waste service.',
    date: '2 months ago',
    initials: 'AM',
    color: 'from-brand-400 to-brand-600',
  },
  {
    name: 'Fatima Khan',
    role: 'Architect',
    company: 'Khan Design Studio',
    rating: 5,
    text: 'My iPad screen shattered and Apple quoted me an outrageous price. Meridian fixed it for half the cost with a warranty. The touch sensitivity is perfect. I am a customer for life now.',
    date: '1 month ago',
    initials: 'FK',
    color: 'from-accent-500 to-accent-600',
  },
];
