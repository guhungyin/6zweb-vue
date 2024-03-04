import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, './', 'VITE')

  console.log('command ===> ', env)

  if (command === 'serve') {
    return {
      plugins: [vue()],
      base: '/',
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },

      // define: {
      //   __APP_ENV__: JSON.stringify(env.APP_ENV)
      // },

      server: {
        host: '127.0.0.1',
        open: true
      }
    }
  } else {
    return {
      plugins: [vue(), VitePWA({})],
      base: '/',
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },

      // define: {
      //   __APP_ENV__: JSON.stringify(env.APP_ENV)
      // },
      server: {
        host: 'https://www.wins888.club',
        open: true
      }
    }
  }
})
