import { useState, useEffect } from "react";
import {quisom} from "../../models/quisom";
import {getAllCollections} from "../../db/crudDB";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Grid from '@mui/material/Grid';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
//import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import Typography from '@mui/material/Typography';

let edicio = new quisom("","","","","","", false, false); 
let elevation = 24;

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: "forestgreen",
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 12,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// function createData(name, fitxe, texto) {
//     return { name, fitxe, texto };
// }

// const rows = [   
//     createData('18.11.2021', 'https://agora.xtec.cat/ceipestalella/wp-content/uploads/usu318/2022/03/Acta-assemblea-18.11.2021.pdf', 'Asamblea 18.11.2021'),
// ];

function ViewActes() {
    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    //let origen = "quisom";

    useEffect(()=>{
        const handleLoad = async () =>{
            let promesa1 = getAllCollections('actes');
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
                                            <Chip label="Actes" size="large" variant="outlined" />
                                        </Stack>
                                        <Stack direction="row" sx={{justifyContent: 'center'}}>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    { 
                                                        edicioQuisom ? <div className="container p-4" id='textoHtml' dangerouslySetInnerHTML={{ __html: `${edicioQuisom.cosHtml}` }}>
                                                        </div> : <p>Aun no existe información...</p>
                                                    }
                                                </DialogContentText>
                                                {/* <DialogContentText id="alert-dialog-description">
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                    La missió de l’AFA és representar els pares i mares dels alumnes i creiem que, per a fer-ho, és imprescindible gestionar l’Associació de forma transparent i fomentant la participació dels socis i sòcies.
                                                    Per aquesta raó, posem a la vostra disposició en aquesta pàgina tota la documentació de gestió de l’entitat: actes de les Assemblees de Socis, actes de la junta directiva, convenis de col·laboració, documents de gestió econòmica, etc.
                                                    Actes de les assemblees de socis de l’AMPA
                                                    </Typography>
                                                </DialogContentText>
                                                <DialogContentText sx={{width:"70%"}}>
                                                    <div className="p-3">
                                                        <TableContainer component={Paper}>
                                                            <Table sx={{ width: "100%" }} aria-label="customized table">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <StyledTableCell sx={{textAlign:"center"}}>Data</StyledTableCell>
                                                                        <StyledTableCell align="center">Acte</StyledTableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                {rows.map((row) => (
                                                                    <StyledTableRow key={row.name}>
                                                                    <StyledTableCell align="center" component="th" scope="row">
                                                                        {row.name}
                                                                    </StyledTableCell>
                                                                    <StyledTableCell align="center"><a href={row.fitxe} target="_blank" rel="noreferrer">{row.texto}</a></StyledTableCell>
                                                                    </StyledTableRow>
                                                                ))}
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>
                                                    </div>
                                                </DialogContentText> */}
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

export default ViewActes;