import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbxS43YAfhLnslq2dsEKNQq1ZdyTpS24Q",
  authDomain: "ecommerce-juliao.firebaseapp.com",
  projectId: "ecommerce-juliao",
  storageBucket: "ecommerce-juliao.firebasestorage.app",
  messagingSenderId: "451146952335",
  appId: "1:451146952335:web:24da7fdc69f70cfda78afa"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
