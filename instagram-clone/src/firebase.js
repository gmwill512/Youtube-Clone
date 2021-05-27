import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBXTtdIx4sMGqiXXtdodCDgd3OZ6V_Dt4U',
  authDomain: 'instagram-clone-e6851.firebaseapp.com',
  databaseURL: 'https://instagram-clone-e6851-default-rtdb.firebaseio.com',
  projectId: 'instagram-clone-e6851',
  storageBucket: 'instagram-clone-e6851.appspot.com',
  messagingSenderId: '235848540101',
  appId: '1:235848540101:web:6bad632ddbcd7b0db535ac',
  measurementId: 'G-HF45MRTR12',
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
