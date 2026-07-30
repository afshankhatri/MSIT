import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { CtaSection } from '@/components/CtaSection';
import { services, serviceCategories } from '@/data/services';

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.summary,
        url: `https://www.meridianit.com/services/${s.slug}`,
      },
    })),
  };

  return (
    <>
      <Seo
        title="IT Services — Repair, Maintenance, AMC & More"
        description="Explore our full range of IT services: laptop repair, computer maintenance, AMC contracts, refurbished device sales, tablet and phone repair, e-waste management, and IT support."
        canonicalPath="/services"
        jsonLd={jsonLd}
      />

      <PageHeader
        label="Our Services"
        title={<>Complete IT care, <span className="text-gradient">under one roof</span></>}
        description="From a cracked phone screen to a full-scale business AMC, we cover every aspect of IT maintenance and repair. Explore our services below."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="container-px py-16">
        {/* Category filter chips */}
        <div className="flex flex-wrap gap-2">
          {serviceCategories.map((cat) => (
            <span key={cat.id} className="chip">
              <cat.icon className="h-3.5 w-3.5 text-brand-500" />
              {cat.label}
            </span>
          ))}
        </div>

        {/* Services grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-ink-900/5 hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-700"
              >
                <div className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`} />

                <div className="relative flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} shadow-lg`}>
                    <service.icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </span>
                  <span className="text-xs font-600 uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    {service.category}
                  </span>
                </div>

                <h3 className="relative mt-4 text-lg font-700 text-ink-900 dark:text-ink-50">
                  {service.shortTitle}
                </h3>
                <p className="relative mt-1 text-xs font-600 text-brand-600 dark:text-brand-400">
                  {service.tagline}
                </p>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  {service.summary}
                </p>

                {/* What's included preview */}
                <ul className="relative mt-4 space-y-1.5">
                  {service.whatsIncluded.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-ink-500 dark:text-ink-400">
                      <span className="h-1 w-1 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-5 flex items-center gap-1.5 text-sm font-700 text-ink-700 dark:text-ink-200 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
