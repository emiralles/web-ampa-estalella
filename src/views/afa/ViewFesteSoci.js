import { useState, useEffect } from "react";
import {quisom} from "../../models/quisom";
import {getAllCollections} from "../../db/crudDB";
import Parrafo from "../../components/menjador/Parrafo";

//import axios from "axios";

import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
  }));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  


let edicio = new quisom("","","","","","", false, false); 


function ViewFesteSoci() {

    // let EnviarMail = (e) => {
    //     e.preventDefault();
    
    //     let textSubject = "fer me soci de l'AFA";
    //     let textFrom = "ampa.estalella.i.graells@gmail.com";
    //     let textTo =  "juntaampa@estalella.cat;emirallesyataco@gmail.com"; 
    //     let textTexto = `Nombre: ${e.target[1].value} ${e.target[2].value} ${e.target[3].value} email: ${e.target[0].value}` ;
        
    //     let fileUpload = e.target[5].files[0];

    //     const data =
    //     {
    //         from: textFrom,
    //         to: textTo,
    //         subject: textSubject, 
    //         text: textTexto,
    //         strRoutefile: fileUpload
    //     };

    //     axios.post('https://arimathsolutions.com/api/mail/documents',data,{headers: {
    //         "Content-Type": "multipart/form-data",
    //       }})
    //         .then(res => {
    //             e.target[0].value="";
    //             e.target[1].value="";
    //             e.target[2].value="";
    //             e.target[3].value="";
    //             e.target[4].value="";
    //             e.target[5].value="";
    //         }).catch(error => {
    //             let errordata = error;
    //             console.log(errordata);
    //         })
    // }

    //const[edicioQuisom,setEdicioQuisom] = useState(noticie);
    // const [isTrue, setTrue] = useState(false);
    
    let origen = "fersesoci";

    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    
    // const[notici,setNotici] = useState(noticia);
    const [pdf,setPDF] = useState("");

    // const handleFileChange = ({target:{name,files}}) => {
    //     setEdicioQuisom({...edicioQuisom,[name]:files[0]})
    // }
    
    let downLoadPDF = () =>{
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
            let urlBlob = URL.createObjectURL(blob);
            setPDF(urlBlob);
        };

        // xhr.open('GET', {datalink});
        // xhr.open('GET', "https://agora.xtec.cat/ceipestalella/wp-content/uploads/usu318/2022/06/22-23-Full-Inscripcio%CC%81-soci-AFA-PROTECCIO%CC%81-DADES-I-DRETS-IMATGE.pdf");
        xhr.open('GET', "https://firebasestorage.googleapis.com/v0/b/afa-estalella-i-graells.appspot.com/o/pdfs%2Fsoci-afa%2F22-23-Full-Inscripcio%CC%81-soci-AFA-PROTECCIO%CC%81-DADES-I-DRETS-IMATGE.pdf?alt=media&token=776f2ef6-29ac-4581-9c9a-c4d2fdad9e55");
        xhr.send();
    }

    useEffect(() => {
        downLoadPDF();

        const handleLoad = async () =>{
        
            let promesa1 = getAllCollections('festesoci');
            promesa1.then((resul)=>{
                resul.forEach((doc)=>{
                    let item = new quisom(doc.id,doc.cosHtml,doc.dateCreation,"","","",false,false); 
                    // setTrue(!isTrue);
                    setEdicioQuisom(item);
                })
            })
            
        }
        
        handleLoad();
        
    }, [])
    

    return (
        <>
            <Grid container spacing={2} sx={{pt:10}}>
                {[lightTheme].map((theme, index) => (
                    <Grid item key={index} sx={{width:'100%'}}>
                    <ThemeProvider theme={theme} key={index}>
                        <Box>       
                            <Item key={elevation} elevation={elevation} sx={{
                                    mb: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 650,
                                    overflow: "hidden",
                                    overflowY: "scroll",
                                    // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
                                    }}>
                                        <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                            <Chip label="Fes-te Soci" size="large" variant="outlined" />
                                        </Stack>
                                        <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                {
                                                    edicioQuisom && pdf ?
                                                    
                                                    <div className=" m-2 pt-12 pb-4 pr-4 pl-4">
                                                        <Parrafo data={edicioQuisom} componentcall={origen} />
                                                        <div className="nav">
                                                            <a href={pdf} download={"FichaInscripcio.pdf"}>
                                                                    <button className="style-button-download">Download</button>
                                                            </a>
                                                        </div>
                                                    </div>:""
                                                }
                                                </DialogContentText>
                                            </DialogContent>
                                        </Stack>
                            </Item>
                        </Box>
                    </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ViewFesteSoci