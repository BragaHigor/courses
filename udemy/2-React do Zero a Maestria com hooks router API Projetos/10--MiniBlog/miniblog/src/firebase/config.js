//firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEc_uxzwbNi6LXJuIEIUgFmbs8CeT9DL0",
  authDomain: "miniblog-e664d.firebaseapp.com",
  projectId: "miniblog-e664d",
  storageBucket: "miniblog-e664d.appspot.com",
  messagingSenderId: "345214307041",
  appId: "1:345214307041:web:3d074a164bbcaf928005a0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };