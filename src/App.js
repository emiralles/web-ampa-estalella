// import './App.css';
// import Carousel from "./components/carousel/Carousel";
// import NavBar from "./components/navbar/NavBar";
import CardGroup from "./components/cardgroup/CardGroup";
// import FooterComponent from "./components/footer/Footer";
import Esdeveniments from "./components/esdeveniments/Esdeveniments";
import Noticies from "./components/noticies/Noticies";
import { Routes, Route} from "react-router-dom";
import Quisom from "./components/afa/Quisom";
import Comissions from "./components/afa/Comissions";
import Festesoci from "./components/afa/Festesoci";
import Acollida from "./components/serveis/Acollida";
import Menjador from "./components/serveis/Menjador";
import Extraescolars from "./components/serveis/Extraescolars";
import Contactans from "./components/afa/Contactans";
import Login from "./components/login/Login";
import WebPage from "./components/webpage/WebPage";
import LayoutAdmin from "./components/layout-admin/LayoutAdmin";
import FormulariEdicioMenjador from "./components/formularis-edicio-apartados/Formulari-edicio-menjador";
import FormulariEdicioAcollida from "./components/formularis-edicio-apartados/Formulari-edicio-acollida";
import FormulariEdicioComissions from "./components/formularis-edicio-apartados/Formulari-edicio-comissions";

function App() {
  return (
    <Routes>
      <Route path='/admin/login' element={<Login/>} />
      <Route path='/admin/index' element={<LayoutAdmin/>}>
        <Route path='/admin/index/mejador' element={<FormulariEdicioMenjador/>} />
        <Route path='/admin/index/acollida' element={<FormulariEdicioAcollida/>} />
        <Route path='/admin/index/comissions' element={<FormulariEdicioComissions/>} />
      </Route>
      <Route path='/' element={<WebPage/>} >
        <Route path='/' element={<CardGroup/>} />
        <Route path='/esdeveniments' element={<Esdeveniments/>} />
        <Route path='/noticies' element={<Noticies/>} />
        <Route path='/quisom' element={<Quisom/>} />
        <Route path='/comissions' element={<Comissions/>} />
        <Route path='/fer-se-soci' element={<Festesoci/>} />
        <Route path='/acollida' element={<Acollida/>} />
        <Route path='/menjador' element={<Menjador/>} />
        <Route path='/extraescolars' element={<Extraescolars/>} />
        <Route path='/contacta-ns' element={<Contactans/>} />
      </Route>
    </Routes>
  );
}

export default App;
