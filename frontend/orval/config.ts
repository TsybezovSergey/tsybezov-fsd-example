import { defineConfig } from "orval";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "");

export default defineConfig({
  api: {
    output: {
      mode: "tags-split",
      target: "../src/shared/api-generated/index.ts",
      schemas: "../src/shared/api-generated/model",
      client: "axios",
      baseUrl: env.VITE_API_BASE,
      prettier: true,
    },
    input: {
      target: env.VITE_API_BASE.concat("/api-json"),
    },
  },
});
