// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "playbyear-40ec8.firebaseapp.com",
  projectId: "playbyear-40ec8",
  storageBucket: "playbyear-40ec8.appspot.com",
  messagingSenderId: "1073156309902",
  appId: "1:1073156309902:web:a46addb22fd6a1c6f49adf",
  measurementId: "G-CSGMTQZDJP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);