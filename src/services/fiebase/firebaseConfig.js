import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZ7IJzhULso6l3oW7gmlcXSBRMpVPyBfQ",
    authDomain: "ecommercedanish-d9d46.firebaseapp.com",
    projectId: "ecommercedanish-d9d46",
    storageBucket: "ecommercedanish-d9d46.appspot.com",
    messagingSenderId: "71779171767",
    appId: "1:71779171767:web:de51055a41e2b368b53c32",
    measurementId: "G-PRGK5XKHVY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };