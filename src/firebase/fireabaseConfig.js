// import admin from "firebase-admin";
import {initializeApp} from "firebase/app";
import firebaseConfig from "../config";
// import serviceAccount from "./serviceAccountKey.json";
import { getAuth } from "firebase/auth";

export const app = initializeApp(firebaseConfig);
// export const adm = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     serviceAccountId: "firebase-adminsdk-w46nv@afa-estalella-i-graells.iam.gserviceaccount.com"
// });

export const auth = getAuth(app);
