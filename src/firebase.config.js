import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfZ1qkOVIQ8bRgUXpxVefPkhR_3qRg_eg",
  authDomain: "house-marketplace-app-15d31.firebaseapp.com",
  projectId: "house-marketplace-app-15d31",
  storageBucket: "house-marketplace-app-15d31.appspot.com",
  messagingSenderId: "232309290511",
  appId: "1:232309290511:web:7e53a10ae088b1fdc9957a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
