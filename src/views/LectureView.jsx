import Navigation from "../components/Navigation";
import lectureOne from "../data/lecture-one.json";
import lectureTwo from "../data/lecture-two.json";
import lectureThree from "../data/lecture-three.json";
import Lecture from "../components/Lecture";

function LectureView() {
  return (
    <div>
      <Navigation isLoginPage={false} />
      <Lecture heading={lectureOne.title} />
    </div>
  );
}

export default LectureView;
