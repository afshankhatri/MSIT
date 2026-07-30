export interface LocationFaq {
  q: string;
  a: string;
}

export interface LocationTestimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface LocationData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  address: string;
  area: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbed: string;
  mapLink: string;
  nearbyAreas: string[];
  services: string[];
  testimonials: LocationTestimonial[];
  faqs: LocationFaq[];
}

export const locations: LocationData[] = [
  {
    slug: 'SOBO',
    name: 'Dongri Branch',
    shortName: 'Downtown',
    tagline: 'Our flagship service centre in the heart of the city',
    description:
      'Our Downtown/South Bombay branch is our flagship service centre, equipped to handle everything from quick laptop repairs to full-scale business AMC contracts. With a large team of certified technicians, we offer the fastest turnaround times and the widest range of services in our network.',
    address: '3, mezzanine floor, plot 133, arafat palace,nawroji hill road ,1st road,chinch-bunder,Mumbai 400009',
    area: 'Charnull / South Bombay',
    phone: '+919152549454',
    email: 'info@meridianinfotechsolutions.in',
    hours: 'Mon–Sun: 9:00 AM – 9:00 PM ',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.581672923444!2d72.83199692497669!3d18.95730785568846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf92a6e711c1%3A0xa57f1dcb575b432c!2sPETU%20pure%20edible%20tasty%20and%20unique!5e1!3m2!1sen!2sin!4v1785348093034!5m2!1sen!2sin',
    mapLink: 'https://www.google.com/maps?q=Central+Avenue+City+Centre',
    nearbyAreas: ['Dongri', 'Marine Drive', 'Fort Area', 'Nariman Point', 'Churchgate','colaba','CSMT','Mohammed-Ali-Road'],
    services: [
      'laptop-repair',
      'computer-maintenance',
      'amc-services',
      'refurbished-sales',
      'tablet-services',
      'android-services',
      'ios-services',
      'hardware-support',
      'software-support',
      'e-waste-management',
    ],
    testimonials: [
      {
        name: 'Rajesh Kumar',
        role: 'Operations Manager',
        text: 'The Downtown branch handles all our AMC needs. Their team is fast, professional, and always available when we need them.',
        rating: 5,
      },
      {
        name: 'Sneha Patel',
        role: 'Student',
        text: 'Got my laptop screen fixed here in one day. Friendly staff and fair pricing. Highly recommend this branch.',
        rating: 5,
      },
    ],
    faqs: [
      {
        q: 'What are the Downtown branch hours?',
        a: 'We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sundays from 10:00 AM to 4:00 PM.',
      },
      {
        q: 'Do you offer same-day repairs at this branch?',
        a: 'Yes. Most common repairs like screen and battery replacements are completed same-day at our Downtown branch, subject to parts availability.',
      },
      {
        q: 'Is parking available near the Downtown branch?',
        a: 'Yes, paid parking is available at Meridian Plaza basement and in the surrounding streets.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}



