import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
import { allRoutes } from './src/lib/routes';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.ANALYZE === 'true' &&
      visualizer({
        filename: 'stats.html',
        gzipSize: true,
        brotliSize: true,
        open: false,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  ssgOptions: {
    script: 'build',
    formatting: 'prettify',
    routes: allRoutes,
    onBeforePageRender: (route: string, indexHtml: string) => {
      // Hook for future HTML modifications if needed
      // This is where we could inject route-specific meta tags
      return indexHtml;
    },
  },
});
