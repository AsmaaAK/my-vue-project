import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-vue-project/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  server: {
    open: '/HomeView'  // <-- يفتح هذا المسار عند التشغيل
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
