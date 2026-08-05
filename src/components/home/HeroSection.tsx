import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, ShieldCheck, Zap, Wrench } from 'lucide-react';
import { companyInfo } from '@/data/company';

const trustBadges = [
  { icon: ShieldCheck, label: '8+ Years' },
  { icon: Zap, label: 'Same-Day Service' },
  { icon: Wrench, label: 'Mac/Iphone Experts' },
  { icon: Sparkles, label: 'Genuine Parts' },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-40" />
      <div className="pointer-events-none absolute -top-40 -left-20 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="container-px relative pt-12 pb-16 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-300 dark:border-brand-700 bg-brand-50 dark:bg-brand-950/40 px-4 py-1.5 text-xs font-600 text-brand-700 dark:text-brand-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                </span>
                Trusted IT partner since {companyInfo.foundedYear}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 text-balance font-display text-4xl font-700 leading-[1.08] tracking-tight text-ink-900 dark:text-ink-50 sm:text-5xl lg:text-6xl"
            >
              IT maintenance & repair,{" "}
              <span className="text-gradient">done right</span> —{" "}
              the first time.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg"
            >
              From laptop screens to full-scale business AMCs, Meridian InfoTech Solutions
              keeps your technology running. Certified technicians, genuine parts, and
              honest pricing trusted by 320+ businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="btn-ghost"
              >
                <Phone className="h-4 w-4" />
                {companyInfo.phone}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm font-600 text-ink-600 dark:text-ink-300">
                  <b.icon className="h-4 w-4 text-brand-500" />
                  {b.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: interactive visual */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto max-w-sm lg:max-w-none"
    >
      {/* Main card: diagnostic dashboard */}
      <div className="relative rounded-3xl glass-strong p-6 shadow-2xl shadow-ink-900/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="flex h-2.5 w-2.5 rounded-full bg-accent-400" />
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="text-xs font-600 text-ink-400">Post-Service Diagnostics</span>
        </div>

        {/* Animated rings */}
        <div className="relative mt-6 flex items-center justify-center">
          <div className="relative h-40 w-40">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="68" fill="none" stroke="currentColor" strokeWidth="8" className="text-ink-200 dark:text-ink-800" />
              <motion.circle
                cx="80"
                cy="80"
                r="68"
                fill="none"
                stroke="url(#heroGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={427}
                initial={{ strokeDashoffset: 427 }}
                animate={{ strokeDashoffset: 427 - (427 * 0.92) }}
                transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
              />
              <defs>
                <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-3xl font-700 text-ink-900 dark:text-ink-50">98%</span>
              <span className="text-xs font-600 text-ink-500">Health Score</span>
            </div>
          </div>
        </div>

        {/* Status items */}
        <div className="mt-6 space-y-2.5">
          {[
            { label: 'CPU Performance', value: 'Optimal', color: 'bg-green-400' },
            { label: 'Storage Health', value: 'Good', color: 'bg-green-400' },
            { label: 'Battery Cycle', value: 'Check', color: 'bg-accent-400' },
            { label: 'Security Status', value: 'Protected', color: 'bg-green-400' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-center justify-between rounded-xl bg-ink-50 dark:bg-ink-800/50 px-3.5 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <span className={`h-2 w-2 rounded-full ${item.color}`} />
                <span className="text-sm font-600 text-ink-700 dark:text-ink-200">{item.label}</span>
              </div>
              <span className="text-xs font-600 text-ink-500">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 top-1/3 hidden rounded-2xl glass-strong px-4 py-3 shadow-xl sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/15 text-green-500">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-700 text-ink-900 dark:text-ink-50">Warranty</p>
            <p className="text-[11px] text-ink-500">90-day guarantee</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-4 bottom-8 hidden rounded-2xl glass-strong px-4 py-3 shadow-xl sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/15 text-brand-500">
            <Zap className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-700 text-ink-900 dark:text-ink-50">Same-Day</p>
            <p className="text-[11px] text-ink-500">Most repairs</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
