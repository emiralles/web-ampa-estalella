import {useState, useEffect} from "react";
import { getAllCollections, getUrlImage } from "../../db/crudDB";
import { extraEscolars } from "../../models/extraescolars";
import ListExtraEscolars from "../../components/extraescolar/ListExtraEscolars";
//import InscripcionExtraEscolar from "../../formularis/inscripcioExtraEscolar/InscripcionExtraEscolar";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

function ViewExtraescolars() {

    const [listExtraEscolar, setListExtraEscolar] = useState([]); //extraEscolars

    let origen = "vista";

    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('extraescolar');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.urlPhoto);
              imgUrl.then((rstUrl)=>{
                let item = new extraEscolars(doc.id,doc.urlPhoto,doc.plazas,doc.title,doc.parragraph,doc.dateStart,doc.dateEnd,doc.mainText,doc.namePhoto,rstUrl,doc.whenDo,doc.howTimes,doc.price,doc.grupsToDo);
                setListExtraEscolar(arr => [...arr, item]);              
              });
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
                                    // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
                                    }}>
                                        <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                            <Chip label="Extraescolars" size="large" variant="outlined" />
                                        </Stack>
                                        <Stack direction="row" sx={{justifyContent: 'center'}}>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    <p className="fs-5 col-md-12">L’AMPA de l’Escola Estalella i Graells ofereix activitats extraescolars de qualitat, atractives i que complementen l’ensenyament lectiu. Esperem que compleixin amb les vostres preferències i interessos i que les gaudiu molt!</p>
                                                </DialogContentText>
                                                <DialogContentText id="alert-dialog-description">
                                                    {
                                                        <ListExtraEscolars arrayData={listExtraEscolar} componentCall={origen}/>
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

export default ViewExtraescolars;