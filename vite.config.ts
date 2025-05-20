import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
    coverage: {
      enabled: true,
      reporter: ["html", "text"], //Generates HTML and text reports,
      exclude: [
        "postcss.config.js",
        "tailwind.config.js",
        "node_modules/**",
        "dist/**",
        "vite.config.ts",
        "**.js",
        "src/App.tsx",
        "src/main.tsx",
      ],
      // you can also add "subdir" option to put report in a subdirectory
    },
  },
} as UserConfig);
