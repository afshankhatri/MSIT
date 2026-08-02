import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Wrench, Recycle, Target, Heart, Users, Award, type LucideIcon } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { CtaSection } from '@/components/CtaSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { companyInfo, stats } from '@/data/company';

const iconMap: Record<string, LucideIcon> = { ShieldCheck, Eye, Wrench, Recycle };

const values = [
  { icon: 'ShieldCheck', title: 'Trust Built Over Time', description: 'For over a decade, we have earned our reputation one repair, one contract, and one satisfied customer at a time.' },
  { icon: 'Eye', title: 'Transparent Always', description: 'No hidden charges, no unnecessary upsells. We tell you exactly what is wrong, what it costs, and what your options are.' },
  { icon: 'Wrench', title: 'Expertise Across the Board', description: 'From a cracked iPhone screen to a 60-workstation AMC, our certified technicians handle it all with equal care.' },
  { icon: 'Recycle', title: 'Responsible & Sustainable', description: 'We extend the life of your devices and recycle what cannot be saved — because good IT is also responsible IT.' },
];

const pillars = [
  { icon: Target, title: 'Our Mission', description: 'To make professional IT maintenance accessible, reliable, and transparent for every individual and business we serve.' },
  { icon: Heart, title: 'Our Approach', description: 'We treat every device as if it were our own, and every customer as a long-term partner — not a one-time transaction.' },
  { icon: Users, title: 'Our Team', description: 'Certified technicians with years of hands-on experience across all major brands, backed by a commitment to continuous learning.' },
  { icon: Award, title: 'Our Standard', description: 'Genuine parts, honest diagnostics, clear pricing, and a warranty on every repair. That is the Meridian standard.' },
];

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${companyInfo.name}`,
    description: companyInfo.description,
  };

  return (
    <>
      <Seo
        title="About Us — Established IT Service Provider Since 2011"
        description={`Learn about ${companyInfo.name} — an established IT maintenance and repair company serving individuals and businesses for over a decade.`}
        canonicalPath="/about"
        jsonLd={jsonLd}
      />

      <PageHeader
        label="About Us"
        title={<>Established in business. <span className="text-gradient">Modern</span> in approach.</>}
        description={companyInfo.description}
        crumbs={[{ label: 'About' }]}
      />

      {/* Story + stats */}
      <section className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="section-label">Our Story</p>
            <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
              A decade of keeping technology running
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300 sm:text-base">
              <p>
                Meridian InfoTech Solutions was founded in {companyInfo.foundedYear} with a simple
                goal: to provide IT maintenance and repair services that people could
                actually trust. What started as a small workshop has grown into a
                multi-branch operation serving thousands of individuals and hundreds of
                businesses.
              </p>
              <p>
                Over the years, we have expanded from basic computer repair to a full
                spectrum of IT services — including Annual Maintenance Contracts,
                refurbished device sales, mobile and tablet repair, and responsible
                e-waste management. But our core promise has never changed: honest
                diagnostics, fair pricing, and quality work.
              </p>
              <p>
                Today, we are proud to be the IT partner that businesses rely on for
                their mission-critical infrastructure, and the neighbourhood service
                centre that individuals trust with their everyday devices.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-5 text-center shadow-sm"
                >
                  <p className="font-display text-3xl font-700 text-ink-900 dark:text-ink-50">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-700 text-ink-700 dark:text-ink-200">{stat.label}</p>
                  <p className="mt-0.5 text-[11px] text-ink-500 dark:text-ink-400">{stat.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink-100/50 dark:bg-ink-900/30 py-16">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label justify-center">Our Values</p>
            <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
              What we stand for
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-700 text-ink-900 dark:text-ink-50">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-px py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">What Drives Us</p>
          <h2 className="mt-2 text-balance font-display text-2xl font-700 text-ink-900 dark:text-ink-50 sm:text-3xl">
            The pillars of our service
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-700 text-ink-900 dark:text-ink-50">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaSection
        title="Want to work with a trusted IT partner?"
        description="Whether you need a single repair or a full maintenance contract, we are here to help."
      />
    </>
  );
}
