import { defineConfig } from "orval";

import dotenv from "dotenv";

dotenv.config();
const baseUrl = process.env.NEXT_API_BASE ?? "";

console.log("API Base URL:", baseUrl);

export default defineConfig({
  api: {
    output: {
      mode: "tags-split",
      target: "../src/shared/api-generated/index.ts",
      schemas: "../src/shared/api-generated/model",
      client: "fetch",
      baseUrl,
      prettier: true,
    },
    input: {
      target: baseUrl.concat("/api-json"),
    },
  },
});
