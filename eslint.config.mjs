import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([".next/**", ".codex_work/**", "dist/**", "coverage/**", "playwright-report/**", "test-results/**", "demo.tsx", "components/**"]),
]);
