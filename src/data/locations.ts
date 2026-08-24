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
    slug: 'sobo',
    name: 'Dongri Branch',
    shortName: 'Downtown',
    tagline: 'Our flagship service centre in the heart of the city',
    description:
      'Our Downtown/South Bombay branch is our flagship service centre, equipped to handle everything from quick laptop repairs to full-scale business AMC contracts. With a large team of certified technicians, we offer the fastest turnaround times and the widest range of services in our network.',
    address: '4, mezzanine floor, plot 133, arafat palace,nawroji hill road ,1st road,chinch-bunder,Mumbai 400009',
    area: 'Charnull / South Bombay',
    phone: '+919152549454',
    email: 'info@meridianinfotechsolutions.in',
    hours: 'Mon–Sun: 9:00 AM – 9:00 PM ',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886.6684886508688!2d72.83416793880511!3d18.960719632233328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf081f036933%3A0x795dd73dbc7a0b1d!2sMeridian%20Infotech%20Solutions!5e0!3m2!1sen!2sin!4v1785439109812!5m2!1sen!2sin',
    mapLink: 'https://www.google.com/maps/place/Meridian+Infotech+Solutions/@18.9588922,72.8342224,1048m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7cf081f036933:0x795dd73dbc7a0b1d!8m2!3d18.9588871!4d72.8367973!16s%2Fg%2F11zd9401ll?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D',
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
        a: 'We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sundays from 9:00 AM to 9:00 PM.',
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
{
    slug: 'kurla',
    name: 'Infinity Mobile Kurla',
    shortName: 'Kurla',
    tagline: 'Our partner space in Kurla for quick mobile repairs and services',
    description:
      'Our Kurla branch is our partner space service centre, equipped to handle everything from quick laptop repairs to full-scale business AMC contracts. With a large team of certified technicians, we offer the fastest turnaround times and the widest range of services in our network.',
    address: 'Hi tech premises Shopping Centre LIG colony Vinoba bhave nagar Kurla west Mumbai 400070',
    area: 'Bhave Nagar / Kurla',
    phone: '+919152549454',
    email: 'info@meridianinfotechsolutions.in',
    hours: 'Mon–Sun: 9:00 AM – 9:00 PM ',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4561.26784312731!2d72.87857997587626!3d19.073451352051276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c89100c97941%3A0xbaf182495cfece6c!2sInfinity%20Mobiles!5e1!3m2!1sen!2sin!4v1786708705266!5m2!1sen!2sin',
    mapLink: 'https://www.google.com/maps/place/Infinity+Mobiles/@19.0712606,72.8810282,1047m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c89100c97941:0xbaf182495cfece6c!8m2!3d19.0712555!4d72.8836031!16s%2Fg%2F11tcwlplqs?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D',
    nearbyAreas: ['Kurla station', 'Nehru Nagar', 'Kurla Kohinoor', 'Kurla kamani', 'Lokmanya Tilak Station','Bilal Masjid','kurla west','kurla east','Vinoba bhave nagar','kaju pada','LBS marg','CST Road','al-Barkaat School','Halav Pull Road'],
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
        text: 'The Kurla branch handles all our AMC needs. Their team is fast, professional, and always available when we need them.',
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
        q: 'What are the Kurla branch hours?',
        a: 'We are open Monday to Saturday from 9:00 AM to 9:00 PM, and Sundays from 9:00 AM to 9:00 PM.',
      },
      {
        q: 'Do you offer same-day repairs at this branch?',
        a: 'Yes. Most common repairs like screen and battery replacements are completed same-day at our Kurla branch, subject to parts availability.',
      },
      {
        q: 'Is parking available near the Kurla branch?',
        a: 'Yes, paid parking is available at Meridian Plaza basement and in the surrounding streets.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}






