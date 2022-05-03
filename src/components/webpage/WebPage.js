import '../../App.css';
import Carousel from "../carousel/Carousel";
import NavBar from "../navbar/NavBar";
// import CardGroup from "../cardgroup/CardGroup";
// import Esdeveniments from "../esdeveniments/Esdeveniments";
import { Outlet} from "react-router-dom";
// import Quisom from "../afa/Quisom";
// import Comissions from "../afa/Comissions";
// import Festesoci from "../afa/Festesoci";
// import Acollida from "../serveis/Acollida";
// import Menjador from "../serveis/Menjador";
// import Extraescolars from "../serveis/Extraescolars";
// import Contactans from "../afa/Contactans";
import FooterComponent from "../footer/Footer";

function WebPage() {
    return ( 
        <>
            <div className="App">
                <header className="App-header">
                    <NavBar/>
                </header>
                <main>
                    <Carousel/>  
                    <div className='container marketing'>
                    <Outlet/>
                    {/* <Routes>
                        <Route path='/' element={<CardGroup/>} />
                        <Route path='/esdeveniments' element={<Esdeveniments/>} />
                        <Route path='/quisom' element={<Quisom/>} />
                        <Route path='/comissions' element={<Comissions/>} />
                        <Route path='/fer-se-soci' element={<Festesoci/>} />
                        <Route path='/acollida' element={<Acollida/>} />
                        <Route path='/menjador' element={<Menjador/>} />
                        <Route path='/extraescolars' element={<Extraescolars/>} />
                        <Route path='/contacta-ns' element={<Contactans/>} />
                    </Routes> */}
                    </div>
                </main>
                <footer className='App-Footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                    <FooterComponent/>
                </footer>
            </div>
            
        </>
     );
}

export default WebPage;