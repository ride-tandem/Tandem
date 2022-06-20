// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseError } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDT7tks4roT0fXDqFi-G5p64p5DUqpy2oU',
  authDomain: 'ride-tandem.firebaseapp.com',
  projectId: 'ride-tandem',
  storageBucket: 'ride-tandem.appspot.com',
  messagingSenderId: '747191339451',
  appId: '1:747191339451:web:8eeb271e3492a593325c9e',
  measurementId: 'G-FLWVXKHV6X'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const registerUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  const result = await createUserWithEmailAndPassword(auth, email, password)
  console.log(result.user)
  return result.user
}

export async function loginWithEmailAndPassword (
  email: string,
  password: string
): Promise<void> {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    if (err instanceof FirebaseError) {
      console.log('TODO: better error handling')
    } else {
      console.log(err)
    }
  }
}

export const logout = (): void => {
  signOut(auth).catch(() => {})
}
