import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Operations Manager',
    company: 'Tech Startup',
    text: 'Meridian handles all our IT infrastructure. Their AMC service is reliable, professional, and transparent. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    role: 'Freelance Designer',
    text: 'Got my MacBook screen fixed here in one day. Fair pricing, friendly staff, and the repair was flawless.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Business Owner',
    company: 'Retail Store Chain',
    text: 'We have multiple locations and Meridian supports all of them. Their quick response and quality work save us downtime.',
    rating: 5,
  },
  {
    name: 'Priya Desai',
    role: 'Student',
    text: 'My laptop crashed during exams. Meridian recovered my data and got it running again in 48 hours. Lifesaver!',
    rating: 5,
  },
  {
    name: 'Amit Gupta',
    role: 'School IT Manager',
    text: 'Managing 60 workstations was a nightmare until Meridian took over. No more IT headaches.',
    rating: 5,
  },
  {
    name: 'Neha Reddy',
    role: 'Home Office User',
    text: 'Had my iPhone repaired here. No pressure sales, honest about what was needed, and the service was excellent.',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Customer Testimonials',
    description: 'What our customers say about Meridian InfoTech Solutions IT services.',
  };

  return (
    <>
      <Seo
        title="Testimonials — What Our Customers Say"
        description="Read real customer reviews and testimonials about Meridian InfoTech Solutions' IT repair, maintenance, and support services."
        canonicalPath="/testimonials"
        jsonLd={jsonLd}
      />

      <PageHeader
        label="Testimonials"
        title={<>Trusted by <span className="text-gradient">thousands</span></>
        description="See what our customers have to say about our service, professionalism, and support."
        crumbs={[{ label: 'Testimonials' }]}
      />

      <section className="container-px py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-sm"
            >
              <div className="flex gap-1">
                {Array(testimonial.rating).fill(0).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-ink-700 dark:text-ink-200">{testimonial.text}</p>
              <div className="mt-6 flex items-center justify-between border-t border-ink-200 dark:border-ink-800 pt-4">
                <div>
                  <p className="font-700 text-ink-900 dark:text-ink-50">{testimonial.name}</p>
                  <p className="text-xs text-ink-600 dark:text-ink-400">{testimonial.role}{testimonial.company ? ` at ${testimonial.company}` : ''}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}