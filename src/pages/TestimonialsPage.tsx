import { motion } from 'framer-motion';
import { Star, PenLine, ArrowRight, ExternalLink } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { GoogleReviewCard } from '@/components/GoogleReviewCard';
import { testimonials, REVIEWS_URL } from '@/data/testimonials';

export default function TestimonialsPage() {
  const avgRating =
    (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: testimonials[0]?.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: avgRating,
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: testimonials[0]?.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Google',
    }, 
  };

  return (
    <>
      <Seo
        title="Customer Reviews — What Our Clients Say"
        description="Read genuine customer reviews of Meridian IT Solutions. See why 320+ businesses and thousands of individuals trust us with their IT needs."
        canonicalPath="/testimonials"
        jsonLd={jsonLd}
      />

      <PageHeader
        label="Testimonials"
        title={<>Don't take our word for it — <span className="text-gradient">take theirs.</span></>}
        description="Real reviews from real customers. Click any review to view it on Google, or leave your own review below."
        crumbs={[{ label: 'Reviews' }]}
      >
        {/* Rating summary */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 px-5 py-3 shadow-sm">
            <div className="flex">
              {Array.from({ length: 4.5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-400 text-accent-400" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-700 text-ink-900 dark:text-ink-50">{avgRating} out of 5</span>
              <span className="text-xs text-ink-500 dark:text-ink-400">{testimonials.length}+ Google reviews</span>
            </div>
          </div>
        </div>
      </PageHeader>

      {/* Reviews grid */}
      <section className="container-px py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            >
              <GoogleReviewCard t={t} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Write a review CTA */}
      <section className="container-px pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 px-6 py-12 sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-20" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <PenLine className="h-7 w-7 text-white" />
            </span>
            <h2 className="mt-5 max-w-xl text-balance font-display text-2xl font-700 text-white sm:text-3xl">
              Had a great experience with Meridian IT Solutions?
            </h2>
            <p className="mt-3 max-w-lg text-pretty text-sm leading-relaxed text-white/90 sm:text-base">
              We would love to hear your feedback. Your review helps others find reliable IT service
              and helps us keep doing what we do best.
            </p>
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-700 text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Write a Review on Google
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-600 text-white/80 hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View all our Google reviews
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
