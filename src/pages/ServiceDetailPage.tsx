import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, MessageCircle, Wrench, Users, AlertCircle, Sparkles } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { FaqAccordion } from '@/components/FaqAccordion';
import { getServiceBySlug, services } from '@/data/services';
import { companyInfo } from '@/data/company';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);
  const fallbackRelated = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const related = relatedServices.length > 0 ? relatedServices : fallbackRelated;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: companyInfo.name,
      telephone: companyInfo.phone,
    },
    areaServed: 'Regional',
    offers: {
      '@type': 'Offer',
      description: service.summary,
    },
    mainEntityOfPage: {
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  };

  const Icon = service.icon;

  return (
    <>
      <Seo
        title={`${service.title} — Meridian IT Solutions`}
        description={service.summary}
        canonicalPath={`/services/${service.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-200 dark:border-ink-800">
        <div className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-40" />
        <div className={`pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-gradient-to-br ${service.accent} opacity-15 blur-3xl`} />

        <div className="container-px relative py-12 sm:py-16">
          <Breadcrumbs crumbs={[{ label: 'Services', to: '/services' }, { label: service.shortTitle }]} />

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-br ${service.accent} px-3 py-1 text-xs font-700 uppercase tracking-wider text-white`}>
                {service.category}
              </span>
              <h1 className="mt-4 text-balance font-display text-3xl font-700 leading-tight text-ink-900 dark:text-ink-50 sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-2 text-lg font-600 text-brand-600 dark:text-brand-400">{service.tagline}</p>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-ink-600 dark:text-ink-300 sm:text-base">
                {service.description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Request This Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${companyInfo.phone}`} className="btn-secondary">
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.accent} p-8 shadow-2xl`}>
                <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-20" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                    <Icon className="h-8 w-8 text-white" strokeWidth={1.8} />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-700 text-white">What is included</h2>
                  <ul className="mt-4 space-y-2.5">
                    {service.whatsIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems + Who it's for */}
      <section className="container-px py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 sm:p-8 shadow-sm"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <AlertCircle className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl font-700 text-ink-900 dark:text-ink-50">Problems we solve</h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">Common issues this service addresses.</p>
            <ul className="mt-5 space-y-3">
              {service.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  {problem}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 sm:p-8 shadow-sm"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
              <Users className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl font-700 text-ink-900 dark:text-ink-50">Who this is for</h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">This service is ideal for...</p>
            <ul className="mt-5 space-y-3">
              {service.whoItsFor.map((who) => (
                <li key={who} className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {who}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-ink-100/50 dark:bg-ink-900/30 py-16">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label justify-center">Why Choose Meridian</p>
            <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
              Why trust us with your {service.shortTitle.toLowerCase()}?
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.whyChooseUs.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                  <Sparkles className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-600 leading-relaxed text-ink-700 dark:text-ink-200">
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px py-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="section-label justify-center">FAQ</p>
            <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="container-px pb-16">
        <h2 className="text-xl font-700 text-ink-900 dark:text-ink-50">Related services</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-700"
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white`}>
                <s.icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-700 text-ink-900 dark:text-ink-50">{s.shortTitle}</p>
                <p className="text-xs text-ink-500 dark:text-ink-400">{s.tagline}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title={`Need ${service.shortTitle.toLowerCase()}?`}
        description="Get a free diagnostic and a transparent quote. No hidden charges, no pressure."
      />
    </>
  );
}
