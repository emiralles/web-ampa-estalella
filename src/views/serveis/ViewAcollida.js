function ViewAcollida() {
    return ( 
        <>
            <hr className="featurette-divider"></hr>
            <div className="containerH1"><h1>Acollida</h1></div>
            <p className="fs-5 col-md-12">L’AMPA de l’escola Estalella i Graells ofereix un servei d’acollida matinal per tots aquells pares i mares i nens i nenes que ho necessitin.</p>
            <p className="fs-5 col-md-12">Les hores d’entrada són a les 7.50 h i a les 8.30 h.</p>
            <p className="fs-5 col-md-12">L’alumnat entrarà per la porta de consergeria.</p>
            <hr className="col-3 col-md-12 mb-5"></hr>
            <div className="row g-5">
                <div className="col-md-12">
                    <p className="fs-5 col-md-12">Els preus del servei d’acollida són:</p>
                    <hr className="col-3 col-md-2 mb-5"></hr>
                    <div className=" table-responsive-sm table-responsive-lg">
                        <table class="table">
                            <thead>
                                <th></th>
                                <td colspan="2" class="table-active">Preu socis AFA</td>
                                <td colspan="2" class="table-active">Preu no socis AFA</td>
                            </thead>
                            <tbody>
                                <tr class="table-active">
                                <th>Fixos mensuals: 1h</th>
                                <td colspan="2">40€</td>
                                <td colspan="2">50€</td>
                                </tr>
                                <tr>
                                <th>Fixos mensuals: 1/2h</th>
                                <td colspan="2">20€</td>
                                <td colspan="2">25€</td>
                                </tr>
                                <tr class="table-active">
                                <th>Eventuals: 1h</th>
                                <td colspan="2">3€</td>
                                <td colspan="2">4€</td>
                                </tr>
                                <tr>
                                <th>Eventuals: 1/2h</th>
                                <td colspan="2">1,5€</td>
                                <td colspan="2">2€</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider"></hr>
        </>
     );
}

export default ViewAcollida;