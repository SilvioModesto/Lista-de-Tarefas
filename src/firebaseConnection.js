import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCC73dK3yCnvj3_CTDrd1HjphadNG_no0Y",
  authDomain: "banco-de-dados-e-longin.firebaseapp.com",
  projectId: "banco-de-dados-e-longin",
  storageBucket: "banco-de-dados-e-longin.appspot.com",
  messagingSenderId: "664414698777",
  appId: "1:664414698777:web:457f6eeb54996e4c6f9988",
  measurementId: "G-3BRH383HBP"
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);


export { db, auth };