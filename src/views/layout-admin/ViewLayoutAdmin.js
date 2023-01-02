import { useState } from "react";

import { useAuth } from "../../context/authContext";
//import { Outlet } from "react-router-dom";
import  "./layout-admin.css";
//import Icons from "bootstrap-icons/bootstrap-icons.svg";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from './navigator/Navigator';
import Content from './content/Content';
import Header from './header/Header';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        {/* <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '} */}
        {new Date().getFullYear()}.
      </Typography>
    );
}

let theme = createTheme({
palette: {
    primary: {
    light: '#63ccff',
    main: '#009be5',
    dark: '#006db3',
    },
},
typography: {
    h5: {
    fontWeight: 500,
    fontSize: 26,
    letterSpacing: 0.5,
    },
},
shape: {
    borderRadius: 8,
},
components: {
    MuiTab: {
    defaultProps: {
        disableRipple: true,
    },
    },
},
mixins: {
    toolbar: {
    minHeight: 48,
    },
},
});

theme = {
...theme,
components: {
    MuiDrawer: {
    styleOverrides: {
        paper: {
        backgroundColor: '#081627',
        },
    },
    },
    MuiButton: {
    styleOverrides: {
        root: {
        textTransform: 'none',
        },
        contained: {
        boxShadow: 'none',
        '&:active': {
            boxShadow: 'none',
        },
        },
    },
    },
    MuiTabs: {
    styleOverrides: {
        root: {
        marginLeft: theme.spacing(1),
        },
        indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
        },
    },
    },
    MuiTab: {
    styleOverrides: {
        root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
        },
        },
    },
    },
    MuiIconButton: {
    styleOverrides: {
        root: {
        padding: theme.spacing(1),
        },
    },
    },
    MuiTooltip: {
    styleOverrides: {
        tooltip: {
        borderRadius: 4,
        },
    },
    },
    MuiDivider: {
    styleOverrides: {
        root: {
        backgroundColor: 'rgb(255,255,255,0.15)',
        },
    },
    },
    MuiListItemButton: {
    styleOverrides: {
        root: {
        '&.Mui-selected': {
            color: '#4fc3f7',
        },
        },
    },
    },
    MuiListItemText: {
    styleOverrides: {
        primary: {
        fontSize: 14,
        fontWeight: theme.typography.fontWeightMedium,
        },
    },
    },
    MuiListItemIcon: {
    styleOverrides: {
        root: {
        color: 'inherit',
        minWidth: 'auto',
        marginRight: theme.spacing(2),
        '& svg': {
            fontSize: 20,
        },
        },
    },
    },
    MuiAvatar: {
    styleOverrides: {
        root: {
        width: 32,
        height: 32,
        },
    },
    },
},
};

const drawerWidth = 256;

function ViewLayoutAdmin() {
    const [mobileOpen, setMobileOpen] = useState(false); //useState(false);
    
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const { logOut, loading }  = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logOut();
    }

    
    if (loading) return (<h1>Loading.....</h1>)
    
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };
    
    
    return ( 
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                    <CssBaseline />
                    <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    >
                    {isSmUp ? null : (
                        <Navigator
                        PaperProps={{ style: { width: drawerWidth } }}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        />
                    )}

                    <Navigator
                        PaperProps={{ style: { width: drawerWidth } }}
                        sx={{ display: { sm: 'block', xs: 'none' } }}
                    />
                    </Box>
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Header onDrawerToggle={handleDrawerToggle} />
                    <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                        <Content />
                    </Box>
                    <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                        <Copyright />
                    </Box>
                    </Box>
                </Box>
            </ThemeProvider>
            
            {/* <div className="body-layout-admin" style={{height:"100%!important"}}>
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
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#serveis-collapse" id="navbarServeisDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg className="bi" width="30" height="24"><use xlinkHref={`${Icons}#folder2`}></use></svg>Espai d'transparència
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/admin/index/acollida">
                                            Estatus
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/admin/index/menjador">
                                            Pressupostos
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/admin/index/extraescolars">
                                            Actes
                                            </a>
                                        </li>
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
            </div> */}
        </>
     );
}

export default ViewLayoutAdmin;