import image1 from "./images/img1.jpg";
import "./cardGroup.css";

function CardGroup() {
    return (
        <>
            <div className="row">
                <div className="col-xs-3 col-sm-3">
                    <div className="card text-white">
                        <img src={image1} className="card-img" alt="..."/>
                        <div className="card-img-overlay" style={{paddingTop:"5rem!important",textAlign:"center"}}>
                            <h5 className="card-title">Qui Som</h5>
                            {/* <p className="card-text">This is a wider card</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-xs-3 col-sm-3">
                    <div className="card text-white">
                        <img src={image1} className="card-img" alt="..."/>
                        <div className="card-img-overlay" style={{paddingTop:"5rem!important",textAlign:"center"}}>
                            <h5 className="card-title">Noticies</h5>
                            {/* <p className="card-text">This is a wider card</p> */}
                        </div>
                    </div>    
                </div>
                <div className="col-xs-3 col-sm-3">
                    <div className="card text-white">
                        <img src={image1} className="card-img" alt="..."/>
                        <div className="card-img-overlay" style={{paddingTop:"5rem!important",textAlign:"center"}}>
                            <h5 className="card-title">Extraescolars</h5>
                            {/* <p className="card-text">This is a wider card</p> */}
                        </div>
                    </div>    
                </div>
                <div className="col-xs-3 col-sm-3">
                    <div className="card text-white">
                        <img src={image1} className="card-img" alt="..."/>
                        <div className="card-img-overlay" style={{paddingTop:"5rem!important",textAlign:"center"}}>
                            <h5 className="card-title">Serveis</h5>
                            {/* <p className="card-text">This is a wider card</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-4 col-sm-4">
                    <div className="card text-white">
                        <img src={image1} className="card-img img-1-card-row-2" alt="..."/>
                        <div className="card-img-overlay card-img-overlay-img-1-card-row-2" style={{paddingTop:"5rem!important",textAlign:"center"}}>
                            <h5 className="card-title">Documents</h5>
                            {/* <p className="card-text">This is a wider card</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-xs-4 col-sm-4">
                    <div className="card text-white">
                        <img src={image1} className="card-img img-2-card-row-2" alt="..."/>
                        <div className="card-img-overlay card-img-overlay-img-2-card-row-2" style={{paddingTop:"5rem!important",textAlign:"center"}}>
                            <h5 className="card-title">Families</h5>
                            {/* <p className="card-text">This is a wider card</p> */}
                        </div>
                    </div>    
                </div>
                <div className="col-xs-4 col-sm-4">
                    <div className="card text-white">
                        <img src={image1} className="card-img img-3-card-row-2" alt="..."/>
                        <div className="card-img-overlay card-img-overlay-img-3-card-row-2" style={{paddingTop:"5rem!important",textAlign:"center"}}>
                            <h5 className="card-title">Casal d'estiu</h5>
                            {/* <p className="card-text">This is a wider card</p> */}
                        </div>
                    </div>    
                </div>
            </div>  
        </>
        
        // <div className="card-group">
        //     <div class="card" style={{width:"18rem"}}>
        //         <img src={image1} class="card-img-top" alt="..."/>
        //         <div class="card-body">
        //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         </div>
        //     </div>
        //     <div class="card" style={{width:"18rem"}}>
        //         <img src={image1} class="card-img-top" alt="..."/>
        //         <div class="card-body">
        //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         </div>
        //     </div>
        //     <div class="card" style={{width:"18rem"}}>
        //         <img src={image1} class="card-img-top" alt="..."/>
        //         <div class="card-body">
        //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         </div>
        //     </div>
        //     <div class="card" style={{width:"18rem"}}>
        //         <img src={image1} class="card-img-top" alt="..."/>
        //         <div class="card-body">
        //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         </div>
        //     </div>
        //     <div className="card bg-dark text-white">
        //         <img src={image1} className="card-img" alt="..."/>
        //         <div className="card-img-overlay">
        //             <h5 className="card-title">Card title</h5>
        //             <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //             <p className="card-text">Last updated 3 mins ago</p>
        //         </div>
        //     </div>
        //     <div className="card bg-dark text-white">
        //         <img src={image1} className="card-img" alt="..."/>
        //         <div className="card-img-overlay">
        //             <h5 className="card-title">Card title</h5>
        //             <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //             <p className="card-text">Last updated 3 mins ago</p>
        //         </div>
        //     </div>
        // </div>
    );
}

export default CardGroup;