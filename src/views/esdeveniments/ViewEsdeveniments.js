import { useState, useEffect } from "react";
import { getAllCollections, getUrlImage} from "../../db/crudDB";
import { esdeveniment } from "../../models/esdeveniment";
import ListRectangleCard from "../../components/card/ListRectangleCard";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
  }));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

function ViewEsdeveniments() {

    let origen = "esdeveniments";
    const [listEsdeveniments,setListEsdeveniments] = useState([]);
    // const [isTrue, setTrue] = useState(false);

    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('esdeveniment');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.path);
              imgUrl.then((rstUrl)=>{
                let item = new esdeveniment(doc.id,doc.path,"",doc.title,doc.cosHtml,doc.dateCreation,doc.namePhoto,rstUrl); 
                setListEsdeveniments(arr => [...arr, item]);
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
                                        {
                                            <ListRectangleCard arrayData={listEsdeveniments} componentCall={origen} nameList="Esdeveniments"/>
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

export default ViewEsdeveniments