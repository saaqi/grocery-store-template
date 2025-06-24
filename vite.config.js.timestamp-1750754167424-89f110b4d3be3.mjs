// vite.config.js
import { defineConfig } from "file:///D:/Websites/grocery-store-template/node_modules/vite/dist/node/index.js";
import { ViteMinifyPlugin } from "file:///D:/Websites/grocery-store-template/node_modules/vite-plugin-minify/dist/index.cjs";
import { purgeCSSPlugin } from "file:///D:/Websites/grocery-store-template/node_modules/@fullhuman/postcss-purgecss/lib/postcss-purgecss.js";
import cssnano from "file:///D:/Websites/grocery-store-template/node_modules/cssnano/src/index.js";
import autoprefixer from "file:///D:/Websites/grocery-store-template/node_modules/autoprefixer/lib/autoprefixer.js";
var IN_PRODUCTION = process.env.NODE_ENV === "production";
var bootstrap = "node_modules/bootstrap";
var IN_DEVELOPMENT = process.env.NODE_ENV === "development";
var hidePreloader = () => {
  return {
    name: "hide-preloader",
    transformIndexHtml(html) {
      return html.replace(
        `<link rel="stylesheet" href="./src/scss/preloader.css">`,
        `<!-- <link rel="stylesheet" href="./src/scss/preloader.css"> -->`
      );
    }
  };
};
var vite_config_default = defineConfig({
  plugins: [
    // Hide Preloader while in Development
    IN_DEVELOPMENT && hidePreloader(),
    // Minify Output HTML File
    IN_PRODUCTION && ViteMinifyPlugin({})
  ],
  // base: "./",
  server: {
    hot: true,
    port: 3e3
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern"
      }
    },
    postcss: {
      plugins: IN_PRODUCTION ? [
        purgeCSSPlugin({
          content: [
            "index.html",
            "./src/**/*.js",
            // --- Import only the required components.
            `${bootstrap}/js/dist/alert.js`,
            // `${bootstrap}/js/dist/base-component.js`,
            // `${bootstrap}/js/dist/button.js`,
            // `${bootstrap}/js/dist/carousel.js`,
            `${bootstrap}/js/dist/collapse.js`,
            `${bootstrap}/js/dist/dropdown.js`,
            `${bootstrap}/js/dist/modal.js`,
            `${bootstrap}/js/dist/offcanvas.js`
            // `${bootstrap}/js/dist/popover.js`,
            // `${bootstrap}/js/dist/scrollspy.js`,
            // `${bootstrap}/js/dist/tab.js`,
            // `${bootstrap}/js/dist/toast.js`,
            // `${bootstrap}/js/dist/tooltip.js`,
          ],
          safelist: [/modal-/, /fad/, /show/, /accordion-/],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          keyframes: true,
          variables: true
        }),
        cssnano({
          preset: ["default", { discardComments: { removeAll: true } }]
        }),
        autoprefixer()
      ] : []
    }
  },
  build: {
    // outDir: "./docs",
    minify: "terser",
    terserOptions: {
      format: {
        comments: false
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXZWJzaXRlc1xcXFxncm9jZXJ5LXN0b3JlLXRlbXBsYXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxXZWJzaXRlc1xcXFxncm9jZXJ5LXN0b3JlLXRlbXBsYXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9XZWJzaXRlcy9ncm9jZXJ5LXN0b3JlLXRlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IFZpdGVNaW5pZnlQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tbWluaWZ5XCI7XG5jb25zdCBJTl9QUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xuaW1wb3J0IHsgcHVyZ2VDU1NQbHVnaW4gfSBmcm9tICdAZnVsbGh1bWFuL3Bvc3Rjc3MtcHVyZ2Vjc3MnO1xuaW1wb3J0IGNzc25hbm8gZnJvbSAnY3NzbmFubyc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XG5jb25zdCBib290c3RyYXAgPSAnbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcCc7XG5cbmNvbnN0IElOX0RFVkVMT1BNRU5UID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIjtcblxuLy8gSGlkZSBQcmVsb2FkZXIgd2hpbGUgaW4gZGV2ZWxvcG1lbnQuXG5jb25zdCBoaWRlUHJlbG9hZGVyID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwiaGlkZS1wcmVsb2FkZXJcIixcbiAgICB0cmFuc2Zvcm1JbmRleEh0bWwoaHRtbCkge1xuICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZShcbiAgICAgICAgYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi9zcmMvc2Nzcy9wcmVsb2FkZXIuY3NzXCI+YCxcbiAgICAgICAgYDwhLS0gPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuL3NyYy9zY3NzL3ByZWxvYWRlci5jc3NcIj4gLS0+YFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIC8vIEhpZGUgUHJlbG9hZGVyIHdoaWxlIGluIERldmVsb3BtZW50XG4gICAgSU5fREVWRUxPUE1FTlQgJiYgaGlkZVByZWxvYWRlcigpLFxuICAgIC8vIE1pbmlmeSBPdXRwdXQgSFRNTCBGaWxlXG4gICAgSU5fUFJPRFVDVElPTiAmJiBWaXRlTWluaWZ5UGx1Z2luKHt9KSxcbiAgXSxcbiAgLy8gYmFzZTogXCIuL1wiLFxuICBzZXJ2ZXI6IHtcbiAgICBob3Q6IHRydWUsXG4gICAgcG9ydDogMzAwMCxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhcGk6ICdtb2Rlcm4nXG4gICAgICB9XG4gICAgfSxcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBJTl9QUk9EVUNUSU9OXG4gICAgICAgID8gW1xuICAgICAgICAgIHB1cmdlQ1NTUGx1Z2luKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICAgXCJpbmRleC5odG1sXCIsXG4gICAgICAgICAgICAgIFwiLi9zcmMvKiovKi5qc1wiLFxuICAgICAgICAgICAgICAvLyAtLS0gSW1wb3J0IG9ubHkgdGhlIHJlcXVpcmVkIGNvbXBvbmVudHMuXG4gICAgICAgICAgICAgIGAke2Jvb3RzdHJhcH0vanMvZGlzdC9hbGVydC5qc2AsXG4gICAgICAgICAgICAgIC8vIGAke2Jvb3RzdHJhcH0vanMvZGlzdC9iYXNlLWNvbXBvbmVudC5qc2AsXG4gICAgICAgICAgICAgIC8vIGAke2Jvb3RzdHJhcH0vanMvZGlzdC9idXR0b24uanNgLFxuICAgICAgICAgICAgICAvLyBgJHtib290c3RyYXB9L2pzL2Rpc3QvY2Fyb3VzZWwuanNgLFxuICAgICAgICAgICAgICBgJHtib290c3RyYXB9L2pzL2Rpc3QvY29sbGFwc2UuanNgLFxuICAgICAgICAgICAgICBgJHtib290c3RyYXB9L2pzL2Rpc3QvZHJvcGRvd24uanNgLFxuICAgICAgICAgICAgICBgJHtib290c3RyYXB9L2pzL2Rpc3QvbW9kYWwuanNgLFxuICAgICAgICAgICAgICBgJHtib290c3RyYXB9L2pzL2Rpc3Qvb2ZmY2FudmFzLmpzYCxcbiAgICAgICAgICAgIC8vIGAke2Jvb3RzdHJhcH0vanMvZGlzdC9wb3BvdmVyLmpzYCxcbiAgICAgICAgICAgIC8vIGAke2Jvb3RzdHJhcH0vanMvZGlzdC9zY3JvbGxzcHkuanNgLFxuICAgICAgICAgICAgLy8gYCR7Ym9vdHN0cmFwfS9qcy9kaXN0L3RhYi5qc2AsXG4gICAgICAgICAgICAvLyBgJHtib290c3RyYXB9L2pzL2Rpc3QvdG9hc3QuanNgLFxuICAgICAgICAgICAgLy8gYCR7Ym9vdHN0cmFwfS9qcy9kaXN0L3Rvb2x0aXAuanNgLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNhZmVsaXN0OiBbL21vZGFsLS8sIC9mYWQvLCAvc2hvdy8sIC9hY2NvcmRpb24tLyxdLFxuICAgICAgICAgICAgZGVmYXVsdEV4dHJhY3RvcjogKGNvbnRlbnQpID0+IGNvbnRlbnQubWF0Y2goL1tcXHctLzpdKyg/PCE6KS9nKSB8fCBbXSxcbiAgICAgICAgICAgIGtleWZyYW1lczogdHJ1ZSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogdHJ1ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNzc25hbm8oe1xuICAgICAgICAgICAgcHJlc2V0OiBbJ2RlZmF1bHQnLCB7IGRpc2NhcmRDb21tZW50czogeyByZW1vdmVBbGw6IHRydWUgfSB9XVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGF1dG9wcmVmaXhlcigpXG4gICAgICAgIF1cbiAgICAgICAgOiBbXVxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBvdXREaXI6IFwiLi9kb2NzXCIsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgY29tbWVudHM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThSLFNBQVMsb0JBQW9CO0FBQzNULFNBQVMsd0JBQXdCO0FBRWpDLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8sYUFBYTtBQUNwQixPQUFPLGtCQUFrQjtBQUh6QixJQUFNLGdCQUFnQixRQUFRLElBQUksYUFBYTtBQUkvQyxJQUFNLFlBQVk7QUFFbEIsSUFBTSxpQkFBaUIsUUFBUSxJQUFJLGFBQWE7QUFHaEQsSUFBTSxnQkFBZ0IsTUFBTTtBQUMxQixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixtQkFBbUIsTUFBTTtBQUN2QixhQUFPLEtBQUs7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBO0FBQUEsSUFFUCxrQkFBa0IsY0FBYztBQUFBO0FBQUEsSUFFaEMsaUJBQWlCLGlCQUFpQixDQUFDLENBQUM7QUFBQSxFQUN0QztBQUFBO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTLGdCQUNMO0FBQUEsUUFDQSxlQUFlO0FBQUEsVUFDYixTQUFTO0FBQUEsWUFDUDtBQUFBLFlBQ0E7QUFBQTtBQUFBLFlBRUEsR0FBRyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFJWixHQUFHLFNBQVM7QUFBQSxZQUNaLEdBQUcsU0FBUztBQUFBLFlBQ1osR0FBRyxTQUFTO0FBQUEsWUFDWixHQUFHLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFNZDtBQUFBLFVBQ0EsVUFBVSxDQUFDLFVBQVUsT0FBTyxRQUFRLFlBQWE7QUFBQSxVQUNqRCxrQkFBa0IsQ0FBQyxZQUFZLFFBQVEsTUFBTSxpQkFBaUIsS0FBSyxDQUFDO0FBQUEsVUFDcEUsV0FBVztBQUFBLFVBQ1gsV0FBVztBQUFBLFFBQ2IsQ0FBQztBQUFBLFFBQ0QsUUFBUTtBQUFBLFVBQ04sUUFBUSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEtBQUssRUFBRSxDQUFDO0FBQUEsUUFDOUQsQ0FBQztBQUFBLFFBQ0QsYUFBYTtBQUFBLE1BQ2YsSUFDRSxDQUFDO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
