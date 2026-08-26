import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByYtQDBhyV0iwMKThHeKuCnL9A-pUjIHs",
  authDomain: "xfinity-login.firebaseapp.com",
  projectId: "xfinity-login",
  storageBucket: "xfinity-login.firebasestorage.app",
  messagingSenderId: "959351642691",
  appId: "1:959351642691:web:40a164b007064bb91292f6",
  measurementId: "G-TK99L8RGS8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)
