// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzb9X5o6OyOox41ohzSoEGw0EKJFdfvM4",
    authDomain: "mercadocordoba-coder.firebaseapp.com",
    projectId: "mercadocordoba-coder",
    storageBucket: "mercadocordoba-coder.appspot.com",
    messagingSenderId: "587559943481",
    appId: "1:587559943481:web:966d4e940c69138234fce8",
    measurementId: "G-XDMN4DCPY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;