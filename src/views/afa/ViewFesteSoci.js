import axios from "axios";

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

    return (
        <>
            <hr className="featurette-divider"></hr>
                <div className="containerH1"><h1 className="text-h1">Fes te socí</h1></div>
            <div className="container">
                <hr className="featurette-divider"></hr>
                <p className="lead">Les famílies sòcies de l’AFA gaudeixen de descomptes en el preu dels serveis d’acollida, menjador i extraescolars, entre d’altres avantatges. La quota d’inscripció permet mantenir aquests serveis, així com altres activitats i equipaments de l’escola.</p>
                <p className="lead">*PER FORMAR PART DE L’AFA CAL SER MARE, PARE O TUTOR/A LEGAL D’UN INFANT DE L’ESCOLA.</p>
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
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">DNI/NIE</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Fecha Nacimiento</label>
                        <input type="date" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Aceptar</button>
                </form>
            </div>
            <hr className="featurette-divider"></hr>
        </>
    )
}

export default ViewFesteSoci