// import imag1 from './images/IMG_1028.JPG'
// import imag2 from './images/IMG_1018.JPG'
// import imag3 from './images/IMG_1029.JPG'

import { useState, useEffect } from "react";
import { getAllCollections, getUrlImage } from "../../db/crudDB";
import { itemcarousel } from "../../models/itemCarousel";


function Carousel() {

    const [listEsdeveniments,setListEsdeveniments] = useState([]);

    useEffect(()=>{
   
        const handleLoad = async () =>{
        
          let promesa1 = getAllCollections('carousel');
          promesa1.then((resul)=>{
            resul.forEach((doc)=>{
              let imgUrl = getUrlImage(doc.path);
              imgUrl.then((rstUrl)=>{
                let item = new itemcarousel(doc.id,doc.path,"",doc.title,doc.dateCreation,doc.namePhoto,rstUrl); 
                setListEsdeveniments(arr => [...arr, item]);
              });
            })
          })
          
        }
        
        handleLoad();
    
    },[]);

    if(listEsdeveniments != null && listEsdeveniments.length > 0)
    {
        return(
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        listEsdeveniments.map((esdevenim,index) => {
                            return (
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={index} className={index === 0 ?"active":""} aria-label={`Slide ${index}`}></button>
                            )
                        })
                    }
                    {/* // <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    // <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    // <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button> */}
                </div>
                <div className="carousel-inner">
                
                    {
                        listEsdeveniments.map((esdevenim,index) => {
                            return (
                                <div className={index === 0 ? "carousel-item active":"carousel-item"}>
                                    <img className="bd-placeholder-img" width="100%" height="100%" src={esdevenim.urlPhoto} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt=""/>
                                </div>
                            )
                        })
                    }
                    
                    {/* <div className="carousel-item ">
                        <img className="bd-placeholder-img" width="100%" height="100%" src={imag2} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img className="bd-placeholder-img" width="100%" height="100%" src={imag3} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt=""/>
                    </div> */}
                
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
        
    }
    else
    {
        return(<></>);
    }
        
    
}

export default Carousel;