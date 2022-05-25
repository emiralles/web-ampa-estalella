// import imagen2 from "../serveis/images/ConsellEspotivoAltPenedes.PNG";
// import imagen3 from "../afa/images/IMG_1058.JPG";

function CardExtraEscolar({Id,titulo,subTitle1,precio,semanal,textoPrincipal,srcImage,handleRemove,path,handleEdit}) {
  return (
    <>
        <div className="card card-extraescolar mb-3 me-3 ms-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={srcImage} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="row g-0">
                        {/* <div className="col-2"></div> */}
                        <div className="col-6">
                            <a href="#ass" name={Id} onClick={handleEdit} className="nav-link px-1" role="button" aria-disabled="true">Editar</a>
                            {/* btn btn-secondary disabled */}
                        </div>
                        <div className="col-6">
                            <a href="#ass" name={`${Id} - ${path}`} onClick={handleRemove} className="nav-link px-1" role="button" aria-disabled="true">Eliminar</a>
                            {/* btn btn-secondary disabled */}
                        </div>
                    </div>
                    <div className="row g-0">
                        <h5 className="card-title">{titulo}</h5>
                        {/* Pilates de lunes y viernes123456 */}
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
                        {/* Conjunt d’exercicis físics en els que s’entrena la musculatura, la resistència, la flexibilitat i el control de la respiració i la ment. */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardExtraEscolar