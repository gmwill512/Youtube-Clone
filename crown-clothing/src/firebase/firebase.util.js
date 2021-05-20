import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDZ6uboOqzSb1cKYiFq1bFQuIyInaoIxQk',
  authDomain: 'crwn-clothing-2afde.firebaseapp.com',
  projectId: 'crwn-clothing-2afde',
  storageBucket: 'crwn-clothing-2afde.appspot.com',
  messagingSenderId: '422974892186',
  appId: '1:422974892186:web:dfdc0887cbc02dce359723',
  measurementId: 'G-EMKSGQYKBX',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signinWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
