import { useState, useEffect } from "react";
import { uploadFile, add, updateOneDocOfTpo, getAllCollections, getUrlImage, removeObject, deleteOneDocOfTipo, getOneDocOfTipo} from "../../db/crudDB";
import { useAuth } from "../../context/authContext";
import { comissio } from "../../models/comissio";
import ListRectangleCard from "../../components/card/ListRectangleCard";

let comisio = new comissio("","","","","","","","",""); 

let dataComision = {
    uid : "",
    path : "",
    fileupload : "",
    title : "",
    cosHtml : "",
    dateCreation : "",
    namePhoto : "",
    urlPhoto : "",
    listaUsuarios : "",
}

function ViewEdicioComissions() {

    const[comision,setComision] = useState(comisio);
    const { user }  = useAuth();
    
    const [listComisiones,setListComisiones] = useState([]);
    const [isTrue, setTrue] = useState(false);
    const [dataAuxiliar, setDataAuxiliar] = useState([]);
    let origen = "admin";

    const handleChange = ({target:{name,value}}) => {
        setComision({...comision,[name]:value});
    }

    const handleFileChange = ({target:{name,files}}) => {
        setComision({...comision,[name]:files[0]})
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let inputAux = document.getElementById('input-aux');
        let fecha = new Date();
        let nowDate = fecha.toLocaleString("es-ES");
            
        if (inputAux.value !== "") {
            
            if (nowDate !== "") {
                let auxEvento = comision;
                auxEvento.dateCreation=nowDate;
                setComision(auxEvento);    
            }

            let arrDataAux = inputAux.value.split(" - ");
            let idCard = arrDataAux[0];
            let dataImagen = setComision["fileupload"];
            let nameCardPhoto = dataImagen !== undefined ? dataImagen.name : arrDataAux[1];  

            let item = new comissio('','',comision["fileupload"],comision['title'],comision['cosHtml'],comision['dateCreation'],nameCardPhoto,"",[]);
            let itemAux = new comissio('','','',dataAuxiliar.title,dataAuxiliar.cosHtml,dataAuxiliar.dateCreation,dataAuxiliar.namePhoto,dataAuxiliar.urlPhoto,[]);
            
            dataComision.title = item.title !== undefined && item.title !== ""  ? item.title : itemAux.title;
            dataComision.cosHtml = item.cosHtml !== undefined && item.cosHtml !== "" ? item.cosHtml : itemAux.cosHtml;
            dataComision.dateCreation = item.dateCreation !== undefined && item.dateCreation !== "" ? item.dateCreation : itemAux.dateCreation;
            dataComision.namePhoto = item.namePhoto !== undefined && item.namePhoto !== "" ? item.namePhoto : itemAux.namePhoto;
            dataComision.urlPhoto = comision["fileupload"] !== undefined ? "" : itemAux.urlPhoto;

            await updateOneDocOfTpo('comissio',idCard,dataComision);
            
            if (comision["fileupload"] !== undefined) {
                let textPhoto = document.getElementById('textPhoto');
                let pathPhoto = textPhoto.value;
                removeObject(pathPhoto);
                const dataImg = await uploadFile(comision["fileupload"],comision["fileupload"].name,idCard,user.uid);
                dataComision.namePhoto = comision["fileupload"].name;
                dataComision.path = dataImg.metadata.fullPath;
                await updateOneDocOfTpo('comissio',idCard,dataComision);    
            }
            
            let btnComissio = document.getElementById('btn-comissio');
            btnComissio.innerText = "Agregar";

            handleReset();
            refresh();

        }else{
        
            if (nowDate !== "") {
                let auxEvento = comision;
                auxEvento.dateCreation=nowDate;
                setComision(auxEvento);    
            }
            
            dataComision.cosHtml = comision.cosHtml;
            dataComision.dateCreation = comision.dateCreation;
            dataComision.namePhoto = comision.fileupload.name;
            dataComision.title = comision.title;
            
            const idData = await add('comissio',dataComision);
            if (idData !== undefined && idData !== "") {
                const dataImg = await uploadFile(comision.fileupload,dataComision.namePhoto,idData,user.uid);
                dataComision.path = dataImg.metadata.fullPath;
                await updateOneDocOfTpo('comissio',idData,dataComision);  
            }

            handleReset();
            refresh();
            
        }

    };

    const refresh = ()=>{
        // re-renders the component
        setListComisiones([]);
        //window.location.reload(false);
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

    const handleEdit = (event) =>{
        // {target:{name}}
        let data =event.currentTarget;
        let name = data.name;
        
        let btnComissio = document.getElementById('btn-comissio');
        let inputtitle = document.getElementById('title');
        let inputparraf = document.getElementById('parraf');
        let textPhoto = document.getElementById('textPhoto');
        let inputAux = document.getElementById('input-aux');
        
        let promise = getOneDocOfTipo('comissio',name);
        promise.then((result)=>{
          
            let data = result.data();
            data.id = result.id;
          
            setDataAuxiliar(data);
           
            inputtitle.value = data.title;
            inputparraf.value = data.cosHtml;
            textPhoto.value = data.path;
          
            inputAux.value = `${data.id} - ${data.namePhoto}`;
        
            btnComissio.innerText = "Modificar";
            refresh();
            inputtitle.focus();
    
        })
    
    }
    
    const handleRemove = (event) =>{
        // {target:{name}}
        let data =event.currentTarget;
        let name = data.name;
        let arrStr = name.split(" - ");
        let id = arrStr[0];
        let pathPhoto = arrStr[1];
        let titulo = document.getElementById('title');
        removeObject(pathPhoto);
        deleteOneDocOfTipo('comissio',id);
        refresh();
        titulo.focus();
    }
    
    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('comissio');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.path);
              imgUrl.then((rstUrl)=>{
                let item = new comissio(doc.id,doc.path,"",doc.title,doc.cosHtml,doc.dateCreation,doc.namePhoto,rstUrl); 
                setListComisiones(arr => [...arr, item]);
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
                        <div className="card-header bg-warning"><h2 className="card-title">Comissio</h2></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <input className="d-none" id="input-aux" ></input>
                                <div className="form-floating mb-3">
                                    <input type="text" onChange={handleChange} className="form-control" maxLength={32} id="title" placeholder="titol" name="title"/>
                                    <label htmlFor="title">Titol, maxim 32 caracteres</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea type="text" onChange={handleChange} className="form-control" maxLength={232} id="parraf" placeholder="parraf" name="cosHtml"/>
                                    <label htmlFor="parraf">Text, parrafo comissio</label>
                                </div>
                                <div className="mb-3">
                                    <input className="d-none" id="textPhoto"/>
                                    <label htmlFor="fileupload" className="form-label">Agregar Imagen Comissio</label>
                                    <input type="file" onChange={handleFileChange} className="form-control" id="fileupload" name="fileupload"/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" id="btn-comissio" className="btn btn-primary">Agregar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {
                        <ListRectangleCard arrayData={listComisiones} handleEdit={handleEdit} handleRemove={handleRemove} componentCall={origen} nameList="Listat d'Comissiones"/>
                    }
                </div>
            </div>
        </>
     ); 
}

export default ViewEdicioComissions;