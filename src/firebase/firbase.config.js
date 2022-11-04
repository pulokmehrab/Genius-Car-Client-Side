// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzAMjJ9BIy9xMhCEQqinYoKyFnmVe2If0",
  authDomain: "genius-car-f2f65.firebaseapp.com",
  projectId: "genius-car-f2f65",
  storageBucket: "genius-car-f2f65.appspot.com",
  messagingSenderId: "597200975315",
  appId: "1:597200975315:web:f8a8020d8860455d482b26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app