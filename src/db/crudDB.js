import {  ref,  uploadBytes,  getDownloadURL, deleteObject } from "firebase/storage";
import { db, imagesRef } from "../firebase/fireabaseConfig";
import { storage } from "../firebase/fireabaseConfig";
import { collection, addDoc, deleteDoc, getDocs, onSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
//deleteDoc, 
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
    //try {
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
    // } catch (error) {
    //     console.log(error);
    // }
}

export const onGetListTipo = (tipo,callback) => onSnapshot(collection(db,tipo),callback);

export const deleteDocumentandImage = async(tipo,uid,routeRef) =>{
    let stRootDocument = "";
        stRootDocument = `/${tipo}/${uid}`;
        const refCol = doc(db,stRootDocument);
        
        deleteDoc(refCol)
        .then(() => {
            const iref = ref(storage,routeRef);
            deleteObject(iref).then((objR) => {
                console.log("Entire Document has been deleted successfully.")
                return objR;
            }).catch((error) => {
                console.log(error);
            });
            
        })
        .catch(error => {
            console.log(error);
        })
}
 
export const deleteOneDocOfTipo = async (tipo,uid) => {
    //try {
        //const colRef = collection(db, tipo);
        // const refCol = doc(db,tipo,uid); 
        // var jobskill_query = await db.collection('carousel').where('id','==','xg4cxSPQ4VDCijZGUTk4');
        //     jobskill_query.get().then(function(querySnapshot) {
        //         querySnapshot.forEach(function(doc) {
        //         doc.ref.delete();
        //     });
        // });
        let stRootDocument = "";
        stRootDocument = `/${tipo}/${uid}`;
        //await db.collection("carousel").doc("xg4cxSPQ4VDCijZGUTk4").delete();
        //const refCol = doc(db,"carousel","xg4cxSPQ4VDCijZGUTk4");
        //const refCol = doc(db,"/carousel/IXvOgEI3aII7dMklPnSG");
        const refCol = doc(db,stRootDocument);
        // /carousel/xg4cxSPQ4VDCijZGUTk4

        deleteDoc(refCol)
        .then(() => {
            console.log("Entire Document has been deleted successfully.")
        })
        .catch(error => {
            console.log(error);
        })
        // vsd = colRef.firestore;
        
        // .firestore.doc(uid).delete();
        // const rstUpdate = 
        // // deleteDoc(doc(colRef,uid)).then((objR) => {
        // //     // File deleted successfully
        // //     return objR;
        // // }).catch((error) => {
        // //     // Uh-oh, an error occurred!
        // //     console.log(error);
        // // });
        //const rstUpdate = await deleteDoc(doc(db,tipo,uid));
        //console.log(rstUpdate);
    // } catch (error) {
    //     console.log(error);
    // }
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



