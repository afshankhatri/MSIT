import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, PenLine } from 'lucide-react';
import { testimonials, REVIEWS_URL } from '@/data/testimonials';

export function TestimonialsPreviewSection() {
  const featured = testimonials.slice(0, 4);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-30" />

      <div className="container-px relative">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">Customer Reviews</p>
            <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl lg:text-4xl">
              What our customers say
            </h2>
            <p className="mt-3 max-w-xl text-sm text-ink-500 dark:text-ink-400 sm:text-base">
              Real reviews from real customers. Click any review to see it on Google.
            </p>
          </div>
          <Link to="/testimonials" className="btn-ghost shrink-0">
            Read all reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Review grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((t, i) => (
            <motion.a
              key={t.name}
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex h-full flex-col rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-ink-900/5 hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-700"
            >
              <div className="flex items-center gap-2.5">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-700 text-white`}>
                  {t.initials}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-700 text-ink-900 dark:text-ink-50">{t.name}</span>
                  <span className="text-[11px] text-ink-500 dark:text-ink-400">{t.role}</span>
                </div>
              </div>
              <div className="mt-2.5 flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <span className="text-[11px] text-ink-400 dark:text-ink-500">{t.date}</span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300 line-clamp-4">
                {t.text}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Write a review CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/50 p-6 text-center sm:flex-row sm:text-left">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
            <PenLine className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <h3 className="text-base font-700 text-ink-900 dark:text-ink-50">Had a great experience with us?</h3>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
              We would love to hear your feedback. Leave us a review on Google — it takes less than a minute.
            </p>
          </div>
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Write a Review
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
