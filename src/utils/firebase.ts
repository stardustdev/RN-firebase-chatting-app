import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB985911hs-V1vP356itLKuy-lbdpi7SbE',
  authDomain: 'chatting-app-b814b.firebaseapp.com',
  databaseURL: 'https://chatting-app-b814b.firebaseio.com',
  projectId: 'chatting-app-b814b',
  storageBucket: 'chatting-app-b814b.appspot.com',
  messagingSenderId: '971785318075',
  appId: '1:971785318075:web:daa7114ccee8803aa1439e',
  measurementId: 'G-36ZTMY1DKS',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
