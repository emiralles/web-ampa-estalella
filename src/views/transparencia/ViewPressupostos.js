import { useState, useEffect } from "react";
import {quisom} from "../../models/quisom";
import {getAllCollections} from "../../db/crudDB";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Grid from '@mui/material/Grid';

let edicio = new quisom("","","","","","", false, false); 
let elevation = 24;

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

function ViewPressupostos() {
    const[edicioQuisom,setEdicioQuisom] = useState(edicio);

    useEffect(()=>{
        const handleLoad = async () =>{
            let promesa1 = getAllCollections('pressupostos');
            promesa1.then((resul)=>{
                resul.forEach((doc)=>{
                    let item = new quisom(doc.id,doc.cosHtml,doc.dateCreation,"","","",false,false); 
                    setEdicioQuisom(item);
                })
            })
        }
        handleLoad();
    },[]);

    return ( 
        <>
            <Grid container spacing={2} sx={{pt:10}}>
                {[lightTheme].map((theme, index) => (
                    <Grid item key={index}>
                    <ThemeProvider theme={theme} key={index}>
                        <Box>       
                            <Item key={elevation} elevation={elevation} sx={{
                                    mb: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 650,
                                    overflow: "hidden",
                                    overflowY: "scroll",
                                    }}>
                                        <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                            <Chip label="Pressupostos" size="large" variant="outlined" />
                                        </Stack>
                                        <Stack direction="row" sx={{justifyContent: 'center'}}>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    { 
                                                        edicioQuisom ? <div className="container p-4" id='textoHtml' dangerouslySetInnerHTML={{ __html: `${edicioQuisom.cosHtml}` }}>
                                                        </div> : <p>Aun no existe información...</p>
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

export default ViewPressupostos;