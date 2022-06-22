import { initializeApp, getApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC34Z9FklCEpRz6tdUj_4QUZC59IHEx8Lk",
    authDomain: "lucas-huguenin.firebaseapp.com",
    projectId: "lucas-huguenin",
    storageBucket: "lucas-huguenin.appspot.com",
    messagingSenderId: "634087677388",
    appId: "1:634087677388:web:aa352cd6119728864c9169",
    measurementId: "G-R31WZ9EHBQ"
}

function createFirebaseApp(config) {
  try {
    return getApp()
  } catch {
    return initializeApp(config)
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const googleAuthProvider = new GoogleAuthProvider()
export const firestore = getFirestore(firebaseApp)
