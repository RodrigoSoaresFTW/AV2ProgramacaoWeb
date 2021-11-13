import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCB6Gjiol4J65aukfsCOhwBcbQ7XR0cuV4",
  authDomain: "projeto-mvp-web-63081.firebaseapp.com",
  projectId: "projeto-mvp-web-63081",
  storageBucket: "projeto-mvp-web-63081.appspot.com",
  messagingSenderId: "304715755053",
  appId: "1:304715755053:web:02a8f4c79d79aa037d52a4"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
