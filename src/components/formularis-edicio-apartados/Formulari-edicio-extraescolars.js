import {useState, useEffect} from "react";
import { uploadFile, add, updateOneDocOfTpo, getAllCollections, getUrlImage, removeObject, deleteOneDocOfTipo, getOneDocOfTipo } from "../../db/crudDB";
import { extraEscolars } from "../../models/extraescolars";
import { useAuth } from "../../context/authContext";

import ExtraEscolar from "../extraescolar/ExtraEscolar";
import ListExtraEscolars from "../extraescolar/ListExtraEscolars";
//import CardExtraEscolar from "../extraescolar/CardExtraEscolar";
import "./css/formulari-edicio-extraescolars.css";

function FormulariEdicioExtraescolars() {

  const [extraescolar, setExtraescolar] = useState([]);
  const [listExtraEscolar, setListExtraEscolar] = useState([]); //extraEscolars
  const [isTrue, setTrue] = useState(false);
  const [grupos,setGrupos] = useState([]);
  const { user }  = useAuth();
  
  const handleChange = ({target:{name,value}}) => {
    setExtraescolar({...extraescolar,[name]:value});
  }

  const handleFileChange = ({target:{name,files}}) => {
    setExtraescolar({...extraescolar,[name]:files[0]})
  }

  const handleEdit = ({target:{name}}) =>{

    const evenAux = new Event("change");

    let btnExtraescolar = document.getElementById('btn-extraescolar');
    
    let inputAux = document.getElementById('input-aux');
    let I1diasetmanal = document.getElementById('1diasetmanal');
    I1diasetmanal.addEventListener('change',handleCheckChange)
    
    let I2diasetmanal = document.getElementById('2diasetmanal');
    I2diasetmanal.addEventListener('change',handleCheckChange)

    let I3diasetmanal = document.getElementById('3diasetmanal');
    I3diasetmanal.addEventListener('change',handleCheckChange)

    let principalText = document.getElementById('principalText');
    principalText.addEventListener('change',handleChange);
    
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
    let textPhoto = document.getElementById('textPhoto');
    
    let promise = getOneDocOfTipo('extraescolar',name);
    promise.then((result)=>{
      
      let data = result.data();
      data.id = result.id;

      I1diasetmanal.checked = data.howTimes.indexOf("1") ? true: false;
      I1diasetmanal.dispatchEvent(evenAux);
      // I1diasetmanal.onchange();
      I2diasetmanal.checked = data.howTimes.indexOf("2") ? true: false;
      I2diasetmanal.dispatchEvent(evenAux);
      I3diasetmanal.checked = data.howTimes.indexOf("3") ? true: false;
      I3diasetmanal.onchange();

      titulo.value = data.title;
      titulo.onchange();
      estarda.checked = data.whenDo.indexOf("Tarda") ? true:false;
      estarda.onchange();
      esmati.checked = data.whenDo.indexOf("Mati") ? true:false;
      esmati.onchange();
      fechaFinal.value = data.dateEnd;
      fechaFinal.onchange();
      fechaInici.value = data.dateStart;
      fechaInici.onchange();
      principalText.value = data.mainText;
      principalText.onchange();
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

    })

  }

  const handleRemove = ({target:{name}}) =>{
    let arrStr = name.split(" - ");
    let id = arrStr[0];
    let pathPhoto = arrStr[1];
    deleteOneDocOfTipo('extraescolar',id);
    removeObject(pathPhoto);
    refresh();
  }
  
  useEffect(()=>{
   
    const handleLoad = async () =>{
    
      // let arrayItems = [];
      let promesa1 = getAllCollections('extraescolar');
      promesa1.then((resul)=>{
        resul.forEach((doc)=>{
          let imgUrl = getUrlImage(doc.urlPhoto);
          imgUrl.then((rstUrl)=>{
            let item = new extraEscolars(doc.id,doc.urlPhoto,doc.title,doc.parragraph,doc.dateStart,doc.dateEnd,doc.mainText,doc.namePhoto,rstUrl,doc.whenDo,doc.howTimes,doc.price,doc.grupsToDo);
            // arrayItems.push(item);
            setListExtraEscolar(arr => [...arr, item]);
          });
        })
      })
      
    }
    
    handleLoad();

  },[isTrue]);

  const handleCheckChange = ({target:{name,id, value}}) => {
    let nombre = name;
    
    if (nombre.toUpperCase().indexOf("SELECT") > -1) 
    {
      setGrupos(arr => [...arr, `${id}`]);
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
    
    // this.setState({
    //   itemvalues: [{}]
    // });
  };

  const handleSubmit = async (e) =>{
    
    e.preventDefault();
    let inputAux = document.getElementById('input-aux');
    if (inputAux.value !== "") {
      let arrDataAux = inputAux.value.split(" - ");
      let idCard = arrDataAux[0];
      let dataImagen = extraescolar["imagenLogo"];
      let nameCardPhoto = dataImagen !== null ? dataImagen.name : arrDataAux[1];  

      let item = new extraEscolars('','',extraescolar['titol'],extraescolar['parraf'],extraescolar['dataInici'],extraescolar['dataFinal'],extraescolar['principalText'],nameCardPhoto,'',extraescolar['aquinahora'],extraescolar['diasetmanal'],extraescolar['preu'],grupos);
      const idData = await updateOneDocOfTpo('extraescolar',idCard,item);
      let btnExtraescolar = document.getElementById('btn-extraescolar');
      btnExtraescolar.innerText = "Agregar";

      if (extraescolar["imagenLogo"] !== null) {
        const dataImg = await uploadFile(extraescolar["imagenLogo"],extraescolar["imagenLogo"].name,idData,user.uid);
        item.urlPhoto = dataImg.metadata.fullPath;
        await updateOneDocOfTpo('extraescolar',idCard,item);
        handleReset();
        refresh();  
      }

    }else{
      
      let item = new extraEscolars('','',extraescolar['titol'],extraescolar['parraf'],extraescolar['dataInici'],extraescolar['dataFinal'],extraescolar['principalText'],extraescolar['imagenLogo'].name,'',extraescolar['aquinahora'],extraescolar['diasetmanal'],extraescolar['preu'],grupos);
      const idData = await add('extraescolar',item);
      const dataImg = await uploadFile(extraescolar["imagenLogo"],extraescolar["imagenLogo"].name,idData,user.uid);
      item.urlPhoto = dataImg.metadata.fullPath;
      await updateOneDocOfTpo('extraescolar',idData,item);
      handleReset();
      refresh();

    }
    
  }

  //if (!listExtraEscolar.length) return <h3>Loading...</h3>;
  // if (isTrue) return <h3>Loading...</h3>;

  return (
    <>
      <ExtraEscolar handleChange={handleChange} handleFileChange={handleFileChange} handleCheckChange={handleCheckChange} handleSubmit={handleSubmit}/>
      {
        <ListExtraEscolars arrayData={listExtraEscolar} handleRemove={handleRemove} handleEdit={handleEdit}/>
      }
    </>
  )
}
 
export default FormulariEdicioExtraescolars


