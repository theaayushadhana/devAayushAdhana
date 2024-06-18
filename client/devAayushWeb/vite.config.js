// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
  
//   build: {
//     outDir: 'dist', // Specify the output directory
//     assetsDir: '.', // Serve HTML file directly from the root directory
//     rollupOptions: {
//       input: {
//         main: '.././../client/index.js', // Specify your main entry JavaScript file
//       },
//     },
//   },
// })

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: '.././../client/index.js'  // Replace with your actual entry point
      }
    }
  }
});

