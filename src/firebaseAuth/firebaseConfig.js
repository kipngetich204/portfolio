// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration - values are loaded from Vite env vars.
// Create a local `.env` file (not checked into git) with the VITE_FIREBASE_* keys.
// Example keys are provided in .env.example in the project root.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize analytics only if a measurement id is provided
let analytics;
if (import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    // Analytics may fail in some environments (SSR, missing window), ignore safely
  }
}

export { app, analytics };