import './App.css';
import Carousel from "./components/carousel/Carousel";
import NavBar from "./components/navbar/NavBar";
import CardGroup from "./components/cardgroup/CardGroup";
import FooterComponent from "./components/footer/Footer";
import Esdeveniments from "./components/esdeveniments/Esdeveniments";
import { Routes, Route} from "react-router-dom";
import Quisom from "./components/afa/Quisom";
import Comissions from "./components/afa/Comissions";
import Festesoci from "./components/afa/Festesoci";
import Acollida from "./components/serveis/Acollida";
import Menjador from "./components/serveis/Menjador";
import Extraescolars from "./components/serveis/Extraescolars";
import Contactans from "./components/afa/Contactans";

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
            <Route path='/comissions' element={<Comissions/>} />
            <Route path='/fer-se-soci' element={<Festesoci/>} />
            <Route path='/acollida' element={<Acollida/>} />
            <Route path='/menjador' element={<Menjador/>} />
            <Route path='/extraescolars' element={<Extraescolars/>} />
            <Route path='/contacta-ns' element={<Contactans/>} />
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
