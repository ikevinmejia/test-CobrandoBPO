import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAfBzAy_rCpV7f22Gq9txUnt1DXMQXSN4E",
    authDomain: "pruebacobrando.firebaseapp.com",
    projectId: "pruebacobrando",
    storageBucket: "pruebacobrando.appspot.com",
    messagingSenderId: "448381129624",
    appId: "1:448381129624:web:1176056ad95aaef5b091ed"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db,
}