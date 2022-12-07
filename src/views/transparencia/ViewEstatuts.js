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

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { green } from "@mui/material/colors";

let edicio = new quisom("","","","","","", false, false); 
let elevation = 24;

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
}));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "forestgreen", // theme.palette.common.green,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, fitxe, texto) {
    return { name, fitxe, texto };
}

const rows = [   
    createData('2021-2022', 'https://agora.xtec.cat/ceipestalella/wp-content/uploads/usu318/2022/03/estatuts-2.pdf', 'Estatuts 2021-2022'),
];
  

function ViewEstatuts() {
    
    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    //let origen = "quisom";

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
            <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                <Chip label="Estatuts" size="large" variant="outlined" />
            </Stack>
            {[lightTheme].map((theme, index) => (
                <ThemeProvider theme={theme} key={index}>
                    <Box>
                        <Item key={elevation} elevation={elevation}>
                            <Stack direction="row" sx={{justifyContent: 'center'}}>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        <Typography gutterBottom variant="h6" component="h6">
                                            A continuació indiquem els estatuts de l’Associació de Mares i Pares d’Alumnes de l’escola. Estatuts: Estatuts AFA Estalella i Graells (Aprovats a l’ActaAssembleaEstatuts).
                                        </Typography>
                                        {/* { edicioQuisom ?
                                            "A continuació indiquem els estatuts de l’Associació de Mares i Pares d’Alumnes de l’escola. Estatuts: Estatuts AFA Estalella i Graells (Aprovats a l’ActaAssembleaEstatuts)."
                                            :""
                                        } */}
                                    </DialogContentText>
                                    <DialogContentText sx={{width:"70%"}}>
                                        <div className="p-3">
                                            <TableContainer component={Paper}>
                                                <Table sx={{ width: "100%" }} aria-label="customized table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <StyledTableCell sx={{textAlign:"center"}}>Data</StyledTableCell>
                                                            <StyledTableCell align="center">Fitxe</StyledTableCell>
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
                                        
                                    </DialogContentText>
                                </DialogContent>
                            </Stack>
                        </Item>
                    </Box>
                </ThemeProvider>
            ))}
        </>
     );
}

export default ViewEstatuts;