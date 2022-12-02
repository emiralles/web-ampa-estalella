import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Icons from "bootstrap-icons/bootstrap-icons.svg";
import logo from "./images/LOGOTIP AFA DEFINITIU 26052022 VERD.png";
import './navBar.css';


function NavBar() {

    return (
        <AppBar>
            <Container maxWidth="xl">
            <Toolbar disableGutters color="green">
                     
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="Logo rounded-circle " src={logo} alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#home-collapse" id="navbarQuiSomDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#people-fill`}></use></svg>L'afa
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarQuiSomDropdown">
                                <li><a href="/quisom" className="dropdown-item">Qui som</a></li>
                                <li><a href="/comissions" className="dropdown-item">Comissions</a></li>
                                <li><a href="/fer-se-soci" className="dropdown-item">Fer-se-soci</a></li>
                                <li><a href="/contacta-ns" className="dropdown-item">Contacta'ns</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#serveis-collapse" id="navbarServeisDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#folder2`}></use></svg>Serveis
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="/acollida" className="dropdown-item">Acollida</a></li>
                                <li><a href="/menjador" className="dropdown-item">Menjador</a></li>
                                <li><a href="/extraescolars" className="dropdown-item">Extraescolars</a></li>
                                <li><a href="/equipament" className="dropdown-item">Equipament</a></li>
                                <li><a href="/casaldestiu" className="dropdown-item">Casal d'estiu</a></li>
                                <li><a href="/tardesestiu" className="dropdown-item">Tardes de juny</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#documents-collapse" id="navbarDocumentsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#person-rolodex`}></use></svg>Espai de transparència
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDocumentsDropdown">
                                <li><a href="/estatuts" className="dropdown-item">Estatuts</a></li>
                                <li><a href="fg" className="dropdown-item">Pressupost 2021-2022</a></li>
                                <li><a href="/actes" className="dropdown-item">Actes</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/noticies" id="navbarNoticiesDropdown" role="button"  aria-expanded="false">
                                <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#newspaper`}></use></svg>Noticies
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/esdeveniments" id="navbarExtraEscolaresDropdown" role="button" aria-expanded="false">
                                <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#calendar2-event`}></use></svg>Esdeveniments
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/admin/login" id="navbarLoginDropdown" role="button" aria-expanded="false">
                                <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#key`}></use></svg>Singin
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="container-fluid justify-content-end">
                <div className="nav-item text-nowrap rounded-2" style={{color:"azure!important"}}>
                    <a className=" px-3 rounded" style={{color:"azure!important"}} href="/admin/login">Singin</a>
                </div>
            </div> */}
        </nav>
        </Toolbar>
        </Container>
        </AppBar>
    );
}

export default NavBar;