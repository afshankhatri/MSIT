import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <Link
        to="/"
        className="flex items-center gap-1 text-ink-500 dark:text-ink-400 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
      >
        <Home className="h-3.5 w-3.5" />
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-ink-300 dark:text-ink-600" />
          {crumb.to ? (
            <Link
              to={crumb.to}
              className="text-ink-500 dark:text-ink-400 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="font-600 text-ink-800 dark:text-ink-200">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
