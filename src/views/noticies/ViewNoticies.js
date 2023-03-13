import { getAllCollections } from "../../db/crudDB";//, getUrlImage
//import { noticie } from "../../models/noticie";
import { useEffect, useState } from "react";
//import ListRectangleCard from "../../components/card/ListRectangleCard";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {quisom} from "../../models/quisom";
//import Parrafo from "../../components/menjador/Parrafo";


let edicio = new quisom("","","","","","", false, false); 


let elevation = 24;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary
  }));
  
const lightTheme = createTheme({ palette: { mode: 'light' } });  


function ViewNoticies() {

    const[edicioQuisom,setEdicioQuisom] = useState(edicio);
    
    //let origen = "noticies";

    useEffect(()=>{

        const handleLoad = async () =>{
        
            let promesa1 = getAllCollections('noticie');
            promesa1.then((resul)=>{
            resul.forEach((doc)=>{
                let item = new quisom(doc.id,doc.cosHtml,doc.dateCreation,"","","",false,false); 
                setEdicioQuisom(item);
            })
            })
            
        }
        
        handleLoad();

    },[]);

    // let origen = "noticies";
    // const [listNoticies,setListNoticies]=useState([]);

    // useEffect(()=>{
    //     const handleLoad = async () =>{
        
    //         let promesa1 = getAllCollections('noticie');
    //         promesa1.then((resul)=>{
    //           resul.forEach((doc)=>{
    //             let imgUrl = getUrlImage(doc.path);
    //             imgUrl.then((rstUrl)=>{
    //                 let item = new noticie(doc.id,doc.path,"",doc.title,doc.cosHtml,doc.dateCreation,doc.namePhoto,rstUrl,doc.pathsImages,[],[]); 
    //                 setListNoticies(arr => [...arr, item]);
    //             });
    //           })
    //         })
            
    //     }
        
    //     handleLoad();
    // },[])

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
                                        <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                                            <Chip label="Noticies" size="large" variant="outlined" />
                                        </Stack>
                                        <Stack direction="row" sx={{justifyContent: 'center'}}>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    {/* { edicioQuisom ?
                                                        <div className=" m-2 p-4">
                                                            <Parrafo data={edicioQuisom} componentcall={origen} />
                                                        </div>:""
                                                    } */}
                                                    { 
                                                        edicioQuisom ? <div className="container p-4" id='textoHtml' dangerouslySetInnerHTML={{ __html: `${edicioQuisom.cosHtml}` }}>
                                                        </div> : 
                                                        <div className=" m-2 p-4">
                                                            {/* <Parrafo data={edicioQuisom} componentcall={origen} /> */}
                                                            {/* <p className="fs-5 col-md-12"><span style={{fontSize:"15pt"}}>Vols estar al dia de totes les noticies de l'AFA? No et vols perdre cap activitat o esdeveniment? L'actualitat més fresca de l'AFA a un sol clic: <a style={{color:'blue'}} href="https://www.instagram.com/estalellaigraells/" target={blank}>https://www.instagram.com/estalellaigraells/</a> Segueix-nos a Instagram!</span></p> */}
                                                            <p className="fs-5 col-md-12"><span style={{fontSize:"15pt"}}>Pagina en modificaciò <a style={{color:'blue'}} href="https://www.instagram.com/estalellaigraells/" target={"_blank"} rel={"noopener noreferrer"} >https://www.instagram.com/estalellaigraells/</a> Segueix-nos a Instagram!</span></p>
                                                        </div>
                                                    }
                                                </DialogContentText>
                                                {/* <DialogContentText id="alert-dialog-description">
                                                    {
                                                        pdf ?
                                                        <div className="container ml-5">
                                                            <a href={pdf} download={"inscripcionApp.pdf"}>
                                                                <FormControl variant="standard" sx={{pl:3}}>
                                                                    <Button variant="contained" color="success" sx={{backgroundColor:"green"}} fullWidth size="medium" endIcon={<DownloadIcon />}>
                                                                        Download
                                                                    </Button>
                                                                </FormControl>
                                                            </a>
                                                        </div>
                                                        :"..."
                                                    }
                                                </DialogContentText> */}
                                            </DialogContent>
                                        </Stack>
                                        {/* <p className="lead">Vols estar al dia de totes les notícies de l’AFA? No et vols perdre cap activitat o esdeveniment? No ets de xarxes socials però no et vols perdre res del que es cou a l’AFA? Aquest és el teu lloc! L’actualitat més fresca de l’Afa a un sol clic. Aquí podràs trovar.</p> */}
                                        {/* {
                                            <ListRectangleCard arrayData={listNoticies} componentCall={origen} nameList="Listat d'Noticies"/>
                                        } */}
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