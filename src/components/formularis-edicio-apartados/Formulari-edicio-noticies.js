import { useState, useEffect } from "react";
import { uploadFile, add, updateOneDocOfTpo, getAllCollections, getUrlImage, removeObject, deleteOneDocOfTipo, getOneDocOfTipo} from "../../db/crudDB";
import { useAuth } from "../../context/authContext";
import { esdeveniment } from "../../models/esdeveniment";
import ListRectangleCard from "../card/ListRectangleCard";


let evento = new esdeveniment("","","","","","","",""); 


let dataEvento = {
    uid:"",
    path:"",
    fileupload:"",
    title:"",
    cosHtml:"",
    dateCreation:"",
    namePhoto:"",
    urlPhoto:"",
}

function FormulariEdicioNoticies() {
  
    const[esdevenim,setEsdevenim] = useState(evento);
    const { user }  = useAuth();
    
    const [listEsdeveniments,setListEsdeveniments] = useState([]);
    const [isTrue, setTrue] = useState(false);
    const [dataAuxiliar, setDataAuxiliar] = useState([]);
    let origen = "admin";

    const handleChange = ({target:{name,value}}) => {
        setEsdevenim({...esdevenim,[name]:value});
    }

    const handleFileChange = ({target:{name,files}}) => {
        setEsdevenim({...esdevenim,[name]:files[0]})
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let inputAux = document.getElementById('input-aux');
        let fecha = new Date();
        let nowDate = fecha.toLocaleString("es-ES");
            
        if (inputAux.value !== "") {
            
            if (nowDate !== "") {
                let auxEvento = esdevenim;
                auxEvento.dateCreation=nowDate;
                setEsdevenim(auxEvento);    
            }

            let arrDataAux = inputAux.value.split(" - ");
            let idCard = arrDataAux[0];
            let dataImagen = esdevenim["fileupload"];
            let nameCardPhoto = dataImagen !== undefined ? dataImagen.name : arrDataAux[1];  

            let item = new esdeveniment('','',esdevenim["fileupload"],esdevenim['title'],esdevenim['cosHtml'],esdevenim['dateCreation'],nameCardPhoto,"");
            let itemAux = new esdeveniment('','','',dataAuxiliar.title,dataAuxiliar.cosHtml,dataAuxiliar.dateCreation,dataAuxiliar.namePhoto,dataAuxiliar.urlPhoto);
            
            dataEvento.title = item.title !== undefined && item.title !== ""  ? item.title : itemAux.title;
            dataEvento.cosHtml = item.cosHtml !== undefined && item.cosHtml !== "" ? item.cosHtml : itemAux.cosHtml;
            dataEvento.dateCreation = item.dateCreation !== undefined && item.dateCreation !== "" ? item.dateCreation : itemAux.dateCreation;
            dataEvento.namePhoto = item.namePhoto !== undefined && item.namePhoto !== "" ? item.namePhoto : itemAux.namePhoto;
            dataEvento.urlPhoto = esdevenim["fileupload"] !== undefined ? "" : itemAux.urlPhoto;

            await updateOneDocOfTpo('esdeveniment',idCard,dataEvento);
            
            if (esdevenim["fileupload"] !== undefined) {
                let textPhoto = document.getElementById('textPhoto');
                let pathPhoto = textPhoto.value;
                removeObject(pathPhoto);
                const dataImg = await uploadFile(esdevenim["fileupload"],esdevenim["fileupload"].name,idCard,user.uid);
                dataEvento.namePhoto = esdevenim["fileupload"].name;
                dataEvento.path = dataImg.metadata.fullPath;
                await updateOneDocOfTpo('esdeveniment',idCard,dataEvento);    
            }
            
            let btnEsdeveniment = document.getElementById('btn-esdeveniment');
            btnEsdeveniment.innerText = "Agregar";

            handleReset();
            refresh();

        }else{
        
            if (nowDate !== "") {
                let auxEvento = esdevenim;
                auxEvento.dateCreation=nowDate;
                setEsdevenim(auxEvento);    
            }
            
            dataEvento.cosHtml = esdevenim.cosHtml;
            dataEvento.dateCreation = esdevenim.dateCreation;
            dataEvento.namePhoto = esdevenim.fileupload.name;
            dataEvento.title = esdevenim.title;
            
            const idData = await add('esdeveniment',dataEvento);
            if (idData !== undefined && idData !== "") {
                const dataImg = await uploadFile(esdevenim.fileupload,dataEvento.namePhoto,idData,user.uid);
                dataEvento.path = dataImg.metadata.fullPath;
                await updateOneDocOfTpo('esdeveniment',idData,dataEvento);  
            }

            handleReset();
            refresh();
            
        }

    };

    const refresh = ()=>{
        setListEsdeveniments([]);
        if (isTrue) {
          setTrue(false);
        }else{
          setTrue(true);
        }
        
    }
      
    
    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (
            input.type === "radio" ?  input.checked = false : input.type === "checkbox" ? input.checked = false :input.value = "" 
            )
        );

        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );
    
    };

    const handleEdit = ({target:{name}}) =>{

        let btnEsdeveniment = document.getElementById('btn-esdeveniment');
        
        let inputtitle = document.getElementById('title');
        let inputparraf = document.getElementById('parraf');
        let textPhoto = document.getElementById('textPhoto');
        let inputAux = document.getElementById('input-aux');
        
        let promise = getOneDocOfTipo('esdeveniment',name);
        promise.then((result)=>{
          
            let data = result.data();
            data.id = result.id;
          
            setDataAuxiliar(data);
           
            inputtitle.value = data.title;
            inputparraf.value = data.cosHtml;
            textPhoto.value = data.path;
          
            inputAux.value = `${data.id} - ${data.namePhoto}`;
        
            btnEsdeveniment.innerText = "Modificar";
            refresh();
            inputtitle.focus();
    
        })
    
    }
    
    const handleRemove = ({target:{name}}) =>{
        let arrStr = name.split(" - ");
        let id = arrStr[0];
        let pathPhoto = arrStr[1];
        let titulo = document.getElementById('title');
        deleteOneDocOfTipo('esdeveniment',id);
        removeObject(pathPhoto);
        refresh();
        titulo.focus();
    }
    
    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('esdeveniment');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.path);
              imgUrl.then((rstUrl)=>{
                let item = new esdeveniment(doc.id,doc.path,"",doc.title,doc.cosHtml,doc.dateCreation,doc.namePhoto,rstUrl); 
                setListEsdeveniments(arr => [...arr, item]);
              });
            })
          })
          
        }
        
        handleLoad();
    
    },[isTrue]);

    return (
        <>            
            <div className="row featurette">
                <div className="col-md-12">
                    <div className="card border-info mb-3">
                        <div className="card-header bg-warning"><h2 className="card-title">Noticies</h2></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <input className="d-none" id="input-aux" ></input>
                                <div className="form-floating mb-3">
                                    <input type="text" onChange={handleChange} className="form-control" maxLength={32} id="title" placeholder="titol" name="title"/>
                                    <label htmlFor="title">Titol, maxim 32 caracteres</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea type="text" onChange={handleChange} className="form-control" maxLength={232} id="parraf" placeholder="parraf" name="cosHtml"/>
                                    <label htmlFor="parraf">Text, parrafo d'noticie</label>
                                </div>
                                <div className="mb-3">
                                    <input className="d-none" id="textPhoto"/>
                                    <label htmlFor="fileupload" className="form-label">Agregar Imagen Noticie</label>
                                    <input type="file" onChange={handleFileChange} className="form-control" id="fileupload" name="fileupload"/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" id="btn-esdeveniment" className="btn btn-primary">Agregar</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    {
                        <ListRectangleCard arrayData={listEsdeveniments} handleEdit={handleEdit} handleRemove={handleRemove} componentCall={origen}/>
                    }
                </div>
            </div>
        </>
    )
}

export default FormulariEdicioNoticies