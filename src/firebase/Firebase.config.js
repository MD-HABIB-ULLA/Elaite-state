// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXyaXhaByIaKtl3wcxzazxi-SdNNxER5U",
  authDomain: "elite-estate-d93f4.firebaseapp.com",
  projectId: "elite-estate-d93f4",
  storageBucket: "elite-estate-d93f4.appspot.com",
  messagingSenderId: "1036704317697",
  appId: "1:1036704317697:web:104202035778c2a6c09b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;