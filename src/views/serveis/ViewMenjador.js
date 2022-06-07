
import { useEffect, useState } from "react";
import { menjador } from "../../models/menjador";
import { getAllCollections} from "../../db/crudDB";
import Parrafo from "../../components/menjador/Parrafo";

let edicio = new menjador("","","",""); 

function ViewMenjador() {

    const[edicioMenjador,setEdicioMenjador] = useState(edicio);
    let origen = "viewMenjador";

    
    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('menjador');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
                let item = new menjador(doc.id,doc.cosHtml,doc.dateCreation,doc.iframeYoutube); 
                setEdicioMenjador(item);
            })
          })
          
        }
        
        handleLoad();
    
    },[]);

    return (  
        <>
            <hr className="featurette-divider"></hr>
            <div className="containerH1"><h1>Menjador</h1></div>
            {
                <Parrafo data={edicioMenjador} componentcall={origen} />
            }
            {/* <hr className="featurette-divider"></hr> */}
            <div className="video-responsive">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Wox8BHyJ0XE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <hr className="featurette-divider"></hr>
            <p className="fs-5 col-md-12">L’Escola Estalella i Graells disposa de cuina pròpia, cuineres i monitors/monitores, contractats per l’AMPA.</p>
            <p className="fs-5 col-md-12">Es garanteix el servei de menjador a tots els alumnes, tant fixos com esporàdics.</p>
            {/* <hr className="col-3 col-md-2 mb-5"></hr> */}
            <div className="row g-5">
                <div className="col-md-12">
                    <p>Hi ha dos torns:</p>
                    {/* <hr className="col-3 col-md-2 mb-5"></hr> */}
                    <ul className="icon-list">
                        <li className="text-muted li-arrow">de 12.30 h a 13.30 h (1r torn)</li>
                        <li className="text-muted li-arrow">de 13.30 h a 14 h (2n torn)</li>
                    </ul>
                </div>
            </div>
            {/* <hr className="featurette-divider"></hr> */}
            <p className="fs-5 col-md-12">El menjador es pot utilitzar amb un cost mensual, o bé de forma puntual. El preu del menú si es fan 3, 4 o 5 dies setmanals fixes és de 6,33€ i el preu del menú eventual és de 6,96€.</p>
            <p className="fs-5 col-md-12">Els menús estan elaborats amb el suport d’una dietista i realitzats amb productes de proximitat i ecològics. Els aliments que estan en color verd dins del menú són productes ecològics certificats per la CCPAE. També es senyalitzen al menú en color blau els aliments que porten al·lèrgens.</p>
            <hr className="featurette-divider"></hr>
        </>
    );
}

export default ViewMenjador;