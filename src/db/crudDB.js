import { useState, useEffect } from "react";
import {  ref,  uploadBytes,  getDownloadURL,  listAll,  list } from "firebase/storage";
import { db, storage, imagesRef } from "../firebase/fireabaseConfig";
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

export const add = async (tipo,modelo) =>{
    await addDoc(collection(db,tipo),modelo);
}

export const getModel = async (tipo,uid) =>{
    const querySnapshot = await getDocs(collection(db,tipo));
    querySnapshot.forEach((doc) => {
        if (doc.id === uid) {
            return doc.data();
        }
        // console.log(`${doc.id} => ${doc.data()}`);
    });
}

export const onGetListTipo = (tipo,callback) => onSnapshot(collection(db,tipo),callback);
export const deleteOneDocOfTipo = async (tipo,uid) => await deleteDoc(doc(db,tipo,uid));
export const getOneDocOfTipo = async (tipo,uid) => await getDoc(doc(db,tipo,uid));
export const updateOneDocOfTpo = async (tipo,uid,data) => await updateDoc(doc(db,tipo,uid),data);
export const uploadFile = async (file,name,uid,userid) => {
    const iref = ref(imagesRef,`/${userid}/${uid}/${name}`);
    await uploadBytes(iref,file);
}

export const getUrlImage = async (name,uid,userid) =>{
    const iref = ref(imagesRef,`/${userid}/${uid}/${name}`);
    await getDownloadURL(iref).then((url) => {
        return url;
    });
}

