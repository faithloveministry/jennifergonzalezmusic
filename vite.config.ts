import { resolve } from 'node:path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import sassDts from 'vite-plugin-sass-dts';
import solid from 'vite-plugin-solid';
import { configDefaults } from 'vitest/config';

export default ({ mode }: { mode: 'production' | 'development' | 'test' }) => {
  const ENV = { ...process.env, ...loadEnv(mode, 'env', '') };

  return defineConfig({
    build: {
      rollupOptions: { output: { entryFileNames: '[hash:6].js', chunkFileNames: '[hash:6].js', assetFileNames: '[hash:6][extname]' } }, //prettier-ignore
      target: 'es2020',
      minify: mode === 'production' ? 'terser' : false,
      terserOptions:
        mode === 'production'
          ? {
              compress: { arguments: true, ecma: 2020, hoist_funs: true, passes: 3, pure_getters: true, unsafe: true, unsafe_arrows: true, unsafe_comps: true, unsafe_symbols:true }, //prettier-ignore
              format: { comments: false, ecma: 2020, wrap_func_args: false },
              mangle: { properties: { regex: /^(?:owned|cleanups|owner|observerSlots|comparator|sourceSlots|running|disposed|tState|updatedAt|pure|suspense|inFallback|effects|_\$host|numPages|_v\$|_v\$2|_v\$3|_v\$4|_v\$5|_v\$6|_v\$7|_v\$8|_v\$9|_v\$10)$/ } }, //prettier-ignore
            }
          : undefined,
      modulePreload: { polyfill: false }, // Delete this line if outputting more than 1 chunk
    },
    plugins: [
      solid(),
      checker({ typescript: true, overlay: false, enableBuild: true }),
      createHtmlPlugin({
        pages: [
          { filename: 'index.html', template: 'index.html', entry: '/src/index.tsx' },
          { filename: '404.html', template: '404.html' },
        ],
        minify: {
          collapseBooleanAttributes: true, collapseWhitespace: true, decodeEntities: true, minifyCSS: true,
          minifyJS: true, minifyURLs: true, removeComments: true, removeEmptyAttributes: true,
          removeOptionalTags: true, removeRedundantAttributes: true, removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true, sortAttributes: true, useShortDoctype: true,
        }, //prettier-ignore
      }),
      optimizeCssModules(),
      sassDts({ enabledMode: ['development', 'production'] }),
      ENV.ANALYZE === 'true' && visualizer({ template: 'treemap', open: true, gzipSize: true, brotliSize: true, filename: resolve(__dirname, 'dist/analyze.html') }), //prettier-ignore
    ].filter(Boolean),
    resolve: { alias: { '@': resolve(__dirname, './src') }, conditions: ['browser', 'development'] },
    test: {
      globals: true,
      environment: 'jsdom',
      transformMode: { web: [/\.[jt]sx?$/] },
      setupFiles: [resolve(__dirname, './src/__test__/setupTests.ts')],
      include: ['./src/**/*.{test,spec}.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
      coverage: {
        reporter: ['text', 'lcov'],
        exclude: configDefaults.coverage.exclude!.concat(['src/__test__/setupTests.ts']),
      },
    },
  });
};
