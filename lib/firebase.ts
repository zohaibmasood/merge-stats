import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1Q-vrQvC9sxvgxFHsdFo5lfG6QyoM8G0",
  authDomain: "scrobblemerge.firebaseapp.com",
  projectId: "scrobblemerge",
  storageBucket: "scrobblemerge.firebasestorage.app",
  messagingSenderId: "43758058184",
  appId: "1:43758058184:web:e950b47f687790d81043fd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);