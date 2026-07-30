import { Seo } from '@/components/Seo';
import { HeroSection } from '@/components/home/HeroSection';
import { StackedCardsSection } from '@/components/home/StackedCardsSection';
import { StatsCenterpiece } from '@/components/home/StatsCenterpiece';
import { ServicesGridSection } from '@/components/home/ServicesGridSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { TestimonialsPreviewSection } from '@/components/home/TestimonialsPreviewSection';
import { CtaSection } from '@/components/CtaSection';
import { companyInfo } from '@/data/company';
import { services } from '@/data/services';




export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org', 
    '@type': 'LocalBusiness',
    name: companyInfo.name,
    description: companyInfo.description,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address,
    },
    foundingDate: String(companyInfo.foundedYear),
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.summary,
      },
    })),
  };

  return (
    <>
      <Seo
        title="Meridian IT Solutions — Computer, Laptop & IT Maintenance Services"
        description={companyInfo.description}
        canonicalPath="/"
        jsonLd={jsonLd}
      />
      <HeroSection />
      <StackedCardsSection />
      <StatsCenterpiece />
      <ServicesGridSection />
      <CtaSection/>
      <WhyChooseUsSection />
      <TestimonialsPreviewSection />
      <CtaSection />

      {/* Map */}
      <section className="container-px py-12">
        <div className="overflow-hidden rounded-3xl border border-ink-200 dark:border-ink-800 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.194162170495!2d72.8183208871679!3d18.95882160000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf92a6e711c1%3A0xa57f1dcb575b432c!2sPETU%20pure%20edible%20tasty%20and%20unique!5e1!3m2!1sen!2sin!4v1785091250896!5m2!1sen!2sin"
            className="h-72 w-full sm:h-96"
            loading="lazy"
            title="shop location"
          />
        </div>
      </section>

    </>
  );
}




