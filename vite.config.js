import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User/organization Pages site is served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
