import * as fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as ts from 'typescript';

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE_ORIGIN = 'https://meridianinfotechsolutions.in';

const SOURCES = {
  app: path.join(ROOT_DIR, 'src', 'App.tsx'),
  services: path.join(ROOT_DIR, 'src', 'data', 'services.ts'),
  locations: path.join(ROOT_DIR, 'src', 'data', 'locations.ts'),
  seoPages: path.join(ROOT_DIR, 'src', 'data', 'extra_info_better_seo.ts'),
  sitemapPage: path.join(ROOT_DIR, 'src', 'pages', 'SitemapPage.tsx'),
  generatedData: path.join(ROOT_DIR, 'src', 'generated', 'sitemap-data.ts'),
  generatedXml: path.join(ROOT_DIR, 'public', 'sitemap.xml'),
};

const CATEGORY_META = {
  buy: {
    label: 'Buy Pages',
    description: 'Refurbished and purchase-focused pages.',
  },
  sell: {
    label: 'Sell Pages',
    description: 'Trade-in and resale pages.',
  },
  repair: {
    label: 'Repair Pages',
    description: 'Brand and service-specific repair pages.',
  },
  service: {
    label: 'Service Pages',
    description: 'Specialized support and maintenance pages.',
  },
  upgrade: {
    label: 'Upgrade Pages',
    description: 'Upgrade and replacement guidance pages.',
  },
  recycling: {
    label: 'Recycling Pages',
    description: 'E-waste and responsible recycling pages.',
  },
};

const STATIC_LABELS = {
  '/': 'Home',
  about: 'About Us',
  services: 'Services',
  testimonials: 'Testimonials',
  faq: 'FAQ',
  contact: 'Contact',
  locations: 'Locations',
  sitemap: 'HTML Sitemap',
};

const STATIC_CHANGEFREQ = {
  '/': 'weekly',
  about: 'monthly',
  services: 'weekly',
  testimonials: 'monthly',
  faq: 'monthly',
  contact: 'monthly',
  locations: 'monthly',
  sitemap: 'monthly',
};

const STATIC_PRIORITY = {
  '/': 1.0,
  about: 0.8,
  services: 0.9,
  testimonials: 0.7,
  faq: 0.7,
  contact: 0.8,
  locations: 0.8,
  sitemap: 0.5,
};

const NOINDEX_ROUTES = new Set(['/thank-you']);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

async function readText(filePath) {
  return fs.readFile(filePath, 'utf8');
}

async function fileLastMod(filePath) {
  const stat = await fs.stat(filePath);
  return formatDate(stat.mtime);
}

function getStringLiteral(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  return null;
}

function getJsxAttr(node, name) {
  for (const prop of node.attributes.properties) {
    if (ts.isJsxAttribute(prop) && prop.name.text === name) {
      return prop;
    }
  }
  return null;
}

function getJsxElementName(node) {
  if (!node) return null;
  if (ts.isJsxSelfClosingElement(node)) {
    return node.tagName.getText();
  }
  if (ts.isJsxElement(node)) {
    return node.openingElement.tagName.getText();
  }
  return null;
}

function getJsxExpressionFromAttr(attr) {
  if (!attr?.initializer || !ts.isJsxExpression(attr.initializer)) {
    return null;
  }
  return attr.initializer.expression ?? null;
}

function getObjectStringProp(objectLiteral, name) {
  for (const prop of objectLiteral.properties) {
    if (
      ts.isPropertyAssignment(prop) &&
      ((ts.isIdentifier(prop.name) && prop.name.text === name) ||
        (ts.isStringLiteral(prop.name) && prop.name.text === name))
    ) {
      return getStringLiteral(prop.initializer);
    }
  }
  return null;
}

function extractArrayObjects(sourceFile, variableName) {
  let arrayLiteral = null;

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === variableName &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      arrayLiteral = node.initializer;
      return;
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return arrayLiteral?.elements.filter(ts.isObjectLiteralExpression) ?? [];
}

function extractLazyImports(sourceFile) {
  const imports = new Map();

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer &&
      ts.isCallExpression(node.initializer) &&
      ts.isIdentifier(node.initializer.expression) &&
      node.initializer.expression.text === 'lazy'
    ) {
      const arrow = node.initializer.arguments[0];
      if (arrow && ts.isArrowFunction(arrow)) {
        const body = arrow.body;
        if (
          ts.isCallExpression(body) &&
          body.expression.kind === ts.SyntaxKind.ImportKeyword &&
          body.arguments.length > 0
        ) {
          const importPath = getStringLiteral(body.arguments[0]);
          if (importPath) {
            imports.set(node.name.text, importPath);
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return imports;
}

function extractRoutes(appSource) {
  const sourceFile = ts.createSourceFile('App.tsx', appSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const lazyImports = extractLazyImports(sourceFile);
  const routes = [];

  function visit(node) {
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText() === 'Route') {
      const pathAttr = getJsxAttr(node, 'path');
      const indexAttr = getJsxAttr(node, 'index');
      const elementAttr = getJsxAttr(node, 'element');
      const pathValue = pathAttr?.initializer ? getStringLiteral(pathAttr.initializer) : null;
      const isIndex = Boolean(indexAttr);
      const elementExpression = getJsxExpressionFromAttr(elementAttr);
      const componentName = elementExpression ? getJsxElementName(elementExpression) : null;
      const componentImport = componentName ? lazyImports.get(componentName) ?? null : null;

      if (pathValue || isIndex) {
        routes.push({
          path: isIndex ? '/' : pathValue,
          componentName,
          componentImport,
        });
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return routes;
}

function parseServices(fileText) {
  const sourceFile = ts.createSourceFile('services.ts', fileText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  return extractArrayObjects(sourceFile, 'services').map((objectLiteral) => ({
    slug: getObjectStringProp(objectLiteral, 'slug'),
    shortTitle: getObjectStringProp(objectLiteral, 'shortTitle'),
  })).filter((item) => item.slug && item.shortTitle);
}

function parseLocations(fileText) {
  const sourceFile = ts.createSourceFile('locations.ts', fileText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  return extractArrayObjects(sourceFile, 'locations').map((objectLiteral) => ({
    slug: getObjectStringProp(objectLiteral, 'slug'),
    name: getObjectStringProp(objectLiteral, 'name'),
    shortName: getObjectStringProp(objectLiteral, 'shortName'),
  })).filter((item) => item.slug && item.name);
}

function parseSeoPages(fileText) {
  const sourceFile = ts.createSourceFile('extra_info_better_seo.ts', fileText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  return extractArrayObjects(sourceFile, 'seoPages').map((objectLiteral) => ({
    slug: getObjectStringProp(objectLiteral, 'slug'),
    title: getObjectStringProp(objectLiteral, 'title'),
    category: getObjectStringProp(objectLiteral, 'category'),
  })).filter((item) => item.slug && item.title && item.category);
}

function titleCase(value) {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatStaticLabel(routePath) {
  const normalized = routePath === '/' ? '/' : routePath.replace(/^\/+/, '');
  if (STATIC_LABELS[normalized]) {
    return STATIC_LABELS[normalized];
  }

  if (normalized === '/') {
    return 'Home';
  }

  return titleCase(normalized.split('/').filter(Boolean).pop() ?? normalized);
}

function getStaticMeta(routePath) {
  const normalized = routePath === '/' ? '/' : routePath.replace(/^\/+/, '');
  return {
    changefreq: STATIC_CHANGEFREQ[normalized] ?? 'monthly',
    priority: STATIC_PRIORITY[normalized] ?? 0.7,
  };
}

function isNoindexPage(pagePath) {
  return /noindex/i.test(pagePath);
}

function routeToPath(routePath) {
  if (routePath === '/') return '/';
  return routePath.startsWith('/') ? routePath : `/${routePath}`;
}

function getPageFileFromImport(importPath) {
  if (!importPath || !importPath.startsWith('@/pages/')) return null;
  const relative = importPath.replace('@/pages/', '');
  return path.join(ROOT_DIR, 'src', 'pages', `${relative}.tsx`);
}

async function buildSitemapManifest() {
  const [appSource, servicesSource, locationsSource, seoPagesSource] = await Promise.all([
    readText(SOURCES.app),
    readText(SOURCES.services),
    readText(SOURCES.locations),
    readText(SOURCES.seoPages),
  ]);

  const routes = extractRoutes(appSource);
  const servicePages = parseServices(servicesSource);
  const locationPages = parseLocations(locationsSource);
  const seoPages = parseSeoPages(seoPagesSource);

  const staticRoutes = [];
  const dynamicRoutes = [];

  for (const route of routes) {
    if (!route.path || route.path === '*' || route.path === 'sitemap.xml') {
      continue;
    }

    if (route.path.includes(':')) {
      dynamicRoutes.push(route);
    } else {
      staticRoutes.push(route);
    }
  }

  const sections = [];
  const entries = [];
  const seen = new Set();

  async function pushEntry({
    loc,
    lastmod,
    changefreq,
    priority,
  }) {
    const normalizedLoc = loc.toLowerCase();
    if (seen.has(normalizedLoc)) {
      return;
    }
    seen.add(normalizedLoc);
    entries.push({ loc, lastmod, changefreq, priority });
  }

  const coreLinks = [];
  for (const route of staticRoutes) {
    const normalizedRoute = routeToPath(route.path);
    if (NOINDEX_ROUTES.has(normalizedRoute)) {
      continue;
    }

    const pageFile = getPageFileFromImport(route.componentImport);
    const pageSource = pageFile && existsSync(pageFile) ? await readText(pageFile) : '';
    if (pageSource && isNoindexPage(pageSource)) {
      continue;
    }

    const label = formatStaticLabel(normalizedRoute);
    coreLinks.push({ label, to: normalizedRoute });

    const lastmod = pageFile && existsSync(pageFile) ? await fileLastMod(pageFile) : formatDate(new Date());
    const { changefreq, priority } = getStaticMeta(normalizedRoute);
    await pushEntry({
      loc: `${SITE_ORIGIN}${normalizedRoute}`,
      lastmod,
      changefreq,
      priority,
    });
  }

  if (coreLinks.length) {
    sections.push({
      key: 'core',
      label: 'Core Pages',
      description: 'Essential pages for browsing the site and getting in touch.',
      links: coreLinks,
    });
  }

  const serviceRoute = dynamicRoutes.find((route) => route.path === 'services/:slug');
  if (serviceRoute) {
    const lastmod = await fileLastMod(SOURCES.services);
    const links = servicePages.map((page) => ({ label: page.shortTitle, to: `/services/${page.slug}` }));
    sections.push({
      key: 'services',
      label: 'Services',
      description: 'All public service pages currently available on the site.',
      links,
    });

    for (const page of servicePages) {
      await pushEntry({
        loc: `${SITE_ORIGIN}/services/${page.slug}`,
        lastmod,
        changefreq: 'monthly',
        priority: 0.8,
      });
    }
  }

  const locationRoute = dynamicRoutes.find((route) => route.path === 'locations/:slug');
  if (locationRoute) {
    const lastmod = await fileLastMod(SOURCES.locations);
    const links = locationPages.map((page) => ({ label: page.name, to: `/locations/${page.slug}` }));
    sections.push({
      key: 'locations',
      label: 'Locations',
      description: 'Branch pages for our public service locations.',
      links,
    });

    for (const page of locationPages) {
      await pushEntry({
        loc: `${SITE_ORIGIN}/locations/${page.slug}`,
        lastmod,
        changefreq: 'monthly',
        priority: 0.8,
      });
    }
  }

  const seoRoute = dynamicRoutes.find((route) => route.path === ':slug');
  if (seoRoute) {
    const lastmod = await fileLastMod(SOURCES.seoPages);
    const categoryOrder = ['buy', 'sell', 'repair', 'service'];
    const grouped = new Map();

    for (const page of seoPages) {
      if (!grouped.has(page.category)) {
        grouped.set(page.category, []);
      }
      grouped.get(page.category).push(page);
    }

    const categories = [
      ...categoryOrder.filter((category) => grouped.has(category)),
      ...[...grouped.keys()].filter((category) => !categoryOrder.includes(category)).sort(),
    ];

    const subsections = categories.map((category) => {
      const meta = CATEGORY_META[category] ?? {
        label: `${titleCase(category)} Pages`,
        description: `${titleCase(category)} related pages.`,
      };

      const pages = grouped.get(category) ?? [];
      return {
        key: category,
        label: meta.label,
        description: meta.description,
        links: pages.map((page) => ({ label: page.title, to: `/${page.slug}` })),
      };
    });

    sections.push({
      key: 'specialized',
      label: 'Specialized Pages',
      description: 'SEO landing pages grouped by topic so users can scan them quickly.',
      subsections,
    });

    for (const page of seoPages) {
      await pushEntry({
        loc: `${SITE_ORIGIN}/${page.slug}`,
        lastmod,
        changefreq: 'monthly',
        priority: 0.7,
      });
    }
  }

  return { sections, entries };
}

function renderSitemapXml(entries) {
  const urls = entries
    .map(
      (entry) => `  <url>\n` +
        `    <loc>${escapeXml(entry.loc)}</loc>\n` +
        `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>\n` +
        `    <changefreq>${escapeXml(entry.changefreq)}</changefreq>\n` +
        `    <priority>${entry.priority.toFixed(1)}</priority>\n` +
        `  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function renderSitemapDataModule(sections) {
  const header = `/* This file is auto-generated. Do not edit by hand. */\n`;
  const types = `
export interface SitemapLink {
  label: string;
  to: string;
}

export interface SitemapSubsection {
  key: string;
  label: string;
  description: string;
  links: SitemapLink[];
}

export interface SitemapSection {
  key: string;
  label: string;
  description: string;
  links?: SitemapLink[];
  subsections?: SitemapSubsection[];
}
`;

  return `${header}${types}\nexport const sitemapSections: SitemapSection[] = ${JSON.stringify(sections, null, 2)};\n`;
}

async function writeIfChanged(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  if (existsSync(filePath)) {
    const existing = await fs.readFile(filePath, 'utf8');
    if (existing === content) {
      return false;
    }
  }
  await fs.writeFile(filePath, content, 'utf8');
  return true;
}

export async function generateSitemapArtifacts() {
  const { sections, entries } = await buildSitemapManifest();
  const dataModule = renderSitemapDataModule(sections);
  const xml = renderSitemapXml(entries);

  const dataChanged = await writeIfChanged(SOURCES.generatedData, dataModule);
  const xmlChanged = await writeIfChanged(SOURCES.generatedXml, xml);

  return {
    sections,
    entries,
    xml,
    dataChanged,
    xmlChanged,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await generateSitemapArtifacts();
  console.log(`Generated sitemap data for ${result.entries.length} URLs.`);
}
