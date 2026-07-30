import { Star, ExternalLink } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';
import { REVIEWS_URL } from '@/data/testimonials';

export function GoogleReviewCard({ t }: { t: Testimonial }) {
  return (
    <a
      href={REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-ink-900/5 hover:-translate-y-1 hover:border-brand-300 dark:hover:border-brand-700"
    >
      {/* Header: Google logo + reviewer */}
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-700 text-white`}
        >
          {t.initials}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-700 text-ink-900 dark:text-ink-50">{t.name}</span>
          <span className="text-xs text-ink-500 dark:text-ink-400">
            {t.role} · {t.company}
          </span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="flex items-center gap-1 text-[11px] font-600 text-ink-400 dark:text-ink-500">
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Rating + date */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < t.rating
                  ? 'fill-accent-400 text-accent-400'
                  : 'fill-ink-200 text-ink-200 dark:fill-ink-700 dark:text-ink-700'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-ink-400 dark:text-ink-500">{t.date}</span>
      </div>

      {/* Text */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
        {t.text}
      </p>

      {/* Footer hint */}
      <div className="mt-4 flex items-center gap-1.5 text-xs font-600 text-brand-600 dark:text-brand-400">
        View on Google
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}
