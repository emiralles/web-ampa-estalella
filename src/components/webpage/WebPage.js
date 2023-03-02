import '../../App.css';
import Carousel from "../carousel/Carousel";
//import NavBar from "../navbar/NavBar";
// import CardGroup from "../cardgroup/CardGroup";
// import Esdeveniments from "../esdeveniments/Esdeveniments";
import { Outlet, useLocation} from "react-router-dom";
// import Quisom from "../afa/Quisom";
// import Comissions from "../afa/Comissions";
// import Festesoci from "../afa/Festesoci";
// import Acollida from "../serveis/Acollida";
// import Menjador from "../serveis/Menjador";
// import Extraescolars from "../serveis/Extraescolars";
// import Contactans from "../afa/Contactans";
//import FooterComponent from "../footer/Footer";

import AppFooter from './appfooter/AppFooter'; //'./modules/views/AppFooter';
import AppAppBar from './appbar/AppAppBar'; //'./modules/views/AppAppBar';
import { useEffect, useState } from 'react';


function WebPage() {

    const[inicio,setInicio] = useState(0);
    const location = useLocation();


    useEffect(()=>{
        if (location.pathname === '/') {
            setInicio(0)
        }else{
            setInicio(1)
        }

    },[location])

    return ( 
        <>
            <AppAppBar />

            {
                inicio === 0 ? <Carousel/> : <div></div>
            }
            
            
            <div className='container marketing'>
                <Outlet/>
            </div>
            <AppFooter />
            {/* <div className="App">
                <header className="App-header">
                    <NavBar/>
                </header>
                <main>
                    <Carousel/>  
                    <div className='container marketing'>
                        <Outlet/>
                    </div>
                </main>
                <footer className='App-Footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
                    <FooterComponent/>
                </footer>
            </div> */}
            
        </>
     );
}

export default WebPage;