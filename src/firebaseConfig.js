import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr7cd7A7pUUxvtcF42QeQ77qUbJe5IqI0",
  authDomain: "proyecto-react-tienda-online.firebaseapp.com",
  projectId: "proyecto-react-tienda-online",
  storageBucket: "proyecto-react-tienda-online.appspot.com",
  messagingSenderId: "963218887727",
  appId: "1:963218887727:web:fb99061ba7a551239362da"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

