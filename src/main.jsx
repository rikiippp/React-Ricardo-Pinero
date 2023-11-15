import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp-8Qyr69QRxvhVANh_joiRF-Un7SnUEo",
  authDomain: "hogar-en-armonia.firebaseapp.com",
  projectId: "hogar-en-armonia",
  storageBucket: "hogar-en-armonia.appspot.com",
  messagingSenderId: "236089015704",
  appId: "1:236089015704:web:4ca998664c9a5b0d3ebfed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
