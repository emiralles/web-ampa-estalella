import axios from "axios";
import { useState } from "react";
import { mail } from "../../models/mail";

function Contactans() {

    const [user,setUser] = useState({nombre:"",email:"",subject:"",textArea:""});
    const handleChange = ({target:{name,value}}) =>{
        setUser({...user,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const data = new mail(user.email,user.email,user.subject,user.nombre,user.textArea);
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
                setUser({nombre:"",email:"",subject:"",textArea:""});
            }).catch(error => {
                let errordata = error;
                console.log(errordata);
            })
        } catch (error) {
            console.log(error);
        }
    }

    // let EnviarMail = (e) => {
    //     e.preventDefault();
    //     let textSubject = e.target[1].value;
    //     let textTo = e.target[2].value;
    //     let textOf = e.target[0].value;
    //     let textTexto = e.target[3].value;
        
    //     const data =
    //     {
    //         from: textTo,
    //         to: textTo,
    //         of: textOf,
    //         subject: textSubject, 
    //         text: textTexto
    //     };

    //     axios.post('https://arimathsolutions.com/api/mail',data,{header:{
    //         'TIPO DE CONTENIDO': 'Aplicación / JSON' 
    //         }})
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //             e.target[0].value="";
    //             e.target[1].value="";
    //             e.target[2].value="";
    //             e.target[3].value="";
    //         }).catch(error => {
    //             let errordata = error;
    //             console.log(errordata);
    //         })
    // }

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
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="inputNombre" className="form-label">Nom i Cognoms</label>
                                    <input type="text" onChange={handleChange} className="form-control" id="inputNombre" name="nombre"/>
                                </div>
                                <div className="mb-3">
                                    <label for="inputSubject" className="form-label">Asunto</label>
                                    <input type="text" onChange={handleChange} className="form-control" id="inputSubject" name="subject"/>
                                </div>
                                <div className="mb-3">
                                    <label for="inputEmail" class="form-label">Correu electrònic</label>
                                    <input type="email" onChange={handleChange} className="form-control" id="inputEmail" aria-describedby="emailHelp" name="email"/>
                                </div>
                                
                                <div className="mb-3">
                                    <label for="formControlTextarea1" className="form-label">Missatge</label>
                                    <textarea className="form-control" onChange={handleChange} id="formControlTextarea1" rows="3" name="textArea"></textarea>
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