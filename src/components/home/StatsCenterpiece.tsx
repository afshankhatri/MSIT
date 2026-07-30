import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { stats } from '@/data/company';

export function StatsCenterpiece() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">By the Numbers</p>
          <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl lg:text-4xl">
            A track record built on trust
          </h2>
          <p className="mt-3 text-pretty text-sm text-ink-500 dark:text-ink-400 sm:text-base">
            Numbers that reflect over a decade of dedicated IT service.
          </p>
        </div>

        {/* Interactive stat grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-ink-900/5 hover:-translate-y-1"
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/0 to-accent-500/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-500/5 group-hover:to-accent-500/5 group-hover:opacity-100" />

              <div className="relative">
                <p className="font-display text-4xl font-700 tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-700 text-ink-800 dark:text-ink-100">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">
                  {stat.sublabel}
                </p>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
