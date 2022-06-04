import RectangleCard from "./RectangleCard";

function ListRectangleCard({arrayData, handleEdit, handleRemove, componentCall, nameList}) {
    if (!arrayData.length) return <h3>No existe ningun registro</h3>;    
    return (
        <>
        <hr className="featurette-divider"></hr>
        <div className="container">
        {/* text-center */}
            <h1>{nameList}</h1>
            <div className="container mb-3">
            <div className="row">
            {/* align-content-center  */}
                {
                    arrayData.map((esdevenim,index) => (
                        <RectangleCard Id={esdevenim.uid} arrayData={esdevenim.cosHtml} path={esdevenim.path} classnameBody={index%2 === 0 ? "col-md-7":"col-md-7 order-md-2"} classnameImage={index%2 === 0 ? "col-md-5":"col-md-5 order-md-1"} handleEdit={handleEdit} key={esdevenim.uid} title={esdevenim.title}  urlImage={esdevenim.urlPhoto} handleRemove={handleRemove} componentcall={componentCall}/> 
                    ))
                }
            </div>
            </div>
        </div>
        </>
    )
}

export default ListRectangleCard