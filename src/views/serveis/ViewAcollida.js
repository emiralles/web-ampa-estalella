
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

let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

let edicio = new quisom("","","","","","", false, false); 

function ViewAcollida() {

    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    
    //let origen = "acollida";

    const [linkPDF,setLinkPDF] = useState(false);
    
    const [pdf,setPDF] = useState("");

    let downLoadPDF = () =>{
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
            const blob = xhr.response;
            let urlBlob = URL.createObjectURL(blob);
            setPDF(urlBlob);
            setLinkPDF(true);
        };

        // xhr.open('GET', {datalink});
        xhr.open('GET', "https://firebasestorage.googleapis.com/v0/b/afa-estalella-i-graells.appspot.com/o/pdfs%2Facollida%2FAcollida_Informaci%C3%B3_inscripcions_APP_families.pdf?alt=media&token=dcb5b5db-a16d-406d-a8b2-5805a825de07");
        xhr.send();
    }

    useEffect(() => {
        
        const handleLoad = async () =>{
            let promesa1 = getAllCollections('acollida');
            promesa1.then((resul)=>{
            resul.forEach((doc)=>{
                let item = new quisom(doc.id,doc.cosHtml,doc.dateCreation,"","","",false,false); 
                setEdicioQuisom(item);
            })
            })
        }
        
        handleLoad();

        downLoadPDF();
        
    }, [linkPDF])
    

    return ( 
        <>
            {[lightTheme].map((theme, index) => (
                <ThemeProvider theme={theme} key={index}>
                    <Box>
                        <Item key={elevation} elevation={elevation}>
                            <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                <Chip label="Acollida" size="large" variant="outlined" />
                            </Stack>
                            <Stack direction="row" sx={{justifyContent: 'center'}}>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        {/* <div>{edicioQuisom.cosHtml}</div> */}
                                        { 
                                            edicioQuisom ? <div className="container" id='textoHtml' dangerouslySetInnerHTML={{ __html: `${edicioQuisom.cosHtml}` }}>
                                            </div> : <p>Aun no existe información...</p>
                                        }
                                        {/* <p>L’AMPA de l’escola Estalella i Graells ofereix un servei d’acollida matinal per tots aquells pares i mares i nens i nenes que ho necessitin, les hores d’entrada són a les 7.50 h i a les 8.30 h. L’alumnat entrarà per la porta de consergeria.</p>
                                        <p>Descarrega el PDF on expliquem com inscribir el teu fill/filla a la acollida que tenim com servei per totes las families que desitgen fer-ho.</p> */}
                                    </DialogContentText>
                                    <DialogContentText id="alert-dialog-description">
                                        {
                                            pdf ?
                                            <div className="container ml-5">
                                                <a href={pdf} download={"inscripcionApp.pdf"}>
                                                    <FormControl variant="standard" sx={{pl:3}}>
                                                        <Button variant="contained" fullWidth size="medium" endIcon={<DownloadIcon />}>
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
                            <Stack direction="row" sx={{justifyContent: 'center'}}>
                                <DialogContent>
                                    
                                </DialogContent>
                            </Stack>
                        </Item>
                    </Box>
                </ThemeProvider>
            ))}
                    
            {/* <hr className="featurette-divider"></hr>
            <div className="containerH1"><h1>Acollida</h1></div>
            <p className="fs-5 col-md-12">L’AMPA de l’escola Estalella i Graells ofereix un servei d’acollida matinal per tots aquells pares i mares i nens i nenes que ho necessitin.</p>
            <p className="fs-5 col-md-12">Les hores d’entrada són a les 7.50 h i a les 8.30 h.</p>
            <p className="fs-5 col-md-12">L’alumnat entrarà per la porta de consergeria.</p>
            <hr className="col-3 col-md-12 mb-5"></hr>
            <div>
                <p>Descarrega el PDF on expliquem com inscribir el teu fill/filla a la acollida que tenim com servei per totes las families que desitgen fer-ho. 
                    {
                        pdf ?
                        <div className="nav">
                            <a href={pdf} download={"inscripcionApp.pdf"}>
                                    <button className="style-button-download">Download</button>
                            </a>
                        </div>:"..."

                    } 
                </p>
            </div>
            <hr className="featurette-divider"></hr> */}
        </>
     );
}

export default ViewAcollida;