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
            <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                <Chip label="Casal d'Estiu" size="large" variant="outlined" />
            </Stack>
            {[lightTheme].map((theme, index) => (
                <ThemeProvider theme={theme} key={index}>
                    <Box>
                        <Item key={elevation} elevation={elevation}>
                            {/* <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                <Chip label="TARDES DE JUNY" size="large" variant="outlined" />
                            </Stack> */}
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
            ))}
            {/* <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-12">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-12">
                        <h2 className="featurette-heading">Casal d'estiu</h2>
                        <p className="lead">Benvolgudes famílies, aquí podeu trobar tota la informació del Casal d’estiu que organitzarà L’AFA de l’escola Estalella Graells. Les dates seran del xx de juny al xx de agost del 2022.</p>
                        <p className="lead">Teniu els horaris, preus, la temàtica, la planificació setmanal, etc. a la web de l’escola, on també tindreu l’opció de fer la inscripció Online</p>
                        <p className="lead">Us hi esperem!</p>
                    </div>
                </div>
            <hr className="featurette-divider"></hr> */}
        </>
     );
}

export default ViewCasaldestiu;