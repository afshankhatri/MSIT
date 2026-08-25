import { lazy, Suspense } from 'react';
import { BrowserRouter, StaticRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Layout } from '@/components/Layout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const LocationsPage = lazy(() => import('@/pages/LocationsPage'));
const LocationDetailPage = lazy(() => import('@/pages/LocationDetailPage'));
const SitemapPage = lazy(() => import('@/pages/SitemapPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const ThankYouPage = lazy(() => import('@/pages/ThankYouPage'));
const ExtraDetails = lazy(() => import('@/pages/ExtraInfoDetails'));

const Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;
const routerProps = typeof window === 'undefined' ? { location: typeof location !== 'undefined' ? location.pathname : '/' } : {};

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="locations/:slug" element={<LocationDetailPage />} />
        <Route path="thank-you" element={<ThankYouPage />} />
        <Route path="sitemap" element={<SitemapPage />} />
        <Route path=":slug" element={<ExtraDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      {/* @ts-expect-error - Router type varies at build/runtime */}
      <Router {...routerProps}>
        <Suspense fallback={null}>
          <AppRoutes />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;