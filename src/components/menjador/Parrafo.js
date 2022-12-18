import CardMedia from '@mui/material/CardMedia';


function  Parrafo({data,componentcall, handleEdit, handleRemove}) {
    
    const buttonsAdmin = (componentcall) => {
        if (componentcall === "admin" && data!=null && data.uid !== "" ) {
            return(
                <div className="row g-0">
                    <div className="col-6">
                        <a href="#ass" name={data.uid} onClick={handleEdit} className="nav-link px-1 style-button-download" role="button" aria-disabled="true">Editar</a>
                    </div>
                    <div className="col-6">
                        <a href="#ass" name={data.uid} onClick={handleRemove} className="nav-link px-1 style-button-download" role="button" aria-disabled="true">Eliminar</a>
                    </div>
                </div>
            )    
        }else{
            return(
                <></>
            )
        }
        
    }

  if (!data) return <h3>No existe registro menjador</h3>;    
  return (
    <>
        {
            buttonsAdmin(componentcall)
        }
        {
            data.thereIsYoutubeVideo ?
            <div className="video-responsive rounded" id="ivideoyoutube" dangerouslySetInnerHTML={{ __html: `${data.iframeYoutube}` }}>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Wox8BHyJ0XE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe> */}
            </div> : ""
        }
        {
            data.urlPhoto && data.path ? 
            <CardMedia
                component="img"
                sx={{ width: "40%" }}
                image={data.path}
                alt="Live from space album cover"
            />:""
        }
        {/* <hr className="featurette-divider"></hr> */}
        <div id='textoHtml' dangerouslySetInnerHTML={{ __html: `${data.cosHtml}` }}>
        </div>
        { componentcall === "fersesoci" || componentcall === "quisom" ?
         "":<hr className="featurette-divider"></hr>
        }
    </>
  )
}

export default Parrafo