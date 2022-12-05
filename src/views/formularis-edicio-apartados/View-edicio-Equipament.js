import Equipament from "../../components/equipament/Equipament";
import { useState, useEffect} from "react";
import { uploadFile, add, updateOneDocOfTpo, getAllCollections, getUrlImage, removeObject, deleteOneDocOfTipo, getOneDocOfTipo } from "../../db/crudDB";

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CardEquipament from "../../components/equipament/CardEquipament";

import { equipament } from "../../models/equipament";
import { useAuth } from "../../context/authContext";


let data = {
  title: "",
  mainText: "",
  namePhoto: "",
  urlPhoto: "",
}

const cards = [1];
const theme = createTheme();

function ViewEdicioEquipament() {

    const [extraescolar, setExtraescolar] = useState([]);
    const [listExtraEscolar, setListExtraEscolar] = useState([]); //extraEscolars
    const [dataAuxiliar, setDataAuxiliar] = useState([]);
    const [isTrue, setTrue] = useState(false);
    const { user }  = useAuth();
    let componentCall = "admin";

    const handleChange = ({target:{name,value}}) => {
        setExtraescolar({...extraescolar,[name]:value});
    }

    const handleFileChange = ({target:{name,files}}) => {
        setExtraescolar({...extraescolar,[name]:files[0]})
    }

    const handleEdit = ({target:{name}}) =>{

        let btnExtraescolar = document.getElementById('btn-extraescolar');
        
        let inputAux = document.getElementById('input-aux');
        let principalText = document.getElementById('principalText');
        let titulo = document.getElementById('titulo');
        let textPhoto = document.getElementById('textPhoto');
        
        let promise = getOneDocOfTipo('equipament',name);
        promise.then((result)=>{
            
            let data = result.data();
            data.id = result.id;
            
            setDataAuxiliar(data);
            
            titulo.value = data.title;
            principalText.value = data.mainText;
            textPhoto.value = data.urlPhoto;    
            inputAux.value = `${data.id} - ${data.namePhoto}`;
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
        removeObject(pathPhoto);
        deleteOneDocOfTipo('equipament',id);
        refresh();
        titulo.focus();
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
    
          let item = new equipament('','',extraescolar['titol'],extraescolar['principalText'],nameCardPhoto,'');
          let itemAux = new equipament('','',dataAuxiliar.title,dataAuxiliar.mainText,dataAuxiliar.namePhoto,dataAuxiliar.urlPhoto)
          
          data.title = item.title !== undefined && item.title !== "" ? item.title : itemAux.title;
          data.mainText = item.mainText !== undefined && item.mainText !== "" ? item.mainText : itemAux.mainText;
          
          await updateOneDocOfTpo('equipament',idCard,data);
          
          if (extraescolar["imagenLogo"] !== undefined) {
            const dataImg = await uploadFile(extraescolar["imagenLogo"],extraescolar["imagenLogo"].name,idCard,user.uid);
            data.namePhoto = extraescolar["imagenLogo"].name;
            data.urlPhoto = dataImg.metadata.fullPath;
            await updateOneDocOfTpo('equipament',idCard,data);    
          }
          
          let btnExtraescolar = document.getElementById('btn-extraescolar');
          btnExtraescolar.innerText = "Agregar";
    
          handleReset();
          refresh();
    
        }else{
          
          if (extraescolar['titol'] !== undefined && extraescolar['principalText'] !== undefined && extraescolar['imagenLogo'].name !== undefined ) {
            let item = new equipament('','',extraescolar['titol'],extraescolar['principalText'],extraescolar['imagenLogo'].name,'');
            data.mainText = item.mainText;
            data.namePhoto = item.namePhoto;
            data.title = item.title;
            data.urlPhoto = item.urlPhoto;
            
            const idData = await add('equipament',data);
            if (idData !== undefined && idData !== "") {
              const dataImg = await uploadFile(extraescolar["imagenLogo"],extraescolar["imagenLogo"].name,idData,user.uid);
              data.urlPhoto = dataImg.metadata.fullPath;
              await updateOneDocOfTpo('equipament',idData,data);  
            }
            handleReset();
            refresh();
          }
          
        }
        
    }

    useEffect(()=>{
   
        const handleLoad = async () =>{
          let promesa1 = getAllCollections('equipament');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.urlPhoto);
              imgUrl.then((rstUrl)=>{
                let item = new equipament(doc.id,doc.urlPhoto,doc.title,doc.mainText,doc.namePhoto,rstUrl);
                setListExtraEscolar(arr => [...arr, item]);
              });
            })
          })
          
        }
        
        handleLoad();
    
    },[isTrue]);

    return ( 
        <>
            <Equipament handleChange={handleChange} handleFileChange={handleFileChange} handleSubmit={handleSubmit}/>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <main>
                    <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                        <Chip label="Equipament" size="large" sx={{backgroundColor:"green", color:"white"}} variant="outlined" />
                    </Stack>
                    <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {listExtraEscolar.map((card, index) => (
                            <CardEquipament Id={card.Uid} path={card.path} key={index} theme={theme} card={card} handleEdit={handleEdit} handleRemove={handleRemove} componentcall={componentCall}></CardEquipament>
                        ))}
                    </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        </>
     );
}

export default ViewEdicioEquipament;