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
export const REVIEWS_URL = 'https://www.google.com/search?q=Meridian+Infotech+Solutions+&sca_esv=2afcaab3ea49a2cf&rlz=1C1ONGR_enIN1178IN1178&biw=1536&bih=743&sxsrf=APpeQnvCQrJIJK_C5iVPL8h78B775mTFew%3A1785477987645&ei=Yztsaq_4JuCI4-EP__-1wQw&ved=0ahUKEwjvtdTpn_yVAxVgxDgGHf9_LcgQ4dUDCBA&uact=5&oq=Meridian+Infotech+Solutions+&gs_lp=Egxnd3Mtd2l6LXNlcnAiHE1lcmlkaWFuIEluZm90ZWNoIFNvbHV0aW9ucyBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz-serp#lrd=0x3be7cf081f036933:0x795dd73dbc7a0b1d,3,,,,';

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Operations Manager',
    company: 'Stellar Logistics',
    rating: 4,
    text: 'Meridian InfoTech Solutions has been our AMC partner for over three years. Their response time is incredible and they have never let us down. Our entire office runs smoothly because of their proactive maintenance.',
    date: '2 weeks ago',
    initials: 'RK',
    color: 'from-brand-500 to-brand-700',
  },
  {
    name: 'Priya Sharma',
    role: 'Principal',
    company: 'Greenwood Academy',
    rating: 4.5,
    text: 'We had 40 lab computers that needed maintenance and upgrades. Meridian handled everything — RAM upgrades, SSD installations, and software setup — all during the summer break. Highly professional team.',
    date: '1 month ago',
    initials: 'PS',
    color: 'from-accent-500 to-accent-700',
  },
  {
    name: 'Mohammed Faisal',
    role: 'Small Business Owner',
    company: 'Faisal Trading Co.',
    rating: 4.8,
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
    rating: 4.9,
    text: 'Managing IT for a clinic with 60+ computers is no small task. Meridian AMC takes that burden off our shoulders completely. Their quarterly visits keep everything running and their remote support is instant.',
    date: '1 month ago',
    initials: 'VR',
    color: 'from-accent-400 to-accent-600',
  },
  {
    name: 'Sneha Patel',
    role: 'College Student',
    company: 'City University',
    rating: 4.3,
    text: 'Cracked my laptop screen and thought I would have to buy a new one. Meridian replaced the screen for a fraction of the cost and had it ready the next day. Friendly, honest, and fast service.',
    date: '3 weeks ago',
    initials: 'SP',
    color: 'from-brand-500 to-brand-600',
  },
  {
    name: 'Arjun Mehta',
    role: 'Store Manager',
    company: 'TechMart Retail',
    rating: 4.5,
    text: 'We needed to dispose of 30 old computers and monitors. Meridian collected everything for free, gave us a disposal certificate, and even paid us for the devices that still had resale value. Excellent e-waste service.',
    date: '2 months ago',
    initials: 'AM',
    color: 'from-brand-400 to-brand-600',
  },
  {
    name: 'Fatima Khan',
    role: 'Architect',
    company: 'Khan Design Studio',
    rating: 4,
    text: 'My iPad screen shattered and Apple quoted me an outrageous price. Meridian fixed it for half the cost with a warranty. The touch sensitivity is perfect. I am a customer for life now.',
    date: '1 month ago',
    initials: 'FK',
    color: 'from-accent-500 to-accent-600',
  },
];
