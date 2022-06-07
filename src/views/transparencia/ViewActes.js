function ViewActes() {
    return ( 
        <>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <h1 className="featurette-heading">Actes <span className="text-muted"></span></h1>
                    <p className="lead">La missió de l’AFA és representar els pares i mares dels alumnes i creiem que, per a fer-ho, és imprescindible gestionar l’Associació de forma transparent i fomentant la participació dels socis i sòcies.</p>
                    <p className="lead">Per aquesta raó, posem a la vostra disposició en aquesta pàgina tota la documentació de gestió de l’entitat: actes de les Assemblees de Socis, actes de la junta directiva, convenis de col·laboració, documents de gestió econòmica, etc.</p>
                    <h5 className="lead">Curs 2021-2022</h5>
                    <p className="lead">Actes de les assemblees de socis de l’AMPA</p>
                    <div className=" table-responsive-sm table-responsive-lg">
                        <table class="table">
                            <thead>
                                {/* <th></th> */}
                                <td colspan="2" class="table-active">Data</td>
                                <td colspan="2" class="table-active">Acte</td>
                            </thead>
                            <tbody>
                                <tr>
                                <td colspan="2">18.11.2021</td>
                                <td colspan="2"><a href="https://agora.xtec.cat/ceipestalella/wp-content/uploads/usu318/2022/03/Acta-assemblea-18.11.2021.pdf" target="_blank" rel="noreferrer">Asamblea 18.11.2021</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            <hr className="featurette-divider"></hr>
        </>
     );
}

export default ViewActes;