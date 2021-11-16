import * as path from 'path';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import eslintPlugin from 'vite-plugin-eslint';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import svgLoader from 'vite-svg-loader';
import ElementPlus from 'unplugin-element-plus/vite';
import { ExportBuildInfo } from '@vitue/export-build-info';
import { ExportEnvJson } from '@vitue/export-env-json';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx
    vueJsx(),

    // https://github.com/gxmari007/vite-plugin-eslint
    eslintPlugin({
      fix: true,
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, 'src/locales/**'),
    }),

    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),

    // https://github.com/AMatlash/vite-plugin-stylelint
    // viteStylelint(),

    // https://github.com/vitue-scaffold/vite-plugin-export-build-info
    ExportBuildInfo(),

    // https://github.com/vitue-scaffold/vite-plugin-export-env-json
    ExportEnvJson(),

    // https://github.com/element-plus/unplugin-element-plus
    ElementPlus(),

    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/element/var.scss" as *;',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    // https://cn.vitejs.dev/config/#server-proxy
    proxy: {},
  },
  // https://cn.vitejs.dev/config/#envdir
  envDir: './.env',
  envPrefix: 'W6S_',
});
