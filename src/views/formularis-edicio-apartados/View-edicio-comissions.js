
import DataGrid from "../../components/dataGrid/DataGrid";

function ViewEdicioComissions() {
    
    return ( 
        <>
            <form>
                <div className='row border border-success mb-3 mt-3 rounded' id="divTutor">
                    <label htmlFor="divTutor" className="form-label">Tutor Legal</label>
                    <div className=" col-lg-4 mb-3">
                        <label htmlFor="inputNombre" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="inputNombre" name="nombre"/>
                    </div>
                    <div className=" col-lg-4 mb-3">
                        <label htmlFor="inputNombre" className="form-label">Cognoms</label>
                        <input type="text" className="form-control" id="inputNombre" name="nombre"/>
                    </div>
                    <div className=" col-lg-4 mb-3">
                        <label htmlFor="inputEmail" className="form-label">Correu electrònic</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" name="email"/>
                    </div>    
                </div>
                <div className='row h-75 border border-success mb-3 mt-3 rounded' id="divNenNena">
                    <label htmlFor="divNenNena" className="form-label">Nen/Nena</label>
                    <div className=" col-lg-5 mb-3">
                        <label htmlFor="inputNombre" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="inputNombre" name="nombre"/>
                    </div>
                    <div className=" col-lg-5 mb-3">
                        <label htmlFor="inputNombre" className="form-label">Cognoms</label>
                        <input type="text" className="form-control" id="inputNombre" name="nombre"/>
                    </div>
                    <div className=" col-lg-1 mb-3">
                        <label htmlFor="inputNombre" className="form-label">Edad</label>
                        <input type="text" className="form-control" id="inputNombre" name="nombre"/>
                    </div>
                    <div className=" col-lg-1 mb-3">
                        <label htmlFor="inputNombre" className="form-label">Curs</label>
                        <input type="text" className="form-control" id="inputNombre" name="nombre"/>
                    </div>
                    <div className=" col-lg-12">
                        <div className=" table-responsive border border-success rounded ml-3 mr-3" style={{height:"200px", overflowY:"scroll!important"}} >
                            <table className="table table-hover table-bordered table-striped ">
                                <thead>
                                    <tr>
                                    <th scope="col"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Handle1</th>
                                    <th scope="col">Handle2</th>
                                    <th scope="col">Handle3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-grid gap-2 mb-3 mt-3">
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </div>
                    
                </div>
            </form>
            <>
                <DataGrid/>
            </>
        </>
     ); 
}

export default ViewEdicioComissions;