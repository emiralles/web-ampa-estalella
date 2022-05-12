import imagen2 from "../serveis/images/ConsellEspotivoAltPenedes.PNG";

function CardExtraEscolar() {
  return (
    <>
        <div className="card card-extraescolar mb-3 me-3 ms-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagen2} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="row g-0">
                        <h5 className="card-title">Pilates de lunes y viernes123456</h5>
                    </div>
                    <div className="row g-0">
                        <p className="card-text text-end"><small className="text-muted ">Per Mares i Pares</small></p>
                    </div>
                    <div className="row g-0">
                        <p className="card-text text-end"><small className="text-muted">220€</small></p>
                    </div>
                    <div className="row g-0">
                        <p className="card-text text-end"><small className="text-muted">1 dia setmanal</small></p>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-12">
                    <div className="card-body">
                        <p className="card-text">Conjunt d’exercicis físics en els que s’entrena la musculatura, la resistència, la flexibilitat i el control de la respiració i la ment.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardExtraEscolar