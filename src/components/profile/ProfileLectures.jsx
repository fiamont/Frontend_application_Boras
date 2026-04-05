import doneCarbon from "../../assets/done-carbon-dioxide.png";
import doneTemperature from "../../assets/done-global-temperature.png";
import beginGlacier from "../../assets/begin-glacier.png";
import { Link } from "react-router-dom";

/*Visar en översikt över användarens lektioner med bilder som indikerar status, den ofärdiga länkar till den lektionsvyn*/
function ProfileLectures() {
  return (
    <div className="d-flex flex-column-reverse gap-3 flex-lg-row justify-content-between align-items-center">
      <img src={doneCarbon} alt="Bild på koldioxutsläpp" />
      <img src={doneTemperature} alt="Bild på globala temperaturer" />
      <Link to="/lektion/glaciarstorlekar">
        <img src={beginGlacier} alt="Bild på glaciärstorlekar" />
      </Link>
    </div>
  );
}

export default ProfileLectures;
