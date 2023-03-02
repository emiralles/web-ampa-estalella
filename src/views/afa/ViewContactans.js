import axios from "axios";
import { useState } from "react";
import { mail } from "../../models/mail";

import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';

import Paper from '@mui/material/Paper';
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


function ViewContactans() {

    const [user,setUser] = useState({nombre:"",email:"",subject:"",textArea:""});
    const handleChange = ({target:{name,value}}) =>{
        setUser({...user,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const data = new mail(user.email,user.email,user.subject,user.nombre,user.textArea);
            axios.post('https://arimathsolutions.com/api/mail',data,{header:{
                'TIPO DE CONTENIDO': 'Aplicación / JSON' 
            }})
            .then(res => {
                console.log(res);
                console.log(res.data);
                e.target[0].value="";
                e.target[1].value="";
                e.target[2].value="";
                e.target[3].value="";
                setUser({nombre:"",email:"",subject:"",textArea:""});
            }).catch(error => {
                let errordata = error;
                console.log(errordata);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {[lightTheme].map((theme, index) => (
            <ThemeProvider theme={theme} key={index}>
                <Box>
                    <Item key={elevation} elevation={elevation}>
                        <Stack direction="row" sx={{justifyContent: 'center', pt:15, pb:2}}>
                            <Chip label="Contacta'ns" size="large" variant="outlined" />
                        </Stack>
                        <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <div className="row featurette">
                                        <div className="col-md-7">
                                            <h2 className="featurette-heading">Contacta amb nosaltres.</h2>
                                            <p className="lead">Si tens algun dubte, consulta o necessites enviar-nos alguna informació no dubtis a fer servir aquest formulari per contactar amb nosaltres.</p>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card border-info mb-3">
                                                <div className="card-header backGroundGreen"><h2 className="card-title">Contacta'ns</h2></div>
                                                <div className="card-body">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="mb-3">
                                                            <label for="inputNombre" className="form-label">Nom i Cognoms</label>
                                                            <input type="text" onChange={handleChange} className="form-control" id="inputNombre" name="nombre"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="inputSubject" className="form-label">Asunto</label>
                                                            <input type="text" onChange={handleChange} className="form-control" id="inputSubject" name="subject"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label for="inputEmail" class="form-label">Correu electrònic</label>
                                                            <input type="email" onChange={handleChange} className="form-control" id="inputEmail" aria-describedby="emailHelp" name="email"/>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <label for="formControlTextarea1" className="form-label">Missatge</label>
                                                            <textarea className="form-control" onChange={handleChange} id="formControlTextarea1" rows="3" name="textArea"></textarea>
                                                        </div>
                                                        <div className="d-grid gap-2">
                                                            <button type="submit" className="btn btn-color-back btn-primary">Enviar</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContentText>
                            </DialogContent>
                        </Stack>
                    </Item>
                </Box>
            </ThemeProvider>
            ))}
        </>
    )
}

export default ViewContactans