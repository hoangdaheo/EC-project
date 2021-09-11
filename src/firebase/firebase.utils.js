import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAT8JuGfmYoP2u_8Tjb0JvhyRN7IAx0ZWM',
  authDomain: 'crwn-db-adc3d.firebaseapp.com',
  projectId: 'crwn-db-adc3d',
  storageBucket: 'crwn-db-adc3d.appspot.com',
  messagingSenderId: '530064249045',
  appId: '1:530064249045:web:fe6e64e69492387887925c',
  measurementId: 'G-62NPJPWLW6',
};

firebase.initializeApp(config);

export const auth = getAuth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
export default firebase;
