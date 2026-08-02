import { spawn, spawnSync } from 'node:child_process';
import { watch } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GENERATOR = path.join(ROOT_DIR, 'scripts', 'generate-sitemap.mjs');
const VITE_BIN = path.join(
  ROOT_DIR,
  'node_modules',
  'vite',
  'bin',
  'vite.js',
);
const VITE_CONFIG = path.join(ROOT_DIR, 'vite.config.mjs');

const WATCH_TARGETS = [
  path.join(ROOT_DIR, 'src', 'App.tsx'),
  path.join(ROOT_DIR, 'src', 'data', 'services.ts'),
  path.join(ROOT_DIR, 'src', 'data', 'locations.ts'),
  path.join(ROOT_DIR, 'src', 'data', 'extra_info_better_seo.ts'),
  path.join(ROOT_DIR, 'src', 'pages', 'SitemapPage.tsx'),
];

let regenerationTimer;
let viteProcess;
let shuttingDown = false;

function runGenerator() {
  const result = spawnSync(process.execPath, [GENERATOR], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error('Sitemap regeneration failed.');
  }
}

function scheduleRegeneration() {
  if (regenerationTimer) {
    clearTimeout(regenerationTimer);
  }

  regenerationTimer = setTimeout(() => {
    try {
      runGenerator();
    } catch (error) {
      console.error(error);
    }
  }, 150);
}

function cleanup(exitCode = 0) {
  if (shuttingDown) return;
  shuttingDown = true;

  for (const watcher of watchers) {
    watcher.close();
  }

  if (viteProcess && !viteProcess.killed) {
    viteProcess.kill('SIGTERM');
  }

  process.exit(exitCode);
}

runGenerator();

const watchers = WATCH_TARGETS.map((target) =>
  watch(target, { persistent: true }, () => {
    scheduleRegeneration();
  }),
);

viteProcess = spawn(process.execPath, [VITE_BIN, '--config', VITE_CONFIG], {
  cwd: ROOT_DIR,
  env: process.env,
  stdio: 'inherit',
});

viteProcess.on('exit', (code, signal) => {
  cleanup(code ?? (signal ? 1 : 0));
});

process.on('SIGINT', () => cleanup(0));
process.on('SIGTERM', () => cleanup(0));
