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
  parragraph: "",
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
        let parrafo = document.getElementById('parrafo');
        let titulo = document.getElementById('titulo');
        let textPhoto = document.getElementById('textPhoto');
        
        let promise = getOneDocOfTipo('equipament',name);
        promise.then((result)=>{
            
            let data = result.data();
            data.id = result.id;
            
            setDataAuxiliar(data);
            
            titulo.value = data.title;
            principalText.value = data.mainText;
            parrafo.value = data.parragraph;
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
    
          let item = new equipament('','',extraescolar['titol'],extraescolar['parraf'],extraescolar['principalText'],nameCardPhoto,'');
          let itemAux = new equipament('','',dataAuxiliar.title,dataAuxiliar.parragraph,dataAuxiliar.mainText,dataAuxiliar.namePhoto,dataAuxiliar.urlPhoto)
          
          data.title = item.title !== undefined && item.title !== "" ? item.title : itemAux.title;
          data.parragraph = item.parragraph !== undefined && item.parragraph !== "" ? item.parragraph : itemAux.parragraph;
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
          
          if (extraescolar['titol'] !== undefined && extraescolar['parraf'] !== undefined && extraescolar['principalText'] !== undefined && extraescolar['imagenLogo'].name !== undefined ) {
            let item = new equipament('','',extraescolar['titol'],extraescolar['parraf'],extraescolar['principalText'],extraescolar['imagenLogo'].name,'');
            data.mainText = item.mainText;
            data.namePhoto = item.namePhoto;
            data.parragraph = item.parragraph;
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
                let item = new equipament(doc.id,doc.urlPhoto,doc.title,doc.parragraph,doc.mainText,doc.namePhoto,rstUrl);
                setListExtraEscolar(arr => [...arr, item]);
              });
            })
          })
          
        }
        
        handleLoad();
    
    },[isTrue]);

    return ( 
        <>
            {/* <div className="row featurette"> */}
                <Equipament handleChange={handleChange} handleFileChange={handleFileChange} handleSubmit={handleSubmit}/>
       
                {/* <div className="col-md-12">
                    <div className="card border-info mb-3">
                        <div className="card-header bg-warning"><h2 className="card-title">Equipament</h2></div>
                        <div className="card-body
                        ">
                            <form onSubmit={handleSubmit} >
                                <input className="d-none" id="input-aux" ></input>
                                <div className="mb-3" id="container-body-parraph">
                                    <Editor
                                        apiKey="twddabpib9sh6y8sk8heu47ikwtyx74ryopk10mxlnlf2ue8"
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue="<p>agregue aqui el texto.</p>"
                                        init={{
                                        height: 500,
                                        menubar: true,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                            'bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input className="d-none" id="textPhoto"/>
                                    <label htmlFor="fileupload" className="form-label">Afegir Imatge Tardes Estiu</label>
                                    <input type="file" onChange={handleFileChange} className="form-control" id="fileupload" name="fileupload"/>
                                </div>
                                
                                <div className="d-grid gap-2">
                                    <button type="submit" id="btn-menjador" className="btn btn-primary">Agregar</button>
                                </div>
                            </form>
                        </div>
                        <div className=" m-2 p-4">
                            <Parrafo data={edicioMenjador} handleRemove={handleRemove} handleEdit={handleEdit} componentcall={origen} />
                        </div>
                    </div>
                </div> */}
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <main>
                        <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                            <Chip label="Equipament" size="large" sx={{backgroundColor:"green", color:"white"}} variant="outlined" />
                        </Stack>
                        <Container sx={{ py: 8 }} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                            <CardEquipament theme={theme} card={card} handleEdit={handleEdit} handleRemove={handleRemove} ></CardEquipament>
                            // <Grid item key={card} xs={12} sm={6} md={4}>
                            //     <Card
                            //     sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            //     >
                            //     <CardMedia
                            //         component="img"
                            //         sx={{
                            //             height:150
                            //         }}
                            //         image="https://source.unsplash.com/random"
                            //         alt="random"
                            //     />
                            //     <CardContent sx={{ flexGrow: 1 }}>
                            //         <Typography gutterBottom variant="h5" component="h2">
                            //         <diV>Articulo 1</diV>
                            //         </Typography>
                            //         <Typography>
                            //         <diV>Precio: 150, Articulo ofrecido por la Afa a un precio acequible para los padres y madres de familia de nuestra escuela.</diV>
                            //         </Typography>
                            //     </CardContent>
                            //     {/* Edicion */}
                            //     </Card>
                            // </Grid>
                            ))}
                        </Grid>
                        </Container>
                    </main>
                </ThemeProvider>
            {/* </div> */}
        </>
     );
}

export default ViewEdicioEquipament;