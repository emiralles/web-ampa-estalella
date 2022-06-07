import {useState, useEffect} from "react";
import { getAllCollections, getUrlImage } from "../../db/crudDB";
import { extraEscolars } from "../../models/extraescolars";
import ListExtraEscolars from "../../components/extraescolar/ListExtraEscolars";
import InscripcionExtraEscolar from "../../formularis/inscripcioExtraEscolar/InscripcionExtraEscolar";

import imagen5 from "./images/HorarisExtraEscolars.PNG";


function ViewExtraescolars() {

    const [listExtraEscolar, setListExtraEscolar] = useState([]); //extraEscolars

    let origen = "vista";

    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('extraescolar');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.urlPhoto);
              imgUrl.then((rstUrl)=>{
                let item = new extraEscolars(doc.id,doc.urlPhoto,doc.plazas,doc.title,doc.parragraph,doc.dateStart,doc.dateEnd,doc.mainText,doc.namePhoto,rstUrl,doc.whenDo,doc.howTimes,doc.price,doc.grupsToDo);
                setListExtraEscolar(arr => [...arr, item]);              
              });
            })
          })
          
        }
        
        handleLoad();
    
    },[]);
    

    return (  
        <>
            <hr className="featurette-divider"></hr>
            <div className="containerH1"><h1>Extraescolars</h1></div>
            <p className="fs-5 col-md-12">L’AMPA de l’Escola Estalella i Graells ofereix activitats extraescolars de qualitat, atractives i que complementen l’ensenyament lectiu. Esperem que compleixin amb les vostres preferències i interessos i que les gaudiu molt!</p>
            {/* <hr className="col-3 col-md-12 mb-5"></hr> */}
            {
                <ListExtraEscolars arrayData={listExtraEscolar} componentCall={origen}/>
            }

            <hr className="featurette-divider"></hr>
            {
                <InscripcionExtraEscolar arrayListExtraEscolar={listExtraEscolar}/>
            }
            <hr className="featurette-divider"></hr>
            <div className="row g-5">
                <div className="col-md-12">
                    <h2>Horaris Extraescolars</h2>
                    <hr className="col-3 col-md-2 mb-5"></hr>
                </div>
            </div>
            <div className="div-image-horaris-extraescolars">
                <img src={imagen5} alt=""/>
            </div>
            <hr className="featurette-divider"></hr>
        </>
    );
}

export default ViewExtraescolars;