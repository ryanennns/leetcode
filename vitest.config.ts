import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": new URL("./problems", import.meta.url).pathname,
    },
  },
  test: {
    include: ["problems/**/**.spec.ts"],
  },
});
