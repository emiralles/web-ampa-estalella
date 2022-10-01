import { useState, useEffect } from "react";
import { uploadFile, add, updateOneDocOfTpo, getAllCollections, getUrlImage, removeObject, deleteOneDocOfTipo, getOneDocOfTipo} from "../../db/crudDB";
import { useAuth } from "../../context/authContext";
import { itemcarousel } from "../../models/itemCarousel";
import ListRectangleCard from "../../components/card/ListRectangleCard";

let evento = new itemcarousel("","","","","","",""); 


let dataEvento = {
    uid:"",
    path:"",
    fileupload:"",
    title:"",
    dateCreation:"",
    namePhoto:"",
    urlPhoto:"",
}


function ViewEdicioCarousel() {
    const[esdevenim,setEsdevenim] = useState(evento);
    const { user }  = useAuth();
    const[isTrue,setTrue] = useState(false);
    const [listEsdeveniments,setListEsdeveniments] = useState([]);
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

            let item = new itemcarousel('','',esdevenim["fileupload"],esdevenim['title'],esdevenim['dateCreation'],nameCardPhoto,"");
            let itemAux = new itemcarousel('','','',dataAuxiliar.title,dataAuxiliar.dateCreation,dataAuxiliar.namePhoto,dataAuxiliar.urlPhoto);
            
            dataEvento.title = item.title !== undefined && item.title !== ""  ? item.title : itemAux.title;
            dataEvento.dateCreation = item.dateCreation !== undefined && item.dateCreation !== "" ? item.dateCreation : itemAux.dateCreation;
            dataEvento.namePhoto = item.namePhoto !== undefined && item.namePhoto !== "" ? item.namePhoto : itemAux.namePhoto;
            dataEvento.urlPhoto = esdevenim["fileupload"] !== undefined ? "" : itemAux.urlPhoto;

            await updateOneDocOfTpo('carousel',idCard,dataEvento);
            
            if (esdevenim["fileupload"] !== undefined) {
                let textPhoto = document.getElementById('textPhoto');
                let pathPhoto = textPhoto.value;
                removeObject(pathPhoto);
                const dataImg = await uploadFile(esdevenim["fileupload"],esdevenim["fileupload"].name,idCard,user.uid);
                dataEvento.namePhoto = esdevenim["fileupload"].name;
                dataEvento.path = dataImg.metadata.fullPath;
                await updateOneDocOfTpo('carousel',idCard,dataEvento);    
            }
            
            let btnEsdeveniment = document.getElementById('btn-esdeveniment');
            btnEsdeveniment.innerText = "Afegir";

            handleReset();
            refresh();

        }else{
        
            if (nowDate !== "") {
                let auxEvento = esdevenim;
                auxEvento.dateCreation=nowDate;
                setEsdevenim(auxEvento);    
            }
            
            dataEvento.dateCreation = esdevenim.dateCreation;
            dataEvento.namePhoto = esdevenim.fileupload.name;
            dataEvento.title = esdevenim.title;
            
            const idData = await add('carousel',dataEvento);
            if (idData !== undefined && idData !== "") {
                const dataImg = await uploadFile(esdevenim.fileupload,dataEvento.namePhoto,idData,user.uid);
                dataEvento.path = dataImg.metadata.fullPath;
                await updateOneDocOfTpo('carousel',idData,dataEvento);  
            }

            handleReset();
            refresh();
        }

    };

    const refresh = ()=>{
        // re-renders the component
        setListEsdeveniments([]);
        window.location.reload(false);
        if (isTrue) {
          setTrue(false);
        }else{
          setTrue(true);
        }
        
    }
      
    
    const handleReset = () => {
        // Array.from(document.querySelectorAll("input")).forEach(
        //     input => (
        //     input.type === "radio" ?  input.checked = false : input.type === "checkbox" ? input.checked = false :input.value = "" 
        //     )
        // );

        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );
    
    };

    const handleEdit = ({target:{name}}) =>{

        let btnEsdeveniment = document.getElementById('btn-esdeveniment');
        
        let inputtitle = document.getElementById('title');
        // let inputparraf = document.getElementById('parraf');
        let textPhoto = document.getElementById('textPhoto');
        let inputAux = document.getElementById('input-aux');
        
        let promise = getOneDocOfTipo('carousel',name);
        promise.then((result)=>{
          
            let data = result.data();
            data.id = result.id;
          
            setDataAuxiliar(data);
           
            inputtitle.value = data.title;
            // inputparraf.value = data.cosHtml;
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
        removeObject(pathPhoto);
        deleteOneDocOfTipo('carousel',id);
        
        refresh();
        titulo.focus();
    }
    
    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('carousel');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.path);
              imgUrl.then((rstUrl)=>{
                let item = new itemcarousel(doc.id,doc.path,"",doc.title,doc.dateCreation,doc.namePhoto,rstUrl); 
                setListEsdeveniments(arr => [...arr, item]);
              });
            })
          })
          
        }
        
        handleLoad();
    
    },[]);

      
    return (
        <>            
            <div className="row featurette">
                <div className="col-md-12">
                    <div className="card border-info mb-3">
                        <div className="card-header bg-warning"><h2 className="card-title">Imatges d'Carousel</h2></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <input className="d-none" id="input-aux" ></input>
                                <div className="form-floating mb-3">
                                    <input type="text" onChange={handleChange} className="form-control" maxLength={32} id="title" placeholder="titol" name="title"/>
                                    <label htmlFor="title">Titol, maxim 32 caracteres</label>
                                </div>
                                <div className="mb-3">
                                    <input className="d-none" id="textPhoto"/>
                                    <label htmlFor="fileupload" className="form-label">Afegir Imatge Carousel</label>
                                    <input type="file" onChange={handleFileChange} className="form-control" id="fileupload" name="fileupload"/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" id="btn-esdeveniment" className="btn btn-primary">Afegir</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    {
                        <ListRectangleCard arrayData={listEsdeveniments} handleEdit={handleEdit} handleRemove={handleRemove} componentCall={origen} nameList="Listat d'Imatges el Carousel"/>
                    }
                </div>
            </div>
        </>
    );
}

export default ViewEdicioCarousel;