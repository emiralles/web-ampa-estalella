// import Icons from "bootstrap-icons/bootstrap-icons.svg";
import { useState, useEffect } from "react";

function ViewAcollida() {

    const [linkPDF,setLinkPDF] = useState(false);
    
    const [pdf,setPDF] = useState("");

    let downLoadPDF = () =>{
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
            let urlBlob = URL.createObjectURL(blob);
            setPDF(urlBlob);
            setLinkPDF(true);
        };

        // xhr.open('GET', {datalink});
        xhr.open('GET', "https://firebasestorage.googleapis.com/v0/b/afa-estalella-i-graells.appspot.com/o/pdfs%2Facollida%2FAcollida_Informaci%C3%B3_inscripcions_APP_families.pdf?alt=media&token=dcb5b5db-a16d-406d-a8b2-5805a825de07");
        xhr.send();
    }

    useEffect(() => {
        downLoadPDF();
        
    }, [linkPDF])
    

    return ( 
        <>
            <hr className="featurette-divider"></hr>
            <div className="containerH1"><h1>Acollida</h1></div>
            <p className="fs-5 col-md-12">L’AMPA de l’escola Estalella i Graells ofereix un servei d’acollida matinal per tots aquells pares i mares i nens i nenes que ho necessitin.</p>
            <p className="fs-5 col-md-12">Les hores d’entrada són a les 7.50 h i a les 8.30 h.</p>
            <p className="fs-5 col-md-12">L’alumnat entrarà per la porta de consergeria.</p>
            <hr className="col-3 col-md-12 mb-5"></hr>
            {/* <div className="row g-5">
                <div className="col-md-12">
                    <p className="fs-5 col-md-12">Els preus del servei d’acollida són:</p>
                    <hr className="col-3 col-md-2 mb-5"></hr>
                    <div className=" table-responsive-sm table-responsive-lg">
                        <table class="table">
                            <thead>
                                <th></th>
                                <td colspan="2" class="table-active">Preu socis AFA</td>
                                <td colspan="2" class="table-active">Preu no socis AFA</td>
                            </thead>
                            <tbody>
                                <tr class="table-active">
                                <th>Fixos mensuals: 1h</th>
                                <td colspan="2">40€</td>
                                <td colspan="2">50€</td>
                                </tr>
                                <tr>
                                <th>Fixos mensuals: 1/2h</th>
                                <td colspan="2">20€</td>
                                <td colspan="2">25€</td>
                                </tr>
                                <tr class="table-active">
                                <th>Eventuals: 1h</th>
                                <td colspan="2">3€</td>
                                <td colspan="2">4€</td>
                                </tr>
                                <tr>
                                <th>Eventuals: 1/2h</th>
                                <td colspan="2">1,5€</td>
                                <td colspan="2">2€</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
            <div>
                <p>Descarrega el PDF on expliquem com inscribir el teu fill/filla a la acollida que tenim com servei per totes las families que desitgen fer-ho. 
                    {/* <div className="nav">
                        <a href="https://firebasestorage.googleapis.com/v0/b/afa-estalella-i-graells.appspot.com/o/pdfs%2Facollida%2FAcollida_Informaci%C3%B3_inscripcions_APP_families.pdf?alt=media&token=dcb5b5db-a16d-406d-a8b2-5805a825de07" download={"inscripcionAppEstalella.pdf"}>
                                <button>Download</button>
                        </a>
                    </div> */}
                    {/* <button onClick={downLoadPDF}><svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#filetype-pdf`}></use></svg></button> */}
                    {
                        pdf ?
                        <div className="nav">
                            <a href={pdf} download={"inscripcionApp.pdf"}>
                                    <button className="style-button-download">Download</button>
                            </a>
                        </div>:"..."

                    } 
                   
                </p>
            </div>
            <hr className="featurette-divider"></hr>
        </>
     );
}

export default ViewAcollida;