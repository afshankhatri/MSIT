import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Laptop, ChevronDown, MapPin } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/locations', label: 'Locations' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-ink-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between gap-4 lg:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Meridian InfoTech Solutions home">
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

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-600 transition-colors ${
                        isActive || location.pathname.startsWith('/services/')
                          ? 'text-brand-600 dark:text-brand-400'
                          : 'text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50'
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </NavLink>
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                      <div className="w-[560px] rounded-2xl glass-strong p-3 shadow-2xl shadow-ink-900/10">
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-ink-100 dark:hover:bg-ink-800"
                            >
                              <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${s.accent} text-white`}>
                                <s.icon className="h-4 w-4" />
                              </span>
                              <span className="flex flex-col">
                                <span className="text-sm font-600 text-ink-800 dark:text-ink-100">{s.shortTitle}</span>
                                <span className="text-xs text-ink-500 dark:text-ink-400">{s.tagline}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            if (link.label === 'Locations') {
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-600 transition-colors ${
                        isActive || location.pathname.startsWith('/locations/')
                          ? 'text-brand-600 dark:text-brand-400'
                          : 'text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50'
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
                  </NavLink>
                  {locationsOpen && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                      <div className="w-64 rounded-2xl glass-strong p-2 shadow-2xl shadow-ink-900/10">
                        {locations.map((l) => (
                          <Link
                            key={l.slug}
                            to={`/locations/${l.slug}`}
                            className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-ink-100 dark:hover:bg-ink-800"
                          >
                            <MapPin className="h-4 w-4 text-brand-500" />
                            <span className="flex flex-col">
                              <span className="text-sm font-600 text-ink-800 dark:text-ink-100">{l.shortName}</span>
                              <span className="text-xs text-ink-500 dark:text-ink-400">{l.area}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-600 transition-colors ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400'
                      : 'text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 transition-colors hover:bg-ink-100 dark:hover:bg-ink-800 hover:text-ink-900 dark:hover:text-ink-50"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5">
            Get a Quote
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 h-[calc(100vh-4rem)] bottom-0 z-40 bg-ink-50 dark:bg-ink-950 px-4 pb-8 pt-4">
          
          <div className="flex flex-col gap-1">
            {mainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-600 transition-colors ${
                    isActive
                      ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                      : 'text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-3 w-full">
              Get a Quote
            </Link>
          </div>

          {/* Quick services */}
          <div className="mt-6">
            <p className="section-label mb-3">Popular Services</p>
            <div className="grid grid-cols-2 gap-2">
              {services.slice(0, 6).map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-2 rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-3 text-sm font-600 text-ink-700 dark:text-ink-200"
                >
                  <s.icon className="h-4 w-4 text-brand-500" />
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
