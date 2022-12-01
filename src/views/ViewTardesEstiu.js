import tardesjune2022 from "./images/TardesEstiu2022.PNG";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import DialogContent from '@mui/material/DialogContent';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  


function ViewTardesEstiu() {
  return (
    <>
        {/* {
            edicioMenjador && edicioMenjador.cosHtml ?
            <div id='textoHtml' dangerouslySetInnerHTML={{ __html: `${edicioMenjador.cosHtml}` }}>
            </div> : <p>No hay texto para presentar</p>
        } */}
        {[lightTheme].map((theme, index) => (
                <ThemeProvider theme={theme} key={index}>
                    <Box>
                        <Item key={elevation} elevation={elevation}>
                            <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                <Chip label="TARDES DE JUNY" size="large" variant="outlined" />
                            </Stack>
                            <Stack direction="row" sx={{justifyContent: 'center'}}>
                                <DialogContent>
                                    <Grid container spacing={2} columns={{sm:10}}>
                                        <Grid container item sm={6}>
                                            <Item>
                                                <Typography component="div" sx={{ fontSize:12, color:"black", textAlign:"undefined", padding:2 }} variant="h5">
                                                    <p className="bold">DEL 7 AL 22 DE JUNY, HORARI: DE 15:30 A 17:00</p>
                                                    <p className="bold">PERÍODE D’INSCRIPCIONS: Del 10 al 20 de maig</p>
                                                    <p className="lead">Cal enviar el resguard de l’ingrés bancari junt amb la inscripció a: extraescolars@estalella.cat</p>
                                                    <p className="bold">Preu</p>
                                                    <ul>
                                                        <li>40€ alumne/a per a famílies sòcies de l’AMPA/AFA</li>
                                                        <li>50€ alumne/a per a famílies NO sòcies de l’AMPA/AFA</li>
                                                    </ul>
                                                    <p className="bold">FORMA DE PAGAMENT</p>
                                                    <p className="lead">Ingrés bancari als caixers automàtics del Banc Sabadell (codi pin 1603) o transferència al compte: ES32 0081 0046 1900 0166 6770 de la mateixa entitat indicant el nom de l’alumne/a i el curs que fa</p>
                                                    <p className="lead">*L’AMPA es reserva el dret d’anul·lar l’activitat si el nombre d’alumnes inscrits no és suficient. Aquest serà l’únic cas en què es retornarà la quota.</p>
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
    </>
  )
}

export default ViewTardesEstiu;