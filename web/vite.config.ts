import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://ahaoboy.github.io/js-engine-benchmark/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "antd",
        "echarts",
        "react-dom",
        "react-dom/client",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          antd: "antd",
          echarts: "echarts",
          "react-dom/client": "ReactDOM",
        },
      },
    },
  },
});
