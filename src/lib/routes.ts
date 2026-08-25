import { services } from '@/data/services';
import { locations } from '@/data/locations';

export const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/testimonials',
  '/faq',
  '/contact',
  '/locations',
  '/sitemap',
];

export const dynamicServiceRoutes = services.map(s => `/services/${s.slug}`);
export const dynamicLocationRoutes = locations.map(l => `/locations/${l.slug}`);

export const extraRoutes = [
  '/buy-old-laptop',
  '/sell-old-laptop',
  '/sell-used-laptops',
  '/used-laptops-for-sale',
  '/buy-used-laptops',
  '/second-hand-laptop-mumbai',
  '/pc-repair-in-mumbai',
  '/computer-repair-in-mumbai',
  '/computer-amc-service',
  '/hp-laptop-repair-service',
  '/hp-computer-repair',
  '/lenovo-computer-repair',
  '/lenovo-laptop-repair',
  '/dell-laptop-repair',
  '/iphone-repair-mumbai',
  '/apple-watch-repair',
  '/macbook-repair',
  '/mac-repair',
  '/macbook-repair-mumbai',
  '/mac-fix-station',
  '/macbook-screen-repair',
  '/apple-macbook-repair',
];

export const allRoutes = [
  ...staticRoutes,
  ...dynamicServiceRoutes,
  ...dynamicLocationRoutes,
  ...extraRoutes,
];
