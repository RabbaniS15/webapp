import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBCNVZ8etyu3yDrJY7fQY3D_2Zn40a6N4Q",
  authDomain: "singnin-page.firebaseapp.com",
  projectId: "singnin-page",
  storageBucket: "singnin-page.appspot.com",
  messagingSenderId: "904013183748",
  appId: "1:904013183748:web:eb82addcf76cc2afb5ee51",
  measurementId: "G-2QC1CQTBYJ",
};

console.log("Initializing Firebase...");
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth, firebaseApp };
