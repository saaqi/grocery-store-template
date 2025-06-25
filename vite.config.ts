import devtoolsJson from 'vite-plugin-devtools-json';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

// const IN_DEVELOPMENT = process.env.NODE_ENV === "development";
const IN_PRODUCTION = process.env.NODE_ENV === 'production';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
const bootstrap = 'node_modules/bootstrap';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), devtoolsJson()],
	resolve: {
		alias: {
			$assets: path.resolve('./src/assets'),
			$components: path.resolve('./src/components'),
			$data: path.resolve('./src/data'),
			$functions: path.resolve('./src/functions'),
			$sections: path.resolve('./src/sections'),
			$styles: path.resolve('./src/styles'),
			$lib: path.resolve('./src/lib')
		}
	},
	server: {
		port: 3000
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
								'./src/app.html',
								'./src/**/*.{js,ts, svelte}',
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
				comments: false
			}
		}
	}
});
