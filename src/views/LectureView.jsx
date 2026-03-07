import Navigation from "../components/Navigation";
import lectureOne from "../data/lecture-one.json";
import lectureTwo from "../data/lecture-two.json";
import lectureThree from "../data/lecture-three.json";
import Lecture from "../components/Lecture";
import { useParams } from "react-router-dom";

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
