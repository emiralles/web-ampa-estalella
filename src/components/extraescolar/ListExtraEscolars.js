import CardExtraEscolar from "../extraescolar/CardExtraEscolar";

function ListExtraEscolars({arrayData, handleRemove, handleEdit, componentCall}) {
  
    if (!arrayData.length) return <h3>No existe ningun registro</h3>;    
    return (
        <>
        <hr className="featurette-divider"></hr>
        <div className="container text-center">
            <h1>Listat d'Extraescolars</h1>
            <div className="container mb-3">
            <div className="row align-content-center ">
                {
                    arrayData.map((extraescol,index) => (
                        <CardExtraEscolar Id={extraescol.Uid} path={extraescol.path} handleEdit={handleEdit} key={extraescol.Uid} titulo={extraescol.title} subTitle1={String.prototype.concat(extraescol.grupsToDo)} precio={extraescol.price} semanal={extraescol.howTimes} textoPrincipal={extraescol.parragraph} srcImage={extraescol.urlPhoto} handleRemove={handleRemove} componentCall={componentCall}/> 
                    ))
                }
            </div>
            </div>
        </div>
        </>
    )
}

export default ListExtraEscolars