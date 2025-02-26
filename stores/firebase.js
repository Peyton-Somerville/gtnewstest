// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkMhnXb-OJJ_9tycxHAqLHX1TB8ZGzA-o",
  authDomain: "gtnews-96932.firebaseapp.com",
  projectId: "gtnews-96932",
  storageBucket: "gtnews-96932.appspot.com",
  messagingSenderId: "594358326626",
  appId: "1:594358326626:web:ee9bdf2473911b0703483b",
  measurementId: "G-3VVD431NEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

export async function upload(file, user, setLoadiing){
  const fileRef = ref(storage, user.uid+'.png')
  setLoadiing(true);
  const snapshot = await uploadBytes(fileRef,file);
  setLoadiing(false)
  alert('Uploaded file')
}