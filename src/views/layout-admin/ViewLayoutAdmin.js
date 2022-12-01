import { useAuth } from "../../context/authContext";
import { Outlet } from "react-router-dom";
import  "./layout-admin.css";
import Icons from "bootstrap-icons/bootstrap-icons.svg";

function ViewLayoutAdmin() {
    const { logOut, loading }  = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logOut();
    }

    
    if (loading) return (<h1>Loading.....</h1>)
    return ( 
        <>
            <div className="body-layout-admin" style={{height:"100%!important"}}>
                <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow" style={{height:"100%!important"}}>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-nav styleLogout">
                    <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" onClick={handleSubmit} href="1">Sign out</a>
                    </div>
                </div>
                </header>
                
                <div className="container-fluid layout-css" style={{height:"100%!important"}}>
                <div className="row row-layout" style={{height:"100%!important"}}>
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse navbarAdmin">
                        <div className="position-sticky pt-3 region-nav">
                            <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="/admin/index/carousel">
                                Carousel
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#home-collapse" id="navbarQuiSomDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#people-fill`}></use></svg>L'afa
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarQuiSomDropdown">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/index/quisom">
                                        Qui Som
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/index/comissions">
                                        Comissions
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/index/festesoci">
                                        Fer se soci
                                        </a>
                                    </li>
                                    <li><a href="/contacta-ns" className="dropdown-item">Contacta'ns</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#serveis-collapse" id="navbarServeisDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#folder2`}></use></svg>Serveis
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/index/acollida">
                                        Acollida
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/index/menjador">
                                        Menjador
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/index/extraescolars">
                                        Extraescolars
                                        </a>
                                    </li>
                                    <li><a href="/admin/index/equipament" className="dropdown-item">Equipament</a></li>
                                    <li><a href="/admin/index/casalestiu" className="dropdown-item">Casal d'estiu</a></li>
                                    <li><a href="/admin/index/tardesjuny" className="dropdown-item">Tardes de juny</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin/index/esdeveniments">
                                Esdeveniments
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin/index/noticies">
                                Noticies
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#7">
                                Reportes
                                </a>
                            </li>
                            </ul>
                        </div>
                    </nav>
                
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <div className="btn-toolbar mb-2 mb-md-0">
                        </div>
                    </div>
                    <Outlet/>
                    </main>
                </div>
                </div>
                </div>
        </>
     );
}

export default ViewLayoutAdmin;