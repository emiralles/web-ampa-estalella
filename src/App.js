import {AuthProvider} from "./context/authContext";
import CardGroup from "./components/cardgroup/CardGroup";
import Esdeveniments from "./components/esdeveniments/Esdeveniments";
import Noticies from "./components/noticies/Noticies";
import { Routes, Route} from "react-router-dom";
import Quisom from "./views/afa/ViewQuisom";
import Comissions from "./views/afa/ViewComisions";
import Festesoci from "./views/afa/ViewFesteSoci";
import Contactans from "./views/afa/ViewContactans";
import Acollida from "./components/serveis/Acollida";
import Menjador from "./components/serveis/Menjador";
import Extraescolars from "./components/serveis/Extraescolars";
import Login from "./components/login/Login";
import WebPage from "./components/webpage/WebPage";
import LayoutAdmin from "./components/layout-admin/LayoutAdmin";
import FormulariEdicioMenjador from "./components/formularis-edicio-apartados/Formulari-edicio-menjador";
import FormulariEdicioAcollida from "./components/formularis-edicio-apartados/Formulari-edicio-acollida";
import FormulariEdicioComissions from "./components/formularis-edicio-apartados/Formulari-edicio-comissions";
import FormulariEdicioEsdeveniments from "./components/formularis-edicio-apartados/Formulari-edicio-Esdeveniments";
import FormulariEdicioNoticies from "./components/formularis-edicio-apartados/Formulari-edicio-noticies";
import Actes from "./components/transparencia/Actes";
import Estatuts from "./components/transparencia/Estatuts";
import Casaldestiu from "./components/serveis/Casaldestiu";
import FormulariEdicioExtraescolars from "./components/formularis-edicio-apartados/Formulari-edicio-extraescolars";
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";
import ViewTardesEstiu from "./views/ViewTardesEstiu";
import ViewGalleryImages from "./views/ViewGalleryImages";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
            <Route path='/admin/login' element={<Login/>} />
              <Route path='/admin/index' element={<ProtectedRoute children={<LayoutAdmin/>} />}>
                <Route path='/admin/index/menjador' element={<ProtectedRoute children={<FormulariEdicioMenjador/>}/>}/>
                <Route path='/admin/index/acollida' element={<ProtectedRoute children={<FormulariEdicioAcollida/>}/>}/>
                <Route path='/admin/index/comissions' element={<ProtectedRoute children={<FormulariEdicioComissions/>}/>}/>
                <Route path='/admin/index/extraescolars' element={<ProtectedRoute children={<FormulariEdicioExtraescolars/>}/>}/>
                <Route path='/admin/index/esdeveniments' element={<ProtectedRoute children={<FormulariEdicioEsdeveniments/>}/>}/>
                <Route path='/admin/index/noticies' element={<ProtectedRoute children={<FormulariEdicioNoticies/>}/>}/>
              </Route>
        </Routes>
      </AuthProvider>
      <Routes>
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
          <Route path='/actes' element={<Actes/>} />
          <Route path='/estatuts' element={<Estatuts/>} />
          <Route path='/casaldestiu' element={<Casaldestiu/>} />
          <Route path='/tardesestiu' element={<ViewTardesEstiu/>} />
          <Route path='/galleria/:id' element={<ViewGalleryImages/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
