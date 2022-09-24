import { useState, useEffect } from "react";
import {quisom} from "../../models/quisom";
import {getAllCollections} from "../../db/crudDB";
import Parrafo from "../../components/menjador/Parrafo";

let edicio = new quisom("","","","","","", false, false); 

function ViewQuisom() {

    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    // const [isTrue, setTrue] = useState(false);
    
    let origen = "quisom";

    useEffect(()=>{

        const handleLoad = async () =>{
        
            let promesa1 = getAllCollections('quisom');
            promesa1.then((resul)=>{
            resul.forEach((doc)=>{
                let item = new quisom(doc.id,doc.cosHtml,doc.dateCreation,"","","",false,false); 
                // setTrue(!isTrue);
                setEdicioQuisom(item);
            })
            })
            
        }
        
        handleLoad();

    },[]);
  

  return (
    <>
        {/* <hr className="featurette-divider"></hr> */}
        {
            edicioQuisom ?
            <div className=" m-2 p-4">
                <Parrafo data={edicioQuisom} componentcall={origen} />
            </div>:""
        }
        {/* <div className="containerH1"><h1>Qui som</h1></div>
        <p className="fs-5 col-md-12">L’AFA de l’Escola Estalella i Graells és l’associació formada per les mares i pares dels alumnes de l’escola que voluntàriament ho desitgin. És una associació sense ànim de lucre, constituïda legalment i està representada per una Junta que a la vegada està dividida en comissions de treballs segons les tasques i/o activitats.</p>
        <hr className="col-3 col-md-12 mb-5"></hr>
        <div className="row g-5">
            <div className="col-md-12">
                <h2>Objectius</h2>
                <hr className="col-3 col-md-2 mb-5"></hr>
                <ul className="icon-list">
                    <li className="text-muted li-arrow">Fomentar la col·laboració i la participació de les famílies en actes escolars i en actes festius.</li>
                    <li className="text-muted li-arrow">Fomentar activitats d’interès per a  la comunitat escolar, com xerrades i conferències de professionals.</li>
                    <li className="text-muted li-arrow">Donar suport al projecte educatiu de l’Escola i treballar conjuntament en l’educació dels nostres fills i de les nostres filles.</li>
                    <li className="text-muted li-arrow">Organitzar i oferir activitats i serveis:
                        <div className="div-ul-ul">
                            <ul>
                                <li className="text-muted nolist">Acollida matinal</li>
                                <li className="text-muted nolist">Menjador</li>
                                <li className="text-muted nolist">Extraescolars</li>
                                <li className="text-muted nolist">Tardes de juny</li>
                                <li className="text-muted nolist">Casal d'estiu</li>
                                <li className="text-muted nolist">Llibres</li>
                                <li className="text-muted nolist">Equipament</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <hr className="featurette-divider"></hr> */}
    </>
  )
}

export default ViewQuisom