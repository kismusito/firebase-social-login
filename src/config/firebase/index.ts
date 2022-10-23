import { CONFIG } from "config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FirebaseConfig } from "./types/firebase-config.type";

const firebaseConfig: FirebaseConfig = {
  apiKey: CONFIG.FIREBASE_API_KEY,
  appId: CONFIG.FIREBASE_APP_ID,
  authDomain: CONFIG.FIREBASE_AUTH_DOMAIN,
  messagingSenderId: CONFIG.FIREBASE_MESSAGING_SENDER_ID,
  projectId: CONFIG.FIREBASE_PROJECT_ID,
  storageBucket: CONFIG.FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
