import { initializeApp } from 'firebase/app';
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
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }

    return userDocRef;
  };
}
    // if user data does not exist
  //create / set the document with the data from userAuth in my collection
  
  //if user data exists
  // Return userDocRef