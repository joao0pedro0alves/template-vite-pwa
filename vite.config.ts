import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'
import manifest from './manifest.mjs'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: [
                'favicon.ico',
                'apple-touch-icon.png',
                'masked-icon.svg',
            ],
            manifest,
        }),
    ],
    server: {
        watch: {
            usePolling: true,
        },
        strictPort: true,
        host: '0.0.0.0', // needed for the Docker Container port mapping to work
        port: 3333, // you can replace this port with any port
    },
    define: {
        'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version)
    }
})
