
function RectangleCard({Id,path,title,urlImage,arrayData, classnameBody, classnameImage, handleRemove, handleEdit, componentcall}) {

    const buttonsAdmin = (componentcall) => {
        if (componentcall === "admin") {
            return(
                <div className="row g-0">
                    <div className="col-6">
                        <a href="#ass" name={Id} onClick={handleEdit} className="nav-link px-1" role="button" aria-disabled="true">Editar</a>
                    </div>
                    <div className="col-6">
                        <a href="#ass" name={`${Id} - ${path}`} onClick={handleRemove} className="nav-link px-1" role="button" aria-disabled="true">Eliminar</a>
                    </div>
                </div>
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
                    <hr className="featurette-divider"></hr>
                    <div className="row featurette">
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
                    </div>
                </>
            )    
        }else{
            return(
                <>
                    <hr className="featurette-divider"></hr>
                    <a href={`/galleria/${Id}`}>
                        <div className="row featurette">
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
                        </div>
                    </a>
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