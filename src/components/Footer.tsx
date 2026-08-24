import { Link } from 'react-router-dom';
import { Laptop, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export function Footer() {
  const year = new Date().getFullYear();
  const footerSeoLinks = [
    { label: "Buy Old Laptop", href: "/buy-old-laptop" },
    { label: "Sell Old Laptop", href: "/sell-old-laptop" },
    { label: "Buy Used Laptops", href: "/buy-used-laptops" },
    { label: "Used Laptops for Sale", href: "/used-laptops-for-sale" },
    { label: "Sell Used Laptops", href: "/sell-used-laptops" },
    { label: "Second Hand Laptop Mumbai", href: "/second-hand-laptop-mumbai" },
    { label: "HP Computer Repair", href: "/hp-computer-repair" },
    { label: "HP Laptop Repair Service", href: "/hp-laptop-repair-service" },
    { label: "Dell Laptop Repair", href: "/dell-laptop-repair" },
    { label: "Lenovo Laptop Repair", href: "/lenovo-laptop-repair" },
    { label: "Lenovo Computer Repair", href: "/lenovo-computer-repair" },
    { label: "Computer AMC Service", href: "/computer-amc-service" },
    { label: "Computer Repair in Mumbai", href: "/computer-repair-in-mumbai" },
    { label: "PC Repair in Mumbai", href: "/pc-repair-in-mumbai" },
    { label: "iPhone Repair Mumbai", href: "/iphone-repair-mumbai" },
    { label: "Apple Watch Repair", href: "/apple-watch-repair" },
    { label: "MacBook Repair", href: "/macbook-repair" },
    { label: "Mac Repair", href: "/mac-repair" },
    { label: "MacBook Repair Mumbai", href: "/macbook-repair-mumbai" },
    { label: "Mac Fix Station", href: "/mac-fix-station" },
    { label: "MacBook Screen Repair", href: "/macbook-screen-repair" },
    { label: "Apple MacBook Repair", href: "/apple-macbook-repair" }
  ];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-ink-200 dark:border-ink-800 bg-ink-100/50 dark:bg-ink-950">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-px relative py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Meridian InfoTech Solutions home">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-brand-500/20">
                <img
                  src="/logo.webp"
                  alt="Meridian Infotech Solutions"
                  className="h-full w-full object-contain p-1"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-700 tracking-tight text-ink-900 dark:text-ink-50">
                  Meridian
                </span>
                <span className="text-[10px] font-600 uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
                  InfoTech Solutions
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              {companyInfo.tagline}. Serving individuals and businesses with reliable, professional IT maintenance since {companyInfo.foundedYear}.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook' },
                { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram' },
                { icon: Linkedin, href: companyInfo.social.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: companyInfo.social.twitter, label: 'Twitter' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-400 transition-all hover:border-brand-400 hover:text-brand-500 hover:-translate-y-0.5"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-700 text-ink-900 dark:text-ink-50">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-ink-500 dark:text-ink-400 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-600 text-brand-600 dark:text-brand-400"
                >
                  View all <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-700 text-ink-900 dark:text-ink-50">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/locations', label: 'Locations' },
                { to: '/testimonials', label: 'Reviews' },
                { to: '/faq', label: 'FAQ' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-500 dark:text-ink-400 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-700 text-ink-900 dark:text-ink-50">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <div className="flex flex-wrap gap-3">
                  {companyInfo.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={phone.tel}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-700 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    >
                      <Phone className="h-4 w-4" />
                      {phone.label}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-2.5 text-sm text-ink-500 dark:text-ink-400 hover:text-brand-600 dark:hover:text-brand-400">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-ink-500 dark:text-ink-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                {companyInfo.address}
              </li>
            </ul>

            <div className="mt-5">
              <p className="text-xs font-600 uppercase tracking-wider text-ink-400 dark:text-ink-500">Our Branches</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    to={`/locations/${l.slug}`}
                    className="chip hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {l.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="border-t border-ink-200 dark:border-ink-800 pt-8 mt-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-wrap justify-center text-xs leading-7">
              {footerSeoLinks.map((item, index) => (
                <span key={item.href}>
                  <Link
                    to={item.href}
                    className="
                      text-ink-500
                      dark:text-ink-400
                      transition-colors
                      duration-200
                      hover:text-brand-600
                      dark:hover:text-brand-400
                    "
                  >
                    {item.label}
                  </Link>

                  {index !== footerSeoLinks.length - 1 && (
                    <span className="mx-2 text-ink-300 dark:text-ink-700">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200 dark:border-ink-800 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400 dark:text-ink-500">
            © {year} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/faq" className="text-xs text-ink-400 dark:text-ink-500 hover:text-brand-600 dark:hover:text-brand-400">Privacy Policy</Link>
            <Link
              to="/sitemap"
              className="text-xs text-ink-400 dark:text-ink-500 hover:text-brand-600 dark:hover:text-brand-400"
            >
              HTML Sitemap
            </Link>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-400 dark:text-ink-500 hover:text-brand-600 dark:hover:text-brand-400"
            >
              XML Sitemap
            </a>
            <Link to="/faq" className="text-xs text-ink-400 dark:text-ink-500 hover:text-brand-600 dark:hover:text-brand-400">Terms of Service</Link>
            <Link to="/contact" className="text-xs text-ink-400 dark:text-ink-500 hover:text-brand-600 dark:hover:text-brand-400">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
