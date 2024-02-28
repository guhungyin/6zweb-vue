import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  if (command === 'serve') {
    return {
      plugins: [
        vue(),
        
      ],
      base:"/",
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
      },
    
      define: {
        __APP_ENV__: JSON.stringify(env.APP_ENV)
      },

      server: {
        host: "127.0.0.1",
        open: true
      }
    }
  } else {
    return {
      plugins: [
        vue(),
        
      ],
      base:"/",
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
      },
    
      define: {
        __APP_ENV__: JSON.stringify(env.APP_ENV),
      },
      server: {
        host: "127.0.0.1",
        open: true
      }
    }
  }

})