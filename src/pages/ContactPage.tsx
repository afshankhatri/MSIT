import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { useNavigate } from 'react-router-dom';


export default function ContactPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const body = new FormData();

    body.append("name", form.name);
    body.append("phone", form.phone);
    body.append("email", form.email);
    body.append("service", form.service);
    body.append("message", form.message);

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        body,
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
      setIsSubmitting(false);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${companyInfo.name}`,
    description: 'Get in touch with Meridian IT Solutions for IT maintenance, repair, and AMC services.',
  };

  return (
    <>
      <Seo
        title="Contact Us — Get a Free Quote"
        description="Contact Meridian IT Solutions for IT maintenance, laptop repair, AMC contracts, and more. Call, email, WhatsApp, or fill out our contact form."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />

      <PageHeader
        label="Contact"
        title={<>Let's get your tech <span className="text-gradient">back on track</span></>}
        description="Reach out for a free diagnostic, a quote, or just to ask a question. We respond quickly — usually within a few hours."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="container-px py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Contact info */}
          <div className="lg:col-span-5">
            <h2 className="text-xl font-700 text-ink-900 dark:text-ink-50">Get in touch</h2>
            <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
              Choose whatever is easiest for you — we are available across multiple channels.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="group flex items-center gap-4 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-700 text-ink-900 dark:text-ink-50">Phone</p>
                  <p className="text-sm text-ink-500 dark:text-ink-400">{companyInfo.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-700 text-ink-900 dark:text-ink-50">Email</p>
                  <p className="text-sm text-ink-500 dark:text-ink-400">{companyInfo.email}</p>
                </div>
              </a>

              <a
                href={companyInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                  <FaWhatsapp className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-700 text-ink-900 dark:text-ink-50">WhatsApp</p>
                  <p className="text-sm text-ink-500 dark:text-ink-400">Chat with us instantly</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-700 text-ink-900 dark:text-ink-50">Head Office</p>
                  <p className="text-sm text-ink-500 dark:text-ink-400">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-4 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-700 text-ink-900 dark:text-ink-50">Hours</p>
                  <p className="text-sm text-ink-500 dark:text-ink-400">Mon–Sun: 9 AM – 9 PM </p>
                </div>
              </div>
            </div>

            {/* Branch quick links */}
            <div className="mt-6">
              <p className="text-xs font-600 uppercase tracking-wider text-ink-400 dark:text-ink-500">Our Branches</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {locations.map((l) => (
                  <a
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="chip hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    <MapPin className="h-3.5 w-3.5 text-brand-500" />
                    {l.shortName}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-lg sm:p-8"
            >
              <h2 className="text-xl font-700 text-ink-900 dark:text-ink-50">Request a quote</h2>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                Fill out the form below and we will get back to you with a free, no-obligation quote.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-600 text-ink-700 dark:text-ink-200">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                      placeholder="Meridian InfoTech"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-600 text-ink-700 dark:text-ink-200">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-field"
                      placeholder="+919152549454"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-600 text-ink-700 dark:text-ink-200">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-field"
                    placeholder="info@meridianinfotechsolutions.in"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-600 text-ink-700 dark:text-ink-200">
                    Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="input-field"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="other">Other / Not sure</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-600 text-ink-700 dark:text-ink-200">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="Tell us about your device or the issue you are facing..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />

                  {isSubmitting ? "Sending Request..." : "Send Request"}
                </button>
                <p className="text-center text-xs text-ink-400 dark:text-ink-500">
                  We respect your privacy. Your information is never shared.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
