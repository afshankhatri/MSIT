import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Check, Star, Navigation } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { CtaSection } from '@/components/CtaSection';
import { getLocationBySlug, locations } from '@/data/locations';
import { getServiceBySlug } from '@/data/services';
import { companyInfo } from '@/data/company';

export default function LocationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const loc = slug ? getLocationBySlug(slug) : undefined;

  if (!loc) {
    return <Navigate to="/locations" replace />;
  }

  const locationServices = loc.services
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const otherLocations = locations.filter((l) => l.slug !== loc.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${companyInfo.name} — ${loc.name}`,
    description: loc.description,
    telephone: loc.phone,
    email: loc.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address,
    },
    openingHours: loc.hours,
    areaServed: loc.nearbyAreas.join(', '),
    mainEntityOfPage: {
      '@type': 'FAQPage',
      mainEntity: loc.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  };

  return (
    <>
      <Seo
        title={`${loc.name} — IT Services in ${loc.area}`}
        description={`${companyInfo.name} ${loc.name}: ${loc.tagline}. ${loc.description.slice(0, 120)}`}
        canonicalPath={`/locations/${loc.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-200 dark:border-ink-800">
        <div className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-40" />
        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />

        <div className="container-px relative py-12 sm:py-16">
          <Breadcrumbs crumbs={[{ label: 'Locations', to: '/locations' }, { label: loc.shortName }]} />

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-300 dark:border-brand-700 bg-brand-50 dark:bg-brand-950/40 px-4 py-1.5 text-xs font-600 text-brand-700 dark:text-brand-300">
                <MapPin className="h-3.5 w-3.5" />
                {loc.area}
              </span>
              <h1 className="mt-4 text-balance font-display text-3xl font-700 leading-tight text-ink-900 dark:text-ink-50 sm:text-4xl lg:text-5xl">
                {loc.name}
              </h1>
              <p className="mt-2 text-lg font-600 text-brand-600 dark:text-brand-400">{loc.tagline}</p>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-ink-600 dark:text-ink-300 sm:text-base">
                {loc.description}
              </p>
            </div>

            {/* Contact card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-lg">
                <h3 className="text-base font-700 text-ink-900 dark:text-ink-50">Branch Contact</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span className="text-ink-600 dark:text-ink-300">{loc.address}</span>
                  </div>
                  <a href={`tel:${loc.phone}`} className="flex items-start gap-3 text-sm hover:text-brand-600 dark:hover:text-brand-400">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span className="text-ink-600 dark:text-ink-300">{loc.phone}</span>
                  </a>
                  <a href={`mailto:${loc.email}`} className="flex items-start gap-3 text-sm hover:text-brand-600 dark:hover:text-brand-400">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span className="text-ink-600 dark:text-ink-300">{loc.email}</span>
                  </a>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span className="text-ink-600 dark:text-ink-300">{loc.hours}</span>
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <Link to="/contact" className="btn-primary flex-1 !py-2.5 text-xs">
                    Contact Branch
                  </Link>
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-2.5 !px-4 text-xs"
                  >
                    <Navigation className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-px py-12">
        <div className="overflow-hidden rounded-3xl border border-ink-200 dark:border-ink-800 shadow-sm">
          <iframe
            src={loc.mapEmbed}
            className="h-72 w-full sm:h-96"
            loading="lazy"
            title={`Map showing ${loc.name}`}
          />
        </div>
      </section>

      {/* Services at this location */}
      <section className="container-px py-8">
        <div className="mx-auto max-w-2xl">
          <p className="section-label">Services Available</p>
          <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
            What we offer at this branch
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locationServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <Link
                to={`/services/${service!.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-700"
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white`}>
                  <service.icon className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-700 text-ink-900 dark:text-ink-50">{service.shortTitle}</p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">{service.tagline}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nearby areas */}
      <section className="bg-ink-100/50 dark:bg-ink-900/30 py-12">
        <div className="container-px">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="section-label">Service Area</p>
              <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
                Areas we serve from this branch
              </h2>
              <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">
                Our {loc.shortName} branch provides on-site support and service to the following nearby areas:
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {loc.nearbyAreas.map((area) => (
                  <span key={area} className="chip">
                    <MapPin className="h-3.5 w-3.5 text-brand-500" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Local testimonials */}
            <div className="lg:col-span-5">
              <h3 className="text-base font-700 text-ink-900 dark:text-ink-50">Local reviews</h3>
              <div className="mt-4 space-y-3">
                {loc.testimonials.map((t) => (
                  <div key={t.name} className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-xs font-700 text-white">
                        {t.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                      <div>
                        <p className="text-sm font-700 text-ink-900 dark:text-ink-50">{t.name}</p>
                        <p className="text-[11px] text-ink-500 dark:text-ink-400">{t.role}</p>
                      </div>
                      <div className="ml-auto flex">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location FAQ */}
      <section className="container-px py-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="section-label justify-center">{loc.shortName} FAQ</p>
            <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
              Questions about this branch
            </h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={loc.faqs} />
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="container-px pb-16">
        <h2 className="text-xl font-700 text-ink-900 dark:text-ink-50">Our other branches</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {otherLocations.map((l) => (
            <Link
              key={l.slug}
              to={`/locations/${l.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-700"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-700 text-ink-900 dark:text-ink-50">{l.name}</p>
                <p className="text-xs text-ink-500 dark:text-ink-400">{l.area}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title={`Visit our ${loc.shortName} branch today`}
        description="Drop by for a free diagnostic, or contact us to schedule an on-site visit. We are ready to help."
      />
    </>
  );
}
