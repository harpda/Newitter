import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjt7rK8IxbwBkst_eJv9XGQ63A1KMz5Rk",
  authDomain: "nwitter-reloaded-c69fe.firebaseapp.com",
  projectId: "nwitter-reloaded-c69fe",
  storageBucket: "nwitter-reloaded-c69fe.appspot.com",
  messagingSenderId: "917573949457",
  appId: "1:917573949457:web:90e026927ad51ecac4b9b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);