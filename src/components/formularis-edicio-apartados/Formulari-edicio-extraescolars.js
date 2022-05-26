import {useState, useEffect} from "react";
import { uploadFile, add, updateOneDocOfTpo, getAllCollections, getUrlImage, removeObject, deleteOneDocOfTipo, getOneDocOfTipo } from "../../db/crudDB";
import { extraEscolars } from "../../models/extraescolars";
import { useAuth } from "../../context/authContext";

import ExtraEscolar from "../extraescolar/ExtraEscolar";
import ListExtraEscolars from "../extraescolar/ListExtraEscolars";
import "./css/formulari-edicio-extraescolars.css";

function FormulariEdicioExtraescolars() {

  const [extraescolar, setExtraescolar] = useState([]);
  const [listExtraEscolar, setListExtraEscolar] = useState([]); //extraEscolars
  const [dataAuxiliar, setDataAuxiliar] = useState([]);
  const [isTrue, setTrue] = useState(false);
  const [grupos,setGrupos] = useState([]);
  const { user }  = useAuth();
  let origen = "admin";

  const handleChange = ({target:{name,value}}) => {
    setExtraescolar({...extraescolar,[name]:value});
  }

  const handleFileChange = ({target:{name,files}}) => {
    setExtraescolar({...extraescolar,[name]:files[0]})
  }

  const handleEdit = ({target:{name}}) =>{

    let btnExtraescolar = document.getElementById('btn-extraescolar');
    
    let inputAux = document.getElementById('input-aux');
    let I1diasetmanal = document.getElementById('1diasetmanal');
    let I2diasetmanal = document.getElementById('2diasetmanal');
    let I3diasetmanal = document.getElementById('3diasetmanal');
    let principalText = document.getElementById('principalText');
    let esmati = document.getElementById('esmati');
    let estarda = document.getElementById('estarda');
    let I6T = document.getElementById('6T');
    let I5T = document.getElementById('5T');
    let I4T = document.getElementById('4T');
    let I3E = document.getElementById('3E');
    let I2D = document.getElementById('2D');
    let I1E = document.getElementById('1E');
    let IP5 = document.getElementById('P5');
    let IP4 = document.getElementById('P4');
    let IP3 = document.getElementById('P3');
    let preu = document.getElementById('preu');
    let fechaFinal = document.getElementById('fechaFinal');
    let fechaInici = document.getElementById('fechaInici');
    let parrafo = document.getElementById('parrafo');
    let titulo = document.getElementById('titulo');
    let plazas = document.getElementById('plazas');
    let textPhoto = document.getElementById('textPhoto');
    
    let promise = getOneDocOfTipo('extraescolar',name);
    promise.then((result)=>{
      
      let data = result.data();
      data.id = result.id;
      
      setDataAuxiliar(data);
      setGrupos([]);
       
      I1diasetmanal.checked = data.howTimes.indexOf("1") > -1 ? true: false;
      I2diasetmanal.checked = data.howTimes.indexOf("2") > -1 ? true: false;
      I3diasetmanal.checked = data.howTimes.indexOf("3") > -1 ? true: false;
      titulo.value = data.title;
      plazas.value = data.plazas;
      estarda.checked = data.whenDo.indexOf("Tarda") > -1 ? true:false;
      esmati.checked = data.whenDo.indexOf("Mati") > -1 ? true:false;
      fechaFinal.value = data.dateEnd;
      fechaInici.value = data.dateStart;
      principalText.value = data.mainText;
      parrafo.value = data.parragraph;
      preu.value = data.price;
      textPhoto.value = data.urlPhoto;
      
      inputAux.value = `${data.id} - ${data.namePhoto}`;
      
      data.grupsToDo.forEach((item)=>{
        
        switch (item) {
          case "6T":
            I6T.checked = true;
            break;
          case "5T":
            I5T.checked = true; 
            break;
          case "4T":
            I4T.checked = true; 
            break;          
          case "3E":
            I3E.checked = true; 
            break;
          case "2D":
            I2D.checked = true; 
            break;
          case "1E":
            I1E.checked = true; 
            break;
          case "P5":
            IP5.checked = true; 
            break;
          case "P4":
            IP4.checked = true; 
            break;
          case "P3":
            IP3.checked = true; 
            break;
          default:
            break;
        }
      })

    btnExtraescolar.innerText = "Modificar";
    refresh();
    titulo.focus();

    })

  }

  const handleRemove = ({target:{name}}) =>{
    let arrStr = name.split(" - ");
    let id = arrStr[0];
    let pathPhoto = arrStr[1];
    let titulo = document.getElementById('titulo');
    deleteOneDocOfTipo('extraescolar',id);
    removeObject(pathPhoto);
    refresh();
    titulo.focus();
  }
  
  useEffect(()=>{
   
    const handleLoad = async () =>{
    
      // let arrayItems = [];
      let promesa1 = getAllCollections('extraescolar');
      promesa1.then((resul)=>{
        resul.forEach((doc)=>{
          let imgUrl = getUrlImage(doc.urlPhoto);
          imgUrl.then((rstUrl)=>{
            let item = new extraEscolars(doc.id,doc.urlPhoto,doc.plazas,doc.title,doc.parragraph,doc.dateStart,doc.dateEnd,doc.mainText,doc.namePhoto,rstUrl,doc.whenDo,doc.howTimes,doc.price,doc.grupsToDo);
            // arrayItems.push(item);
            setListExtraEscolar(arr => [...arr, item]);
          });
        })
      })
      
    }
    
    handleLoad();

  },[isTrue]);

  const handleCheckChange = ({target:{name,id, value,checked}}) => {
    let nombre = name;
    
    if (nombre.toUpperCase().indexOf("SELECT") > -1) 
    {

      if (checked === true) {
        setGrupos(arr => [...arr, `${id}`]);  
      }else{
        if (dataAuxiliar !== null && dataAuxiliar.grupsToDo !== null && dataAuxiliar.grupsToDo.length > 0) {
          dataAuxiliar.grupsToDo.forEach((elem, idx)=>{
            if (elem === id ) {
              dataAuxiliar.grupsToDo.splice(idx,1);
            }  
          });    
        }
      }
      
    }
    else
    {
      setExtraescolar({...extraescolar,[name]:`${value}`});
    }
    
  }

  const refresh = ()=>{
    // re-renders the component
    setListExtraEscolar([]);
    //window.location.reload(false);
    if (isTrue) {
      setTrue(false);
    }else{
      setTrue(true);
    }
    
  }
  

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (
        input.type === "radio" ?  input.checked = false : input.type === "checkbox" ? input.checked = false :input.value = "" 
        )
    );

    Array.from(document.querySelectorAll("textarea")).forEach(
      textarea => (textarea.value = "")
    );
    
  };

  const handleSubmit = async (e) =>{
    
    e.preventDefault();
    let inputAux = document.getElementById('input-aux');
    if (inputAux.value !== "") {
      let arrDataAux = inputAux.value.split(" - ");
      let idCard = arrDataAux[0];
      let dataImagen = extraescolar["imagenLogo"];
      let nameCardPhoto = dataImagen !== undefined ? dataImagen.name : arrDataAux[1];  

      let item = new extraEscolars('','',extraescolar['plazas'],extraescolar['titol'],extraescolar['parraf'],extraescolar['dataInici'],extraescolar['dataFinal'],extraescolar['principalText'],nameCardPhoto,'',extraescolar['aquinahora'],extraescolar['diasetmanal'],extraescolar['preu'],grupos);
      let itemAux = new extraEscolars('','',dataAuxiliar.plazas,dataAuxiliar.title,dataAuxiliar.parragraph,dataAuxiliar.dateStart,dataAuxiliar.dateEnd,dataAuxiliar.mainText,dataAuxiliar.namePhoto,dataAuxiliar.urlPhoto,dataAuxiliar.whenDo,dataAuxiliar.howTimes,dataAuxiliar.price,dataAuxiliar.grupsToDo)
      
      item.title = item.title !== undefined ? item.title : itemAux.title;
      item.parragraph = item.parragraph !== undefined ? item.parragraph : itemAux.parragraph;
      item.mainText = item.mainText !== undefined ? item.mainText : itemAux.mainText;
      item.price = item.price !== undefined ? item.price : itemAux.price;
      item.howTimes = item.howTimes !== undefined ? item.howTimes : itemAux.howTimes;
      item.dateStart = item.dateStart !== undefined ? item.dateStart : itemAux.dateStart;
      item.dateEnd = item.dateEnd !== undefined ? item.dateEnd : itemAux.dateEnd;
      item.whenDo = item.whenDo !== undefined ? item.whenDo : itemAux.whenDo;
      item.grupsToDo = item.grupsToDo !== undefined && item.grupsToDo.length > 0 ? item.grupsToDo : itemAux.grupsToDo;
       
      await updateOneDocOfTpo('extraescolar',idCard,item);
      
      if (extraescolar["imagenLogo"] !== undefined) {
        const dataImg = await uploadFile(extraescolar["imagenLogo"],extraescolar["imagenLogo"].name,idCard,user.uid);
        item.namePhoto = extraescolar["imagenLogo"].name;
        item.urlPhoto = dataImg.metadata.fullPath;
        await updateOneDocOfTpo('extraescolar',idCard,item);    
      }
      
      let btnExtraescolar = document.getElementById('btn-extraescolar');
      btnExtraescolar.innerText = "Agregar";

      handleReset();
      refresh();

    }else{
      
      if (extraescolar['plazas'] !== undefined && extraescolar['titol'] !== undefined && extraescolar['parraf'] !== undefined && extraescolar['dataInici'] !== undefined && extraescolar['dataFinal'] !== undefined && extraescolar['principalText'] !== undefined && extraescolar['imagenLogo'].name !== undefined && extraescolar['aquinahora'] !== undefined && extraescolar['diasetmanal'] !== undefined && extraescolar['preu'] !== undefined && grupos !== undefined && grupos.length>0) {
        let item = new extraEscolars('','',extraescolar['plazas'],extraescolar['titol'],extraescolar['parraf'],extraescolar['dataInici'],extraescolar['dataFinal'],extraescolar['principalText'],extraescolar['imagenLogo'].name,'',extraescolar['aquinahora'],extraescolar['diasetmanal'],extraescolar['preu'],grupos);
        const idData = await add('extraescolar',item);
        if (idData !== undefined && idData !== "") {
          const dataImg = await uploadFile(extraescolar["imagenLogo"],extraescolar["imagenLogo"].name,idData,user.uid);
          item.urlPhoto = dataImg.metadata.fullPath;
          await updateOneDocOfTpo('extraescolar',idData,item);  
        }
        handleReset();
        refresh();
      }
      
    }
    
  }

  
  return (
    <>
      <ExtraEscolar handleChange={handleChange} handleFileChange={handleFileChange} handleCheckChange={handleCheckChange} handleSubmit={handleSubmit}/>
      {
        <ListExtraEscolars arrayData={listExtraEscolar} handleRemove={handleRemove} handleEdit={handleEdit} componentCall={origen}/>
      }
    </>
  )
}
 
export default FormulariEdicioExtraescolars


