import { useState, useEffect} from "react";
import { getAllCollections, getUrlImage } from "../../db/crudDB";

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import CardEquipament from "../../components/equipament/CardEquipament";

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { equipament } from "../../models/equipament";

const theme = createTheme();
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
                            <CardEquipament Id={card.Uid} path={card.path} key={index} theme={theme} card={card} componentcall={componentCall}></CardEquipament>
                        ))}
                    </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        </>
    )
}

export default ViewEquipament;