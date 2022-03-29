import './App.css';
import Carousel from "./components/carousel/Carousel";
import NavBar from "./components/navbar/NavBar";
import CardGroup from "./components/cardgroup/CardGroup";
import FooterComponent from "./components/footer/Footer";
import Esdeveniments from "./components/esdeveniments/Esdeveniments";
import { Routes, Route} from "react-router-dom";
import Quisom from "./components/afa/quisom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <Carousel/>
        <div className='container marketing'>
          <Routes>
            <Route path='/' element={<CardGroup/>} />
            <Route path='/esdeveniments' element={<Esdeveniments/>} />
            <Route path='/quisom' element={<Quisom/>} />
          </Routes>
        </div>
      </main>
      <footer className='App-Footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <FooterComponent/>
      </footer>
    </div>
  );
}

export default App;
