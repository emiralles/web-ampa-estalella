import axios from "axios";
import { useState, useEffect } from "react";
import { getAllCollections, getUrlImage} from "../../db/crudDB";
import { comissio } from "../../models/comissio";
import ListRectangleCard from "../../components/card/ListRectangleCard";


import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
//import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
  }));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  



function ViewComisions() {


    const [name, setName] = useState('Composed TextField');

    const handleChange = (event) => {
      setName(event.target.value);
    };

    const [comboValor, setComboValor] = useState('');

    const handleChangeCombo = (event) => {
        setComboValor(event.target.value);
    };

    let origen = "negoci";
    const [listComisiones,setListComisiones] = useState([]);
    
    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('comissio');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.path);
              imgUrl.then((rstUrl)=>{
                let item = new comissio(doc.id,doc.path,"",doc.title,doc.cosHtml,doc.dateCreation,doc.namePhoto,rstUrl); 
                setListComisiones(arr => [...arr, item]);
              });
            })
          })
          
        }
        
        handleLoad();
    
    },[]);


    let EnviarMail = (e) => {
        e.preventDefault();
    
        let textSubject = "Inscripciò en comission";
        let textTo = e.target[0].value;
        let textOf = `${e.target[1].value} ${e.target[2].value} `;
        let textTexto = `${e.target[3].value} `;
        
        const data =
        {
            from: textTo,
            to: textTo,
            of: textOf,
            subject: textSubject, 
            text: textTexto
        };

        axios.post('https://arimathsolutions.com/api/mail',data,{header:{
            'TIPO DE CONTENIDO': 'Aplicación / JSON' 
            }})
            .then(res => {
                e.target[0].value="";
                e.target[1].value="";
                e.target[2].value="";
                e.target[3].value="";
                e.target[4].value="";
                e.target[5].value="";
            }).catch(error => {
                let errordata = error;
                console.log(errordata);
            })
    }

    return (
        <>
            <Grid container spacing={2} sx={{pt:10}}>
                {[lightTheme].map((theme, index) => (
                    <Grid item key={index} sx={{width:'100%'}}>
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
                                    <Stack direction="row" sx={{justifyContent: 'center', pt:8, pb:1}}>
                                        <Chip label="Comissions" size="large" variant="outlined" />
                                    </Stack>
                                    <div className="container m-3 border border-success rounded">
                                        {
                                            <ListRectangleCard arrayData={listComisiones} componentCall={origen} nameList="Listat d'Comissions"/>
                                        }
                                    </div>
                                    <div className="container m-3 border border-success rounded">
                                    <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                        <Chip label="Inscriute a las comissions" size="large" variant="outlined" />
                                    </Stack>
                                    <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                L’AFA no té cap sentit si les famílies no s’hi involucren. Hi ha moltes formes de col·laborar, que s’adapten a les possibilitats i el temps de cadascú. Si vols participar, escriu-nos.
                                            </DialogContentText>
                                        </DialogContent>
                                    </Stack>
                                        <div className="container p-4">
                                            <div className="row featurette">
                                                <div className="col-md-5">
                                                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x270</text></svg>
                                                </div>
                                                <div className="col-md-7">
                                                <Box
                                                    component="form"
                                                    sx={{
                                                        '& > :not(style)': { m: 1 },
                                                    }}
                                                    //noValidate
                                                    autoComplete="off"
                                                    >
                                                    <FormControl variant="standard">
                                                        <Box
                                                            sx={{
                                                                width: 300,
                                                                maxWidth: '100%',
                                                            }}
                                                            >
                                                            <TextField
                                                            fullWidth
                                                            id="outlined-name"
                                                            label="Email"
                                                            type="email"
                                                            onChange={handleChange}
                                                            />
                                                        </Box>
                                                    </FormControl>
                                                    <FormControl variant="standard">
                                                        <Box
                                                                sx={{
                                                                    width: 300,
                                                                    maxWidth: '100%',
                                                                }}
                                                                >
                                                            <TextField
                                                                fullWidth
                                                                id="outlined-name"
                                                                label="Nom & Cognoms"
                                                                type="Text"
                                                                onChange={handleChange}
                                                                />
                                                        </Box>
                                                    </FormControl>
                                                    <FormControl variant="standard">
                                                        <TextField
                                                            fullWidth
                                                            id="outlined-select-currency"
                                                            select
                                                            label="Comissiones"
                                                            value={comboValor}
                                                            onChange={handleChangeCombo}
                                                            helperText="Sis plau ha de seleccionar una comisiò"
                                                            >
                                                            {listComisiones.map((option, index) => (
                                                                <MenuItem key={index} value={option.title}>
                                                                {option.title}
                                                                </MenuItem>
                                                            ))}
                                                            </TextField>
                                                    </FormControl>
                                                    <FormControl variant="standard">
                                                        <Button variant="contained" onSubmit={EnviarMail} fullWidth size="large" endIcon={<SendIcon />}>
                                                            Enviar Mail
                                                        </Button>
                                                    </FormControl>
                                                </Box>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                            </Item>
                        </Box>
                    </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ViewComisions