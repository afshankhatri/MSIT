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
        title="Meridian InfoTech Solutions — Computer, Laptop & IT Maintenance Services"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886.6684886508688!2d72.83416793880511!3d18.960719632233328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf081f036933%3A0x795dd73dbc7a0b1d!2sMeridian%20Infotech%20Solutions!5e0!3m2!1sen!2sin!4v1785439109812!5m2!1sen!2sin"
            className="h-72 w-full sm:h-96"
            loading="lazy"
            title="shop location"
          />
        </div>
      </section>

    </>
  );
}




