
import { useEffect, useState } from "react";
// import { menjador } from "../../models/menjador";
// import { getAllCollections} from "../../db/crudDB";
// import Parrafo from "../../components/menjador/Parrafo";

// let edicio = new menjador("","","",""); 

function ViewMenjador() {

    // const[edicioMenjador,setEdicioMenjador] = useState(edicio);
    // let origen = "viewMenjador";

    // const [linkPDF,setLinkPDF] = useState(false);
    
    const [pdf,setPDF] = useState("");

    let downLoadPDF = () =>{
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
            let urlBlob = URL.createObjectURL(blob);
            setPDF(urlBlob);
            // setLinkPDF(true);
        };

        // xhr.open('GET', {datalink});
        xhr.open('GET', "https://firebasestorage.googleapis.com/v0/b/afa-estalella-i-graells.appspot.com/o/pdfs%2Fmenjador%2FMenjador_fam%C3%ADlies__curs_22-23.pdf?alt=media&token=e1f53d0b-3fc7-4e36-827d-1e783f66a135");
        xhr.send();
    }

    // useEffect(() => {
    //     downLoadPDF();
        
    // }, [linkPDF])
    

    
    useEffect(()=>{
   
        // const handleLoad = async () =>{
        
        //   let promesa1 = getAllCollections('menjador');
        //   promesa1.then((resul)=>{
        //     resul.forEach((doc)=>{
        //         let item = new menjador(doc.id,doc.cosHtml,doc.dateCreation,doc.iframeYoutube); 
        //         setEdicioMenjador(item);
        //     })
        //   })
          
        // }
        
        // handleLoad();
        downLoadPDF();
    
    },[]);

    return (  
        <>
            <hr className="featurette-divider"></hr>
            <div className="containerH1"><h1>Menjador</h1></div>
            {/* {
                <Parrafo data={edicioMenjador} componentcall={origen} />
            } */}
            {/* <hr className="featurette-divider"></hr> */}
            <div className="video-responsive">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Wox8BHyJ0XE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <hr className="featurette-divider"></hr>
            <p className="fs-5 col-md-12">L’Escola Estalella i Graells disposa de cuina pròpia, cuineres i monitors/monitores, contractats per l’AMPA.</p>
            {/* <p className="fs-5 col-md-12">Es garanteix el servei de menjador a tots els alumnes, tant fixos com esporàdics.</p>
            <div className="row g-5">
                <div className="col-md-12">
                    <p>Hi ha dos torns:</p>
                    <ul className="icon-list">
                        <li className="text-muted li-arrow">de 12.30 h a 13.30 h (1r torn)</li>
                        <li className="text-muted li-arrow">de 13.30 h a 14 h (2n torn)</li>
                    </ul>
                </div>
            </div>
            <p className="fs-5 col-md-12">El menjador es pot utilitzar amb un cost mensual, o bé de forma puntual. El preu del menú si es fan 3, 4 o 5 dies setmanals fixes és de 6,33€ i el preu del menú eventual és de 6,96€.</p>
            <p className="fs-5 col-md-12">Els menús estan elaborats amb el suport d’una dietista i realitzats amb productes de proximitat i ecològics. Els aliments que estan en color verd dins del menú són productes ecològics certificats per la CCPAE. També es senyalitzen al menú en color blau els aliments que porten al·lèrgens.</p>
            <hr className="featurette-divider"></hr> */}
            <div>
                <p>Descarrega el pdf on te expliquem el funcionament del menjador. 
                    {/* <div className="nav">
                        <a href="https://firebasestorage.googleapis.com/v0/b/afa-estalella-i-graells.appspot.com/o/pdfs%2Facollida%2FAcollida_Informaci%C3%B3_inscripcions_APP_families.pdf?alt=media&token=dcb5b5db-a16d-406d-a8b2-5805a825de07" download={"inscripcionAppEstalella.pdf"}>
                                <button>Download</button>
                        </a>
                    </div> */}
                    {/* <button onClick={downLoadPDF}><svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#filetype-pdf`}></use></svg></button> */}
                    {
                        pdf ?
                        <div className="nav">
                            <a href={pdf} download={"menjadorEstalella.pdf"}>
                                    <button className="style-button-download">Download</button>
                            </a>
                        </div>:"..."

                    } 
                   
                </p>
            </div>
        </>
    );
}

export default ViewMenjador;