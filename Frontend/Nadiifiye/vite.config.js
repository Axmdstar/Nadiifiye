import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const endpoint = "http://localhost:4000";

export default defineConfig({
  base:"/",
  "server":{
    "proxy":{
      "/Organizer/AllOrganizers":endpoint
    }
  },
  plugins: [react()],
})
