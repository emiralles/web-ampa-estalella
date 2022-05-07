// import { TextFloatingFilter } from "ag-grid-community";
import axios from "axios";

function Contactans() {

    let EnviarMail = (e) => {
        e.preventDefault();
        // let dats = e;
        let textSubject = e.target[0].value;
        let textTo = e.target[1].value;
        let textOf = e.target[2].value;
        let textTexto = e.target[3].value;
        
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
                console.log(res);
                console.log(res.data);
                e.target[0].value="";
                e.target[1].value="";
                e.target[2].value="";
                e.target[3].value="";
            }).catch(error => {
                let errordata = error;
                console.log(errordata);
            })
    }

    return ( 
        <>
            <hr className="featurette-divider"></hr>
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Contacta amb nosaltres.</h2>
                    <p className="lead">Si tens algun dubte, consulta o necessites enviar-nos alguna informació no dubtis a fer servir aquest formulari per contactar amb nosaltres.</p>
                </div>
                <div className="col-md-5">
                    <div className="card border-info mb-3">
                        <div className="card-header bg-warning"><h2 className="card-title">Contacta'ns</h2></div>
                        <div className="card-body">
                            <form onSubmit={EnviarMail}>
                                <div className="mb-3">
                                    <label for="exampleInputNombre" className="form-label">Nom i Cognoms</label>
                                    <input type="text" className="form-control" id="exampleInputNombre"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputSubject" className="form-label">Asunto</label>
                                    <input type="text" className="form-control" id="exampleInputSubject"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Correu electrònic</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Missatge</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Contactans;