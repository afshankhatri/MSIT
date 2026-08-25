import { useEffect, useMemo } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const SITE_ORIGIN = 'https://meridianinfotechsolutions.in';

function setMetaContent(el: HTMLMetaElement, content: string) {
  if (el.content !== content) {
    el.content = content;
  }
}

function renderJsonLd(serializedData: string) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = serializedData;
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
  const serializedJsonLd = useMemo(() => (jsonLd ? JSON.stringify(jsonLd) : ''), [jsonLd]);

  useEffect(() => {
    const fullTitle = title.includes('Meridian')
      ? title
      : `${title} | Meridian InfoTech Solutions`;

    if (document.title !== fullTitle) {
      document.title = fullTitle;
    }

    const ensureMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      setMetaContent(el, content);
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
    if (canonical.href !== canonicalUrl) {
      canonical.href = canonicalUrl;
    }
    ensureMeta('property', 'og:url', canonicalUrl);

    const robotsMeta = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noindex) {
      ensureMeta('name', 'robots', 'noindex, nofollow');
    } else if (robotsMeta) {
      robotsMeta.remove();
    }

    let scriptEl: HTMLScriptElement | undefined;
    if (serializedJsonLd) {
      scriptEl = renderJsonLd(serializedJsonLd);
    }

    return () => {
      if (scriptEl) scriptEl.remove();
    };
  }, [title, description, canonicalPath, ogType, serializedJsonLd, noindex]);

  return null;
}
