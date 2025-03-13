import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/products': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: path =>
          path.replace(
            /^\/api\/products/,
            '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
          ),
      },
    },
  },
})
