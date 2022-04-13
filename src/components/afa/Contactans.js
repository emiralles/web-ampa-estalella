import axios from "axios";

function Contactans() {
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
                            {/* <h5 ></h5> */}
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Nom i Cognoms</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Correu electrònic</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
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