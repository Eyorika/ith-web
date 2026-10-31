import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

  return {
    server: {
      host: "0.0.0.0",
      port: port,
    },
    preview: {
      host: "0.0.0.0",
      port: port,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
