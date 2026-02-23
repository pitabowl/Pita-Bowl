#!/usr/bin/env node
/**
 * Export TV menu poster as PNG at 3840×2216 (48.5" × 28" at ~79 DPI).
 * Requires: npm install puppeteer (one-time), and dev server running: npm run dev
 *
 * Usage: node scripts/export-tv-menu.mjs
 * Output: public/images/tv-menu-poster.png
 */

import { createRequire } from "module";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const outputPath = join(projectRoot, "public", "images", "tv-menu-poster.png");

const W = 3840;
const H = 2216;

async function main() {
  let puppeteer;
  try {
    puppeteer = (await import("puppeteer")).default;
  } catch {
    console.error("Puppeteer not found. Run: npm install puppeteer");
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000/menu/tv", {
    waitUntil: "networkidle0",
    timeout: 15000,
  });
  await page.waitForTimeout(1500);

  await page.screenshot({
    path: outputPath,
    type: "png",
    clip: { x: 0, y: 0, width: W, height: H },
  });

  await browser.close();
  console.log("Saved:", outputPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
