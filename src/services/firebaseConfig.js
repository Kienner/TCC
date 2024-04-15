// Importações
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-fQvh9ym1QbeW7roDwKTpzjB7OxuWqXs",
  authDomain: "testedelogin-ea50d.firebaseapp.com",
  databaseURL: "https://testedelogin-ea50d-default-rtdb.firebaseio.com",
  projectId: "testedelogin-ea50d",
  storageBucket: "testedelogin-ea50d.appspot.com",
  messagingSenderId: "665839759271",
  appId: "1:665839759271:web:d2dd8936bed805fc551082",
  measurementId: "G-WY2SLC17HB"
};

const app = initializeApp(firebaseConfig);

// Exportações
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

const analytics = getAnalytics(app);
