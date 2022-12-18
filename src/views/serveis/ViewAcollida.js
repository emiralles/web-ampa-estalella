// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';


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
                                        { 
                                            edicioQuisom ? <div className="container p-4" id='textoHtml' dangerouslySetInnerHTML={{ __html: `${edicioQuisom.cosHtml}` }}>
                                            </div> : <p>Aun no existe información...</p>
                                        }
                                    </DialogContentText>
                                    <DialogContentText id="alert-dialog-description">
                                        {
                                            pdf ?
                                            <div className="container ml-5">
                                                <a href={pdf} download={"inscripcionApp.pdf"}>
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
        </>
     );
}

export default ViewAcollida;