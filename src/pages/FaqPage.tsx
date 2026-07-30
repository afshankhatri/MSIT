import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { FaqAccordion } from '@/components/FaqAccordion';
import { CtaSection } from '@/components/CtaSection';
import { generalFaqs } from '@/data/faqs';

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generalFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title="FAQ — Frequently Asked Questions"
        description="Find answers to common questions about our IT services, repairs, AMC contracts, refurbished devices, e-waste management, and more."
        canonicalPath="/faq"
        jsonLd={jsonLd}
      />

      <PageHeader
        label="FAQ"
        title={<>Questions? <span className="text-gradient">We have answers.</span></>}
        description="Everything you need to know about our services, repairs, warranties, and how we work. Can't find what you're looking for? Just reach out."
        crumbs={[{ label: 'FAQ' }]}
      />

      <section className="container-px py-16">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={generalFaqs} />
        </div>
      </section>

      <CtaSection
        title="Still have questions?"
        description="Our team is happy to help. Reach out and we will get back to you with the answers you need."
      />
    </>
  );
}
