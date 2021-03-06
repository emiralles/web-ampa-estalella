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
        let objectRemove = await deleteObject(iref);
        return objectRemove;
    } catch (error) {
        console.log(error);
    }
}

export const onGetListTipo = (tipo,callback) => onSnapshot(collection(db,tipo),callback);
export const deleteOneDocOfTipo = async (tipo,uid) => await deleteDoc(doc(db,tipo,uid));
export const getOneDocOfTipo = async (tipo,uid) => await getDoc(doc(db,tipo,uid));

export const updateOneDocOfTpo = async (tipo,uid,modelo) => {
    try {
        const rstUpdate = await updateDoc(doc(db,tipo,uid),modelo);
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



