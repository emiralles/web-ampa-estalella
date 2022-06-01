import tardesjune2022 from "./images/TardesEstiu2022.PNG";

function ViewTardesEstiu() {
  return (
    <>
        <hr className="featurette-divider"></hr>
            <div className="row featurette">
                <div className="col-md-7 order-2">
                    <h2 className="featurette-heading mt-5">TARDES DE JUNY 2022</h2>
                    <p className="bold">DEL 7 AL 22 DE JUNY, HORARI: DE 15:30 A 17:00</p>
                    <p className="bold">PERÍODE D’INSCRIPCIONS: Del 10 al 20 de maig</p>
                    <p className="lead">Cal enviar el resguard de l’ingrés bancari junt amb la inscripció a <a href="extraescolars@estalella.cat">extraescolars@estalella.cat</a></p>
                    <p className="bold">Preu</p>
                    <ul>
                        <li>40€ alumne/a per a famílies sòcies de l’AMPA/AFA</li>
                        <li>50€ alumne/a per a famílies NO sòcies de l’AMPA/AFA</li>
                    </ul>
                    <p className="bold">FORMA DE PAGAMENT</p>
                    <p className="lead">Ingrés bancari als caixers automàtics del Banc Sabadell (codi pin 1603) o transferència al compte: ES32 0081 0046 1900 0166 6770 de la mateixa entitat indicant el nom de l’alumne/a i el curs que fa</p>
                    <p className="lead">*L’AMPA es reserva el dret d’anul·lar l’activitat si el nombre d’alumnes inscrits no és suficient. Aquest serà l’únic cas en què es retornarà la quota.</p>
                </div>
                <div className="col-md-5 order-1 ">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto pt-5 " style={{paddingTop:"20%!important"}} width="700" height="950"  src={tardesjune2022} alt=""/>
                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                </div>
            </div>
        <hr className="featurette-divider"></hr>
            
    </>
  )
}

export default ViewTardesEstiu;