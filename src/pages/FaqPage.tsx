import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { FaqAccordion } from '@/components/FaqAccordion';

const faqs = [
  {
    q: 'Do you repair all laptop brands?',
    a: 'Yes, we service Dell, HP, Lenovo, Apple, ASUS, Acer, MSI, and most other brands. Bring your device in for a free diagnostic.',
  },
  {
    q: 'How long does a typical repair take?',
    a: 'Most repairs take 24-48 hours. Complex motherboard repairs may take 3-5 days. We will give you an exact timeline after diagnosis.',
  },
  {
    q: 'Do you offer a warranty on repairs?',
    a: 'Yes, all repairs come with a 90-day warranty covering both parts and labor for the specific issue addressed.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, card, UPI, and bank transfer. Flexible payment terms available for corporate clients.',
  },
  {
    q: 'Do you offer on-site service for businesses?',
    a: 'Yes. We provide on-site support for businesses with multiple computers. Contact us to discuss your requirements.',
  },
  {
    q: 'What is an AMC?',
    a: 'An Annual Maintenance Contract (AMC) is a yearly agreement that covers scheduled maintenance, priority support, and discounted repairs for your IT infrastructure.',
  },
];

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Seo
        title="FAQ — Frequently Asked Questions"
        description="Get answers to common questions about our IT repair, maintenance, and support services at Meridian InfoTech Solutions."
        canonicalPath="/faq"
        jsonLd={jsonLd}
      />

      <PageHeader
        label="FAQ"
        title={<>Frequently Asked <span className="text-gradient">Questions</span></>
        description="Find quick answers to common questions about our services, repairs, warranties, and support."
        crumbs={[{ label: 'FAQ' }]}
      />

      <section className="container-px py-16">
        <div className="mx-auto max-w-2xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}