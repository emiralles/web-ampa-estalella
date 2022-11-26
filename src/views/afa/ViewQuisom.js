import { useState, useEffect } from "react";
import {quisom} from "../../models/quisom";
import {getAllCollections} from "../../db/crudDB";
import Parrafo from "../../components/menjador/Parrafo";

//import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


let edicio = new quisom("","","","","","", false, false); 
let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    //textAlign: 'center',
    color: theme.palette.text.secondary
    //,
    //height: "100%",
    //width: "100%",
    // lineHeight: '100%',
    //maxWidth: "100%"
  }));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

function ViewQuisom() {

    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    // const [isTrue, setTrue] = useState(false);
    
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
        {/* {
            edicioQuisom ?
            <div className=" m-2 p-4">
                <Parrafo data={edicioQuisom} componentcall={origen} />
            </div>:""
        } */}
        <Grid container spacing={2}>
        {[lightTheme].map((theme, index) => (
            <Grid item key={index}>
            <ThemeProvider theme={theme}>
                <Box
                // sx={{
                //     p: 2,
                //     bgcolor: 'background.default',
                //     display: 'grid',
                //     gridTemplateColumns: { md: '1fr 1fr' },
                //     gap: 2,
                // }}
                >
                    <Item key={elevation} elevation={elevation}>
                        { edicioQuisom ?
                            <div className=" m-2 p-4">
                                <Parrafo data={edicioQuisom} componentcall={origen} />
                            </div>:""
                        }
                    </Item>
                {/* {[24].map((elevation) => (
                    
                ))} */}
                </Box>
            </ThemeProvider>
            </Grid>
        ))}
        </Grid>
    </>
  )
}

export default ViewQuisom