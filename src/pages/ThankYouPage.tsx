import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { companyInfo } from '@/data/company';

export default function ThankYouPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Thank You — ${companyInfo.name}`,
    description: 'Thank you for contacting Meridian IT Solutions.',
  };

  return (
    <>
      <Seo
        title="Thank You — Request Received"
        description={`Thank you for contacting ${companyInfo.name}. Your request has been received and our team will contact you shortly.`}
        canonicalPath="/thank-you"
        jsonLd={jsonLd}
      />

      <main className="container-px flex min-h-[70vh] items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>

          <h1 className="mt-6 text-3xl font-800 text-ink-900 dark:text-ink-50 sm:text-4xl">
            Thank you for reaching out!
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-ink-500 dark:text-ink-400">
            Your request has been successfully received. Our team will review your
            message and get back to you shortly.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary">
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-ink-200 px-5 py-3 text-sm font-700 text-ink-700 transition hover:border-brand-400 hover:text-brand-500 dark:border-ink-800 dark:text-ink-200"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}