import { useState, useEffect } from "react";
import {quisom} from "../../models/quisom";
import {getAllCollections} from "../../db/crudDB";
import Parrafo from "../../components/menjador/Parrafo";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


let edicio = new quisom("","","","","","", false, false); 

let elevation = 24;

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

function ViewQuisom() {

    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    
    let origen = "quisom";

    useEffect(()=>{

        const handleLoad = async () =>{
        
            let promesa1 = getAllCollections('quisom');
            promesa1.then((resul)=>{
            resul.forEach((doc)=>{
                let item = new quisom(doc.id,doc.cosHtml,doc.dateCreation,"","","",false,false); 
                // setTrue(!isTrue);
                setEdicioQuisom(item);
            })
            })
            
        }
        
        handleLoad();

    },[]);
  

  return (
    <>
        <Grid container spacing={2}>
        {[lightTheme].map((theme, index) => (
            <Grid item key={index}>
            <ThemeProvider theme={theme}>
                <Box>
                    <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                        <Chip label="Quisom" size="large" variant="outlined" />
                    </Stack>
                    <Item key={elevation} elevation={elevation}>
                        { edicioQuisom ?
                            <div className=" m-2 p-4">
                                <Parrafo data={edicioQuisom} componentcall={origen} />
                            </div>:""
                        }
                    </Item>
                </Box>
            </ThemeProvider>
            </Grid>
        ))}
        </Grid>
    </>
  )
}

export default ViewQuisom