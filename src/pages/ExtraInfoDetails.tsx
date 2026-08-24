import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Info } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { FaqAccordion } from '@/components/FaqAccordion';
import { getSEOPageBySlug, seoPages, type SectionBlock } from '@/data/extra_info_better_seo';
import { companyInfo } from '@/data/company';

// Fallback gradient/icon used only if a page entry is missing these fields.
const DEFAULT_ACCENT = 'from-brand-500 to-brand-600';
const DefaultIcon = Info;

function renderRichText(content: string) {
  const parts = content.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (!match) {
      return <span key={index}>{part}</span>;
    }

    const [, label, href] = match;

    return (
      <Link
        key={index}
        to={href}
        className="text-brand-600 underline decoration-brand-300 underline-offset-2 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
      >
        {label}
      </Link>
    );
  });
}

function SectionBlockRenderer({ block }: { block: SectionBlock }) {
  switch (block.type) {
    case 'paragraph': {
      if (!block.content) return null;

      return (
        <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300 sm:text-base">
          {renderRichText(block.content)}
        </p>
      );
    }

    case 'list': {
      if (!block.items || block.items.length === 0) return null;
      return (
        <div>
          {block.heading && (
            <h3 className="mb-3 text-sm font-700 text-ink-900 dark:text-ink-50">{block.heading}</h3>
          )}
          <ul className="space-y-3">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-200">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    case 'cards': {
      if (!block.items || block.items.length === 0) return null;
      return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((card) => (
            <div
              key={card.heading}
              className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 shadow-sm"
            >
              <p className="text-sm font-700 text-ink-900 dark:text-ink-50">{card.heading}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{card.text}</p>
            </div>
          ))}
        </div>
      );
    }

    case 'callout': {
      if (!block.content) return null;
      return (
        <div className="rounded-2xl border border-brand-200 dark:border-brand-800 bg-brand-500/5 p-5">
          {block.title && (
            <p className="text-sm font-700 text-ink-900 dark:text-ink-50">{block.title}</p>
          )}
          <p className="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{block.content}</p>
        </div>
      );
    }

    default:
      return null;
  }
}

export default function SEOPageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getSEOPageBySlug(slug) : undefined;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  // Related pages: prefer same-category, fall back to any other pages, but
  // never assume there are at least 3 of either (data set may be small).
  const sameCategory = seoPages.filter((p) => p.slug !== page.slug && p.category === page.category);
  const others = seoPages.filter((p) => p.slug !== page.slug);
  const relatedPages = (sameCategory.length > 0 ? sameCategory : others).slice(0, 3);

  const hasHighlights = Array.isArray(page.highlights) && page.highlights.length > 0;
  const hasSections = Array.isArray(page.sections) && page.sections.length > 0;
  const hasFaqs = Array.isArray(page.faqs) && page.faqs.length > 0;
  const hasRelated = relatedPages.length > 0;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service', 
    name: page.title,
    description: page.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: companyInfo.name,
      telephone: companyInfo.phones.map((phone) => phone.number),
    },
    areaServed: 'Regional',
    ...(hasFaqs && {
      mainEntityOfPage: {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    }),
  };

  const Icon = page.icon ?? DefaultIcon;
  const accent = page.accent || DEFAULT_ACCENT;

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        canonicalPath={`/${page.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-200 dark:border-ink-800">
        <div className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-40" />
        <div className={`pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-gradient-to-br ${accent} opacity-15 blur-3xl`} />

        <div className="container-px relative py-12 sm:py-16">
          <Breadcrumbs crumbs={[{ label: page.shortTitle ?? page.title }]} />

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              {page.category && (
                <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-br ${accent} px-3 py-1 text-xs font-700 uppercase tracking-wider text-white`}>
                  {page.category}
                </span>
              )}
              <h1 className="mt-4 text-balance font-display text-3xl font-700 leading-tight text-ink-900 dark:text-ink-50 sm:text-4xl lg:text-5xl">
                {page.title}
              </h1>
              {page.tagline && (
                <p className="mt-2 text-lg font-600 text-brand-600 dark:text-brand-400">{page.tagline}</p>
              )}
              {page.heroDescription && (
                <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-ink-600 dark:text-ink-300 sm:text-base">
                  {page.heroDescription}
                </p>
              )}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
              </div>
            </div>

            {hasHighlights && (
              <div className="lg:col-span-5">
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${accent} p-8 shadow-2xl`}>
                  <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-20" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                  <div className="relative">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                      <Icon className="h-8 w-8 text-white" strokeWidth={1.8} />
                    </span>
                    <h2 className="mt-5 font-display text-lg font-700 text-white">Highlights</h2>
                    <ul className="mt-4 space-y-2.5">
                      {page.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic sections (any number, any mix of block types) */}
      {hasSections &&
        page.sections.map((section, sIndex) => (
          <section
            key={section.id}
            className={sIndex % 2 === 1 ? 'bg-ink-100/50 dark:bg-ink-900/30 py-16' : 'container-px py-16'}
          >
            <div className={sIndex % 2 === 1 ? 'container-px' : ''}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-6">
                  {section.blocks?.map((block, bIndex) => (
                    <SectionBlockRenderer key={bIndex} block={block} />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        ))}

      {/* FAQ (only rendered if the page actually has FAQs) */}
      {hasFaqs && (
        <section className="container-px py-16">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="section-label justify-center">FAQ</p>
              <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="mt-8">
              <FaqAccordion items={page.faqs.map((f) => ({ q: f.question, a: f.answer }))} />
            </div>
          </div>
        </section>
      )}

      {/* Related pages (skipped entirely if the data set has nothing else to show) */}
      {hasRelated && (
        <section className="container-px pb-16">
          <h2 className="text-xl font-700 text-ink-900 dark:text-ink-50">Related</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {relatedPages.map((p) => {
              const RelatedIcon = p.icon ?? DefaultIcon;
              const relatedAccent = p.accent || DEFAULT_ACCENT;
              return (
                <Link
                  key={p.slug}
                  to={`/${p.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-700"
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${relatedAccent} text-white`}>
                    <RelatedIcon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-700 text-ink-900 dark:text-ink-50">{p.shortTitle ?? p.title}</p>
                    {p.tagline && <p className="text-xs text-ink-500 dark:text-ink-400">{p.tagline}</p>}
                  </div>
                  <ArrowRight className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <CtaSection
        title={`Need ${(page.shortTitle ?? page.title).toLowerCase()}?`}
        description="Get in touch and we'll get back to you shortly."
      />
    </>
  );
}