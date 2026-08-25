import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { companyInfo } from '@/data/company';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to backend or email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: companyInfo.name,
    email: companyInfo.email,
    telephone: companyInfo.phones.map((p) => p.number),
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address,
    },
  };

  return (
    <>
      <Seo
        title="Contact Us — Get in Touch with Meridian InfoTech"
        description="Contact Meridian InfoTech Solutions for IT repair, maintenance, and support. Call, email, or visit our service centres in Mumbai."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />

      <PageHeader
        label="Get in Touch"
        title={<>Have a question? <span className="text-gradient">We are here to help</span></>
        description="Reach out to us via phone, email, or the form below. We respond within 24 hours."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact info */}
          <div className="lg:col-span-4 space-y-6">
            {companyInfo.phones.map((phone) => (
              <motion.a
                key={phone.number}
                href={phone.tel}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="block rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                    <Phone className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-700 text-ink-900 dark:text-ink-50">{phone.label}</p>
                    <p className="text-sm text-ink-600 dark:text-ink-400">{phone.number}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            <motion.a
              href={`mailto:${companyInfo.email}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="block rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-700 text-ink-900 dark:text-ink-50">Email</p>
                  <p className="text-sm text-ink-600 dark:text-ink-400">{companyInfo.email}</p>
                </div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-700 text-ink-900 dark:text-ink-50">Location</p>
                  <p className="text-sm text-ink-600 dark:text-ink-400">{companyInfo.address}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-8 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-lg border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-lg border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-6 w-full rounded-lg border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="mt-6 w-full rounded-lg border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="submit"
                className="mt-6 btn-primary w-full justify-center"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
              {submitted && (
                <p className="mt-4 text-center text-sm text-green-600">Thank you! We will get back to you soon.</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}