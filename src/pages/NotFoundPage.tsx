import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Seo } from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" noindex />
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />

        <div className="container-px relative text-center">
          <p className="font-display text-8xl font-700 text-gradient sm:text-9xl">404</p>
          <h1 className="mt-4 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
            This page took a wrong turn
          </h1>
          <p className="mt-3 text-pretty text-sm text-ink-500 dark:text-ink-400 sm:text-base">
            The page you are looking for does not exist or has been moved. Let's get you back on track.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link to="/services" className="btn-secondary">
              <ArrowLeft className="h-4 w-4" />
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
