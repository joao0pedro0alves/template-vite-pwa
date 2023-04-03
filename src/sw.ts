import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'

declare let self: ServiceWorkerGlobalScope

cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)

self.skipWaiting()
clientsClaim()

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING')
        self.skipWaiting()
})

// WEB PUSH NOTIFICATIONS

async function getEndpoint() {
    const subscription = await self.registration.pushManager.getSubscription()

    if (subscription) {
        return subscription.endpoint
    }
    
    throw new Error('User not subscribed')
}

// Register event listener for the ‘push’ event.
self.addEventListener('push', (event) => {
    
    // Keep the service worker alive until the notification is created.
    event.waitUntil(
        getEndpoint()
            .then((endpoint) => {
                // Retrieve the textual payload from the server using a GET request. We are using the endpoint as an unique ID of the user for simplicity.
                return fetch('./getPayload?endpoint=' + endpoint)
            })
            .then((response) => {
                return response.text()
            })
            .then((payload) => {
                // Show a notification with title ‘ServiceWorker Cookbook’ and use the payload as the body.
                self.registration.showNotification('ServiceWorker Cookbook', {
                    body: payload,
                })
            })
    )
})
  