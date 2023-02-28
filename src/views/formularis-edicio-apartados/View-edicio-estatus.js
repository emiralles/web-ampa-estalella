import { useRef, useState, useEffect } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { quisom } from "../../models/quisom";
import { useAuth } from "../../context/authContext";

//import { add, updateOneDocOfTpo, getAllCollections, deleteOneDocOfTipo, getOneDocOfTipo} from "../../db/crudDB";
import { getUrlImage, uploadFile, add, updateOneDocOfTpo, getAllCollections, removeObject, deleteOneDocOfTipo, getOneDocOfTipo} from "../../db/crudDB";
import Parrafo from "../../components/menjador/Parrafo";
import ListRectangleCard from "../../components/card/ListRectangleCard";
import { esdeveniment } from "../../models/esdeveniment";


let edicio = new quisom("","","","","","", false, false); 

let dataQuisom = {
    uid:"",
    cosHtml:"",
    dateCreation:"",
    urlPhoto: "",
    path: "",
    namePhoto: "",
    thereIsUrlPhoto: false,
    thereIsYoutubeVideo:false,
}

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

function ViewEdicioEstatus() {
    const[esdevenim,setEsdevenim] = useState(evento);
    const [listEsdeveniments,setListEsdeveniments] = useState([]);
    const { user }  = useAuth();
    
    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    const [isTrue, setTrue] = useState(false);
    const [dataAuxiliar, setDataAuxiliar] = useState([]);
    let origen = "admin";

    const editorRef = useRef(null);
    
    const handleChange = ({target:{name,value}}) => {
        setEsdevenim({...esdevenim,[name]:value});
    }

    const handleFileChange = ({target:{name,files}}) => {
        setEsdevenim({...esdevenim,[name]:files[0]})
    }

    const refresh = ()=>{
        // re-renders the component
        edicio = new quisom("","","","","","", false, false); 
        setEdicioQuisom(edicio);
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

        let psd = document.getElementById('container-body-parraph');

        psd.children[1].children[0].children[1].children[0].children[0].contentDocument.children[0].children['tinymce'].innerHTML="<p>agregue aqui el texto.</p>";
    
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let inputAux = document.getElementById('input-aux');
        let fecha = new Date();
        let nowDate = fecha.toLocaleString("es-ES");
            
        if (inputAux.value !== "") {
            
            if (nowDate !== "") {
                let auxEvento = edicioQuisom;
                auxEvento.dateCreation=nowDate;
                setEdicioQuisom(auxEvento);    
            }

            if (editorRef.current) {
                let data = editorRef.current.getContent();
                let auxEvento = edicioQuisom;
                auxEvento.cosHtml=data;
                setEdicioQuisom(auxEvento);
                // console.log(data);
            }

            let idCard = inputAux.value;
            
            let item = new quisom('',edicioQuisom['cosHtml'],edicioQuisom['dateCreation'],edicioQuisom['urlPhoto'],edicioQuisom['path'],edicioQuisom['namePhoto'], false,false);
            let itemAux = new quisom('',dataAuxiliar.cosHtml,dataAuxiliar.dateCreation,dataAuxiliar.urlPhoto,dataAuxiliar.path,dataAuxiliar.namePhoto, false,false);
            
            dataQuisom.cosHtml = item.cosHtml !== undefined && item.cosHtml !== "" ? item.cosHtml : itemAux.cosHtml;
            dataQuisom.dateCreation = item.dateCreation !== undefined && item.dateCreation !== "" ? item.dateCreation : itemAux.dateCreation;
            // dataQuisom.iframeYoutube = item.iframeYoutube !== undefined && item.iframeYoutube !== "" ? item.iframeYoutube : itemAux.iframeYoutube;
            
            await updateOneDocOfTpo('estatus',idCard,dataQuisom);
            
            let btnMenjador = document.getElementById('btn-menjador');
            btnMenjador.innerText = "Agregar";

            handleReset();
            refresh();

        }else{
        
            if (nowDate !== "") {
                let auxEvento = edicioQuisom;
                auxEvento.dateCreation=nowDate;
                setEdicioQuisom(auxEvento);    
            }
            
            if (editorRef.current) {
                let data = editorRef.current.getContent();
                let auxEvento = edicioQuisom;
                auxEvento.cosHtml=data;
                setEdicioQuisom(auxEvento);
                // console.log(data);
            }

            
            dataQuisom.cosHtml = edicioQuisom.cosHtml;
            dataQuisom.dateCreation = edicioQuisom.dateCreation;
            // dataQuisom.iframeYoutube = edicioQuisom.iframeYoutube;
            
            await add('estatus',dataQuisom);
            
            handleReset();
            refresh();
            
        }

    };

    const handleSubmitFile = async (e) => {
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

    const handleEdit = ({target:{name}}) =>{

        let btnMenjador = document.getElementById('btn-menjador');
        
        // let inputparraf = document.getElementById('tinymce');
        let psd = document.getElementById('container-body-parraph');
        // let textPhoto = document.getElementById('iframeYoutube');
        let inputAux = document.getElementById('input-aux');
        
        let promise = getOneDocOfTipo('estatus',name);
        promise.then((result)=>{
          
            let data = result.data();
            data.id = result.id;
          
            setDataAuxiliar(data);

            // textPhoto.value = data.iframeYoutube;
            inputAux.value = data.id;
            psd.children[1].children[0].children[1].children[0].children[0].contentDocument.children[0].children['tinymce'].innerHTML=data.cosHtml;
            // inputparraf.innerHTML = data.cosHtml;
            
            btnMenjador.innerText = "Modificar";
            refresh();
        
        })
    
    }

    const handleRemove = ({target:{name}}) =>{
        let arrStr = name.split(" - ");
        let id = arrStr[0];
        deleteOneDocOfTipo('estatus',id);
        refresh();
    }

    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('estatus');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
                let item = new quisom(doc.id,doc.cosHtml,doc.dateCreation,"","","",false,false); 
                // setTrue(!isTrue);
                setEdicioQuisom(item);
            })
          })
          
        }
        
        handleLoad();
    
        const handleLoadEstatus = async () =>{
        
            // let arrayItems = [];
            let promesa1 = getAllCollections('esdeveniment');
            promesa1.then((resul)=>{
              resul.forEach((doc)=>{
                let imgUrl = getUrlImage(doc.path);
                imgUrl.then((rstUrl)=>{
                  let item = new esdeveniment(doc.id,doc.path,"",doc.title,doc.cosHtml,doc.dateCreation,doc.namePhoto,rstUrl); 
                  // arrayItems.push(item);
                  setListEsdeveniments(arr => [...arr, item]);
                  //console.log(listEsdeveniments);
                });
              })
            })
            
          }
          
          handleLoadEstatus();

    },[isTrue]);

    return ( 
        <>
            <div className="row featurette">
                <div className="col-md-12">
                    <div className="card border-info mb-3">
                        <div className="card-header bg-warning"><h2 className="card-title">Parrafo Estatuts</h2></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <input className="d-none" id="input-aux" ></input>
                                <div className="mb-3" id="container-body-parraph">
                                    <Editor
                                        apiKey="twddabpib9sh6y8sk8heu47ikwtyx74ryopk10mxlnlf2ue8"
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue="<p>agregue aqui el texto.</p>"
                                        init={{
                                        height: 500,
                                        menubar: true,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                            'bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" id="btn-menjador" className="btn btn-primary">Agregar</button>
                                </div>
                            </form>
                        </div>

                        {
                            edicioQuisom ?
                            <div className=" m-2 p-4">
                                <Parrafo data={edicioQuisom} handleRemove={handleRemove} handleEdit={handleEdit} componentcall={origen} />
                            </div>:""
                        }
                        
                    </div>
                </div>
            </div>
            <div className="row featurette">
                <div className="col-md-12">
                    <div className="card border-info mb-3">
                        <div className="card-header bg-warning"><h2 className="card-title">Estatus</h2></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmitFile} >
                                <input className="d-none" id="input-aux" ></input>
                                <div className="form-floating mb-3">
                                    <input type="text" onChange={handleChange} className="form-control" maxLength={32} id="title" placeholder="titol" name="title"/>
                                    <label htmlFor="title">Titol, maxim 32 caracteres</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea type="text" onChange={handleChange} className="form-control" maxLength={232} id="parraf" placeholder="parraf" name="cosHtml"/>
                                    <label htmlFor="parraf">Text, parrafo d'esdeveniment</label>
                                </div>
                                <div className="mb-3">
                                    <input className="d-none" id="textPhoto"/>
                                    <label htmlFor="fileupload" className="form-label">Agregar Imagen Evento</label>
                                    <input type="file" onChange={handleFileChange} className="form-control" id="fileupload" name="fileupload"/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" id="btn-esdeveniment" className="btn btn-primary">Agregar</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    {
                        <ListRectangleCard arrayData={listEsdeveniments} handleEdit={handleEdit} handleRemove={handleRemove} componentCall={origen} nameList="Listat d'Esdeveniments"/>
                    }
                </div>
            </div>
        </>
     );
}

export default ViewEdicioEstatus;