import { useState, useEffect} from "react";
import { getAllCollections, getUrlImage } from "../../db/crudDB";


import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CardEquipament from "../../components/equipament/CardEquipament";

import Container from '@mui/material/Container';
import { equipament } from "../../models/equipament";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

//const theme = createTheme();
let componentCall = "No";

function ViewEquipament(){

    const [listExtraEscolar, setListExtraEscolar] = useState([]);
    
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
    },[]);

    return(
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
                                    // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
                                    }}>
                                        <CssBaseline />
                                        <main>
                                            <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                                    <Chip label="Equipament" size="large" sx={{backgroundColor:"green", color:"white"}} variant="outlined" />
                                                </Stack>
                                            <Container sx={{ py: 8 }} maxWidth="md">
                                            {/* End hero unit */}
                                            <Grid container spacing={4}>
                                                {listExtraEscolar.map((card, index) => (
                                                    <CardEquipament Id={card.Uid} path={card.path} key={index} theme={theme} card={card} componentcall={componentCall}></CardEquipament>
                                                ))}
                                            </Grid>
                                            </Container>
                                        </main>
                            </Item>
                        </Box>
                    </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ViewEquipament;