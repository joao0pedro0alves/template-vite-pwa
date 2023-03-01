/**
 * - [Favicon Generator] @link https://realfavicongenerator.net/
 * 
 * - [PWA Minimal Requirements] @link https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html
 * 
 * - [React implementation] @link https://vite-pwa-org.netlify.app/frameworks/react.html
 */
export default {
    name: 'Coletor',
    short_name: 'Coletor',
    description: 'Modelo aplicativo coletor',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'images/favicon/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'images/favicon/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'images/favicon/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  }