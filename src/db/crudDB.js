import {  ref,  uploadBytes,  getDownloadURL, deleteObject } from "firebase/storage";
import { db, imagesRef } from "../firebase/fireabaseConfig";
import { storage } from "../firebase/fireabaseConfig";
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

export const add = async (tipo,modelo) =>{
    try {
        const docRef = await addDoc(collection(db,tipo),modelo);
        return docRef.id;      
    } catch (error) {
        console.log(error);
    }
    
}

export const getAllCollections = async (tipo) =>{
    const querySnapshot = await getDocs(collection(db,tipo));
    let rst = [];
    querySnapshot.forEach((doc) => {
        let item = doc.data();
        item.id = doc.id;
        rst.push(item);
    });
    return rst;
}

export const getUrlImage = async (routeRef) =>{
    try {
        const iref = ref(storage,routeRef);
        let urlData = await getDownloadURL(iref);
        return urlData;
    } catch (error) {
        console.log(error);
    }
    
}

export const removeObject = async (routeRef) =>{
    try {
        const iref = ref(storage,routeRef);
        deleteObject(iref).then((objR) => {
            // File deleted successfully
            return objR;
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error);
        });
        // let objectRemove = await deleteObject(iref);
        // return objectRemove;
    } catch (error) {
        console.log(error);
    }
}

export const onGetListTipo = (tipo,callback) => onSnapshot(collection(db,tipo),callback);

export const deleteOneDocOfTipo = async (tipo,uid) => {
    try {
        const colRef = collection(db, tipo);
        
        // vsd = colRef.firestore;
        
        // .firestore.doc(uid).delete();
        const rstUpdate = await deleteDoc(doc(colRef,uid)).then((objR) => {
            // File deleted successfully
            return objR;
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error);
        });
        //const rstUpdate = await deleteDoc(doc(db,tipo,uid));
        console.log(rstUpdate);
    } catch (error) {
        console.log(error);
    }
};

export const getOneDocOfTipo = async (tipo,uid) => await getDoc(doc(db,tipo,uid));

export const updateOneDocOfTpo = async (tipo,uid,modelo) => {
    try {
        const colRef = collection(db, tipo);
        const rstUpdate = await updateDoc(doc(colRef, uid), modelo);
        //const rstUpdate = await updateDoc(doc(db,tipo,uid),modelo);
        console.log(rstUpdate);
    } catch (error) {
        console.log(error);
    }
    
}

export const uploadFile = async (file,name,uid,userid) => {
    try {
        const iref = ref(imagesRef,`/${userid}/${uid}/${name}`);
        let fileSub = await uploadBytes(iref,file);
        return fileSub;
    } catch (error) {
        console.log(error);
    }
}



