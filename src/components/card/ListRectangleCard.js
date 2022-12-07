import RectangleCard from "./RectangleCard";
import Card from "./Card";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    //maxWidth: 360,
    bgcolor: 'background.paper',
  };

  
function ListRectangleCard({arrayData, handleEdit, handleRemove, componentCall, nameList}) {
    if (!arrayData.length) return <h3>No existe ningun registro</h3>;    
    return (
        <>
        <div className="container">
            <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2, fontSize:80}} size="large">
                <Chip label={nameList} size="large" variant="outlined" />
            </Stack>
            <div className="container mb-3">
                <List sx={style} component="nav" aria-label="mailbox folders">
                    {
                        arrayData.map((esdevenim,index) => {
                            
                                if(nameList === "Listat d'Imatges el Carousel") {
                                return (<>
                                <ListItem button divider key={`ST-${index}`}>
                                    <Card Id={esdevenim.uid} path={esdevenim.path} classnameBody={index%2 === 0 ? "col-md-7":"col-md-7 order-md-2"} classnameImage={index%2 === 0 ? "col-md-5":"col-md-5 order-md-1"} handleEdit={handleEdit} key={esdevenim.uid} title={esdevenim.title}  urlImage={esdevenim.urlPhoto} handleRemove={handleRemove} componentcall={componentCall}/>
                                </ListItem>
                                <Divider key={`PS-${index}`} /></>)
                                ;
                                }
                                else
                                {
                                return( 
                                <><ListItem button divider key={`STG-${index}`}>
                                    <RectangleCard Id={esdevenim.uid} arrayData={esdevenim.cosHtml} path={esdevenim.path} classnameBody={index%2 === 0 ? "col-md-7":"col-md-7 order-md-2"} classnameImage={index%2 === 0 ? "col-md-5":"col-md-5 order-md-1"} handleEdit={handleEdit} key={esdevenim.uid} title={esdevenim.title}  urlImage={esdevenim.urlPhoto} handleRemove={handleRemove} componentcall={componentCall}/>
                                </ListItem><Divider key={`PSG-${index}`} /></>);
                                }
                            })
                    }
                </List>
            </div>
        </div>
        </>
    )
}

export default ListRectangleCard