import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const SITE_ORIGIN = 'https://Meridianinfotechsolutions.in';

function renderJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  script.setAttribute('data-meridian-seo', 'true');
  document.head.appendChild(script);
  return script;
}

export function Seo({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  jsonLd,
  noindex,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes('Meridian')
      ? title
      : `${title} | Meridian IT Solutions`;
    document.title = fullTitle;

    const ensureMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      ensureMeta('name', 'description', description);
      ensureMeta('property', 'og:description', description);
      ensureMeta('name', 'twitter:description', description);
    }

    ensureMeta('property', 'og:title', fullTitle);
    ensureMeta('property', 'og:type', ogType);
    ensureMeta('name', 'twitter:title', fullTitle);

    const canonicalUrl = `${SITE_ORIGIN}${canonicalPath ?? ''}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    ensureMeta('property', 'og:url', canonicalUrl);

    if (noindex) {
      ensureMeta('name', 'robots', 'noindex, nofollow');
    }

    let scriptEl: HTMLScriptElement | undefined;
    if (jsonLd) {
      scriptEl = renderJsonLd(jsonLd);
    }

    return () => {
      if (scriptEl) scriptEl.remove();
    };
  }, [title, description, canonicalPath, ogType, jsonLd, noindex]);

  return null;
}
