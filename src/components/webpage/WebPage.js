import '../../App.css';
import Carousel from "../carousel/Carousel";
import { Outlet, useLocation} from "react-router-dom";
import AppFooter from './appfooter/AppFooter';
import AppAppBar from './appbar/AppAppBar';
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
            <div className='app-bar'>
                <AppAppBar />    
            </div>
            {
                inicio === 0 ? <Carousel/> : <div></div>
            }
            <div className='container'>
                <Outlet/>
                {/* cntt */}
            </div>
            <div className='footer-top'>
                <AppFooter />
            </div>
        </>
     );
}

export default WebPage;