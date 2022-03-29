import imag1 from "../carousel/images/img2.jpg";

function Comissions() {
    return ( 
        <>
            <hr className="featurette-divider"></hr>
            <div className="row">
                <div className="col-lg-4">
                <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                <div className='color-div-card'>
                    <h2>Equipament</h2>
                </div>
                </div>
                <div className="col-lg-4">
                <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                <div className='color-div-card'>
                    <h2>Extraescolars</h2>
                </div>
                </div>
                <div className="col-lg-4">
                <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                <div className='color-div-card'>
                    <h2>Tic</h2>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 margin-left-col-lg-4">
                <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                <div className='color-div-card'>
                    <h2>Menjador</h2>
                </div>
                </div>
                <div className="col-lg-4">
                <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                <div className='color-div-card'>
                    <h2>Llibres</h2>
                </div>
                </div>
                <div className="col-lg-4 d-none">
                <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                    <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                <h2>Heading</h2>
                </div>
            </div>
            <hr className="featurette-divider"></hr>
                <div className="containerH1"><h1 className="text-h1">Inscriute a las comissions</h1></div>
            {/* <hr className="featurette-divider fix-margin-featurette-divider-top"></hr> */}
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Nombres y Apellidos</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
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
            <hr className="featurette-divider"></hr>
            
        </>
     );
}

export default Comissions;