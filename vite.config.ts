import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,js,tsx,ts}",
    }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
