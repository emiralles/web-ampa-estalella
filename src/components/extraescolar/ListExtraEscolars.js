import CardExtraEscolar from "../extraescolar/CardExtraEscolar";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function ListExtraEscolars({arrayData, handleRemove, handleEdit, componentCall}) {
  
    if (!arrayData.length) return <h3>No existe ningun registro</h3>;    
    return (
        <>
            <div className="container text-center">
                <Stack direction="row" sx={{justifyContent: 'center', pt:2, pb:2}}>
                    <Chip label="Listat d'Extraescolars" sx={{color:"white", backgroundColor:"green"}} size="large" variant="outlined" />
                </Stack>
                <div className="container mb-3">
                <div className="row align-content-center ">
                    {
                        arrayData.map((extraescol,index) => (
                            <CardExtraEscolar Id={extraescol.Uid} path={extraescol.path} handleEdit={handleEdit} key={extraescol.Uid} titulo={extraescol.title} subTitle1={String.prototype.concat(extraescol.grupsToDo)} precio={extraescol.price} semanal={extraescol.howTimes} textoPrincipal={extraescol.parragraph} srcImage={extraescol.urlPhoto} handleRemove={handleRemove} componentCall={componentCall}/> 
                        ))
                    }
                </div>
                </div>
            </div>
        </>
    )
}

export default ListExtraEscolars