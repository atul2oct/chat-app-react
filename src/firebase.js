import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM0x4B4WFBXsfFixPiK6quTqfaG5Y4Y2I",
  authDomain: "chat-app-skill.firebaseapp.com",
  projectId: "chat-app-skill",
  storageBucket: "chat-app-skill.appspot.com",
  messagingSenderId: "884735130795",
  appId: "1:884735130795:web:3b4b724701828f49e4cbee",
  measurementId: "G-BT62ED7QSV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
