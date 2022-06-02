import { useState, useEffect } from "react";
// useRef, 
// import { Editor } from '@tinymce/tinymce-react';
// import RectangleCard from "../card/RectangleCard";
import { uploadFile, add, updateOneDocOfTpo, getAllCollections, getUrlImage, removeObject, deleteOneDocOfTipo, getOneDocOfTipo} from "../../db/crudDB";
import { useAuth } from "../../context/authContext";
import { esdeveniment } from "../../models/esdeveniment";
import ListRectangleCard from "../card/ListRectangleCard";
// import foto1 from "../esdeveniments/images/SantJordi2022.JPG";

let evento = new esdeveniment("","","","","","","",""); 


let dataEvento = {
    uid:"",
    path:"",
    fileUpload:"",
    title:"",
    cosHtml:"",
    dateCreation:"",
    namePhoto:"",
    urlPhoto:"",
}

function FormulariEdicioEsdeveniments() {
    // const[data,setData] = useState("");
    const[esdevenim,setEsdevenim] = useState(evento);
    const { user }  = useAuth();
    // const editorRef = useRef(null);
    
    const [listEsdeveniments,setListEsdeveniments] = useState([]);
    const [isTrue, setTrue] = useState(false);
    let origen = "admin";

    const handleChange = ({target:{name,value}}) => {
        setEsdevenim({...esdevenim,[name]:value});
    }

    const handleFileChange = ({target:{name,files}}) => {
        setEsdevenim({...esdevenim,[name]:files[0]})
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        let fecha = new Date();
        let nowDate = fecha.toLocaleString("es-ES");
        if (nowDate !== "") {
            let auxEvento = esdevenim;
            auxEvento.dateCreation=nowDate;
            setEsdevenim(auxEvento);    
        }
        
        // if (editorRef.current) {
        //     let data = editorRef.current.getContent();
        //     let auxEvento = esdevenim;
        //     auxEvento.cosHtml=data;
        //     setEsdevenim(auxEvento);

        // }
        
        dataEvento.cosHtml = esdevenim.cosHtml;
        dataEvento.dateCreation = esdevenim.dateCreation;
        dataEvento.namePhoto = esdevenim.fileupload.name;
        dataEvento.title = esdevenim.title;
        
        const idData = await add('esdeveniment',dataEvento);
        // const idData = await add('extraescolar',item);
        if (idData !== undefined && idData !== "") {
            const dataImg = await uploadFile(esdevenim.fileupload,dataEvento.name,idData,user.uid);
            // item.urlPhoto = dataImg.metadata.fullPath;
            dataEvento.path = dataImg.metadata.fullPath;
            // await updateOneDocOfTpo('extraescolar',idData,item);  
            await updateOneDocOfTpo('esdeveniment',idData,dataEvento);  
            
        }

        handleReset();
        refresh();
        

    };

    const refresh = ()=>{
        // re-renders the component
        setListEsdeveniments([]);
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

    const handleEdit = ({target:{name}}) =>{

        // let btnExtraescolar = document.getElementById('btn-extraescolar');
        
        // let inputAux = document.getElementById('input-aux');
        // let I1diasetmanal = document.getElementById('1diasetmanal');
        // let I2diasetmanal = document.getElementById('2diasetmanal');
        // let I3diasetmanal = document.getElementById('3diasetmanal');
        // let principalText = document.getElementById('principalText');
        // let esmati = document.getElementById('esmati');
        // let estarda = document.getElementById('estarda');
        // let I6T = document.getElementById('6T');
        // let I5T = document.getElementById('5T');
        // let I4T = document.getElementById('4T');
        // let I3E = document.getElementById('3E');
        // let I2D = document.getElementById('2D');
        // let I1E = document.getElementById('1E');
        // let IP5 = document.getElementById('P5');
        // let IP4 = document.getElementById('P4');
        // let IP3 = document.getElementById('P3');
        // let preu = document.getElementById('preu');
        // let fechaFinal = document.getElementById('fechaFinal');
        // let fechaInici = document.getElementById('fechaInici');
        // let parrafo = document.getElementById('parrafo');
        // let titulo = document.getElementById('titulo');
        // let plazas = document.getElementById('plazas');
        // let textPhoto = document.getElementById('textPhoto');
        
        // let promise = getOneDocOfTipo('esdeveniment',name);
        // promise.then((result)=>{
          
        //   let data = result.data();
        //   data.id = result.id;
          
        //   setDataAuxiliar(data);
        //   setGrupos([]);
           
        //   I1diasetmanal.checked = data.howTimes.indexOf("1") > -1 ? true: false;
        //   I2diasetmanal.checked = data.howTimes.indexOf("2") > -1 ? true: false;
        //   I3diasetmanal.checked = data.howTimes.indexOf("3") > -1 ? true: false;
        //   titulo.value = data.title;
        //   plazas.value = data.plazas;
        //   estarda.checked = data.whenDo.indexOf("Tarda") > -1 ? true:false;
        //   esmati.checked = data.whenDo.indexOf("Mati") > -1 ? true:false;
        //   fechaFinal.value = data.dateEnd;
        //   fechaInici.value = data.dateStart;
        //   principalText.value = data.mainText;
        //   parrafo.value = data.parragraph;
        //   preu.value = data.price;
        //   textPhoto.value = data.urlPhoto;
          
        //   inputAux.value = `${data.id} - ${data.namePhoto}`;
          
        //   data.grupsToDo.forEach((item)=>{
            
        //     switch (item) {
        //       case "6T":
        //         I6T.checked = true;
        //         break;
        //       case "5T":
        //         I5T.checked = true; 
        //         break;
        //       case "4T":
        //         I4T.checked = true; 
        //         break;          
        //       case "3E":
        //         I3E.checked = true; 
        //         break;
        //       case "2D":
        //         I2D.checked = true; 
        //         break;
        //       case "1E":
        //         I1E.checked = true; 
        //         break;
        //       case "P5":
        //         IP5.checked = true; 
        //         break;
        //       case "P4":
        //         IP4.checked = true; 
        //         break;
        //       case "P3":
        //         IP3.checked = true; 
        //         break;
        //       default:
        //         break;
        //     }
        //   })
    
        // btnExtraescolar.innerText = "Modificar";
        // refresh();
        // titulo.focus();
    
        // })
    
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
        
        handleLoad();
    
    },[isTrue]);

      
    return (
        <>            
            <div className="row featurette">
                <div className="col-md-12">
                    <div className="card border-info mb-3">
                        <div className="card-header bg-warning"><h2 className="card-title">Esdeveniment</h2></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} >
                                <div className="form-floating mb-3">
                                    <input type="text" onChange={handleChange} className="form-control" maxLength={32} id="title" placeholder="titol" name="title"/>
                                    <label htmlFor="title">Titol, maxim 32 caracteres</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea type="text" onChange={handleChange} className="form-control" maxLength={232} id="floatingInputParraf" placeholder="parraf" name="cosHtml"/>
                                    <label htmlFor="floatingInputParraf">Text, parrafo d'esdeveniment</label>
                                </div>
                                {/* <div className="mb-3">
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
                                </div> */}
                                <div className="mb-3">
                                    <label htmlFor="fileupload" className="form-label">Agregar Imagen Evento</label>
                                    <input type="file" onChange={handleFileChange} className="form-control" id="fileupload" name="fileupload"/>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    {/* <div className="border-info mb-3" id="textoEscrito"> */}
                        {
                            <ListRectangleCard arrayData={listEsdeveniments} handleEdit={handleEdit} handleRemove={handleRemove} componentCall={origen}/>
                        }
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default FormulariEdicioEsdeveniments
