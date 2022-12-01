import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';



function CardExtraEscolar({Id,titulo,subTitle1,precio,semanal,textoPrincipal,srcImage,handleRemove,path,handleEdit,componentCall}) {

    const theme = useTheme();

    const buttonsAdmin = (componentcall) => {
        if (componentcall === "admin") {
            return(
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <DeleteSharpIcon name={`${Id} - ${path}`} onClick={handleRemove}/> : <EditSharpIcon name={Id} onClick={handleEdit}/>}
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <EditSharpIcon name={Id} onClick={handleEdit}/> : <DeleteSharpIcon name={`${Id} - ${path}`} onClick={handleRemove}/>}
                    </IconButton>
                </Box>
                // <div className="row g-0">
                //     <div className="col-6">
                //         <a href="#ass" name={Id} onClick={handleEdit} className="nav-link px-1" role="button" aria-disabled="true">Editar</a>
                //     </div>
                //     <div className="col-6">
                //         <a href="#ass" name={`${Id} - ${path}`} onClick={handleRemove} className="nav-link px-1" role="button" aria-disabled="true">Eliminar</a>
                //     </div>
                // </div>
            )    
        }else{
            return(
                <></>
            )
        }
        
    }

    return (
    <>
        <Card sx={{ display: 'flex', width:"25%", height:"9%", margin:1 }}>
            <Box sx={{ display: 'flex', width:"60%" , flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" sx={{ fontSize:14, fontStyle:"bold", textAlign:"center" }} variant="h5">
                    {titulo}
                </Typography>
                <Typography sx={{ fontSize:12, fontStyle:"bold", textAlign:"left" }} color="text.secondary" component="div">
                    {subTitle1} - {precio}
                </Typography>
                <Typography sx={{ fontSize:12, fontStyle:"bold", textAlign:"left" }} color="text.secondary" component="div">
                    {semanal}
                </Typography>
                <br></br>
                <Typography sx={{ fontSize:10, fontFamily:"Arial", textAlign:"justify" }} color="text.secondary" component="div">
                    {textoPrincipal}
                </Typography>
                </CardContent>
                {
                    buttonsAdmin(componentCall)
                }
                
            </Box>
            <CardMedia
                component="img"
                sx={{ width: "40%" }}
                image={srcImage}
                alt="Live from space album cover"
            />
        </Card>
        {/* <div className="card card-extraescolar mb-3 me-3 ms-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={srcImage} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    {
                        buttonsAdmin(componentCall)
                    }
                    <div className="row g-0">
                        <h5 className="card-title">{titulo}</h5>
                    </div>
                    <div className="row g-0">
                        <p className="card-text text-end"><small className="text-muted ">{subTitle1}</small></p>
                    </div>
                    <div className="row g-0">
                        <p className="card-text text-end"><small className="text-muted">{precio}</small></p>
                    </div>
                    <div className="row g-0">
                        <p className="card-text text-end"><small className="text-muted">{semanal}</small></p>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-12">
                    <div className="card-body">
                        <p className="card-text">{textoPrincipal}</p>
                    </div>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default CardExtraEscolar