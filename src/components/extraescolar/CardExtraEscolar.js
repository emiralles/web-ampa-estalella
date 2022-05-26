
function CardExtraEscolar({Id,titulo,subTitle1,precio,semanal,textoPrincipal,srcImage,handleRemove,path,handleEdit,componentCall}) {
  
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

    return (
    <>
        <div className="card card-extraescolar mb-3 me-3 ms-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={srcImage} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    {
                        buttonsAdmin(componentCall)
                    }
                    {/* <div className="row g-0">
                        <div className="col-6">
                            <a href="#ass" name={Id} onClick={handleEdit} className="nav-link px-1" role="button" aria-disabled="true">Editar</a>
                        </div>
                        <div className="col-6">
                            <a href="#ass" name={`${Id} - ${path}`} onClick={handleRemove} className="nav-link px-1" role="button" aria-disabled="true">Eliminar</a>
                        </div>
                    </div> */}
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
        </div>
    </>
  )
}

export default CardExtraEscolar