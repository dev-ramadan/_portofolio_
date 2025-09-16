


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-vertical-timeline-component': 
        'react-vertical-timeline-component/dist-es6',
    },
  },
})
