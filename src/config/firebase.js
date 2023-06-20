
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBYkTFG3JvbsK0j1WjUDzjKF8x4PJVNS5s",
  authDomain: "tiktok---jornada-84200.firebaseapp.com",
  projectId: "tiktok---jornada-84200",
  storageBucket: "tiktok---jornada-84200.appspot.com",
  messagingSenderId: "612588520876",
  appId: "1:612588520876:web:9d47fd6de3e13cb46c2609"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;