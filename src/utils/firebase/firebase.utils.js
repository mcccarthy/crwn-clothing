import { initializeApp } from 'firebase/app';
<<<<<<< HEAD
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
  authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
  projectId: 'crwn-clothing-db-98d4d',
  storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
  messagingSenderId: '626766232035',
  appId: '1:626766232035:web:506621582dab103a4d08d6',
=======
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore, 
  doc, 
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZv1fLRZTTfUzHdPdn7pDZX3yc9310Xns",
  authDomain: "crwn-clothing-db-52f14.firebaseapp.com",
  projectId: "crwn-clothing-db-52f14",
  storageBucket: "crwn-clothing-db-52f14.appspot.com",
  messagingSenderId: "557241153616",
  appId: "1:557241153616:web:d58cb2c00bbbde26787955"
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
};

const firebaseApp = initializeApp(firebaseConfig);

<<<<<<< HEAD
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

=======
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

<<<<<<< HEAD
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
=======

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
<<<<<<< HEAD
        createdAt,
        ...additionalInformation,
=======
        createdAt
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
<<<<<<< HEAD
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
=======

    return userDocRef;
  };
}
    // if user data does not exist
  //create / set the document with the data from userAuth in my collection
  
  //if user data exists
  // Return userDocRef
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
