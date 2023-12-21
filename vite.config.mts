import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Twitcher Extension",
  description: "Fit to me",
  version: "1.0",
  icons: {
    // "16": "images/icon-16.png",
    // "32": "images/icon-32.png",
    // "48": "images/icon-48.png",
    // "128": "images/icon-128.png",
  },
  content_scripts: [
    {
      js: ["scripts/index.ts"],
      matches: ["https://www.twitch.tv/*"],
    },
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
