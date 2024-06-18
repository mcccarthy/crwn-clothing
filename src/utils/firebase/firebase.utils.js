import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup ,GoogleAuthProvider} from 'firebase/auth';

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