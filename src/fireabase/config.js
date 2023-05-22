import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY1yEJfMgPR67S5c-ILgq0qgFVrE_7bOI",
  authDomain: "twigal-e970e.firebaseapp.com",
  databaseURL: "https://twigal-e970e-default-rtdb.firebaseio.com",
  projectId: "twigal-e970e",
  storageBucket: "twigal-e970e.appspot.com",
  messagingSenderId: "799283197562",
  appId: "1:799283197562:web:0027f841351f87f7c72dc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
