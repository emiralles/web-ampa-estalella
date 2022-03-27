import './App.css';
import imag1 from "../src/components/carousel/images/img2.jpg";
import Carousel from "./components/carousel/Carousel";
import NavBar from "./components/navbar/NavBar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <Carousel/>
        <div className='container marketing'>
          <div className="row">
            <div className="col-lg-4">
              {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
              <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
              <h2>L'AFA</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div className="col-lg-4">
              {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
              <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
              <h2>SERVEIS</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            </div>
            <div className="col-lg-4">
              {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
              <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
              <h2>ESPAI DE TRANSPARENCIA</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 margin-left-col-lg-4">
              {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
              <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
              <h2>NOTICIES</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div className="col-lg-4">
              {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
              <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
              <h2>ESDEVENIMENTS</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            </div>
            <div className="col-lg-4 d-none">
              {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
              <img src={imag1} className="bd-placeholder-img rounded-circle" width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                <title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
              <h2>Heading</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
            </div>
          </div>
        </div>
        <footer className='container'>
          <p class="float-end"><a href="#">Back to top</a></p>
          <p>&copy; 2020–2022 AriaMath, S.A. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
      </main>
    </div>
  );
}

export default App;
