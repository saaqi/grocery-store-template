// vite.config.js
import { defineConfig } from "file:///D:/Dropbox/Websites/grocery-store-template/node_modules/vite/dist/node/index.js";
import { ViteMinifyPlugin } from "file:///D:/Dropbox/Websites/grocery-store-template/node_modules/vite-plugin-minify/dist/index.js";
import webfontDownload from "file:///D:/Dropbox/Websites/grocery-store-template/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
var IN_PRODUCTION = process.env.NODE_ENV === "production";
var IN_DEVELOPMENT = process.env.NODE_ENV === "development";
var hidePreloader = () => {
  return {
    name: "hide-preloader",
    transformIndexHtml(html) {
      return html.replace(
        `<link rel="stylesheet" href="./src/css/preloader.css">`,
        `<!-- <link rel="stylesheet" href="./src/css/preloader.css"> -->`
      );
    }
  };
};
var vite_config_default = defineConfig({
  plugins: [
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
    ]),
    // Hide Preloader while in Development
    IN_DEVELOPMENT && hidePreloader(),
    // Minify Output HTML File
    IN_PRODUCTION && ViteMinifyPlugin({})
  ],
  base: "./",
  server: {
    hot: true,
    port: 3e3
  },
  build: {
    outDir: "./docs"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEcm9wYm94XFxcXFdlYnNpdGVzXFxcXGdyb2Nlcnktc3RvcmUtdGVtcGxhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERyb3Bib3hcXFxcV2Vic2l0ZXNcXFxcZ3JvY2VyeS1zdG9yZS10ZW1wbGF0ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRHJvcGJveC9XZWJzaXRlcy9ncm9jZXJ5LXN0b3JlLXRlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IFZpdGVNaW5pZnlQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tbWluaWZ5XCI7XG5pbXBvcnQgd2ViZm9udERvd25sb2FkIGZyb20gXCJ2aXRlLXBsdWdpbi13ZWJmb250LWRsXCI7XG5jb25zdCBJTl9QUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xuY29uc3QgSU5fREVWRUxPUE1FTlQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiO1xuXG4vLyBIaWRlIFByZWxvYWRlciB3aGlsZSBpbiBkZXZlbG9wbWVudC5cbmNvbnN0IGhpZGVQcmVsb2FkZXIgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJoaWRlLXByZWxvYWRlclwiLFxuICAgIHRyYW5zZm9ybUluZGV4SHRtbChodG1sKSB7XG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKFxuICAgICAgICBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL3NyYy9jc3MvcHJlbG9hZGVyLmNzc1wiPmAsXG4gICAgICAgIGA8IS0tIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi9zcmMvY3NzL3ByZWxvYWRlci5jc3NcIj4gLS0+YFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHdlYmZvbnREb3dubG9hZChbXG4gICAgICBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXBcIixcbiAgICBdKSxcbiAgICAvLyBIaWRlIFByZWxvYWRlciB3aGlsZSBpbiBEZXZlbG9wbWVudFxuICAgIElOX0RFVkVMT1BNRU5UICYmIGhpZGVQcmVsb2FkZXIoKSxcbiAgICAvLyBNaW5pZnkgT3V0cHV0IEhUTUwgRmlsZVxuICAgIElOX1BST0RVQ1RJT04gJiYgVml0ZU1pbmlmeVBsdWdpbih7fSksXG4gIF0sXG4gIGJhc2U6IFwiLi9cIixcbiAgc2VydmVyOiB7XG4gICAgaG90OiB0cnVlLFxuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcIi4vZG9jc1wiLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdULFNBQVMsb0JBQW9CO0FBQ3JWLFNBQVMsd0JBQXdCO0FBQ2pDLE9BQU8scUJBQXFCO0FBQzVCLElBQU0sZ0JBQWdCLFFBQVEsSUFBSSxhQUFhO0FBQy9DLElBQU0saUJBQWlCLFFBQVEsSUFBSSxhQUFhO0FBR2hELElBQU0sZ0JBQWdCLE1BQU07QUFDMUIsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sbUJBQW1CLE1BQU07QUFDdkIsYUFBTyxLQUFLO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLGdCQUFnQjtBQUFBLE1BQ2Q7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLElBRUQsa0JBQWtCLGNBQWM7QUFBQTtBQUFBLElBRWhDLGlCQUFpQixpQkFBaUIsQ0FBQyxDQUFDO0FBQUEsRUFDdEM7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
