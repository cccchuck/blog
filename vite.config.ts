import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetAttributify(), presetIcons(), presetUno()],
      rules: [
        ['c-color-primary', { color: '#FF6464' }],
        ['c-bg-primary', { 'background-color': '#FF6464' }],
        ['c-bg-light-blue', { 'background-color': '#EDF7FA' }],
        ['c-text-heading', { color: '#21243D' }],
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: true,
  },
})
