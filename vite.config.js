import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
const IN_PRODUCTION = process.env.NODE_ENV === "production";
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
const bootstrap = 'node_modules/bootstrap';

const IN_DEVELOPMENT = process.env.NODE_ENV === "development";

// Hide Preloader while in development.
const hidePreloader = () => {
  return {
    name: "hide-preloader",
    transformIndexHtml(html) {
      return html.replace(
        `<link rel="stylesheet" href="./src/scss/preloader.css">`,
        `<!-- <link rel="stylesheet" href="./src/scss/preloader.css"> -->`
      );
    }
  }
}

export default defineConfig({
  plugins: [
    // Hide Preloader while in Development
    IN_DEVELOPMENT && hidePreloader(),
    // Minify Output HTML File
    IN_PRODUCTION && ViteMinifyPlugin({}),
  ],
  // base: "./",
  server: {
    hot: true,
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    },
    postcss: {
      plugins: IN_PRODUCTION
        ? [
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
              `${bootstrap}/js/dist/offcanvas.js`,
            // `${bootstrap}/js/dist/popover.js`,
            // `${bootstrap}/js/dist/scrollspy.js`,
            // `${bootstrap}/js/dist/tab.js`,
            // `${bootstrap}/js/dist/toast.js`,
            // `${bootstrap}/js/dist/tooltip.js`,
            ],
            safelist: [/modal-/, /fad/, /show/, /accordion-/,],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            keyframes: true,
            variables: true
          }),
          cssnano({
            preset: ['default', { discardComments: { removeAll: true } }]
          }),
          autoprefixer()
        ]
        : []
    }
  },
  build: {
    // outDir: "./docs",
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
});
