import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/goit-react-hw-01/" // This ensures assets are loaded from the correct path on GitHub Pages
 
})