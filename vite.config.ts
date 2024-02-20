// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "auro",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react"],
      // output: {
      //   globals: {
      //     react: "React",
      //   },
      // },
    },
    minify: false,
    // sourcemap: true,
    target: "esnext",
  },
  plugins: [dts({ insertTypesEntry: true }), react()],
});
