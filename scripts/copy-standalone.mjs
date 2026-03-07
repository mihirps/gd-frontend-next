/**
 * Copy static assets into standalone output so CSS/JS load when running
 * the standalone server (e.g. Docker or node server.js).
 * Run after: next build
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const standalone = path.join(root, '.next', 'standalone');
const standaloneNext = path.join(standalone, '.next');

if (!fs.existsSync(standalone)) {
  console.warn('No .next/standalone found (skip if not using output: "standalone").');
  process.exit(0);
}

// .next/static → .next/standalone/.next/static (required for CSS/JS)
const staticSrc = path.join(root, '.next', 'static');
const staticDest = path.join(standaloneNext, 'static');
if (fs.existsSync(staticSrc)) {
  fs.cpSync(staticSrc, staticDest, { recursive: true });
  console.log('Copied .next/static → standalone/.next/static');
} else {
  console.warn('No .next/static found.');
}

// public → .next/standalone/public
const publicSrc = path.join(root, 'public');
const publicDest = path.join(standalone, 'public');
if (fs.existsSync(publicSrc)) {
  fs.cpSync(publicSrc, publicDest, { recursive: true });
  console.log('Copied public → standalone/public');
}
