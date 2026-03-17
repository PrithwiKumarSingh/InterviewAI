
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-da40e.firebaseapp.com",
  projectId: "interviewai-da40e",
  storageBucket: "interviewai-da40e.firebasestorage.app",
  messagingSenderId: "529834747888",
  appId: "1:529834747888:web:4e673c0d9ceef328769f35"
};

const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider};

