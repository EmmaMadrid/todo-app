// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeYrqHgswO2i0KuIZapG4W26lx4eoAIkM",
  authDomain: "todo-app-90a5f.firebaseapp.com",
  projectId: "todo-app-90a5f",
  storageBucket: "todo-app-90a5f.appspot.com",
  messagingSenderId: "986188591249",
  appId: "1:986188591249:web:2ef18a70b2a2dff0498f30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)