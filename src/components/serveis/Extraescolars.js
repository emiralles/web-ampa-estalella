import {useState, useEffect} from "react";
import { getAllCollections, getUrlImage } from "../../db/crudDB";
import { extraEscolars } from "../../models/extraescolars";
import ListExtraEscolars from "../extraescolar/ListExtraEscolars";


// import imagen1 from "./images/TbKids.PNG";
// import imagen2 from "./images/ConsellEspotivoAltPenedes.PNG";
// import imagen3 from "./images/JudoVilafranca.PNG";
// import imagen4 from "./images/KLleure.PNG";
import imagen5 from "./images/HorarisExtraEscolars.PNG";

function Extraescolars() {

    const [listExtraEscolar, setListExtraEscolar] = useState([]); //extraEscolars
    // const [isTrue, setTrue] = useState(false);
    let origen = "vista";

    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('extraescolar');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.urlPhoto);
              imgUrl.then((rstUrl)=>{
                let item = new extraEscolars(doc.id,doc.urlPhoto,doc.plazas,doc.title,doc.parragraph,doc.dateStart,doc.dateEnd,doc.mainText,doc.namePhoto,rstUrl,doc.whenDo,doc.howTimes,doc.price,doc.grupsToDo);
                setListExtraEscolar(arr => [...arr, item]);
              });
            })
          })
          
        }
        
        handleLoad();
    
    },[]);
    

    return (  
        <>
            <hr className="featurette-divider"></hr>
            <div className="containerH1"><h1>Extraescolars</h1></div>
            <p className="fs-5 col-md-12">L’AMPA de l’Escola Estalella i Graells ofereix activitats extraescolars de qualitat, atractives i que complementen l’ensenyament lectiu. Esperem que compleixin amb les vostres preferències i interessos i que les gaudiu molt!</p>
            {/* <hr className="col-3 col-md-12 mb-5"></hr> */}
            {
                <ListExtraEscolars arrayData={listExtraEscolar} componentCall={origen}/>
            }

            {/* <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                        <div className="card shadow-sm">
                            <div className="container container-background">
                                <div className="row row-cols-2">
                                    <div className=" col-sm-8 col-md-8 title-row-principal">Robotica</div>
                                    <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen1} alt="" /></div>
                                </div>
                                <div className="row row-cols-3 col-row-subtitle">
                                    <div className=" col-sm-4 col-md-4 col-text-4">1r a 6e</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">280€</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Introducció a la robòtica, investigació del funcionament de màquines, mecanismes i programació utilitzant els primers sensors. Programació amb un coneixement previ adquirit, dissenyant, construint i programant el propi robot o resolent diferents missions en un tauler de joc.</p>
                                <p className="card-text"></p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <div className="container container-background-verdeAmarillo">
                                <div className="row row-cols-2">
                                    <div className=" col-sm-8 col-md-8 title-row-principal">PLAY ENGLISH</div>
                                    <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen4} alt="" /></div>
                                </div>
                                <div className="row row-cols-3 col-row-subtitle">
                                    <div className=" col-sm-4 col-md-4 col-text-4">P4 a 6è</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">160€ MIGDIA/180€ TARDA</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                </div>
                            </div>
                            <div className="card-body">
                            <p className="card-text">Aquesta activitat està pensada perquè els nens i les nenes, dels més petits als més grans, puguin aprendre o bé reforçar l'idioma d'una manera lúdica i divertida. Ens adaptem a les necessitats, gustos i preferències dels alumnes. Classes 100% en anglès.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <div className="container container-background">
                                <div className="row row-cols-2">
                                    <div className=" col-sm-8 col-md-8 title-row-principal">TARDA DE SOMNIS I CREA JOCS</div>
                                    <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen4} alt="" /></div>
                                </div>
                                <div className="row row-cols-3 col-row-subtitle">
                                    <div className=" col-sm-4 col-md-4 col-text-4">P4 a P5</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">175€</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                </div>
                            </div>
                            <div className="card-body">
                            <p className="card-text">Realitzarem dues activitats que s'aniran alternant durant el curs:</p>
                            <p className="card-text">TARDADE SOMNIS: Prenent com a partida un bagul màgic, els petits gaudiran a cada sessió d'una activitat sorpresa. L'activitat els introdueix en el món del teatre, l'expressió corporal, creativa i plàstica de manera lúdica i engrescadora.</p>
                            <p className="card-text">CREA-JOC: Es tracta d'un activitat on els infants crearan les seves pròpies joguines tot desenvolupant la seva creativitat i motricitat fina per aconseguir els seus propis objectius fent manualitats. Fomentarem el joc creatiu per tal que els nens i les nenes valorin el treball individual.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col">
                        <div className="card shadow-sm">
                            <div className="container container-background-verdeAmarillo">
                                <div className="row row-cols-2">
                                    <div className=" col-sm-8 col-md-8 title-row-principal">Dancefusion</div>
                                    <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen4} alt="" /></div>
                                </div>
                                <div className="row row-cols-3 col-row-subtitle">
                                    <div className=" col-sm-4 col-md-4 col-text-4">P4 a 6è</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">175€</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                </div>
                            </div>
                            <div className="card-body">
                            <p className="card-text">Coreografies pensades i estructurades per a cada edat i evolució psicomotriu, segons cada etapa. Aquesta activitat permetrà aprendre coreografies amb diferents estils de música i ritme.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <div className="container container-background">
                                <div className="row row-cols-2">
                                    <div className=" col-sm-8 col-md-8 title-row-principal">DIBUIX ARTÍSTIC I MANUALITATS</div>
                                    <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen2} alt="" /></div>
                                </div>
                                <div className="row row-cols-3 col-row-subtitle">
                                    <div className=" col-sm-4 col-md-4 col-text-4">P3 a 6è</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">175€ MIGDIA/200€ TARDA</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                </div>
                            </div>

                            <div className="card-body">
                            <p className="card-text">En aquesta activitat es practiquen una gran varietat de tècniques de dibuix, tot provant diferents materials de dibuix i pintura. Independentment del nivell que tinguin els infants, treballarem en dues aules i amb grups per edats.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card shadow-sm">
                            <div className="container container-background-verdeAmarillo">
                                <div className="row row-cols-2">
                                    <div className=" col-sm-8 col-md-8 title-row-principal">TEATRE</div>
                                    <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen4} alt="" /></div>
                                </div>
                                <div className="row row-cols-3 col-row-subtitle">
                                    <div className=" col-sm-4 col-md-4 col-text-4">P4 a 6è</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">175€</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                </div>
                            </div>

                            <div className="card-body">
                            <p className="card-text">L'activitat de teatre pretén fomentar la cultura teatral. Per això cal aprendre a interpretar, a improvisar, a expressar-se corporalment, a treballar en grup, a comunicar-se, a perdre la vergonya en públic, etc.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col">
                        <div className="card shadow-sm">
                            <div className="container container-background">
                                <div className="row row-cols-2">
                                    <div className=" col-sm-8 col-md-8 title-row-principal">Iniciació a l'esport </div>
                                    <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen2} alt="" /></div>
                                </div>
                                <div className="row row-cols-3 col-row-subtitle">
                                    <div className=" col-sm-4 col-md-4 col-text-4">P3 a 2n</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">175€</div>
                                    <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                </div>
                            </div>

                            <div className="card-body">
                            <p className="card-text">En aquesta activitat es donen les eines bàsiques per al coneixement de diferents esports (iniciació als esports) des d'una vessant lúdica, esportiva i molt poc competitiva. Es fomenta el respecte, la participació i el compromís a través de diversos jocs esportius adequats a les edats amb les quals es treballa. Els infants participaran en les trobades dels jocs esportius escolars (JESPE). </p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <div className="container container-background-verdeAmarillo">
                                    <div className="row row-cols-2">
                                        <div className=" col-sm-8 col-md-8 title-row-principal">PATINATGE</div>
                                        <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen2} alt="" /></div>
                                    </div>
                                    <div className="row row-cols-3 col-row-subtitle">
                                        <div className=" col-sm-4 col-md-4 col-text-4">P4 a 6è</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">175€</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                    </div>
                                </div>

                                <div className="card-body">
                                <p className="card-text">És una manera de fer esport col·lectivament. Es treballa l'agilitat, l'equilibri... i es lliga l'esforç individual amb el treball en grup a través de coreografies adequades segons les edats. És necessari que cada infant dugui els seus propis patins.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <div className="container container-background">
                                    <div className="row row-cols-2">
                                        <div className=" col-sm-8 col-md-8 title-row-principal">ESPORTS voleibol bàsquet futbol sala</div>
                                        <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen2} alt="" /></div>
                                    </div>
                                    <div className="row row-cols-3 col-row-subtitle">
                                        <div className=" col-sm-4 col-md-4 col-text-4">3r a 6è</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">275€</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">2 dies setmanals</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Són tres activitats diferents. Es treballen aspectes com la cohesió, el sentiment de grup, el respecte, l'esportivitat... Aquests esports, voleibol, bàsquet i futbol sala, són programats d’acord amb els jocs esportius escolars (JESPE), fet que implica no només la participació en l'activitat dels infants durant les tardes a l'escola, sinó també la participació en competicions de caire escolar. El preu de l’activitat inclou la fitxa del JESPE i l'equipatge. Es farà un equip benjamí (3r i 4t) i un equip aleví (5è i 6è) sempre que s'arribi al mínim necessari per dividir cada grup. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <div className="container container-background-verdeAmarillo">
                                    <div className="row row-cols-2">
                                        <div className=" col-sm-8 col-md-8 title-row-principal">Judo</div>
                                        <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen3} alt="" /></div>
                                    </div>
                                    <div className="row row-cols-3 col-row-subtitle">
                                        <div className=" col-sm-4 col-md-4 col-text-4">1r a 6è</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">175€</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Art marcial per excel·lència. La pràctica del judo desenvolupa les habilitats psicomotrius bàsiques, l’equilibri, la resistència, la flexibilitat, la coordinació i la força. Ho fa des del control i el coneixement de les possibilitats de moviment del cos. Ajuda a reconèixer les pròpies habilitats fomentant l’autocontrol, els valors de respecte, responsabilitat i superació personal.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <div className="container container-background">
                                    <div className="row row-cols-2">
                                        <div className=" col-sm-8 col-md-8 title-row-principal">SCOOTER</div>
                                        <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen4} alt="" /></div>
                                    </div>
                                    <div className="row row-cols-3 col-row-subtitle">
                                        <div className=" col-sm-4 col-md-4 col-text-4">1r a 6è</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">275€</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Grups d'iniciació, nivell mitjà i perfeccionament. Amb circuits, rampes, barres, box… Es proporcionarà el material personal, cascs i proteccions pels infants que participin en aquesta activitat. Separem els nens i les nenes segons les seves aptituds en aquest esport.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <div className="container container-background-verdeAmarillo">
                                    <div className="row row-cols-2">
                                        <div className=" col-sm-8 col-md-8 title-row-principal">PILATES</div>
                                        <div className=" col-sm-4 col-md-4 div-imagen-extraescolar"><img className="imagen-extraescolar" src={imagen2} alt="" /></div>
                                    </div>
                                    <div className="row row-cols-3 col-row-subtitle">
                                        <div className=" col-sm-4 col-md-4 col-text-4">PER MARES I PARES</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">220€</div>
                                        <div className=" col-sm-4 col-md-4 col-text-4">1 dia setmanal</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Conjunt d’exercicis físics en els que s’entrena la musculatura, la resistència, la flexibilitat i el control de la respiració i la ment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <hr className="featurette-divider"></hr>
            <div className="row g-5">
                <div className="col-md-12">
                    <h2>Horaris Extraescolars</h2>
                    <hr className="col-3 col-md-2 mb-5"></hr>
                </div>
            </div>
            <div className="div-image-horaris-extraescolars">
                <img src={imagen5} alt=""/>
            </div>
            <hr className="featurette-divider"></hr>
        </>
    );
}

export default Extraescolars;