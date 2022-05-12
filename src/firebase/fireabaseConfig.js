// import admin from "firebase-admin";
import {initializeApp} from "firebase/app";
import firebaseConfig from "../config";
// import serviceAccount from "./serviceAccountKey.json";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


export const app = initializeApp(firebaseConfig);
// export const adm = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     serviceAccountId: "firebase-adminsdk-w46nv@afa-estalella-i-graells.iam.gserviceaccount.com"
// });
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const imagesRef = ref(storage, 'images');

