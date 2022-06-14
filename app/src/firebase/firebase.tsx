// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseError } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT7tks4roT0fXDqFi-G5p64p5DUqpy2oU",
  authDomain: "ride-tandem.firebaseapp.com",
  projectId: "ride-tandem",
  storageBucket: "ride-tandem.appspot.com",
  messagingSenderId: "747191339451",
  appId: "1:747191339451:web:8eeb271e3492a593325c9e",
  measurementId: "G-FLWVXKHV6X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);
    // TODO: Add users to Firestore database
    // await setUser({
    //   uid: user.uid,
    //   name: name,
    //   authProvider: "local",
    //   email: email,
    // });
  } catch (err) {
    if (err instanceof FirebaseError) {
      console.log("TODO: Fix error handling");
    } else {
      console.log(err);
    }
  }
};
