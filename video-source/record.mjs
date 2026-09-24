// Renders demo.html frame by frame, once per language, and encodes assets/omni-demo-<lang>.mp4 and its poster.
// Usage: npm i playwright ffmpeg-static && node video-source/record.mjs
// Set CHROMIUM_PATH to use an existing Chromium.
import { chromium } from "playwright";
import ffmpeg from "ffmpeg-static";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const assets = join(here, "..", "assets");
const FPS = 30;
const POSTER_AT = 10.8;

const LANGS = ["en", "fr"];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 360, height: 740 }, deviceScaleFactor: 2 });

for (const lang of LANGS) {
  const demoUrl = pathToFileURL(join(here, "demo.html"));
  demoUrl.search = `?lang=${lang}`;
  await page.goto(demoUrl.href);
  await page.evaluate(() => document.fonts.load('700 16px "Manrope"'));

  const frames = mkdtempSync(join(tmpdir(), "omni-frames-"));
  const duration = await page.evaluate(() => window.DURATION);
  const total = Math.round(duration * FPS);
  for (let i = 0; i < total; i++) {
    await page.evaluate(t => window.render(t), i / FPS);
    await page.screenshot({ path: join(frames, `f${String(i).padStart(4, "0")}.png`) });
  }
  await page.evaluate(t => window.render(t), POSTER_AT);
  await page.screenshot({ path: join(frames, "poster.png") });

  execFileSync(ffmpeg, ["-y", "-loglevel", "error", "-framerate", String(FPS), "-i", join(frames, "f%04d.png"),
    "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p", "-crf", "24", "-preset", "slow",
    "-movflags", "+faststart", "-an", join(assets, `omni-demo-${lang}.mp4`)]);
  execFileSync(ffmpeg, ["-y", "-loglevel", "error", "-i", join(frames, "poster.png"), "-q:v", "3", join(assets, `omni-demo-${lang}-poster.jpg`)]);
  rmSync(frames, { recursive: true, force: true });
  console.log(`Encoded ${total} frames to assets/omni-demo-${lang}.mp4`);
}
await browser.close();
