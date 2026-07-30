import {
  Laptop,
  Monitor,
  Tablet,
  ShieldCheck,
  HardDrive,
  Code2,
  Smartphone,
  Apple,
  Recycle,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  icon: LucideIcon;
  accent: string;
  category: 'hardware' | 'software' | 'devices' | 'business';
  summary: string;
  description: string;
  problems: string[];
  whoItsFor: string[];
  whatsIncluded: string[];
  whyChooseUs: string[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: 'laptop-repair',
    title: 'Laptop Repair & Maintenance',
    shortTitle: 'Laptop Repair',
    tagline: 'Fast, reliable fixes for every laptop brand',
    icon: Laptop,
    accent: 'from-brand-500 to-brand-600',
    category: 'hardware',
    summary:
      'Screen replacements, keyboard fixes, battery swaps, charging port repairs, and full diagnostics for all laptop brands.',
    description:
      'Whether your laptop is running slow, has a cracked screen, or will not charge, our certified technicians get you back up and running quickly. We service every major brand including Dell, HP, Lenovo, Apple, ASUS, and Acer using genuine parts and a transparent pricing model.',
    problems: [
      'Cracked or flickering laptop screens',
      'Laptop will not charge or hold battery',
      'Overheating and sudden shutdowns',
      'Broken or unresponsive keyboards',
      'Liquid damage and spill recovery',
      'Slow performance and boot failures',
    ],
    whoItsFor: [
      'Professionals who depend on their laptop daily',
      'Students needing quick turnaround repairs',
      'Businesses maintaining a fleet of laptops',
      'Anyone with a laptop that is out of warranty',
    ],
    whatsIncluded: [
      'Free diagnostic assessment',
      'Screen, keyboard, and battery replacement',
      'Charging port and motherboard repair',
      'Data backup before any hardware work',
      'Thermal cleaning and repasting',
      '90-day repair warranty',
    ],
    whyChooseUs: [
      'Genuine and certified replacement parts',
      'Most repairs completed within 24–48 hours',
      'Transparent pricing with no hidden charges',
      'Decade of experience across all laptop brands',
    ],
    faqs: [
      {
        q: 'Do you repair all laptop brands?',
        a: 'Yes. We service Dell, HP, Lenovo, Apple, ASUS, Acer, MSI, Microsoft Surface, and most other brands. If you are unsure, just bring it in for a free diagnostic.',
      },
      {
        q: 'How long does a typical repair take?',
        a: 'Most common repairs like screen or battery replacements are completed within 24 to 48 hours. Complex motherboard repairs may take 3–5 days depending on parts availability.',
      },
      {
        q: 'Will I lose my data during the repair?',
        a: 'We always back up your data before any hardware work that could risk it. For software-only fixes, your data stays untouched unless we discuss it with you first.',
      },
      {
        q: 'Do you offer a warranty on repairs?',
        a: 'Yes, all repairs come with a 90-day warranty covering both parts and labour for the specific issue addressed.',
      },
    ],
  },
  {
    slug: 'computer-maintenance',
    title: 'Computer Maintenance & Repair',
    shortTitle: 'Computer Repair',
    tagline: 'Keep your desktops running at peak performance',
    icon: Monitor,
    accent: 'from-brand-500 to-brand-700',
    category: 'hardware',
    summary:
      'Hardware upgrades, virus removal, performance tuning, and full diagnostics for desktop PCs and all-in-ones.',
    description:
      'From sluggish office desktops to high-end workstations, we provide comprehensive maintenance and repair services. We handle hardware upgrades, virus and malware removal, operating system reinstalls, and preventive maintenance to keep your machines reliable.',
    problems: [
      'Slow boot times and sluggish performance',
      'Frequent crashes or blue screens',
      'Virus, malware, or ransomware infections',
      'Failing hard drives or SSD upgrades',
      'RAM and graphics card upgrades',
      'Power supply and motherboard issues',
    ],
    whoItsFor: [
      'Offices and businesses with desktop workstations',
      'Home users with performance issues',
      'Gamers needing hardware upgrades',
      'Schools and labs maintaining multiple units',
    ],
    whatsIncluded: [
      'Full hardware and software diagnostic',
      'Virus and malware removal',
      'Hardware upgrades (RAM, SSD, GPU)',
      'OS installation and driver updates',
      'Dust cleaning and thermal maintenance',
      'Performance optimization report',
    ],
    whyChooseUs: [
      'Experienced with both custom builds and branded PCs',
      'Same-day service for most software issues',
      'Preventive maintenance plans available',
      'On-site service for businesses available',
    ],
    faqs: [
      {
        q: 'Can you speed up my old computer?',
        a: 'Absolutely. In most cases, an SSD upgrade and a RAM increase can make an old computer feel brand new. We assess your machine and recommend the most cost-effective upgrades.',
      },
      {
        q: 'Do you do on-site visits for offices?',
        a: 'Yes, we offer on-site maintenance for businesses with multiple computers. Contact us to set up a maintenance schedule.',
      },
      {
        q: 'Can you remove ransomware without losing my files?',
        a: 'In many cases, yes. We use specialized tools to remove ransomware and recover encrypted files. Success depends on the specific strain, so bring it in as early as possible.',
      },
    ],
  },
  {
    slug: 'amc-services',
    title: 'Annual Maintenance Contracts (AMC)',
    shortTitle: 'AMC Services',
    tagline: 'Worry-free IT maintenance, all year round',
    icon: ShieldCheck,
    accent: 'from-accent-500 to-accent-600',
    category: 'business',
    summary:
      'Comprehensive annual maintenance contracts for businesses covering all computers, laptops, and IT infrastructure.',
    description:
      'An AMC with Meridian IT Solutions means your entire IT infrastructure is monitored, maintained, and supported throughout the year. You get priority response, scheduled preventive maintenance, and a dedicated point of contact — so IT problems never disrupt your business.',
    problems: [
      'Unpredictable IT repair costs',
      'Slow response times when something breaks',
      'No preventive maintenance in place',
      'Downtime affecting productivity',
      'Lack of a dedicated IT support partner',
    ],
    whoItsFor: [
      'Small and medium businesses',
      'Offices with 10+ computers',
      'Clinics, schools, and retail chains',
      'Any organization without in-house IT',
    ],
    whatsIncluded: [
      'Unlimited on-call remote support',
      'Scheduled quarterly preventive visits',
      'Priority on-site response (same-day)',
      'Hardware and software maintenance',
      'Network and peripheral support',
      'Detailed maintenance reports',
    ],
    whyChooseUs: [
      'Fixed annual cost — no surprise bills',
      'Priority response for AMC clients',
      'Dedicated account manager',
      'Flexible plans scaled to your team size',
    ],
    faqs: [
      {
        q: 'What is covered under an AMC?',
        a: 'Our AMC covers routine maintenance, diagnostics, software troubleshooting, virus removal, minor hardware fixes, and priority support. Major hardware replacements are offered at discounted rates.',
      },
      {
        q: 'How many visits are included?',
        a: 'Standard plans include quarterly preventive visits plus unlimited on-call support. We also offer monthly visit plans for organizations that need more frequent attention.',
      },
      {
        q: 'Can I customize the AMC plan?',
        a: 'Yes. We assess your infrastructure and build a plan that fits your team size, device count, and support needs. Contact us for a customized quote.',
      },
    ],
  },
  {
    slug: 'refurbished-sales',
    title: 'Used & Refurbished Device Sales',
    shortTitle: 'Refurbished Sales',
    tagline: 'Certified pre-owned laptops and desktops',
    icon: ShoppingBag,
    accent: 'from-brand-400 to-accent-500',
    category: 'business',
    summary:
      'Buy and sell quality-tested refurbished laptops and computers with warranty at unbeatable prices.',
    description:
      'Looking for a reliable laptop on a budget? We sell fully tested and certified refurbished laptops and desktops at a fraction of the original price. Every device goes through a 40-point quality check and comes with a warranty. We also buy your old devices at fair market value.',
    problems: [
      'New laptops are too expensive',
      'Need a reliable device on a budget',
      'Want to sell an old laptop for a fair price',
      'Need bulk devices for a team or school',
    ],
    whoItsFor: [
      'Students and first-time buyers',
      'Startups needing affordable workstations',
      'Schools and training centres',
      'Anyone upgrading and selling their old device',
    ],
    whatsIncluded: [
      '40-point quality inspection',
      'Genuine OS and software installation',
      'Battery health report',
      'Warranty on every device',
      'Fair buyback pricing for your old device',
      'Bulk pricing for organizations',
    ],
    whyChooseUs: [
      'Every device is tested and certified',
      'Transparent about device condition and history',
      'Warranty-backed purchases',
      'Fair and instant buyback quotes',
    ],
    faqs: [
      {
        q: 'Do refurbished devices come with a warranty?',
        a: 'Yes. Every refurbished device we sell comes with a warranty ranging from 3 to 12 months depending on the device and condition.',
      },
      {
        q: 'Can I sell my old laptop to you?',
        a: 'Yes. We buy used laptops and desktops at fair market value. Bring your device in for a quick assessment and an instant quote.',
      },
      {
        q: 'Are the refurbished devices reliable?',
        a: 'Every device passes a 40-point inspection covering hardware, battery, screen, ports, and performance. We only sell devices we would use ourselves.',
      },
    ],
  },
  {
    slug: 'tablet-services',
    title: 'Tablet Repair Services',
    shortTitle: 'Tablet Services',
    tagline: 'Screen, battery, and port repairs for all tablets',
    icon: Tablet,
    accent: 'from-brand-500 to-brand-600',
    category: 'devices',
    summary:
      'Screen replacements, battery repairs, charging port fixes, and software support for all tablet brands.',
    description:
      'Tablets are essential for work and entertainment, and a cracked screen or dead battery should not mean buying a new one. We repair all major tablet brands including iPad, Samsung Galaxy Tab, Lenovo, and Microsoft Surface, with fast turnaround and quality parts.',
    problems: [
      'Cracked or shattered tablet screens',
      'Battery draining fast or not charging',
      'Broken or loose charging ports',
      'Unresponsive touch or dead zones',
      'Software issues and system freezes',
    ],
    whoItsFor: [
      'Professionals using tablets for work',
      'Families with shared tablets at home',
      'Schools using tablets in classrooms',
      'Anyone with a damaged tablet',
    ],
    whatsIncluded: [
      'Free diagnostic check',
      'Screen and digitizer replacement',
      'Battery replacement',
      'Charging port repair',
      'Software troubleshooting',
      'Warranty on parts and service',
    ],
    whyChooseUs: [
      'Experienced with iPad, Samsung, Lenovo, and Surface',
      'Quality replacement parts',
      'Fast turnaround on common repairs',
      'Honest assessment — repair only if needed',
    ],
    faqs: [
      {
        q: 'Do you repair iPads and Samsung tablets?',
        a: 'Yes, we repair all iPad models and Samsung Galaxy Tab devices, along with Lenovo, Microsoft Surface, and other major brands.',
      },
      {
        q: 'Can you replace just the glass on a tablet?',
        a: 'In most cases, the glass and digitizer are fused together and replaced as a unit. We will assess your specific model and give you an honest quote.',
      },
    ],
  },
  {
    slug: 'android-services',
    title: 'Android Device Services',
    shortTitle: 'Android Services',
    tagline: 'Repairs and support for all Android phones and tablets',
    icon: Smartphone,
    accent: 'from-brand-500 to-brand-700',
    category: 'devices',
    summary:
      'Screen replacement, battery repair, charging port fixes, software flashing, and data recovery for Android devices.',
    description:
      'From Samsung and OnePlus to Xiaomi and Google Pixel, we provide comprehensive repair and support services for all Android devices. Whether it is a cracked screen, a battery that will not last, or a software issue, we have you covered.',
    problems: [
      'Cracked or broken phone screens',
      'Battery not holding charge',
      'Charging port damage',
      'Phone stuck in boot loop',
      'Software issues and OS flashing',
      'Lost data recovery',
    ],
    whoItsFor: [
      'Anyone with a damaged Android phone',
      'Users needing software or OS support',
      'People who lost data and need recovery',
      'Businesses managing Android fleets',
    ],
    whatsIncluded: [
      'Free diagnostic',
      'Screen and battery replacement',
      'Charging port repair',
      'Software flashing and OS reinstall',
      'Data recovery services',
      'Warranty on repairs',
    ],
    whyChooseUs: [
      'All major Android brands supported',
      'Genuine and quality-tested parts',
      'Data privacy guaranteed during repairs',
      'Fast service for common issues',
    ],
    faqs: [
      {
        q: 'Do you repair Samsung and OnePlus phones?',
        a: 'Yes, along with Xiaomi, Google Pixel, Motorola, Vivo, Oppo, and most other Android brands.',
      },
      {
        q: 'Can you recover data from a dead phone?',
        a: 'In many cases, yes. We use specialized tools to recover data from phones that will not boot. Success depends on the extent of the damage.',
      },
    ],
  },
  {
    slug: 'ios-services',
    title: 'iOS Device Services',
    shortTitle: 'iOS Services',
    tagline: 'Expert iPhone and iPad repairs',
    icon: Apple,
    accent: 'from-ink-700 to-ink-900',
    category: 'devices',
    summary:
      'iPhone screen and battery replacement, charging port repair, and software support by experienced technicians.',
    description:
      'iPhones and iPads deserve expert care. We provide professional repair services for all iPhone and iPad models, from screen and battery replacements to charging port repairs and software troubleshooting — all with quality parts and careful handling.',
    problems: [
      'Cracked iPhone screens',
      'iPhone battery degradation',
      'Charging port or Lightning port issues',
      'iPhone stuck on Apple logo',
      'iPad screen and battery problems',
      'Software and update issues',
    ],
    whoItsFor: [
      'iPhone users with damaged devices',
      'iPad owners needing screen or battery repair',
      'Users facing software or update issues',
      'Anyone wanting reliable iOS repair',
    ],
    whatsIncluded: [
      'Free diagnostic',
      'iPhone and iPad screen replacement',
      'Battery replacement',
      'Charging port repair',
      'Software troubleshooting',
      'Warranty on parts and service',
    ],
    whyChooseUs: [
      'Experienced with all iPhone and iPad models',
      'Quality replacement parts',
      'Careful handling of Apple devices',
      'Transparent pricing',
    ],
    faqs: [
      {
        q: 'Do you use genuine Apple parts?',
        a: 'We use high-quality OEM and compatible parts. For certain models, genuine Apple parts are available on request. We will always let you know your options before starting the repair.',
      },
      {
        q: 'Can you fix an iPhone stuck on the Apple logo?',
        a: 'Yes, this is usually a software issue. We can diagnose and repair it, often without data loss. In severe cases, we offer data recovery services.',
      },
    ],
  },
  {
    slug: 'hardware-support',
    title: 'Computer Hardware Support',
    shortTitle: 'Hardware Support',
    tagline: 'Upgrades, replacements, and component-level repair',
    icon: HardDrive,
    accent: 'from-brand-600 to-brand-800',
    category: 'hardware',
    summary:
      'Hard drive and SSD upgrades, RAM expansion, GPU installation, motherboard diagnostics, and component-level repair.',
    description:
      'When your computer hardware needs attention, our technicians provide precise diagnostics and reliable repairs. From upgrading storage and memory to component-level motherboard repair, we extend the life of your machines and save you money.',
    problems: [
      'Hard drive failure or data corruption',
      'Need more storage or faster SSD',
      'RAM upgrades for better performance',
      'Graphics card installation and issues',
      'Motherboard diagnostics and repair',
      'Power supply failures',
    ],
    whoItsFor: [
      'Users wanting to upgrade rather than replace',
      'Gamers building or upgrading rigs',
      'Businesses extending hardware lifecycles',
      'Anyone with hardware failure issues',
    ],
    whatsIncluded: [
      'Hardware diagnostics',
      'SSD and hard drive upgrades',
      'RAM installation and testing',
      'GPU installation and driver setup',
      'Motherboard component-level repair',
      'Power supply replacement',
    ],
    whyChooseUs: [
      'Component-level repair expertise',
      'Cost-effective upgrades over replacement',
      'Data migration during upgrades',
      'Thorough post-repair testing',
    ],
    faqs: [
      {
        q: 'Can you upgrade my hard drive to an SSD?',
        a: 'Yes. We upgrade hard drives to SSDs and migrate all your data and operating system, so your computer boots faster with nothing lost.',
      },
      {
        q: 'Do you do motherboard repair?',
        a: 'Yes, we offer component-level motherboard diagnostics and repair for common issues like power failures and short circuits.',
      },
    ],
  },
  {
    slug: 'software-support',
    title: 'Software & IT Support',
    shortTitle: 'Software Support',
    tagline: 'OS installation, virus removal, and IT troubleshooting',
    icon: Code2,
    accent: 'from-accent-500 to-accent-700',
    category: 'software',
    summary:
      'Operating system installation, virus and malware removal, software troubleshooting, and general IT support.',
    description:
      'Software problems can be just as frustrating as hardware failures. We provide complete software support — from operating system installation and virus removal to application troubleshooting and system optimization. If it runs on a computer, we can fix it.',
    problems: [
      'Need a fresh OS installation',
      'Virus, malware, or spyware infections',
      'Software not working or crashing',
      'Driver issues and conflicts',
      'Email and office software setup',
      'System running slow and unresponsive',
    ],
    whoItsFor: [
      'Anyone with software issues',
      'Businesses needing IT support',
      'Users setting up a new computer',
      'People needing virus removal',
    ],
    whatsIncluded: [
      'OS installation and activation',
      'Virus and malware removal',
      'Software installation and configuration',
      'Driver installation and updates',
      'System optimization',
      'Email and productivity software setup',
    ],
    whyChooseUs: [
      'Experienced with Windows, macOS, and Linux',
      'Data-safe virus removal',
      'Same-day service for most issues',
      'Clear explanations, no jargon',
    ],
    faqs: [
      {
        q: 'Can you reinstall Windows without losing my files?',
        a: 'Yes. We back up your files, reinstall the operating system, and restore your data. Your documents, photos, and settings are preserved.',
      },
      {
        q: 'Do you support Mac software issues?',
        a: 'Yes. We handle macOS installation, software troubleshooting, and optimization for MacBooks and iMacs.',
      },
    ],
  },
  {
    slug: 'e-waste-management',
    title: 'E-Waste Management',
    shortTitle: 'E-Waste',
    tagline: 'Responsible electronics recycling',
    icon: Recycle,
    accent: 'from-brand-500 to-accent-500',
    category: 'business',
    summary:
      'Environmentally responsible collection and recycling of old computers, laptops, and electronic waste.',
    description:
      'Electronic waste should never end up in a landfill. We provide responsible e-waste collection and recycling for individuals and businesses. We ensure your old devices are dismantled, recycled, and disposed of in compliance with environmental standards — and we provide a certificate of responsible disposal.',
    problems: [
      'Old computers and laptops piling up',
      'Need to dispose of electronic waste safely',
      'Businesses clearing out old IT stock',
      'Want to ensure data is destroyed securely',
    ],
    whoItsFor: [
      'Individuals with old electronics',
      'Businesses upgrading their IT infrastructure',
      'Schools and offices clearing old stock',
      'Anyone wanting eco-friendly disposal',
    ],
    whatsIncluded: [
      'Free e-waste collection (bulk)',
      'Secure data destruction',
      'Component separation and recycling',
      'Certificate of responsible disposal',
      'Buyback for devices with resale value',
      'Compliance with e-waste regulations',
    ],
    whyChooseUs: [
      'Certified and compliant recycling process',
      'Secure data destruction guaranteed',
      'Free bulk collection for businesses',
      'Certificate of disposal provided',
    ],
    faqs: [
      {
        q: 'Is my data safe when I give you old devices?',
        a: 'Absolutely. We securely destroy all data on every device we receive before recycling, and we can provide a data destruction certificate on request.',
      },
      {
        q: 'Do you charge for e-waste collection?',
        a: 'Bulk collection from businesses is free. For individuals, drop-off is free, and we offer pickup for a nominal fee depending on your location.',
      },
      {
        q: 'What devices do you accept for e-waste?',
        a: 'We accept computers, laptops, tablets, phones, monitors, printers, cables, chargers, and most other electronic devices.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories = [
  { id: 'hardware', label: 'Hardware', icon: HardDrive },
  { id: 'software', label: 'Software', icon: Code2 },
  { id: 'devices', label: 'Devices', icon: Smartphone },
  { id: 'business', label: 'Business', icon: ShieldCheck },
] as const;




