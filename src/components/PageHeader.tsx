import type { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';

interface PageHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  crumbs: { label: string; to?: string }[];
  children?: ReactNode;
}

export function PageHeader({ label, title, description, crumbs, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 dark:border-ink-800">
      <div className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-px relative py-12 sm:py-16">
        <Breadcrumbs crumbs={crumbs} />
        <p className="section-label mt-6">{label}</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-3xl font-700 leading-tight text-ink-900 dark:text-ink-50 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-ink-600 dark:text-ink-300">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
