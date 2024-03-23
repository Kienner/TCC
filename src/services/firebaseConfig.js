import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
export const auth = getAuth(app);
const analytics = getAnalytics(app);