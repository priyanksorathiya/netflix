// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg5XK83omo-jbTQWpUfD2ijwUZkE3RUWk",
  authDomain: "netflix-3b9b8.firebaseapp.com",
  projectId: "netflix-3b9b8",
  storageBucket: "netflix-3b9b8.appspot.com",
  messagingSenderId: "500326270677",
  appId: "1:500326270677:web:c63811f0e9b2a0caec045c",
  measurementId: "G-ZVPFTKGQK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);