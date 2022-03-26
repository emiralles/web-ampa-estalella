import './App.css';
// import SideBar from "./components/sidebar/SideBar";
import Carousel from "./components/carousel/Carousel";
import NavBar from "./components/navbar/NavBar";
// import CardGroup from "./components/cardgroup/CardGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <SideBar/> */}
        <Carousel/>
      </header>
      <body>
        <h1>body</h1>
        {/* <div className='body-card-group'>
          <div className="row">
            <div className="col-xs-1 col-sm-1">
            </div>
            <div className="col-xs-10 col-sm-10">
              <CardGroup/>
            </div>
            <div className="col-xs-1 col-sm-1">
            </div>
          </div>
        </div> */}
      </body>
    </div>
  );
}

export default App;
