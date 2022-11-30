
import {quisom} from "../../models/quisom";
import {getAllCollections} from "../../db/crudDB";

import { useState, useEffect } from "react";

import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';


import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';


let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

let edicio = new quisom("","","","","","", false, false); 

function ViewMenjador() {

    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    
    const [pdf,setPDF] = useState("");

    let downLoadPDF = () =>{
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
            let urlBlob = URL.createObjectURL(blob);
            setPDF(urlBlob);
        };

        // xhr.open('GET', {datalink});
        xhr.open('GET', "https://firebasestorage.googleapis.com/v0/b/afa-estalella-i-graells.appspot.com/o/pdfs%2Fmenjador%2FMenjador_fam%C3%ADlies__curs_22-23.pdf?alt=media&token=e1f53d0b-3fc7-4e36-827d-1e783f66a135");
        xhr.send();
    }
    
    useEffect(()=>{
        
        const handleLoad = async () =>{
            let promesa1 = getAllCollections('menjador');
            promesa1.then((resul)=>{
            resul.forEach((doc)=>{
                let item = new quisom(doc.id,doc.cosHtml,doc.dateCreation,"","","",false,false); 
                setEdicioQuisom(item);
            })
            })
        }
        
        handleLoad();

        downLoadPDF();
    
    },[]);

    return (  
        <>
            {/* <hr className="featurette-divider"></hr> */}
            <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                <Chip label="Menjador" size="large" variant="outlined" />
            </Stack>
            {/* <div className="containerH1"><h1>Menjador</h1></div> */}
            <Card sx={{ maxWidth: "100%" }}>
                <CardActionArea>
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/Wox8BHyJ0XE" frameBorder={0} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
                    </iframe>
                </CardActionArea>
            </Card>
            {/* <div className="video-responsive">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Wox8BHyJ0XE" frameBorder={0} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div> */}
            {[lightTheme].map((theme, index) => (
                <ThemeProvider theme={theme} key={index}>
                    <Box>
                        <Item key={elevation} elevation={elevation}>
                            {/* <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                <Chip label="Acollida" size="large" variant="outlined" />
                            </Stack> */}
                            <Stack direction="row" sx={{justifyContent: 'center'}}>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        {/* { 
                                            edicioQuisom ? <div className="container" id='textoHtml' dangerouslySetInnerHTML={{ __html: `${edicioQuisom.cosHtml}` }}>
                                            </div> : <p>Aun no existe información...</p>
                                        } */}
                                        <p>L’Escola Estalella i Graells disposa de cuina pròpia, cuineres i monitors/monitores, contractats per l’AMPA.</p>
                                        <p>Descarrega el pdf on te expliquem el funcionament del menjador.</p>
                                    </DialogContentText>
                                    <DialogContentText id="alert-dialog-description">
                                        {
                                            pdf ?
                                            <div className="container ml-5">
                                                <a href={pdf} download={"menjadorEstalella.pdf"}>
                                                    <FormControl variant="standard" sx={{pl:3}}>
                                                        <Button variant="contained" color="success" sx={{backgroundColor:"green"}} fullWidth size="medium" endIcon={<DownloadIcon />}>
                                                            Download
                                                        </Button>
                                                    </FormControl>
                                                </a>
                                            </div>
                                            :"..."
                                        }
                                    </DialogContentText>
                                </DialogContent>
                            </Stack>
                        </Item>
                    </Box>
                </ThemeProvider>
            ))}
            {/* <hr className="featurette-divider"></hr>
            <p className="fs-5 col-md-12">L’Escola Estalella i Graells disposa de cuina pròpia, cuineres i monitors/monitores, contractats per l’AMPA.</p>
            <div>
                <p>Descarrega el pdf on te expliquem el funcionament del menjador. 
                    {
                        pdf ?
                        <div className="nav">
                            <a href={pdf} download={"menjadorEstalella.pdf"}>
                                    <button className="style-button-download">Download</button>
                            </a>
                        </div>:"..."
                    } 
                </p>
            </div> */}
        </>
    );
}

export default ViewMenjador;