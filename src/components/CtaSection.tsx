import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/company';

interface CtaSectionProps {
  title?: string;
  description?: string;
}

export function CtaSection({
  title = 'Ready to get your devices back on track?',
  description = 'Get a free diagnostic and a transparent quote. No hidden charges, no pressure just honest, expert IT service.',
}: CtaSectionProps) {
  return (
    <section className="container-px py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 px-6 py-12 sm:px-12 sm:py-16">
        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />

        <div className="relative flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-balance font-display text-2xl font-700 text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/90 sm:text-base">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-700 text-brand-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a Free Quote
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
            <a
              href={companyInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-700 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



















