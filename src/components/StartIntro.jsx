import lectureOne from "../data/lecture-one.json";
import lectureTwo from "../data/lecture-two.json";
import lectureThree from "../data/lecture-three.json";
import TeaserLecture from "./TeaserLecture";

/*En sektion med 3 TeaserLekture, specificerar vilken data som används i respektive komponent med hjälp av respektive importerad lektions-json*/
function StartIntro() {
  return (
    <div className="d-flex flex-column flex-lg-row gap-4">
      <TeaserLecture data={lectureOne} />
      <TeaserLecture data={lectureTwo} />
      <TeaserLecture data={lectureThree} />
    </div>
  );
}

export default StartIntro;
