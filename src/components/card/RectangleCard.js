import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
//import PlayArrowIcon from '@mui/icons-material/PlayArrow';
//import SkipNextIcon from '@mui/icons-material/SkipNext';


function RectangleCard({Id,path,title,urlImage,arrayData, classnameBody, classnameImage, handleRemove, handleEdit, componentcall}) {
    
    const theme = useTheme();

    const buttonsAdmin = (componentcall) => {
        if (componentcall === "admin") {
            return(
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous" name={Id} onClick={handleEdit}>
                        {theme.direction === 'rtl' ? <DeleteSharpIcon /> : <EditSharpIcon />}
                    </IconButton>
                    {/* <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton> */}
                    <IconButton aria-label="next" name={`${Id} - ${path}`} onClick={handleRemove}>
                    {/* name={Id} onClick={handleEdit} name={`${Id} - ${path}`} onClick={handleRemove} */}
                        {theme.direction === 'rtl' ? <EditSharpIcon /> : <DeleteSharpIcon />}
                    </IconButton>
                </Box>
                // <div className="row g-0">
                //     <div className="col-6">
                //         <a href="#ass" name={Id} onClick={handleEdit} className="nav-link px-1 style-button-download" role="button" aria-disabled="true">Editar</a>
                //     </div>
                //     <div className="col-6">
                //         <a href="#ass" name={`${Id} - ${path}`} onClick={handleRemove} className="nav-link px-1 style-button-download" role="button" aria-disabled="true">Eliminar</a>
                //     </div>
                // </div>
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
                <>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {arrayData}
                            </Typography>
                            </CardContent>
                            {
                                buttonsAdmin(componentcall)
                            }
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={urlImage}
                            alt="Live from space album cover"
                        />
                    </Card>
                    {/* <hr className="featurette-divider"></hr> */}
                    {/* <div className="row featurette">
                        <div className={classnameBody}>
                            {
                                buttonsAdmin(componentcall)
                            }
                            <h2 className="featurette-heading"><span className="text-muted">{title}</span></h2>
                            <p className="lead">{arrayData}</p>
                        </div>
                        <div className={classnameImage}>
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={urlImage} alt=""/>
                        </div>
                    </div> */}
                </>
            )    
        }else if(componentcall === "noticies" || componentcall === "esdeveniments" ){
            return(
                <>
                    {/* <hr className="featurette-divider"></hr> */}
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {arrayData}
                            </Typography>
                            </CardContent>
                            {
                                buttonsAdmin(componentcall)
                            }
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={urlImage}
                            alt="Live from space album cover"
                        />
                    </Card>
                    {/* <a href={`/galleria/${Id}`}>
                        <div className="row featurette">
                            <div className={classnameBody}>
                                {
                                    buttonsAdmin(componentcall)
                                }
                                <h2 className="featurette-heading"><span className="text-muted">{title}</span></h2>
                                <p className="lead p-data">{arrayData}</p>
                            </div>
                            <div className={classnameImage}>
                                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={urlImage} alt=""/>
                            </div>
                        </div>
                    </a> */}
                </>
            )
        }else{
            return(
                <>
                    {/* <hr className="featurette-divider"></hr> */}
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {arrayData}
                            </Typography>
                            </CardContent>
                            {
                                buttonsAdmin(componentcall)
                            }
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={urlImage}
                            alt="Live from space album cover"
                        />
                    </Card>
                    {/* <div className="row featurette">
                        <div className={classnameBody}>
                            {
                                buttonsAdmin(componentcall)
                            }
                            <h2 className="featurette-heading"><span className="text-muted">{title}</span></h2>
                            <p className="lead p-data" style={{color:"black!important"}}>{arrayData}</p>
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

export default RectangleCard