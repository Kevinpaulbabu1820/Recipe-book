/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || '/',
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import './src/App.css';`,
      },
    },
  },
})
