import doneCarbon from "../../public/images/done-carbon-dioxide.png";
import doneTemperature from "../../public/images/done-global-temperature.png";
import beginGlacier from "../../public/images/begin-glacier.png";

function UserLectures() {
  return (
    <div className="d-flex flex-column-reverse gap-3 flex-lg-row justify-content-between align-items-center">
      <img src={doneCarbon} alt="Bild på koldioxutsläpp" />
      <img src={doneTemperature} alt="Bild på globala temperaturer" />
      <img src={beginGlacier} alt="Bild på glaciärstorlekar" />
    </div>
  );
}

export default UserLectures;
