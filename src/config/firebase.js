// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqCYJpLgr7Ud3Z18aSgnyEbifpXOhCrdo',
  authDomain: 'my-blog-7a2b4.firebaseapp.com',
  projectId: 'my-blog-7a2b4',
  storageBucket: 'my-blog-7a2b4.appspot.com',
  messagingSenderId: '428701950704',
  appId: '1:428701950704:web:22e77defa051e6789f1835',
  measurementId: 'G-J98NJQ08RK',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
