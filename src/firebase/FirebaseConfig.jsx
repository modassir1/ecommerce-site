import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNt761qwjy61-0TeJ0kA6ewRSETTbiW44",
  authDomain: "ecommerce-2ef9a.firebaseapp.com",
  projectId: "ecommerce-2ef9a",
  storageBucket: "ecommerce-2ef9a.appspot.com",
  messagingSenderId: "148701696881",
  appId: "1:148701696881:web:96aab3b1d9e9cebf995cd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app); 
export {fireDB , auth};



















// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore'
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyB2nyQ3T20WW0V6-HmmY8GQHvWhNWuSvww",
//   authDomain: "myfirstapp-196e5.firebaseapp.com",
//   projectId: "myfirstapp-196e5",
//   storageBucket: "myfirstapp-196e5.appspot.com",
//   messagingSenderId: "136359333960",
//   appId: "1:136359333960:web:67f2f40e26cab77fecc87d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const fireDB = getFirestore(app);
// const auth = getAuth(app);
// export {fireDB, auth}