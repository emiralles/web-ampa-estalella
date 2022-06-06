import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { uploadFile, add, updateOneDocOfTpo, getAllCollections, getUrlImage, removeObject, deleteOneDocOfTipo, getOneDocOfTipo} from "../../db/crudDB";
import { useAuth } from "../../context/authContext";
import { noticie } from "../../models/noticie";
import ListRectangleCard from "../card/ListRectangleCard";


let noticia = new noticie("","","","","","","","",[],[],[]); 


let dataNoticie = {
    uid:"",
    path:"",
    fileupload:"",
    title:"",
    cosHtml:"",
    dateCreation:"",
    namePhoto:"",
    urlPhoto:"",
    pathsImages:[],
    urlsPathsImages:[],
    imagesGalery:[]
}

function FormulariEdicioNoticies() {
  
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const [lstImgs, setLstImgs] = useState([]);
    // const [lstPathImageEdit, setLstPathImageEdit] = useState([]);
    const [lstImgsDelete, setLstImgsDelete] = useState([]);

    const[notici,setNotici] = useState(noticia);
    const { user }  = useAuth();
    
    const [listNoticies,setListNoticies] = useState([]);
    const [isTrue, setTrue] = useState(false);
    const [dataAuxiliar, setDataAuxiliar] = useState([]);
    let origen = "admin";


    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        let svgUploadImages = document.getElementById('svgImagesUpload');
        svgUploadImages.style.visibility = 'hidden';
        let divPresentImages = document.getElementById('containerImagesUpload');
        divPresentImages.classList.remove("d-none");
        let btnEliminarAll = document.getElementById('eliminarTodo');
        btnEliminarAll.classList.remove("d-none");
        let agregarMas = document.getElementById('agregarMas');
        agregarMas.classList.remove("d-none");
    };

    const handleChange = ({target:{name,value}}) => {
        setNotici({...notici,[name]:value});
    }

    const handleFileChange = ({target:{name,files}}) => {
        setNotici({...notici,[name]:files[0]})
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let inputAux = document.getElementById('input-aux');
        let fecha = new Date();
        let nowDate = fecha.toLocaleString("es-ES");
            
        if (inputAux.value !== "") {
            
            if (nowDate !== "") {
                let auxEvento = notici;
                auxEvento.dateCreation=nowDate;
                setNotici(auxEvento);    
            }

            let arrDataAux = inputAux.value.split(" - ");
            let idCard = arrDataAux[0];
            let dataImagen = notici["fileupload"];
            let nameCardPhoto = dataImagen !== undefined ? dataImagen.name : arrDataAux[1];  

            let item = new noticie('','',notici["fileupload"],notici['title'],notici['cosHtml'],notici['dateCreation'],nameCardPhoto,"",[],[],[]);
            let itemAux = new noticie('','','',dataAuxiliar.title,dataAuxiliar.cosHtml,dataAuxiliar.dateCreation,dataAuxiliar.namePhoto,dataAuxiliar.urlPhoto,dataAuxiliar.pathsImages,[],[]);
            
            dataNoticie.title = item.title !== undefined && item.title !== ""  ? item.title : itemAux.title;
            dataNoticie.cosHtml = item.cosHtml !== undefined && item.cosHtml !== "" ? item.cosHtml : itemAux.cosHtml;
            dataNoticie.dateCreation = item.dateCreation !== undefined && item.dateCreation !== "" ? item.dateCreation : itemAux.dateCreation;
            dataNoticie.namePhoto = item.namePhoto !== undefined && item.namePhoto !== "" ? item.namePhoto : itemAux.namePhoto;
            dataNoticie.urlPhoto = notici["fileupload"] !== undefined ? "" : itemAux.urlPhoto;
            dataNoticie.pathsImages = itemAux.pathsImages;

            await updateOneDocOfTpo('noticie',idCard,dataNoticie);
            
            if (notici["fileupload"] !== undefined) {
                let textPhoto = document.getElementById('textPhoto');
                let pathPhoto = textPhoto.value;
                removeObject(pathPhoto);
                const dataImg = await uploadFile(notici["fileupload"],notici["fileupload"].name,idCard,user.uid);
                dataNoticie.namePhoto = notici["fileupload"].name;
                dataNoticie.path = dataImg.metadata.fullPath;
                await updateOneDocOfTpo('noticie',idCard,dataNoticie);    
            }
            
            if (images.length>0) {

                dataNoticie.pathsImages = [];

                let arryAu = [...images];
                arryAu.forEach((item)=>{
                    const datass = uploadFile(item.file,item.file.name,idCard,`${user.uid}-imagegalery`);
                    datass.then((rstPath)=>{
                        dataNoticie.pathsImages.push(rstPath.metadata.fullPath);
                        updateOneDocOfTpo('noticie',idCard,dataNoticie);          
                    });
                    // return 0;
                })

                if (lstImgs.length>0) {
                    lstImgs.forEach((item)=>{
                        dataNoticie.pathsImages.push(item.pathFoto);
                        updateOneDocOfTpo('noticie',idCard,dataNoticie);          
                    })    
                }
                
                if (lstImgsDelete.length>0) {
                    lstImgsDelete.forEach((strPath)=>{
                        removeObject(strPath);
                    })    
                }
                
            }

            let btnNoticie = document.getElementById('btn-noticie');
            btnNoticie.innerText = "Agregar";
            setLstImgs([]);
            handleReset();
            refresh();

        }else{
        
            if (nowDate !== "") {
                let auxEvento = notici;
                auxEvento.dateCreation=nowDate;
                setNotici(auxEvento);    
            }
            
            dataNoticie.cosHtml = notici.cosHtml;
            dataNoticie.dateCreation = notici.dateCreation;
            dataNoticie.namePhoto = notici.fileupload.name;
            dataNoticie.title = notici.title;
            
            


            const idData = await add('noticie',dataNoticie);
            if (idData !== undefined && idData !== "") {
                const dataImg = await uploadFile(notici.fileupload,dataNoticie.namePhoto,idData,user.uid);
                dataNoticie.path = dataImg.metadata.fullPath;
                await updateOneDocOfTpo('noticie',idData,dataNoticie);  

                if (images.length>0) {
                    let arryAu = [...images];
                    arryAu.forEach((item)=>{
                        const datass = uploadFile(item.file,item.file.name,idData,`${user.uid}-imagegalery`);
                        datass.then((rstPath)=>{
                            dataNoticie.pathsImages.push(rstPath.metadata.fullPath);
                            updateOneDocOfTpo('noticie',idData,dataNoticie);          
                        });
                        // dataNoticie.pathsImages.push(datass.metadata.fullPath);

                        return 0;
                    })
                    
                }
            }

            handleReset();
            refresh();
            
        }

    };

    const refresh = ()=>{
        setListNoticies([]);
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
        
        let elmTodo = document.getElementById('eliminarTodo'); 
        elmTodo.classList.add('d-none'); 
        let addMas = document.getElementById('agregarMas'); 
        addMas.classList.add('d-none');
        let svgUploadImages = document.getElementById('svgImagesUpload'); 
        svgUploadImages.style.visibility='visible';
        
        setImages([]);
        
    };

    const handleEdit = ({target:{name}}) =>{

        let btnNoticie = document.getElementById('btn-noticie');
        
        let inputtitle = document.getElementById('title');
        let inputparraf = document.getElementById('parraf');
        let textPhoto = document.getElementById('textPhoto');
        let inputAux = document.getElementById('input-aux');
        
        let promise = getOneDocOfTipo('noticie',name);
        promise.then((result)=>{
          
            let data = result.data();
            data.id = result.id;
          
            setDataAuxiliar(data);
           
            inputtitle.value = data.title;
            inputparraf.value = data.cosHtml;
            textPhoto.value = data.path;
          
            inputAux.value = `${data.id} - ${data.namePhoto}`;
  
            data.pathsImages.forEach((pathItem)=>{
                let prom = getUrlImage(pathItem);
                // setLstPathImageEdit(ars => [...ars, pathItem]);
                prom.then((url)=>{
                    let objFoto ={
                        urlPhoto:url,
                        pathFoto:pathItem
                    }
                    setLstImgs(arr => [...arr, objFoto]);
                })
            })
            
            let divPresentImages = document.getElementById('containerImagesUpload');
            divPresentImages.classList.remove("d-none");
            
            btnNoticie.innerText = "Modificar";
            refresh();
            inputtitle.focus();
    
        })
    
    }
    
    const handleRemove = ({target:{name}}) =>{
        let arrStr = name.split(" - ");
        let id = arrStr[0];
        let pathPhoto = arrStr[1];
        let titulo = document.getElementById('title');
        
        let promise = getOneDocOfTipo('noticie',id);
        promise.then((result)=>{
            let data = result.data();
            data.pathsImages.forEach((itemPath)=>{
                removeObject(itemPath);        
            })
        })

        deleteOneDocOfTipo('noticie',id);
        removeObject(pathPhoto);
        refresh();
        titulo.focus();
    }

    const onImageDelete = (urldelete,pathdelete) =>{
        // let objDelete = {
        //     urlPhoto:urldelete,
        //     pathFoto:pathdelete
        // }
        setLstImgsDelete(arr => [...arr, pathdelete]);
        let lstAux = lstImgs.filter(x=>x.urlPhoto !== urldelete);
        setLstImgs(lstAux);
    }
    
    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('noticie');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.path);
              imgUrl.then((rstUrl)=>{
                let item = new noticie(doc.id,doc.path,"",doc.title,doc.cosHtml,doc.dateCreation,doc.namePhoto,rstUrl,[],[],[]); 
                setListNoticies(arr => [...arr, item]);
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
                                <div className="mb-3">
                                    <ImageUploading
                                        multiple
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                        imageList,
                                        onImageUpload,
                                        onImageRemoveAll,
                                        // onImageUpdate,
                                        onImageRemove,
                                        isDragging,
                                        dragProps,
                                        }) => (
                                        // write your building UI
                                        <>
                                        <h5>Agregar las imagenes</h5>
                                        <button id="eliminarTodo" className=" btn-danger m-3 d-none" onClick={() => {let svgUploadImages = document.getElementById('svgImagesUpload'); onImageRemoveAll() ; svgUploadImages.style.visibility='visible'; let elmTodo = document.getElementById('eliminarTodo'); elmTodo.classList.add('d-none'); let addMas = document.getElementById('agregarMas'); addMas.classList.add('d-none')}}>Eliminar Todas las Imagenes</button>
                                        <button id="agregarMas" className=" btn-danger m-3 d-none" onClick={() => {let svgUploadImages = document.getElementById('svgImagesUpload'); svgUploadImages.style.visibility='visible';}}>Añadir más Imagenes</button>
                                        <div className="upload__image-wrapper">
                                            <div id="containerImagesUpload" className=" row border container-fluid d-none h-75 w-50">
                                                {imageList.map((image, index) => (
                                                <div key={index} className="image-item col p-1">
                                                    <img src={image['data_url']} alt="" width="100" className="w-100 shadow-1-strong rounded mb-4"/>
                                                    <a href="#44" className=" position-absolute text-center mt-0" style={{width:"1rem!important",height:"1rem!important"}} onClick={() => onImageRemove(index)}>x</a>
                                                    <div className="image-item__btn-wrapper">
                                                    </div>
                                                </div>
                                                ))}
                                                {lstImgs.map((item, index) => (
                                                <div key={index} className="image-item col p-1">
                                                    <img src={item.urlPhoto} alt="" width="100" className="w-100 shadow-1-strong rounded mb-4"/>
                                                    <a href="#44" className=" position-absolute text-center mt-0" style={{width:"1rem!important",height:"1rem!important"}} onClick={() => onImageDelete(item.urlPhoto,item.pathFoto)}>x</a>
                                                    <div className="image-item__btn-wrapper">
                                                    </div>
                                                </div>
                                                ))}
                                            </div>
                                            <svg id="svgImagesUpload" onClick={onImageUpload}
                                            {...dragProps} style={isDragging ? { color: 'red' } : undefined} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="150" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 150x150" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="37.5%" y="50%" fill="#aaa" dy=".1em">Click or Drop here</text>
                                            </svg>
                                        </div>
                                        </>
                                        
                                        )}
                                    </ImageUploading>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" id="btn-noticie" className="btn btn-primary">Agregar</button>
                                </div>
                                {/* <hr className="featurette-divider"></hr> */}
                                
                            </form>
                            
                        </div>
                    </div>
                    {
                        <ListRectangleCard arrayData={listNoticies} handleEdit={handleEdit} handleRemove={handleRemove} componentCall={origen} nameList="Listat d'Noticies"/>
                    }
                </div>
            </div>
        </>
    )
}

export default FormulariEdicioNoticies