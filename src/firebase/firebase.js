import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCIvPAaHQ5cVpORGTmo0yPj7agB6TFzZ_0',
  authDomain: 'stronka-6969.firebaseapp.com',
  projectId: 'stronka-6969',
  storageBucket: 'stronka-6969.appspot.com',
  messagingSenderId: '867879987940',
  appId: '1:867879987940:web:49009cc65799ae8fdf1af1',

  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
};
// initialize firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, auth, storage };
