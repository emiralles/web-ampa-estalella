
import { menjador } from "../../models/menjador";

import {getAllCollections} from "../../db/crudDB";

import { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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

let edicio = new menjador("","","","", true); 

function ViewMenjador() {

    const[edicioMenjador,setEdicioMenjador] = useState(edicio);

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
                  let item = new menjador(doc.id,doc.cosHtml,doc.dateCreation,doc.iframeYoutube, true); 
                  setEdicioMenjador(item);
              })
            })
            
        }
        
        handleLoad();

        downLoadPDF();
    
    },[]);

    return (  
        <>
            <Card sx={{ maxWidth: "100%" }}>
                                            <CardActionArea>
                                                {
                                                    edicioMenjador && edicioMenjador.thereIsYoutubeVideo ?
                                                    <div className="video-responsive rounded" id="ivideoyoutube" dangerouslySetInnerHTML={{ __html: `${edicioMenjador.iframeYoutube}` }}>
                                                    </div> : ""  
                                                }
                                            </CardActionArea>
                                        </Card>
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
                                    overflowX: "scroll",
                                    // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
                                    }}>
                                        
                                        <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                            <Chip label="Menjador" size="large" variant="outlined" />
                                        </Stack>
                                        
                                        <Stack direction="row" sx={{justifyContent: 'center'}}>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    {
                                                        edicioMenjador && edicioMenjador.cosHtml ?
                                                        <div id='textoHtml' dangerouslySetInnerHTML={{ __html: `${edicioMenjador.cosHtml}` }}>
                                                        </div> : <p>No hay texto para presentar</p>
                                                    }
                                                </DialogContentText>
                                                <DialogContentText id="alert-dialog-description">
                                                    {
                                                        pdf ?
                                                        <a href={pdf} download={"menjadorEstalella.pdf"}>
                                                            <FormControl variant="standard">
                                                                <Button variant="contained" color="success" sx={{backgroundColor:"green"}} fullWidth size="medium" endIcon={<DownloadIcon />}>
                                                                    Download
                                                                </Button>
                                                            </FormControl>
                                                        </a>
                                                        :"..."
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
    );
}

export default ViewMenjador;