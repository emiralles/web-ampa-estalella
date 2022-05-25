
function RectangleCard({title,urlImage,arrayData, classnameBody, classnameImage}) {
  return (
    <>
        <hr className="featurette-divider"></hr>
            <div className="row featurette">
                <div className={classnameBody}>
                    <h2 className="featurette-heading"><span className="text-muted">{title}</span></h2>
                    {
                        arrayData.map((item,index) => (
                          <p className="lead">{item}</p>  
                        ))
                    }
                </div>
                <div className={classnameImage}>
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={urlImage} alt=""/>
                </div>
            </div>
    </>
  )
}

export default RectangleCard