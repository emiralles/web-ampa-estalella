import ramon from "./images/ramon-grau-1r.jpg";
import dones from "./images/dones.jpg";
import lenguaCatalana from "./images/InmersioLenguaCatalana.jpg";

function Noticies() {
    // const id = "";
    return ( 
        <>
            <p className="lead">Vols estar al dia de totes les notícies de l’AFA? No et vols perdre cap activitat o esdeveniment? No ets de xarxes socials però no et vols perdre res del que es cou a l’AFA? Aquest és el teu lloc! L’actualitat més fresca de l’Afa a un sol clic. Aquí podràs trovar.</p>
            <hr className="featurette-divider"></hr>
                <a href="/galleria/Eyep6plhvLxzvCWFiGM0">
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Visita de l’escriptor <span className="text-muted">Ramon Grau.</span></h2>
                            <p className="lead">El passat 21/04/2022 ens ha visitat l’escriptor Ramon Grau per presentar-nos la novel·la infantil Vali la Valenta i la segona part de la història amb noves aventures.</p>
                            <p className="lead">Vali la valenta 2 és un llibre educatiu per als menuts, que reivindica a cada capítol els valors que ens fan créixer i ser més bones persones, com ara la voluntat d’entesa i el respecte als altres i al medi ambient.</p>
                        </div>
                        <div className="col-md-5">
                            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={ramon} alt=""/>
                        </div>
                    </div>
                </a>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Cartellera Dia de la Dona. <span className="text-muted"></span></h2>
                        <p className="lead">Per celebrar el dia de la Dona hem elaborat aquestes cartelleres on l’alumnat presentem a les nostres dones importants.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={dones} alt=""/>
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>
            <hr className="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Es busquen voluntaris per dinamitzar petits grups de conversa en català per a pares i mares a les <span className="text-muted">escoles.</span></h2>
                        <p className="lead">Es busquen persones voluntàries per a fer de dinamitzadores de petits grups de conversa en català a les escoles de Vilafranca.</p>
                        <p className="lead">A l'Estalella també es portarà a terme aquesta activitat una tarda a la setmana, de 15.15 a 16.15h. Es titula Xerrem junts, parlar per conviure. Les persones interessades en dinamitzar aquesta activitat rebran una petita formació per part de la CAL. Animeu-vos! Poseu-vos en contacte als telèfons 677 392 728 – 934 159 002</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={lenguaCatalana} alt=""/>
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>
            <hr className="featurette-divider"></hr>
        </>
     );
}

export default Noticies;