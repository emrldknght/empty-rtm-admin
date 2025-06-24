import { enableStaticRendering } from 'mobx-react-lite';
import AuthStore from './authStore';

// Enable static rendering for SSR
const isServer = typeof window === 'undefined';
enableStaticRendering(isServer);

// Store factory to ensure each request gets a new store instance
function createStore() {
  return {
    authStore: new AuthStore(),
    // userStore: new UserStore()
  };
}

// Singleton store for client-side
let clientSideStore;

// Function to initialize store on client or server
export function initializeStore(initialData = null) {
  // For SSR, always create a new store
  if (isServer) {
    return createStore();
  }

  // Create the store once in the client
  if (!clientSideStore) {
    clientSideStore = createStore();
  }

  // Hydrate store with initialData if needed
  if (initialData) {
    // Update store with initial data
    if (initialData.authStore) {
      clientSideStore.counterStore.count = initialData.counterStore.count;
    }
    // Add more hydration as needed
  }

  return clientSideStore;
}