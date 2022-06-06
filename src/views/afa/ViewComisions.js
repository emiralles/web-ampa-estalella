import axios from "axios";
import img1 from "./images/IMG_1042.JPG";
import img2 from "./images/IMG_1078.JPG";
import img3 from "./images/IMG_1057.JPG";


function ViewComisions() {

    let EnviarMail = (e) => {
        e.preventDefault();
    
        let textSubject = "Inscripciò en comission";
        let textTo = e.target[0].value;
        let textOf = `${e.target[1].value} ${e.target[2].value} `;
        let textTexto = `${e.target[3].value} `;
        
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
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Extraescolars</h2>
                        <p className="lead">Proposem i oferim un ventall d’activitats extraescolars respectuoses amb la línia pedagògica de l’escola i, alhora, que responguin als interessos de les famílies i l’alumnat. Planifiquem, gestionem i supervisem les activitats dirigides a complementar l’horari lectiu dels nostres fills i filles, tant després de les classes com durant el temps del migdia. Les àrees d’activitat potenciades són l’esportiva, la creativa, la musical i la de creixement personal.</p>
                        <p className="lead">A partir dels interessos de l’alumnat i de les seves famílies, fem una proposta d’activitats a l’AFA, qui avalua i aprova tant les activitats ofertades com el monitoratge i/o els proveïdors d’aquestes. Ens encarreguem de la planificació dels horaris i de supervisar el correcte desenvolupament de les activitats. Juntament amb aquestes activitats també gestionem i supervisem el servei d’acollida del matí (8h-9h).</p>
                    </div>
                    <div className="col-md-5">
                        {/* <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={carnestoltes} alt=""/> */}
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Equipament</h2>
                        <p className="lead">S’encarrega d’organitzar la venda de roba escolar: bates, samarretes i xandalls amb els colors i logotip de l’escola.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={img1} alt=""/>
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Tic</h2>
                        <p className="lead">La Comissió TIC es una comissió de l’ampa que vol fomentar, impulsar i consolidar l’ús de les noves tecnologies en l’educació, mitjançant actuacions dirigides al desenvolupament, dinamització i difusió del seu ús en un ambient relaxat i divertit.</p>
                        <p className="lead">Des de la comissió TIC valorem i considerem qualsevol canvi i implementació tecnològica que pugui ser aplicat a la nostra escola. Apostem per la innovació i renovació dels mitjans TIC de forma constant, adaptant-nos a l’evolució tecnològica.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={img2} alt=""/>
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Llibres</h2>
                        <p className="lead">A l’escola es duu a terme un programa de socialització dels llibres de text. L’AFA gestiona l’ús i la compra de tots els llibres de text i de lectura que estan socialitzats. Alumnes-pares-mestres ens hem conscienciat que estem utilitzant un material escolar col·lectiu, que permet la sostenibilitat, el respecte al medi ambient i l’estalvi de recursos.</p>
                        <p className="lead">Aprenem a valorar el llibre de text com a una important eina de treball de la que hem de tenir cura, aprofitant tota la seva vida útil. Estalviem paper, recursos mediambientals i tot això, a més, repercuteix en l’estalvi de les famílies i en l’educació i el respecte pel material col·lectiu.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={img3} alt=""/>
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Menjador</h2>
                        <p className="lead">El menjador de l’escola és gestionat íntegrament per l’AFA, tenim cuina pròpia on es cuina cada dia per més de 200 alumnes, amb uns menús ben equilibrats i boníssims.</p>
                        <p className="lead">Els nostres objectius són oferir un menjar de qualitat per els nostres fills i filles, així com treballar i fomentar tots els aspectes pedagògics relacionats amb el treball d’educació en els hàbits, que envolten el tema alimentari.</p>
                        <p className="lead">La comissió, a part del menjador també gestiona els serveis d’acollida matinal i de tardes.</p>
                    </div>
                    <div className="col-md-5">
                        {/* <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={carnestoltes} alt=""/> */}
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
            
            <hr className="featurette-divider"></hr>
            <p className="lead">L’AFA no té cap sentit si les famílies no s’hi involucren. Hi ha moltes formes de col·laborar, que s’adapten a les possibilitats i el temps de cadascú. Si vols participar, escriu-nos.</p>
            <hr className="featurette-divider"></hr>
            <div className="containerH1"><h1 className="text-h1">Inscriute a las comissions</h1></div>
            <div className="container">
                <div className="row featurette">
                    <div className="col-md-5">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x270</text></svg>
                    </div>
                    <div className="col-md-7">
                        <form onSubmit={EnviarMail}>
                            <div className="mb-3">
                                <label for="inputEmail1" class="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="inputNombre" className="form-label">Nombres</label>
                                <input type="text" className="form-control" id="inputNombre"/>
                            </div>
                            <div className="mb-3">
                                <label for="inputApellidos" className="form-label">Apellidos</label>
                                <input type="text" className="form-control" id="inputApellidos"/>
                            </div>
                            <div className="mb-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Seleccione una opciò</option>
                                    <option value="1">Equipament</option>
                                    <option value="2">Extraescolars</option>
                                    <option value="3">Tic</option>
                                    <option value="3">Menjador</option>
                                    <option value="3">Llibres</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Aceptar</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider"></hr>
        </>
    )
}

export default ViewComisions