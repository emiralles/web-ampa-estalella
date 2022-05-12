import imagen2 from "../serveis/images/ConsellEspotivoAltPenedes.PNG";

function CardExtraEscolar() {
  return (
    <>
        <div class="card card-extraescolar mb-3 me-3 ms-3">
            <div className="row g-0">
                <div class="col-md-4">
                    <img src={imagen2} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="row g-0">
                        <h5 class="card-title">Pilates de lunes y viernes123456</h5>
                    </div>
                    <div class="row g-0">
                        <p class="card-text text-end"><small class="text-muted ">Per Mares i Pares</small></p>
                    </div>
                    <div class="row g-0">
                        <p class="card-text text-end"><small class="text-muted">220€</small></p>
                    </div>
                    <div class="row g-0">
                        <p class="card-text text-end"><small class="text-muted">1 dia setmanal</small></p>
                    </div>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-md-12">
                    <div class="card-body">
                        <p class="card-text">Conjunt d’exercicis físics en els que s’entrena la musculatura, la resistència, la flexibilitat i el control de la respiració i la ment.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardExtraEscolar