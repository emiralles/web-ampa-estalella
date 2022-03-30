import imag1 from "../carousel/images/img2.jpg";

function CardGroup() {
    return (
        <>
            <hr className="featurette-divider"></hr>
            <div className="row">
                <div className="col-lg-4">
                    <a href="/">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                            <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">L'AFA</h2>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4">
                    <a href="/">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">SERVEIS</h2>
                        </div>        
                    </a>
                </div>
                <div className="col-lg-4">
                    <a href="/">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">ESPAI DE TRANSPARENCIA</h2>
                        </div>        
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 margin-left-col-lg-4">
                    <a href="/">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">NOTICIES</h2>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4">
                    <a href="/">
                        <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                            <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                        <div className='color-div-card'>
                            <h2 className="title-a-icon">ESDEVENIMENTS</h2>
                        </div>    
                    </a>
                </div>
                <div className="col-lg-4 d-none">
                    <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
                    <h2>Heading</h2>
                </div>
            </div>
            <hr className="featurette-divider"></hr>
        </>
    );
}

export default CardGroup;