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
            <div className="carousel-item">
                {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                <img className="bd-placeholder-img" width="100%" height="100%" src={imag1} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt=""/>
                {/* <div className="container">
                <div className="carousel-caption text-start">
                    <h1>Example headline.</h1>
                    <p>Some representative placeholder content for the first slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="/">Sign up today</a></p>
                </div>
                </div> */}
            </div>
            <div className="carousel-item active">
                {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                <img className="bd-placeholder-img" width="100%" height="100%" src={imag2} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt=""/>
                {/* <div className="container">
                <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
                </div>
                </div> */}
            </div>
            <div className="carousel-item">
                {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                <img className="bd-placeholder-img" width="100%" height="100%" src={imag3} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt=""/>
                {/* <div className="container">
                <div className="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="/">Browse gallery</a></p>
                </div>
                </div> */}
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
    // return ( 
    //     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    //         <div className="carousel-indicators">
    //             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //         </div>
    //         <div className="carousel-inner">
    //             <div className="carousel-item active">
    //                 <img src={imag1} className="d-block w-100" alt="..."/>
    //             </div>
    //             <div class="carousel-item">
    //                 <img src={imag3} className="d-block w-100" alt="..."/>
    //             </div>
    //             <div class="carousel-item">
    //                 <img src={imag1} className="d-block w-100" alt="..."/>
    //             </div>
    //         </div>
    //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Previous</span>
    //         </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Next</span>
    //         </button>
    //     </div>
    //  );

}

export default Carousel;