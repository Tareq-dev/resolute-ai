import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKl9cilBeWUHTLwes0soDv9uAcuZjxCc8",
  authDomain: "resolute-ai-app.firebaseapp.com",
  projectId: "resolute-ai-app",
  storageBucket: "resolute-ai-app.appspot.com",
  messagingSenderId: "941199133122",
  appId: "1:941199133122:web:c55c42fe6ee2c7d3e6ee5b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
