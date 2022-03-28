import './App.css';
import Carousel from "./components/carousel/Carousel";
import NavBar from "./components/navbar/NavBar";

import CardGroup from "./components/cardgroup/CardGroup";
import FooterComponent from "./components/footer/Footer";
import Esdeveniments from "./components/esdeveniments/Esdeveniments";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <Carousel/>
        <div className='container marketing'>
          <CardGroup/>
          <Esdeveniments/>
        </div>
      </main>
      <footer className='App-Footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <FooterComponent/>
      </footer>
    </div>
  );
}

export default App;
