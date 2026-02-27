import lectureOne from "../data/lecture-one.json";
import lectureTwo from "../data/lecture-two.json";
import lectureThree from "../data/lecture-three.json";
import LectureIntro from "./LectureIntro";
/*specificerar vilken json-data som används i respektive komponent med 
hjälp av data=... så att innehållet anpassas*/

function StartIntro() {
  return (
    <div className="d-flex flex-column flex-lg-row gap-4">
      <LectureIntro data={lectureOne} />
      <LectureIntro data={lectureTwo} />
      <LectureIntro data={lectureThree} />
    </div>
  );
}

export default StartIntro;
