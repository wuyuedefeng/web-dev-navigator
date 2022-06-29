import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      '~': pathResolve('./node_modules'),
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // "primary-color": "#f00", //全局样式
        },
        javascriptEnabled: true,
      },
    },
  }
})
