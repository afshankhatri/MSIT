import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Wrench, Recycle, ArrowRight, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = { ShieldCheck, Eye, Wrench, Recycle };

const values = [
  {
    icon: 'ShieldCheck',
    title: 'Trust Built Over Time',
    description:
      'For over a decade, we have earned our reputation one repair, one contract, and one satisfied customer at a time.',
  },
  {
    icon: 'Eye',
    title: 'Transparent Always',
    description:
      'No hidden charges, no unnecessary upsells. We tell you exactly what is wrong, what it costs, and what your options are.',
  },
  {
    icon: 'Wrench',
    title: 'Expertise Across the Board',
    description:
      'From a cracked iPhone screen to a 60-workstation AMC, our certified technicians handle it all with equal care.',
  },
  {
    icon: 'Recycle',
    title: 'Responsible & Sustainable',
    description:
      'We extend the life of your devices and recycle what cannot be saved — because good IT is also responsible IT.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="container-px py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left: heading */}
        <div className="lg:col-span-5">
          <p className="section-label">Why Meridian</p>
          <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl lg:text-4xl">
            The difference is in how we work
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-ink-600 dark:text-ink-300 sm:text-base">
            We are not just a repair shop. We are a long-term IT partner that takes
            responsibility for your technology — so you can focus on what you do best.
          </p>
          <Link to="/about" className="btn-secondary mt-6">
            More about us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Right: values grid */}
        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, i) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-ink-900/5 hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-700 text-ink-900 dark:text-ink-50">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
