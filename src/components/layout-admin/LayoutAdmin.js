// import logo from "../navbar/images/LOGOTIP AFA DEFINITIU 26052022 VERD.png";
import { useAuth } from "../../context/authContext";
import { Outlet } from "react-router-dom";
import  "./layout-admin.css";


function LayoutAdmin() {
    // const { signUp } = useAuth();
    const { logOut, loading }  = useAuth();
    // user, 

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logOut();
    }

    
    if (loading) return (<h1>Loading.....</h1>)
    return ( 
        <>
            <div className="body-layout-admin">
                <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow" style={{height:"5.5rem!important"}}>
                
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <a className="navbar-brand" href="/">
                    <img className="Logo rounded-circle" src={logo} alt="Logo"/>
                </a> */}
                <div className="navbar-nav styleLogout">
                    <div className="nav-item text-nowrap">
                    {/* <button className="nav-link px-3" onClick={handleSubmit}>Sign out</button> */}
                    <a className="nav-link px-3" onClick={handleSubmit} href="1">Sign out</a>
                    {/* <a className="nav-link px-3" href="#2">Sign out</a> */}
                    </div>
                </div>
                </header>
                
                <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#3">
                            Dashboard 
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/index/acollida">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> */}
                            Acollida
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/index/menjador">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> */}
                            Menjador
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/index/comissions">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> */}
                            Comissions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/index/extraescolars">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> */}
                            Extraescolars
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/index/esdeveniments">
                            Esdeveniments
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#7">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> */}
                            Reportes
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#8">
                            Integrations
                            </a>
                        </li> */}
                        </ul>
                
                        
                    </div>
                    </nav>
                
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        {/* <h1 className="h2">{user.displayName}</h1> */}
                        <div className="btn-toolbar mb-2 mb-md-0">
                        {/* <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            This week
                        </button> */}
                        </div>
                    </div>
                    <Outlet/>
                    </main>
                </div>
                </div>
                
                
                    {/* <script src="/docs/5.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> */}
                
                    {/* <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script><script src="dashboard.js"></script> */}
                
                
                </div>
        </>
     );
}

export default LayoutAdmin;