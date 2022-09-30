import {initializeApp} from "firebase/app";
import firebaseConfig from "../config";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage(app);
export const imagesRef = ref(storage, 'images');

