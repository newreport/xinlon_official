import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {// 项目别名
      '@': path.resolve(__dirname, 'src'),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@views": path.resolve(__dirname, "src/views"),
      "@store": path.resolve(__dirname, "src/store"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@utils": path.resolve(__dirname, "src/utils")
    },
  },
  plugins: [vue()],
  build: {
    outDir: "dist",
    assetsDir: "assets", //指定静态资源存放路径
  }
})
