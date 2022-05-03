import carnestoltes from "./images/carnestoltes.jpg";
import santjordi from "./images/SantJordi2022.JPG";

function Esdeveniments() {
    return ( 
        <>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading"><span className="text-muted">Festa de fi de curs.</span></h2>
                        <p className="lead">Tradicionalment és un dinar obert a totes les famílies de l’escola. Està especialment pensada per a dir el adéu als alumnes de 6è i la resta acomiadar-nos fins el curs vinent.</p>
                        <p className="lead">T’agradaria formar part d’alguna comissió? No dubtis a escriure a aquesta adreça: ampa.estalella.i.graells@gmail.com</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={carnestoltes} alt=""/>
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading"><span className="text-muted">CARNESTOLTES</span></h2>
                        <p className="lead">Apunta’t a la comparsa musical! Des de l’inici de curs hi ha un grup de pares i mares de diferents cursos que preparem la comparsa musical.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={carnestoltes} alt=""/>
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading"><span className="text-muted">Sant Jordi 2022</span></h2>
                        <p className="lead">Hem celebrat la diada de Sant Jordi amb una mica més de normalitat I sense mascaretes! Ha estat un matí on hem pogut gaudir de diferents activitats, tant a l’interior com a l’exterior de l’escola, aprofitant el sol que que ens ha acompanyat.</p>
                        <p className="lead">Feliç diada per a tothom!</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={santjordi} alt=""/>
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>
            <hr className="featurette-divider"></hr>
        </>
    );
}

export default Esdeveniments;