import { useRef, useState, useEffect } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { menjador } from "../../models/menjador";
import { add, updateOneDocOfTpo, getAllCollections, deleteOneDocOfTipo, getOneDocOfTipo} from "../../db/crudDB";
import Parrafo from "../../components/menjador/Parrafo";

let edicio = new menjador("","","","", true); 

let dataMenjador = {
    uid:"",
    cosHtml:"",
    dateCreation:"",
    iframeYoutube:"",
    thereIsYoutubeVideo: true,
}

function ViewEdicioTardesJuny() {
    const[edicioMenjador,setEdicioMenjador] = useState(edicio);
    const [isTrue, setTrue] = useState(false);
    const [dataAuxiliar, setDataAuxiliar] = useState([]);
    let origen = "admin";

    const editorRef = useRef(null);
    
    // const handleChange = ({target:{name,value}}) => {
    //     setEdicioMenjador({...edicioMenjador,[name]:value})
    // }

    const handleFileChange = ({target:{name,files}}) => {
        setEdicioMenjador({...edicioMenjador,[name]:files[0]})
    }

    const refresh = ()=>{
        // re-renders the component
        setEdicioMenjador(edicio);
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
                let auxEvento = edicioMenjador;
                auxEvento.dateCreation=nowDate;
                setEdicioMenjador(auxEvento);    
            }

            if (editorRef.current) {
                let data = editorRef.current.getContent();
                let auxEvento = edicioMenjador;
                auxEvento.cosHtml=data;
                auxEvento.thereIsYoutubeVideo = true;
                setEdicioMenjador(auxEvento);
            }

            let idCard = inputAux.value;
            
            let item = new menjador('',edicioMenjador['cosHtml'],edicioMenjador['dateCreation'],edicioMenjador['iframeYoutube'], true);
            let itemAux = new menjador('',dataAuxiliar.cosHtml,dataAuxiliar.dateCreation,dataAuxiliar.iframeYoutube, true);
            
            dataMenjador.cosHtml = item.cosHtml !== undefined && item.cosHtml !== "" ? item.cosHtml : itemAux.cosHtml;
            dataMenjador.dateCreation = item.dateCreation !== undefined && item.dateCreation !== "" ? item.dateCreation : itemAux.dateCreation;
            dataMenjador.iframeYoutube = item.iframeYoutube !== undefined && item.iframeYoutube !== "" ? item.iframeYoutube : itemAux.iframeYoutube;
            dataMenjador.thereIsYoutubeVideo = true;

            await updateOneDocOfTpo('tardesjuny',idCard,dataMenjador);
            
            let btnMenjador = document.getElementById('btn-menjador');
            btnMenjador.innerText = "Agregar";

            handleReset();
            refresh();

        }else{
        
            if (nowDate !== "") {
                let auxEvento = edicioMenjador;
                auxEvento.dateCreation=nowDate;
                auxEvento.thereIsYoutubeVideo=true;
                setEdicioMenjador(auxEvento);    
            }
            
            if (editorRef.current) {
                let data = editorRef.current.getContent();
                let auxEvento = edicioMenjador;
                auxEvento.cosHtml=data;
                auxEvento.thereIsYoutubeVideo=true;
                setEdicioMenjador(auxEvento);
            }

            
            dataMenjador.cosHtml = edicioMenjador.cosHtml;
            dataMenjador.dateCreation = edicioMenjador.dateCreation;
            dataMenjador.iframeYoutube = edicioMenjador.iframeYoutube;
            dataMenjador.thereIsYoutubeVideo = true;

            await add('tardesjuny',dataMenjador);
            
            handleReset();
            refresh();
            
        }

    };

    const handleEdit = ({target:{name}}) =>{

        let btnMenjador = document.getElementById('btn-menjador');
        
        let psd = document.getElementById('container-body-parraph');
        let textPhoto = document.getElementById('iframeYoutube');
        let inputAux = document.getElementById('input-aux');
        
        let promise = getOneDocOfTipo('tardesjuny',name);
        promise.then((result)=>{
          
            let data = result.data();
            data.id = result.id;
          
            setDataAuxiliar(data);

            textPhoto.value = data.iframeYoutube;
            inputAux.value = data.id;
            psd.children[1].children[0].children[1].children[0].children[0].contentDocument.children[0].children['tinymce'].innerHTML=data.cosHtml;
            
            btnMenjador.innerText = "Modificar";
            refresh();
        
        })
    
    }

    const handleRemove = ({target:{name}}) =>{
        let arrStr = name.split(" - ");
        let id = arrStr[0];
        deleteOneDocOfTipo('tardesjuny',id);
        refresh();
    }

    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('tardesjuny');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
                let item = new menjador(doc.id,doc.cosHtml,doc.dateCreation,doc.iframeYoutube, true); 
                setEdicioMenjador(item);
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
                                    <label htmlFor="fileupload" className="form-label">Afegir Imatge Tardes Estiu</label>
                                    <input type="file" onChange={handleFileChange} className="form-control" id="fileupload" name="fileupload"/>
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
                            <Parrafo data={edicioMenjador} handleRemove={handleRemove} handleEdit={handleEdit} componentcall={origen} />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ViewEdicioTardesJuny;