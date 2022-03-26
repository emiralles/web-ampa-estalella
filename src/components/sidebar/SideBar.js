import Icons from "bootstrap-icons/bootstrap-icons.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite} from '@fortawesome/free-solid-svg-icons'

// d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none
function SideBar() {
    return ( 
        <div className="flex-shrink-0 p-3 bg-white " style={{width:"280px",zIndex:70,position:"absolute"}}>
            <a href="#root-collapse" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom" data-bs-toggle="collapse" data-bs-target="#root-collapse" aria-expanded="true">
            <svg className="bi me-2" width="30" height="24"><use xlinkHref={`${Icons}#justify`}></use></svg>
            <span className="fs-5 fw-semibold"></span>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <a className="btn " href="/data/barra" type="submit">
                <svg className="bi me-2 svg-search" width="30" height="24"><use xlinkHref={`${Icons}#search`}></use></svg>
                </a>
            </form>
            </a>
            <div className="collapse" id="root-collapse">
                <ul className="list-unstyled text-align-left ps-0">
                    <li className=' m-0 p-0'>
                    <a className="btn " href="#home-collapse" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                        <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#people-fill`}></use></svg>L'afa
                    </a>
                    <div className="collapse" id="home-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pl-2 small">
                        <li><a href="fg" className="btn">Qui som</a></li>
                        <li><a href="fg" className="btn">Comissions</a></li>
                        <li><a href="fg" className="btn">Fer-se-soci</a></li>
                        </ul>
                    </div>
                    </li>
                    <li className="m-0 p-0">
                    <a className="btn " href="#serveis-collapse" data-bs-toggle="collapse" data-bs-target="#serveis-collapse" aria-expanded="false">
                    <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#folder2`}></use></svg>Serveis
                    </a>
                    <div className="collapse" id="serveis-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="fg" className="btn">Acollida</a></li>
                        <li><a href="fg" className="btn">Menjador</a></li>
                        <li><a href="fg" className="btn">Extraescolars</a></li>
                        <li><a href="fg" className="btn">Equipament</a></li>
                        <li><a href="fg" className="btn">Casal d'estiu</a></li>
                        <li><a href="fg" className="btn">Tardes de juny</a></li>
                        </ul>
                    </div>
                    </li>
                    <li className="m-0 p-0">
                    <a className="btn " href="#documents-collapse" data-bs-toggle="collapse" data-bs-target="#documents-collapse" aria-expanded="false">
                    <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#person-rolodex`}></use></svg>Espai de transparència
                    </a>
                    <div className="collapse" id="documents-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="fg" className="btn">Estatuts</a></li>
                        <li><a href="fg" className="btn">Pressupost 2021-2022</a></li>
                        <li><a href="fg" className="btn">Actes</a></li>
                        </ul>
                    </div>
                    </li>
                    <li className=' m-0 p-0'>
                    <a className="btn " href="#noticies-collapse" data-bs-toggle="collapse" data-bs-target="#noticies-collapse" aria-expanded="true">
                        <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#newspaper`}></use></svg>Noticies
                    </a>
                    </li>
                    <li className=' m-0 p-0'>
                    <a className="btn " href="#extraescolars-collapse" data-bs-toggle="collapse" data-bs-target="#extraescolars-collapse" aria-expanded="true">
                        <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#calendar2-event`}></use></svg>Esdeveniments
                    </a>
                    </li>
                </ul>
            </div>        
        </div>
 
    );
}

export default SideBar;