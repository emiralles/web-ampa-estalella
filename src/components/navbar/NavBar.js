import Icons from "bootstrap-icons/bootstrap-icons.svg";
//import logo from "./images/LOGO AMPA V.jpg";
import logo from "./images/LOGOTIP AFA DEFINITIU 26052022 VERD.png";
import './navBar.css';
// import { Link } from "react-router-dom";
// d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block
function NavBar() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light ">
            {/* navbar navbar-expand-md navbar-dark fixed-top bg-dark navbar-style-mobil */}
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="Logo rounded-circle " src={logo} alt="Logo"/>
                    {/* <FontAwesomeIcon icon={estalellaImage}></FontAwesomeIcon> */}
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
                            <li><a href="fg" className="dropdown-item">Equipament</a></li>
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
                            {/* data-bs-toggle="dropdown" */}
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        {/* <Link className="nav-link dropdown-toggle" id="navbarExtraEscolaresDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/esdeveniments"><svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#calendar2-event`}></use></svg>Esdeveniments</Link> */}
                        <a className="nav-link dropdown-toggle" href="/esdeveniments" id="navbarExtraEscolaresDropdown" role="button" aria-expanded="false">
                        {/* className="nav-link "  data-bs-toggle="dropdown"  */}
                            <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#calendar2-event`}></use></svg>Esdeveniments
                        </a>
                    </li>
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <a className="btn btn-outline-success" href="qa" type="submit">
                        <svg className="bi me-2 svg-search" width="30" height="24"><use xlinkHref={`${Icons}#search`}></use></svg>
                    </a>
                </form> */}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;