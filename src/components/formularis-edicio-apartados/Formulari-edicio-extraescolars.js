import ExtraEscolar from "../extraescolar/ExtraEscolar";
import CardExtraEscolar from "../extraescolar/CardExtraEscolar";
import "./css/formulari-edicio-extraescolars.css";

function FormulariEdicioExtraescolars() {
  return (
    <>
      <ExtraEscolar/>
      <hr className="featurette-divider"></hr>
      <div className="container text-center">
        <h1>Listat d'Extraescolars</h1>
        <div className="container mb-3">
          <div className="row align-content-center ">
            <CardExtraEscolar/>
            <CardExtraEscolar/>
            <CardExtraEscolar/>
          </div>
        </div>
      </div>
    </>
  )
}
 
export default FormulariEdicioExtraescolars


