import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/PageHeader';
import { companyInfo } from '@/data/company';
import { sitemapSections } from '@/generated/sitemap-data';

export default function SitemapPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `HTML Sitemap - ${companyInfo.name}`,
    description:
      'An index of the most important public pages on Meridian InfoTech Solutions, organized by section for easy browsing and search engine discovery.',
    url: 'https://meridianinfotechsolutions.in/sitemap',
  };

  return (
    <>
      <Seo
        title="HTML Sitemap"
        description="Browse the most important public pages on Meridian InfoTech Solutions, organized into clear sections for services, company pages, locations, and specialized SEO pages."
        canonicalPath="/sitemap"
        jsonLd={jsonLd}
      />

      <PageHeader
        label="HTML Sitemap"
        title={<>A clear map of the site, organized for people and crawlers.</>}
        description="Use this page to quickly find our main service pages, company information, branch locations, and SEO landing pages."
        crumbs={[{ label: 'Sitemap' }]}
      />

      <section className="container-px py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {sitemapSections.map((section) => (
            <article
              key={section.key}
              className="rounded-3xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 shadow-sm"
            >
              <h2 className="text-lg font-700 text-ink-900 dark:text-ink-50">{section.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                {section.description}
              </p>

              {'links' in section && section.links && (
                <ul className="mt-5 space-y-3">
                  {section.links.map((page) => (
                    <li key={page.to}>
                      <Link
                        to={page.to}
                        className="group flex items-center justify-between gap-3 text-sm text-ink-600 transition-colors hover:text-brand-600 dark:text-ink-300 dark:hover:text-brand-400"
                      >
                        <span>{page.label}</span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 dark:text-ink-700" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {'subsections' in section && section.subsections && (
                <div className="mt-5 space-y-5">
                  {section.subsections.map((group) => (
                    <section key={group.key} aria-labelledby={`sitemap-${group.key}`}>
                      <h3 id={`sitemap-${group.key}`} className="text-sm font-700 text-ink-900 dark:text-ink-50">
                        {group.label}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                        {group.description}
                      </p>
                      <ul className="mt-3 space-y-3">
                        {group.links.map((page) => (
                          <li key={page.to}>
                            <Link
                              to={page.to}
                              className="group flex items-center justify-between gap-3 text-sm text-ink-600 transition-colors hover:text-brand-600 dark:text-ink-300 dark:hover:text-brand-400"
                            >
                              <span>{page.label}</span>
                              <ChevronRight className="h-4 w-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 dark:text-ink-700" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
