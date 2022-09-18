
function Parrafo({data,componentcall, handleEdit, handleRemove}) {
    
    const buttonsAdmin = (componentcall) => {
        if (componentcall === "admin") {
            return(
                <div className="row g-0">
                    <div className="col-6">
                        <a href="#ass" name={data.uid} onClick={handleEdit} className="nav-link px-1 style-button-download" role="button" aria-disabled="true">Editar</a>
                    </div>
                    <div className="col-6">
                        <a href="#ass" name={data.uid} onClick={handleRemove} className="nav-link px-1 style-button-download" role="button" aria-disabled="true">Eliminar</a>
                    </div>
                </div>
            )    
        }else{
            return(
                <></>
            )
        }
        
    }

  if (!data) return <h3>No existe registro menjador</h3>;    
  return (
    <>
        {
            buttonsAdmin(componentcall)
        }
        <div className="video-responsive rounded" id="ivideoyoutube" dangerouslySetInnerHTML={{ __html: `${data.iframeYoutube}` }}>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Wox8BHyJ0XE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe> */}
        </div>
        <hr className="featurette-divider"></hr>
        <div id='textoHtml' dangerouslySetInnerHTML={{ __html: `${data.cosHtml}` }}>
            {/* <p className="fs-5 col-md-12">L’Escola Estalella i Graells disposa de cuina pròpia, cuineres i monitors/monitores, contractats per l’AMPA.</p>
            <p className="fs-5 col-md-12">Es garanteix el servei de menjador a tots els alumnes, tant fixos com esporàdics.</p>
            <div className="row g-5">
                <div className="col-md-12">
                    <p>Hi ha dos torns:</p>
                    <ul className="icon-list">
                        <li className="text-muted li-arrow">de 12.30 h a 13.30 h (1r torn)</li>
                        <li className="text-muted li-arrow">de 13.30 h a 14 h (2n torn)</li>
                    </ul>
                </div>
            </div>
            <p className="fs-5 col-md-12">El menjador es pot utilitzar amb un cost mensual, o bé de forma puntual. El preu del menú si es fan 3, 4 o 5 dies setmanals fixes és de 6,33€ i el preu del menú eventual és de 6,96€.</p>
            <p className="fs-5 col-md-12">Els menús estan elaborats amb el suport d’una dietista i realitzats amb productes de proximitat i ecològics. Els aliments que estan en color verd dins del menú són productes ecològics certificats per la CCPAE. També es senyalitzen al menú en color blau els aliments que porten al·lèrgens.</p> */}
        </div>
        
        <hr className="featurette-divider"></hr>
    </>
  )
}

export default Parrafo