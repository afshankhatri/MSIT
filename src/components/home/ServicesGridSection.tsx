import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services, serviceCategories } from '@/data/services';

export function ServicesGridSection() {
  return (
    <section className="container-px py-16 sm:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="section-label">What We Do</p>
          <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl lg:text-4xl">
            Services for every IT need
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-sm text-ink-500 dark:text-ink-400 sm:text-base">
            From a cracked phone screen to a full-scale business AMC — we cover the entire
            spectrum of IT maintenance and repair.
          </p>
        </div>
        <Link to="/services" className="btn-ghost shrink-0">
          View all services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Category chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        {serviceCategories.map((cat) => (
          <span key={cat.id} className="chip">
            <cat.icon className="h-3.5 w-3.5 text-brand-500" />
            {cat.label}
          </span>
        ))}
      </div>

      {/* Grid */}
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
              {/* Hover gradient glow */}
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

              <div className="relative mt-4 flex items-center gap-1.5 text-sm font-700 text-ink-700 dark:text-ink-200 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
