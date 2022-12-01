import { useState } from "react";
import TableGrid from "../../components/tableGrid/TableGrid";
import { modelViewRegistroAlumno } from "../../models/modelViewRegistroAlumno";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


let newInitialRegistroAlumno = new modelViewRegistroAlumno('u0000','','','','','','','','','');
function InscripcionExtraEscolar({arrayListExtraEscolar}) {

    const [registroAlumne,setRegistroAlumne] = useState(newInitialRegistroAlumno);
    const [listRegistrosAlumnes,setListRegistrosAlumnes] = useState([]);
    const [lstData,setLstData] = useState([]);
    const [lstUids,setLstUids] = useState([]);

    let arrayFields = ['Id','Nombre','Vagades','Horari','Grupos','Inici','Fin'] ;
    let arrayDataExtraEscolares = [];
    
    arrayListExtraEscolar.map((item) => {
        let itemData = [item.Uid, item.title,item.howTimes,item.whenDo,item.grupsToDo,item.dateStart,item.dateEnd];
        arrayDataExtraEscolares.push(itemData);
        return 0;
    })

    let arrayDataTotalExtraEscolares = [];
    arrayDataTotalExtraEscolares.push(arrayFields);
    arrayDataTotalExtraEscolares.push(arrayDataExtraEscolares);

    const handleAdd = (e) =>{
        e.preventDefault();
        let arryData = [];

        let arrayTotalll = [];
        let arrayColumnNames = ['Id','Extraescolar','Nombre Tutor','Apellidos Tutor','Email','Nombre Alumno','Apellidos Alumno','Edad','Curso','Grupos'];
        arrayTotalll.push(arrayColumnNames);
        listRegistrosAlumnes.map((item)=>{
            let array1 = [item.uid,item.titleExtraEscolar,item.nombreTutor,item.apellidosTutor,item.email,item.nombreAlumno,item.apellidosAlumno,item.edad,item.curso,item.grupos];
            arryData.push(array1);
            return 0;
        })
        arrayTotalll.push(arryData);
        setLstData(arrayTotalll);
        handleReset();
    }

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (
            input.type === "checkbox" && input.checked === true && input.name.toUpperCase().indexOf("EXTRAESCOLAR") > -1 ? input.checked = false : "" 
          )
        );
    
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        let texto = e.target.innerText;
        if (texto === "Eliminar") {
            lstUids.map((uid)=>{
                let arrdAux = [...lstData];
                arrdAux[1] = arrdAux[1].filter(x=>x[0] !== uid);
                setLstData(arrdAux);
                return 0;
            })
        }
    }

    const handleChange = ({target:{name,value}}) => {
        setRegistroAlumne({...registroAlumne,[name]:value})
    }


    const handleCheckChange = ({target:{name,checked,parentNode}}) => {
        
        if (name.toUpperCase().indexOf("ALUMNE") > -1) 
        {
            let inscripcio = document.getElementById('button-inscripcio');
            let arrayElements = parentNode.parentNode.children;
            let uid = arrayElements[1].innerText;
            if (checked === true) {
                
                setLstUids(arr =>[...arr,uid]);
                inscripcio.innerText = "Eliminar"; 
            }else{
                let arr = lstUids.filter(x=> x !== uid);
                setLstUids(arr);
                inscripcio.innerText = "Inscribir";
            }
        }
        else if(name.toUpperCase().indexOf("EXTRAESCOLAR") > -1)
        {
            let addAlumne = document.getElementById('add-alumne');
            let arrayElements = parentNode.parentNode.children;


            if (checked === true) {
                addAlumne.innerText = "Agregado";
                let nuevo = {...registroAlumne};
                nuevo.uid = arrayElements[1].innerText;
                nuevo.grupos = arrayElements[5].innerText;
                nuevo.titleExtraEscolar = arrayElements[2].innerText;
                
                let auxNuevo = {...nuevo};
                setListRegistrosAlumnes(arr => [...arr, auxNuevo])

            }else{
                addAlumne.innerText = "Agregar";
            }
        }
        
    }

  
  return (
    <>
        {/* <h2 className=" text-center text-success ">Inscripciò ExtraEscolar</h2> */}
        <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
            <Chip label="Inscripciò ExtraEscolar" size="large" sx={{color:"white", backgroundColor:"green"}} variant="outlined" />
        </Stack>

        <form onSubmit={handleAdd}>
            <div className='row border border-success mb-3 mt-3 rounded' id="divTutor">
                <label htmlFor="divTutor" className="form-label">Tutor Legal</label>
                <div className=" col-lg-4 mb-3" style={{textAlign:"left!important"}}>
                    <label htmlFor="inputNombre" className="form-label" style={{textAlign:"left!important"}}>Nom</label>
                    <input type="text" onChange={handleChange} className="form-control" id="inputNombre" name="nombreTutor"/>
                </div>
                <div className=" col-lg-4 mb-3" style={{textAlign:"left!important"}}>
                    <label htmlFor="inputNombre" className="form-label" style={{textAlign:"left!important"}}>Cognoms</label>
                    <input type="text" onChange={handleChange} className="form-control" id="inputNombre" name="apellidosTutor"/>
                </div>
                <div className=" col-lg-4 mb-3"  style={{textAlign:"left!important"}}>
                    <label htmlFor="inputEmail" className="form-label" style={{textAlign:"left!important"}}>Correu electrònic</label>
                    <input type="email" onChange={handleChange} className="form-control" id="inputEmail" aria-describedby="emailHelp" name="email"/>
                </div>    
            </div>
            <div className='row h-75 border border-success mb-3 mt-3 rounded' id="divNenNena">
                <label htmlFor="divNenNena" className="form-label">Nen/Nena</label>
                <div className=" col-lg-5 mb-3">
                    <label htmlFor="inputNombre" className="form-label">Nom</label>
                    <input type="text" onChange={handleChange} className="form-control" id="inputNombre" name="nombreAlumno"/>
                </div>
                <div className=" col-lg-5 mb-3">
                    <label htmlFor="inputNombre" className="form-label">Cognoms</label>
                    <input type="text" onChange={handleChange} className="form-control" id="inputNombre" name="apellidosAlumno"/>
                </div>
                <div className=" col-lg-1 mb-3">
                    <label htmlFor="inputNombre" className="form-label">Edad</label>
                    <input type="text" onChange={handleChange} className="form-control" id="inputNombre" name="edad"/>
                </div>
                <div className=" col-lg-1 mb-3">
                    <label htmlFor="inputNombre" className="form-label">Curs</label>
                    <input type="text" onChange={handleChange} className="form-control" id="inputNombre" name="curso"/>
                </div>
                {/* arryTotal */}
                {/* <hr className="featurette-divider"></hr> */}
                <h3 className=" text-left text-primary ">Listat d'Extraescolars, seleccione ....</h3>
                {/* <hr className="featurette-divider"></hr> */}
                <TableGrid data={arrayDataTotalExtraEscolares} nameCheck="extraescolar" handleCheckChange={handleCheckChange}/>
                <div className="d-grid gap-2 mb-3 mt-3">
                    <button type="submit" id="add-alumne" className="btn btn-primary">Agregar</button>
                </div>
            </div>
        </form>
        <div className='row border border-success mb-3 mt-3 rounded' id="divTutor">
            <div className=" mb-3"></div>
            {/* arrayTotalData */}
            <TableGrid data={lstData} nameCheck="alumne" handleCheckChange={handleCheckChange}/>
            <div className="d-grid gap-2 mb-3 mt-3">
                <button type="submit" onClick={handleSubmit} id="button-inscripcio" className="btn btn-primary">Inscribir</button>
            </div>
        </div>
    </>
  )
}

export default InscripcionExtraEscolar