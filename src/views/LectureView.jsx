import Navigation from "../components/navigation/Navigation";
import lectureOne from "../data/lecture-one.json";
import lectureTwo from "../data/lecture-two.json";
import lectureThree from "../data/lecture-three.json";
import Lecture from "../components/Lecture";
import { useParams } from "react-router-dom";

/*En vy som visar en specifik lektion baserat på id från URL:en. Väljer rätt lektionsdata och skickar den till Lecture, och visar Navigation.*/
function LectureView() {
  const params = useParams();
  let lectureData = null;

  if (params.id === "koldioxidutslapp") {
    lectureData = lectureOne;
  } else if (params.id === "globalatemperaturer") {
    lectureData = lectureTwo;
  } else if (params.id === "glaciarstorlekar") {
    lectureData = lectureThree;
  } else {
    console.log("lektionen finns inte");
  }

  return (
    <div>
      <Navigation isLoginPage={false} />
      <Lecture lectureData={lectureData} />
    </div>
  );
}

export default LectureView;
