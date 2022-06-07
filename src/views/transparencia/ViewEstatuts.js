function ViewEstatuts() {
    return ( 
        <>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <h1 className="featurette-heading">Estatuts <span className="text-muted"></span></h1>
                    <p className="lead">A continuació indiquem els estatuts de l’Associació de Mares i Pares d’Alumnes de l’escola.</p>
                    <p className="lead">Estatuts: Estatuts AFA Estalella i Graells (Aprovats a l’ActaAssembleaEstatuts).</p>
                    <h5 className="lead">Curs 2021-2022</h5>
                    {/* <p className="lead">Actes de les assemblees de socis de l’AMPA</p> */}
                    <div className=" table-responsive-sm table-responsive-lg">
                        <table class="table">
                            <thead>
                                {/* <th></th> */}
                                <td colspan="2" class="table-active">Data</td>
                                <td colspan="2" class="table-active">Fixe</td>
                            </thead>
                            <tbody>
                                <tr>
                                <td colspan="2">2021-2022</td>
                                <td colspan="2"><a href="https://agora.xtec.cat/ceipestalella/wp-content/uploads/usu318/2022/03/estatuts-2.pdf" target="_blank" rel="noreferrer">Estatut 2021-2022</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            <hr className="featurette-divider"></hr>
        </>
     );
}

export default ViewEstatuts;