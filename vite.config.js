import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, './', 'VITE')

  console.log('command ===> ', env)

  const plugins = [
    vue() //,
    // VitePWA({
    //   manifest: {
    //     name: 'wins888',
    //     short_name: 'wins888',
    //     icons: [
    //       {
    //         src: '/pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //         purpose: 'any'
    //       },
    //       {
    //         src: '/pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any'
    //       },
    //       {
    //         src: '/pwa-maskable-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //         purpose: 'maskable'
    //       },
    //       {
    //         src: '/pwa-maskable-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'maskable'
    //       }
    //     ],
    //     start_url: '/',
    //     display: 'standalone',
    //     background_color: '#FFFFFF',
    //     theme_color: '#FFFFFF'
    //   },
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    //   },
    //   devOptions: {
    //     enabled: false
    //   }
    // })
  ]

  if (command === 'serve') {
    return {
      plugins: plugins,
      base: '/',
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },

      server: {
        host: '0.0.0.0',
        open: true
      }
    }
  } else {
    return {
      plugins: plugins,
      base: '/',
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      build: {
        chunkSizeWarningLimit: 1024
      }
    }
  }
})
