// import imag1 from './images/img1.jpg'
import imag1 from './images/IMG_1028.JPG'
import imag2 from './images/IMG_1018.JPG'
import imag3 from './images/IMG_1029.JPG'


function Carousel() {
    return(
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="bd-placeholder-img" width="100%" height="100%" src={imag1} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt=""/>
            </div>
            <div className="carousel-item ">
                <img className="bd-placeholder-img" width="100%" height="100%" src={imag2} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt=""/>
            </div>
            <div className="carousel-item">
                <img className="bd-placeholder-img" width="100%" height="100%" src={imag3} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt=""/>
            </div>
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
    )
}

export default Carousel;