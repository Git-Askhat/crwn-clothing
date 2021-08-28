import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCI4HtPLk9zTfuNJhkIcHNk4VyN_OGrfdw',
  authDomain: 'crwn-db-9a9e1.firebaseapp.com',
  projectId: 'crwn-db-9a9e1',
  storageBucket: 'crwn-db-9a9e1.appspot.com',
  messagingSenderId: '680653415165',
  appId: '1:680653415165:web:bb5d9d326dadfb2b785494',
  measurementId: 'G-LBE0Z1Y3YW',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

