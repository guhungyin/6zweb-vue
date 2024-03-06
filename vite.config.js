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
        host: '192.168.3.93',
        open: true
      }
    }
  } else {
    return {
      plugins: [
        vue(),
        VitePWA({
          manifest: {
            name: '6z',
            short_name: '6z',
            icons: [
              {
                src: '/pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any'
              },
              {
                src: '/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
              },
              {
                src: '/pwa-maskable-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
              },
              {
                src: '/pwa-maskable-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
              }
            ],
            start_url: '/',
            display: 'standalone',
            background_color: '#FFFFFF',
            theme_color: '#FFFFFF'
          },
          registerType: 'autoUpdate',
          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}']
          },
          devOptions: {
            enabled: true
          }
        })
      ],
      base: '/',
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }

      // define: {
      //   __APP_ENV__: JSON.stringify(env.APP_ENV)
      // }
      // server: {
      //   host: 'https://www.wins888.club',
      //   open: true
      // }
    }
  }
})
