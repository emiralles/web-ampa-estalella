import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { Editor } from '@tinymce/tinymce-react';
import { add, updateOneDocOfTpo, getAllCollections, deleteOneDocOfTipo, getOneDocOfTipo, uploadFile, removeObject, getUrlImage} from "../../db/crudDB";
import Parrafo from "../../components/menjador/Parrafo";
import { modelTardesJuny } from "../../models/tardesJuny";


let data = {
    uid:"",
    cosHtml:"",
    dateCreation:"",
    namePhoto: "",
    urlPhoto: "",
}

let origen = "admin";  

let edicio = new modelTardesJuny("","","","","" ,""); 

// let dataMenjador = {
//     uid:"",
//     cosHtml:"",
//     dateCreation:"",
//     iframeYoutube:"",
//     thereIsYoutubeVideo: true,
// }

function ViewEdicioTardesJuny() {
    const [tardesJuny, setTardesJuny] = useState(edicio);
    //const [dataAuxiliar, setDataAuxiliar] = useState([]);
    const { user }  = useAuth();
    //let componentCall = "admin";

    // const handleChange = ({target:{name,value}}) => {
    //     setTardesJuny({...tardesJuny,[name]:value});
    // }

    const handleFileChange = ({target:{name,files}}) => {
        setTardesJuny({...tardesJuny,[name]:files[0]})
    }


    const editorRef = useRef(null);
    
    const handleSubmit = async (e) =>{    
        e.preventDefault();
        let inputAux = document.getElementById('input-aux');
        if (inputAux.value !== "") {
          //let arrDataAux = inputAux.value.split(" - ");
          //let idCard = arrDataAux[0];
        //  let dataImagen = extraescolar["imagenLogo"];
        //   let nameCardPhoto = dataImagen !== undefined ? dataImagen.name : arrDataAux[1];  
    
        //   let item = new equipament('','',extraescolar['titol'],extraescolar['principalText'],nameCardPhoto,'');
        //   let itemAux = new equipament('','',dataAuxiliar.title,dataAuxiliar.mainText,dataAuxiliar.namePhoto,dataAuxiliar.urlPhoto)
          
        //   data.title = item.title !== undefined && item.title !== "" ? item.title : itemAux.title;
        //   data.mainText = item.mainText !== undefined && item.mainText !== "" ? item.mainText : itemAux.mainText;
          
        //   await updateOneDocOfTpo('equipament',idCard,data);
          
        //   if (extraescolar["imagenLogo"] !== undefined) {
        //     const dataImg = await uploadFile(extraescolar["imagenLogo"],extraescolar["imagenLogo"].name,idCard,user.uid);
        //     data.namePhoto = extraescolar["imagenLogo"].name;
        //     data.urlPhoto = dataImg.metadata.fullPath;
        //     await updateOneDocOfTpo('equipament',idCard,data);    
        //   }
          
        //   let btnExtraescolar = document.getElementById('btn-extraescolar');
        //   btnExtraescolar.innerText = "Agregar";
    
          handleReset();
          refresh();
    
        }else{
          
          if ( tardesJuny['fileUpload'].name !== undefined && editorRef.current ) {
            let dataAux = editorRef.current.getContent();
            let auxEvento = tardesJuny;
            auxEvento.cosHtml=dataAux;
            setTardesJuny(auxEvento);
            
            data.cosHtml= auxEvento.cosHtml;
            
            //let item = new modelTardesJuny('', auxEvento.cosHtml, auxEvento.dateCreation, '', '', '' );
            
            const idData = await add('tardesjuny',data);
            if (idData !== undefined && idData !== "") {
              data.uid = idData;
              const dataImg = await uploadFile(auxEvento["fileUpload"],auxEvento["fileUpload"].name,idData,user.uid);
              data.namePhoto = auxEvento["fileUpload"].name;
              data.urlPhoto = dataImg.metadata.fullPath;
              await updateOneDocOfTpo('tardesjuny',idData,data);  
            }
            handleReset();
            refresh();
          }
        }        
    }
    
    const handleEdit = ({target:{name}}) =>{

        let btnExtraescolar = document.getElementById('btn-extraescolar');
        
        let inputAux = document.getElementById('input-aux');
        let psd = document.getElementById('container-body-parraph');
        
        
        let principalText = document.getElementById('textoHtml');
        //let titulo = document.getElementById('titulo');
        let textPhoto = document.getElementById('textPhoto');
        
        let promise = getOneDocOfTipo('tardesjuny',name);
        promise.then((result)=>{
            
            let data = result.data();
            data.id = result.id;
            
            setTardesJuny(data);
            
            //titulo.value = data.title;
            //principalText.value = data.mainText;
            textPhoto.value = data.urlPhoto;    
            inputAux.value = `${data.id} - ${data.namePhoto}`;

            psd.children[1].children[0].children[1].children[0].children[0].contentDocument.children[0].children['tinymce'].innerHTML=data.cosHtml;
            
            btnExtraescolar.innerText = "Modificar";
            refresh();
            //titulo.focus();
        })
    }

    const handleRemove = ({target:{name}}) =>{
        let arrStr = name.split(" - ");
        let id = arrStr[0];
        let pathPhoto = arrStr[1];
        //let titulo = document.getElementById('titulo');
        removeObject(pathPhoto);
        deleteOneDocOfTipo('tardesjuny',id);
        refresh();
        //titulo.focus();
    }

    const refresh = ()=>{
        // re-renders the component
        setTardesJuny(data);
        //window.location.reload(false);
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

    useEffect(()=>{
   
        const handleLoad = async () =>{
            let promesa1 = getAllCollections('tardesjuny');
            promesa1.then((resul)=>{
              resul.forEach((doc)=>{
                let imgUrl = getUrlImage(doc.urlPhoto);
                imgUrl.then((rstUrl)=>{
                    let item = new modelTardesJuny(doc.id,doc.cosHtml,doc.dateCreation,doc.urlPhoto,rstUrl,doc.namePhoto);
                    //setTardesJuny(arr => [...arr, item]);
                    setTardesJuny(item);
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
                        <div className="card-header bg-warning"><h2 className="card-title">Tardes Juny</h2></div>
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
                                <div className="mb-3">
                                    <input className="d-none" id="textPhoto"/>
                                    <label htmlFor="fileUpload" className="form-label">Afegir Imatge Tardes d'Juny</label>
                                    <input type="file" onChange={handleFileChange} className="form-control" id="fileupload" name="fileUpload"/>
                                </div>
                                
                                {/* <div className="mb-3">
                                    <input className="d-none" id="textPhoto"/>
                                    <label htmlFor="iframeYoutube" className="form-label">Agregar Video Youtube para portada menjador</label>
                                    <input type="text" onChange={handleChange} className="form-control" id="iframeYoutube" name="iframeYoutube"/>
                                </div> */}
                                <div className="d-grid gap-2">
                                    <button type="submit" id="btn-menjador" className="btn btn-primary">Agregar</button>
                                </div>
                            </form>
                        </div>
                        <div className=" m-2 p-4">
                            <Parrafo data={tardesJuny} handleRemove={handleRemove} handleEdit={handleEdit} componentcall={origen} />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ViewEdicioTardesJuny;