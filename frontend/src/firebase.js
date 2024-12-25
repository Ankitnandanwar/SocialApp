import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "socialapp-92e25.firebaseapp.com",
  projectId: "socialapp-92e25",
  storageBucket: "socialapp-92e25.firebasestorage.app",
  messagingSenderId: "904261827835",
  appId: "1:904261827835:web:eb1c335147d5dc82e8445e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);