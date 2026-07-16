import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('the homepage and trust pages may be indexed', () => {
  const layout = read('src/app/layout.tsx');
  assert.match(layout, /robots:\s*{[\s\S]*?index:\s*true,[\s\S]*?googleBot:\s*{\s*index:\s*true/);
});

test('thin state and listing routes remain noindex,follow', () => {
  for (const path of ['src/app/[state]/page.tsx', 'src/app/[state]/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    assert.match(source, /googleBot:\s*{\s*index:\s*false,\s*follow:\s*true/);
  }
});

test('directory-only browse hubs remain noindex when present', () => {
  for (const path of ['src/app/browse/page.tsx', 'src/app/browse-states/page.tsx']) {
    const url = new URL(`../${path}`, import.meta.url);
    if (existsSync(url)) {
      assert.match(read(path), /robots:\s*{\s*index:\s*false,\s*follow:\s*true/);
    }
  }
});

test('the sitemap contains only an explicit allowlist', () => {
  const sitemap = read('src/app/sitemap.ts');
  assert.match(sitemap, /INDEXABLE_PATHS/);
  assert.doesNotMatch(sitemap, /data\/locations|locations\.map|statePages|locationPages|parkPages/);
  assert.match(sitemap, /'\/about'/);
  assert.match(sitemap, /'\/contact'/);
  assert.doesNotMatch(sitemap, /petrified-forest-park/);
});

test('the unsupported Gilmer destination is permanently retired', () => {
  const retired = read('src/app/texas/petrified-forest-park/page.tsx');
  assert.match(retired, /permanentRedirect\('\/'\)/);
  assert.doesNotMatch(retired, /free access|collecting permitted|publicAccess/i);
});

test('public copy does not turn legacy mineral records into collecting permission', () => {
  const homepage = read('src/app/page.tsx');
  assert.match(homepage, /mineral occurrence or old mining record does not prove/i);
  assert.match(homepage, /blm\.gov\/programs\/recreation\/rockhounding/);
  assert.doesNotMatch(homepage, /1\.5 million|1 billion acres|top-rated|Public rockhounding site/i);

  for (const path of ['src/app/[state]/page.tsx', 'src/app/[state]/[slug]/page.tsx']) {
    const source = read(path);
    assert.doesNotMatch(source, /Open for collecting|Open for public rock|Public rockhounding site/i);
    assert.match(source, /Verify ownership/);
  }
});

test('Googlebot can crawl pages to observe route-level noindex rules', () => {
  const robots = read('public/robots.txt');
  assert.match(robots, /User-agent:\s*Googlebot[\s\S]*?Allow:\s*\//i);
});
