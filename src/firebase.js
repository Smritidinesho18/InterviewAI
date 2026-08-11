import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKhAmTk9UWDPrF971Lz6nzMR3reNa_Ts0",
  authDomain: "interviewai-88be9.firebaseapp.com",
  projectId: "interviewai-88be9",
  storageBucket: "interviewai-88be9.firebasestorage.app",
  messagingSenderId: "729372142744",
  appId: "1:729372142744:web:5462252bc7c5eec579b4ed"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);