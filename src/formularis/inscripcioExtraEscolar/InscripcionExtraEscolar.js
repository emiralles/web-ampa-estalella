import TableGrid from "../../components/tableGrid/TableGrid";

function InscripcionExtraEscolar() {
    
    let arrayTotalData = [];
    let arrayColumnNames = ['Id','ExtraEscolar','Tutor','Mail','Nen/Nena','Curs','Grupos ExtraEscolar'];
    let arryData = [];

    let array1 = ['u000001','ExtraEscolar 1','Pepe Martinez','pepe@mail.com','Hijo Pepe 1','3E','3E,2D,1E'];
    arryData.push(array1);
    let array2 = ['u000002','ExtraEscolar 2','Pepe Martinez','pepe@mail.com','Hijo Pepe 2','4T','3E,2D,1E'];
    arryData.push(array2);
    let array3 = ['u000003','ExtraEscolar 3','Pepe Martinez','pepe@mail.com','Hijo Pepe 3','6T','3E,2D,1E'];
    arryData.push(array3);
    let array4 = ['u000004','ExtraEscolar 4','Pepe Martinez','pepe@mail.com','Hijo Pepe 4','1E','3E,2D,1E'];
    arryData.push(array4);
    let array5 = ['u000005','ExtraEscolar 5','Pepe Martinez','pepe@mail.com','Hijo Pepe 5','2D','3E,2D,1E'];
    arryData.push(array5);
    let array6 = ['u000006','ExtraEscolar 6','Pepe Martinez','pepe@mail.com','Hijo Pepe 6','P3','3E,2D,1E'];
    arryData.push(array6);
    let array7 = ['u000007','ExtraEscolar 7','Pepe Martinez','pepe@mail.com','Hijo Pepe 7','P5','3E,2D,1E'];
    arryData.push(array7);
    arrayTotalData.push(arrayColumnNames);
    arrayTotalData.push(arryData)


    // esto es otra grid
    let arryTotal = [];
    let arrayColumnName = ['Id','Nombre','Vagades','Horari','Grupos','Inici','Fin'];
    let arryDat = [];

    let arra1 = ['u000001','ExtraEscolar 1','1 dia setmanal','Mati','3E,2D,1E','25/05/2022','01/06/2022'];
    arryDat.push(arra1);
    let arra2 = ['u000002','ExtraEscolar 2','1 dia setmanal','Mati','3E,2D,1E','25/05/2022','01/06/2022'];
    arryDat.push(arra2);
    let arra3 = ['u000003','ExtraEscolar 3','1 dia setmanal','Mati','3E,2D,1E','25/05/2022','01/06/2022'];
    arryDat.push(arra3);
    let arra4 = ['u000004','ExtraEscolar 4','1 dia setmanal','Mati','3E,2D,1E','25/05/2022','01/06/2022'];
    arryDat.push(arra4);
    let arra5 = ['u000005','ExtraEscolar 5','1 dia setmanal','Mati','3E,2D,1E','25/05/2022','01/06/2022'];
    arryDat.push(arra5);
    let arra6 = ['u000006','ExtraEscolar 6','1 dia setmanal','Mati','3E,2D,1E','25/05/2022','01/06/2022'];
    arryDat.push(arra6);
    let arra7 = ['u000007','ExtraEscolar 7','1 dia setmanal','Mati','3E,2D,1E','25/05/2022','01/06/2022'];
    arryDat.push(arra7);

    arryTotal.push(arrayColumnName);
    arryTotal.push(arryDat);


    const handleCheckChange = ({target:{name,checked}}) => {
        let nombre = name;
        
        if (nombre.toUpperCase().indexOf("ALUMNE") > -1) 
        {
            let inscripcio = document.getElementById('button-inscripcio');
        
            if (checked === true) {
                inscripcio.innerText = "Eliminar"; 
            }else{
                inscripcio.innerText = "Inscribir";
            }
        }
        else if(nombre.toUpperCase().indexOf("EXTRAESCOLAR") > -1)
        {
            let addAlumne = document.getElementById('add-alumne');
        
            if (checked === true) {
                addAlumne.innerText = "Agregado"; 
            }else{
                addAlumne.innerText = "Agregar";
            }
        }
        
    }

  return (
    <>
        <h2 className=" text-center text-success ">Inscripciò ExtraEscolar</h2>
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
                <TableGrid data={arryTotal} nameCheck="extraescolar" handleCheckChange={handleCheckChange}/>
                <div className="d-grid gap-2 mb-3 mt-3">
                    <button type="submit" id="add-alumne" className="btn btn-primary">Agregar</button>
                </div>
            </div>
        </form>
        <div className='row border border-success mb-3 mt-3 rounded' id="divTutor">
            <div className=" mb-3"></div>
            <TableGrid data={arrayTotalData} nameCheck="alumne" handleCheckChange={handleCheckChange}/>
            <div className="d-grid gap-2 mb-3 mt-3">
                <button type="submit" id="button-inscripcio" className="btn btn-primary">Inscribir</button>
            </div>
        </div>
    </>
  )
}

export default InscripcionExtraEscolar