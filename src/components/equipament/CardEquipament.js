//import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';


function CardEquipament({Id,path,theme,card,title,urlImage, classnameBody, classnameImage, handleRemove, handleEdit, componentcall}) {

    const buttonsAdmin = (componentcall) => {
        if (componentcall === "admin") {
            return(
                <CardActions>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <DeleteSharpIcon name={`${Id} - ${path}`} onClick={handleRemove}/> : <EditSharpIcon name={Id} onClick={handleEdit}/>}
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <EditSharpIcon name={Id} onClick={handleEdit}/> : <DeleteSharpIcon name={`${Id} - ${path}`} onClick={handleRemove}/>}
                        </IconButton>
                    </Box>
                    {/* <Button size="small" name={`${Id} - ${path}`} onClick={handleRemove}>Eliminar</Button>
                    <Button size="small" name={Id} onClick={handleEdit}>Editar</Button> */}
                </CardActions>
            )    
        }else{
            return(
                <></>
            )
        }
        
    }
    
    const drawRectangle = (componentcall) => {
        if (componentcall === "admin") {
            return(
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                    <CardMedia
                        component="img"
                        sx={{
                            height:150
                        }}
                        image="https://source.unsplash.com/random"
                        alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                        <diV>Articulo 1</diV>
                        </Typography>
                        <Typography>
                        <diV>Precio: 150, Articulo ofrecido por la Afa a un precio acequible para los padres y madres de familia de nuestra escuela.</diV>
                        </Typography>
                    </CardContent>
                        {
                            buttonsAdmin(componentcall)
                        }
                    </Card>
                </Grid>
            )    
        }else{
            return(
                <>
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    height:150
                                }}
                                image="https://source.unsplash.com/random"
                                alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                <diV>Articulo 1</diV>
                                </Typography>
                                <Typography>
                                <diV>Precio: 150, Articulo ofrecido por la Afa a un precio acequible para los padres y madres de familia de nuestra escuela.</diV>
                                </Typography>
                            </CardContent>
                            {
                                buttonsAdmin(componentcall)
                            }
                        </Card>
                    </Grid>
                    {/* <div className="row featurette">
                        <div className={classnameBody}>
                            
                        </div>
                        <div className={classnameImage}>
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={urlImage} alt=""/>
                        </div>
                    </div> */}
                </>
            )
        }
    }
  
  return (
    <>
        {
            drawRectangle(componentcall)
        }
    </>
  )
}

export default CardEquipament