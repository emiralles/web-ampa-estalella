function Festesoci() {
    return (  
        <>
            <hr className="featurette-divider"></hr>
                <div className="containerH1"><h1 className="text-h1">Fes te socí</h1></div>
            <div className="container">
                <form>
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
    );
}

export default Festesoci;