import { getAllCollections, getUrlImage } from "../../db/crudDB";
import { noticie } from "../../models/noticie";
import { useEffect, useState } from "react";
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


function ViewNoticies() {
    let origen = "noticies"; //vistaUsuario
    const [listNoticies,setListNoticies]=useState([]);

    useEffect(()=>{
        const handleLoad = async () =>{
        
            let promesa1 = getAllCollections('noticie');
            promesa1.then((resul)=>{
              resul.forEach((doc)=>{
                let imgUrl = getUrlImage(doc.path);
                imgUrl.then((rstUrl)=>{
                    let item = new noticie(doc.id,doc.path,"",doc.title,doc.cosHtml,doc.dateCreation,doc.namePhoto,rstUrl,doc.pathsImages,[],[]); 
                    setListNoticies(arr => [...arr, item]);
                });
              })
            })
            
        }
        
        handleLoad();
    },[])

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
                                        {/* <p className="lead">Vols estar al dia de totes les notícies de l’AFA? No et vols perdre cap activitat o esdeveniment? No ets de xarxes socials però no et vols perdre res del que es cou a l’AFA? Aquest és el teu lloc! L’actualitat més fresca de l’Afa a un sol clic. Aquí podràs trovar.</p> */}
                                        {
                                            <ListRectangleCard arrayData={listNoticies} componentCall={origen} nameList="Listat d'Noticies"/>
                                        }
                            </Item>
                        </Box>
                    </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        </>
     );
}

export default ViewNoticies;