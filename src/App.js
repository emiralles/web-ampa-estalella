import {AuthProvider} from "./context/authContext";
import CardGroup from "./components/cardgroup/CardGroup";
import Esdeveniments from "./views/esdeveniments/ViewEsdeveniments";
import Noticies from "./views/noticies/ViewNoticies";
import { Routes, Route} from "react-router-dom";
import Quisom from "./views/afa/ViewQuisom";
import Comissions from "./views/afa/ViewComisions";
import Festesoci from "./views/afa/ViewFesteSoci";
import Contactans from "./views/afa/ViewContactans";
import Acollida from "./views/serveis/ViewAcollida";
import Menjador from "./views/serveis/ViewMenjador";
import Extraescolars from "./views/serveis/ViewExtraescolars";
import Login from "./views/login/ViewLogin";
import WebPage from "./components/webpage/WebPage";
import LayoutAdmin from "./views/layout-admin/ViewLayoutAdmin";
import FormulariEdicioQuiSom from "./views/formularis-edicio-apartados/View-edicio-QuiSom";
import FormulariEdicioFersesoci from "./views/formularis-edicio-apartados/View-edicio-fer-se-soci";
import FormulariEdicioMenjador from "./views/formularis-edicio-apartados/View-edicio-menjador";
import FormulariEdicioAcollida from "./views/formularis-edicio-apartados/View-edicio-acollida";
import FormulariEdicioComissions from "./views/formularis-edicio-apartados/View-edicio-comissions";
import FormulariEdicioEsdeveniments from "./views/formularis-edicio-apartados/View-edicio-Esdeveniments";
import FormulariEdicioNoticies from "./views/formularis-edicio-apartados/View-edicio-noticies";
import FormulariEdicioCarousel from "./views/formularis-edicio-apartados/View-edicio-carousel";
import FormulariEdicioTardesEstiu from "./views/formularis-edicio-apartados/View-edicio-Tardes-Juny";
import FormulariEdicioCasalEstiu from "./views/formularis-edicio-apartados/View-edicio-casalestiu";
import FormulariEdicioEquipament from "./views/formularis-edicio-apartados/View-edicio-Equipament";
import Actes from "./views/transparencia/ViewActes";
import Estatuts from "./views/transparencia/ViewEstatuts";
import Casaldestiu from "./views/serveis/ViewCasaldestiu";
import FormulariEdicioExtraescolars from "./views/formularis-edicio-apartados/View-edicio-extraescolars";
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
                <Route path='/admin/index/quisom' element={<ProtectedRoute children={<FormulariEdicioQuiSom/>}/>}/>
                <Route path='/admin/index/festesoci' element={<ProtectedRoute children={<FormulariEdicioFersesoci/>}/>}/>
                
                <Route path='/admin/index/menjador' element={<ProtectedRoute children={<FormulariEdicioMenjador/>}/>}/>
                <Route path='/admin/index/acollida' element={<ProtectedRoute children={<FormulariEdicioAcollida/>}/>}/>
                <Route path='/admin/index/comissions' element={<ProtectedRoute children={<FormulariEdicioComissions/>}/>}/>
                <Route path='/admin/index/extraescolars' element={<ProtectedRoute children={<FormulariEdicioExtraescolars/>}/>}/>
                <Route path='/admin/index/esdeveniments' element={<ProtectedRoute children={<FormulariEdicioEsdeveniments/>}/>}/>
                <Route path='/admin/index/noticies' element={<ProtectedRoute children={<FormulariEdicioNoticies/>}/>}/>
                <Route path='/admin/index/carousel' element={<ProtectedRoute children={<FormulariEdicioCarousel/>}/>}/>
                <Route path='/admin/index/tardesjuny' element={<ProtectedRoute children={<FormulariEdicioTardesEstiu/>}/>}/>
                <Route path='/admin/index/casalestiu' element={<ProtectedRoute children={<FormulariEdicioCasalEstiu/>}/>}/>
                <Route path='/admin/index/equipament' element={<ProtectedRoute children={<FormulariEdicioEquipament/>}/>}/>
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
