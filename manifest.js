/**
 * - [Favicon Generator] @link https://realfavicongenerator.net/
 * 
 * - [PWA Minimal Requirements] @link https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html
 * 
 * - [React implementation] @link https://vite-pwa-org.netlify.app/frameworks/react.html
 */
export default {
    name: 'My Awesome App',
    short_name: 'MyApp',
    description: 'My Awesome App description',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  }