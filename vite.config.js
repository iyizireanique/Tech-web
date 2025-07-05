// import path from 'path'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import frappeui from 'frappe-ui/vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [frappeui(), vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },

//   build: {
//     outDir: `../${path.basename(path.resolve('..'))}/public/frontend`,
//     emptyOutDir: true,
//     target: 'es2015',
//   },
//   optimizeDeps: {
//     include: ['frappe-ui > feather-icons', 'showdown', 'engine.io-client'],
//   },
// })
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import frappeui from "frappe-ui/vite";



export default defineConfig({
  plugins: [frappeui(), vue()],

  // server: {
  //   port: 8000,
  //   proxy: {
  //     "/api": "https://malaika.node1.africlouds.com/",
  //     // "/socket.io": {
  //     //   target: "ws://malaika.node1.africlouds.com/",
  //     //   ws: true,
  //     // },
  //   },
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ["frappe-ui > feather-icons", "showdown", "engine.io-client"],
    exclude:  ['higlight.js']
  },
});
