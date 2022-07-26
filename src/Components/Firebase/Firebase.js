import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyC41I-cjl6YC53sVPXItCLofmWIh_KuaBk",
  authDomain: "react-c8e69.firebaseapp.com",
  projectId: "react-c8e69",
  storageBucket: "react-c8e69.appspot.com",
  messagingSenderId: "550595306596",
  appId: "1:550595306596:web:c1243b5840bff03fd4eb71"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app); 