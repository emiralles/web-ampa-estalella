import axios from "axios";
import { mail } from "../../models/mail";


export const envioMail = async (user) =>{
    try {

        const data = new mail(user.email,user.email,user.subject,user.nombre,user.textArea);
        axios.post('https://arimathsolutions.com/api/mail',data,{header:{
            'TIPO DE CONTENIDO': 'Aplicación / JSON' 
        }})
        .then(res => {
            console.log(res);
            console.log(res.data);
            return true;
        }).catch(error => {
            let errordata = error;
            console.log(errordata);
            return false;
        });

    } catch (error) {
        console.log(error);
        return false;
    }
    
}

export const envioMailDocuments = async (user) =>{
    try {

        const data = new mail(user.email,user.email,user.subject,user.nombre,user.textArea);
        axios.post('https://arimathsolutions.com/api/mail/documents',data,{header:{
            'TIPO DE CONTENIDO': 'Aplicación / JSON' 
        }})
        .then(res => {
            console.log(res);
            console.log(res.data);
            return true;
        }).catch(error => {
            let errordata = error;
            console.log(errordata);
            return false;
        });

    } catch (error) {
        console.log(error);
        return false;
    }
    
}