import path from "path"
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    host: "0.0.0.0",
    // allowedHosts: [process.env["REPLIT_DOMAINS"].split(",")[0]],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
});
