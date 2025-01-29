import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVRQhnulHWs4mTrMX8gA4vMrCJhvmcqiM",
  authDomain: "fleet-vision.firebaseapp.com",
  projectId: "fleet-vision",
  storageBucket: "fleet-vision.firebasestorage.app",
  messagingSenderId: "1024634134751",
  appId: "1:1024634134751:web:125038ae32763fb578496a",
  measurementId: "G-PLMQ6XDTCC"
};


// eslint-disable-next-line import/prefer-default-export
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
