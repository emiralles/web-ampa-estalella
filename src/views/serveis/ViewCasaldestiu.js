import {quisom} from "../../models/quisom";
import {getAllCollections} from "../../db/crudDB";

import { useState, useEffect } from "react";

import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import tardesjune2022 from "./../images/TardesEstiu2022.PNG";


let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

function ViewCasaldestiu() {
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
                                            <Chip label="Casal d'Estiu" size="large" variant="outlined" />
                                        </Stack>
                                        <Stack direction="row" sx={{justifyContent: 'center'}}>
                                            <DialogContent>
                                                <Grid container spacing={2} columns={{sm:10}}>
                                                    <Grid container item sm={6}>
                                                        <Item>
                                                            <Typography component="div" sx={{ fontSize:12, color:"black", textAlign:"undefined", padding:2 }} variant="h5">
                                                                <p className="lead">Benvolgudes famílies, aquí podeu trobar tota la informació del Casal d’estiu que organitzarà L’AFA de l’escola Estalella Graells. Les dates seran del xx de juny al xx de agost del 2022.</p>
                                                                <p className="lead">Teniu els horaris, preus, la temàtica, la planificació setmanal, etc. a la web de l’escola, on també tindreu l’opció de fer la inscripció Online</p>
                                                                <p className="lead">Us hi esperem!</p>
                                                            </Typography>
                                                        </Item>
                                                    </Grid>
                                                    <Grid container item sm={6}>
                                                        <Item sx={{ width: "100%", height:"100%", textAlign:"center", alignContent:"center" , padding:1 }}>
                                                            <CardMedia
                                                                component="img"
                                                                sx={{ width: "100%", height:"99%", textAlign:"center" , padding:1 }}
                                                                image={tardesjune2022}
                                                                alt="Live from space album cover"
                                                            />
                                                        </Item>
                                                    </Grid>
                                                </Grid>
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

export default ViewCasaldestiu;