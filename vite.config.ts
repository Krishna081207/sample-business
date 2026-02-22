import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

const emailsWranglerConfig =
	process.env.EMAILS_WRANGLER_CONFIG ??
	path.resolve(__dirname, "emails-service", "wrangler.json");

const auxiliaryWorkers = fs.existsSync(emailsWranglerConfig)
	? [{ configPath: emailsWranglerConfig }]
	: [];

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	  plugins: [
	    ...mochaPlugins(process.env as any),
	    react(),
	    cloudflare({
	      ...(auxiliaryWorkers.length > 0 ? { auxiliaryWorkers } : {}),
	    }),
	  ],
	  server: {
	    allowedHosts: true,
	  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
