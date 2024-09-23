// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Exclude classnames from the build if it's causing issues
      external: ['classnames'],
    },
    // Set asset inline limit for images/fonts to avoid issues during bundling
    assetsInlineLimit: 4096,
  },
  resolve: {
    alias: {
      // Setup aliases to ensure proper path resolution
      '@': path.resolve(__dirname, './src'),
    },
  },
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/Home/',  // Add this line to set the base path
//   plugins: [react()],
// })

