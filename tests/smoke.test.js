/**
 * Automated Smoke Tests for QA Manual Resume Project
 * Using native Node.js Test Runner (node:test & node:assert)
 * Run via: npm test  OR  node --test tests/smoke.test.js
 */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const htmlPath = path.join(rootDir, 'index.html');
const cssPath = path.join(rootDir, 'styles.css');
const jsPath = path.join(rootDir, 'app.js');

test('Suite: QA Resume Structure & Asset Integrity', async (t) => {

  await t.test('1. Core project files must exist and be readable', () => {
    assert.strictEqual(fs.existsSync(htmlPath), true, 'index.html should exist');
    assert.strictEqual(fs.existsSync(cssPath), true, 'styles.css should exist');
    assert.strictEqual(fs.existsSync(jsPath), true, 'app.js should exist');
  });

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  await t.test('2. Page title & meta tags must be correctly configured', () => {
    assert.match(htmlContent, /<title>.*QA Manual Engineer.*<\/title>/i, 'Title must mention QA Manual Engineer');
    assert.match(htmlContent, /<meta name="viewport"/i, 'Responsive viewport meta tag must be present');
    assert.match(htmlContent, /<meta charset="UTF-8">/i, 'UTF-8 charset declaration must be present');
  });

  await t.test('3. Direct contact links must match specified details', () => {
    assert.match(htmlContent, /https:\/\/t\.me\/dobriyakk/, 'Telegram link must point to https://t.me/dobriyakk');
    assert.match(htmlContent, /sokomaksim54@gmail\.com/, 'Email address must be sokomaksim54@gmail.com');
    assert.match(htmlContent, /https:\/\/github\.com\/nightfayer/, 'GitHub link must point to https://github.com/nightfayer');
  });

  await t.test('4. All primary navigation sections must be present', () => {
    const requiredIds = ['hero', 'skills', 'artifacts', 'experience', 'process', 'contacts'];
    for (const id of requiredIds) {
      assert.match(htmlContent, new RegExp(`id="${id}"`), `Section #${id} must exist in index.html`);
    }
  });

  await t.test('5. QA Artifacts tabs & runner must be present', () => {
    assert.match(htmlContent, /data-tab="bug-report"/, 'Bug Report tab must be present');
    assert.match(htmlContent, /data-tab="test-case"/, 'Test Case tab must be present');
    assert.match(htmlContent, /data-tab="api-test"/, 'API Test tab must be present');
    assert.match(htmlContent, /data-tab="sql-verify"/, 'SQL Verification tab must be present');
    assert.match(htmlContent, /data-tab="aqa-test"/, 'Playwright E2E test tab must be present');
    assert.match(htmlContent, /id="runSmokeBtn"/, 'Interactive test runner button must be present');
  });
});

test('Suite: Stylesheet & Theme Verification', async (t) => {
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  await t.test('1. Light and Dark themes must be declared', () => {
    assert.match(cssContent, /:root/, ':root must be defined');
    assert.match(cssContent, /\[data-theme="light"\]/, 'Light theme rules must be defined');
  });

  await t.test('2. Print media query (@media print) must be defined for clean PDF export', () => {
    assert.match(cssContent, /@media\s+print/, '@media print must be declared for PDF export');
    assert.match(cssContent, /\.print-hide-btn|\.bg-decoration/, 'Non-printable decorative elements must be hidden in print');
  });
});

test('Suite: Localization (RU/EN) Parity Check', async (t) => {
  const jsContent = fs.readFileSync(jsPath, 'utf8');

  await t.test('1. app.js must define translations for both RU and EN', () => {
    assert.match(jsContent, /ru:\s*\{/, 'Russian translations block must be present');
    assert.match(jsContent, /en:\s*\{/, 'English translations block must be present');
  });

  await t.test('2. Translation keys between RU and EN must be 100% in sync', () => {
    // Extract ru and en keys via RegExp
    const ruMatch = jsContent.match(/ru:\s*\{([\s\S]*?)\},\s*en:/);
    const enMatch = jsContent.match(/en:\s*\{([\s\S]*?)\}\s*\n\s*\};/);

    assert.ok(ruMatch, 'RU block must be parseable');
    assert.ok(enMatch, 'EN block must be parseable');

    const extractKeys = (block) => {
      const keys = [];
      const regex = /^\s*([a-zA-Z0-9_]+):/gm;
      let m;
      while ((m = regex.exec(block)) !== null) {
        keys.push(m[1]);
      }
      return keys;
    };

    const ruKeys = extractKeys(ruMatch[1]);
    const enKeys = extractKeys(enMatch[1]);

    assert.ok(ruKeys.length > 10, 'RU should contain at least 10 keys');
    assert.strictEqual(ruKeys.length, enKeys.length, `RU keys count (${ruKeys.length}) must match EN keys count (${enKeys.length})`);

    const missingInEn = ruKeys.filter(k => !enKeys.includes(k));
    assert.deepStrictEqual(missingInEn, [], 'There should be no missing keys in EN translations');
  });
});
