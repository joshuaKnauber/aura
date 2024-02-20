// vite.config.js
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "aura",
      fileName: "index",
      formats: ["es"],
    },
    minify: false,
    sourcemap: true,
    target: "esnext",
  },
  plugins: [dts({ insertTypesEntry: true })],
});
