

function RectangleWithForm({handleSubmit, handleChange}) {
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
  )
}

export default RectangleWithForm