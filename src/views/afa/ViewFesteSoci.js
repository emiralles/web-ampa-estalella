import { useState, useEffect } from "react";
import {quisom} from "../../models/quisom";
import {getAllCollections} from "../../db/crudDB";
import Parrafo from "../../components/menjador/Parrafo";

//import { useState, useEffect } from "react";
import axios from "axios";
// import { noticie } from "../../models/noticie";


let edicio = new quisom("","","","","","", false, false); 


function ViewFesteSoci() {

    let EnviarMail = (e) => {
        e.preventDefault();
    
        let textSubject = "fer me soci de l'AFA";
        let textTo = e.target[0].value;
        let textOf = `${e.target[1].value} ${e.target[2].value} ${e.target[3].value}` ;
        let textTexto = `${e.target[4].value} ${e.target[5].value}}` ;
        
        const data =
        {
            from: textTo,
            to: textTo,
            of: textOf,
            subject: textSubject, 
            text: textTexto
        };

        axios.post('https://arimathsolutions.com/api/mail',data,{header:{
            'TIPO DE CONTENIDO': 'Aplicación / JSON' 
            }})
            .then(res => {
                e.target[0].value="";
                e.target[1].value="";
                e.target[2].value="";
                e.target[3].value="";
                e.target[4].value="";
                e.target[5].value="";
            }).catch(error => {
                let errordata = error;
                console.log(errordata);
            })
    }

    //const[edicioQuisom,setEdicioQuisom] = useState(noticie);
    // const [isTrue, setTrue] = useState(false);
    
    let origen = "fersesoci";

    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    
    // const[notici,setNotici] = useState(noticia);
    const [pdf,setPDF] = useState("");

    const handleFileChange = ({target:{name,files}}) => {
        setEdicioQuisom({...edicioQuisom,[name]:files[0]})
    }
    
    let downLoadPDF = () =>{
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
            let urlBlob = URL.createObjectURL(blob);
            setPDF(urlBlob);
        };

        // xhr.open('GET', {datalink});
        // xhr.open('GET', "https://agora.xtec.cat/ceipestalella/wp-content/uploads/usu318/2022/06/22-23-Full-Inscripcio%CC%81-soci-AFA-PROTECCIO%CC%81-DADES-I-DRETS-IMATGE.pdf");
        xhr.open('GET', "https://firebasestorage.googleapis.com/v0/b/afa-estalella-i-graells.appspot.com/o/pdfs%2Fsoci-afa%2F22-23-Full-Inscripcio%CC%81-soci-AFA-PROTECCIO%CC%81-DADES-I-DRETS-IMATGE.pdf?alt=media&token=776f2ef6-29ac-4581-9c9a-c4d2fdad9e55");
        xhr.send();
    }

    useEffect(() => {
        downLoadPDF();

        const handleLoad = async () =>{
        
            let promesa1 = getAllCollections('festesoci');
            promesa1.then((resul)=>{
                resul.forEach((doc)=>{
                    let item = new quisom(doc.id,doc.cosHtml,doc.dateCreation,"","","",false,false); 
                    // setTrue(!isTrue);
                    setEdicioQuisom(item);
                })
            })
            
        }
        
        handleLoad();
        
    }, [])
    

    return (
        <>
            {
                edicioQuisom && pdf ?
                <div className=" m-2 p-4">
                    <Parrafo data={edicioQuisom} componentcall={origen} />
                    <div className="nav">
                        <a href={pdf} download={"FichaInscripcio.pdf"}>
                                <button className="style-button-download">Download</button>
                        </a>
                    </div>
                    <hr className="featurette-divider"></hr>
                    <form onSubmit={EnviarMail}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Nombres</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Primer Apellido</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Segundo Apellido</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="custom-file mb-3">
                            <input className="d-none" id="pdfInscripcion"/>
                            <label htmlFor="fileupload" className="form-label">Pujar ficher</label>
                            <input type="file" onChange={handleFileChange} className="custom-file-input form-control" id="fileupload" name="fileupload" lang="in" />
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                    <hr className="featurette-divider"></hr>
                </div>:""
            }
            {/* <hr className="featurette-divider"></hr> */}
                {/* <div className="containerH1"><h1 className="text-h1">Fes te socí</h1></div> */}
            {/* <div className="container"> */}
                {/* <hr className="featurette-divider"></hr>
                <p className="lead">Les famílies sòcies de l’AFA gaudeixen de descomptes en el preu dels serveis d’acollida, menjador i extraescolars, entre d’altres avantatges. La quota d’inscripció permet mantenir aquests serveis, així com altres activitats i equipaments de l’escola.</p>
                <p className="lead">*PER FORMAR PART DE L’AFA CAL SER MARE, PARE O TUTOR/A LEGAL D’UN INFANT DE L’ESCOLA.</p>
                {
                    pdf ?
                    <div>
                        <p>Descarrega el PDF on podras omplir les dades respectives que necesitem per fer la inscripciò com socí del AFA.</p>
                        <div className="nav">
                        <a href={pdf} download={"FichaInscripcio.pdf"}>
                                <button className="style-button-download">Download</button>
                        </a>
                        </div>
                    </div>:"..."
                } */}
                
                
                {/* <hr className="featurette-divider"></hr> */}
                
            {/* </div>
            <hr className="featurette-divider"></hr> */}
        </>
    )
}

export default ViewFesteSoci