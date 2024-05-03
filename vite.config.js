import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude:['**/*.glb'],
  base:"/react2/",
  server: {
    host: '0.0.0.0'
},
})