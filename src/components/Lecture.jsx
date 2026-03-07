import LectureButton from "./LectureButton";
import InteractiveChart from "./InteractiveChart";

function Lecture({ lectureData }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-3">
      <h1>{lectureData.title}</h1>
      <div className="d-flex flex-column flex-md-row gap-3 p-4">
        <div className="p-4" style={{ backgroundColor: lectureData.bgcolor }}>
          <img
            className="d-block mx-auto"
            src={lectureData.image.url}
            alt={lectureData.image.alt}
          />
          <p>{lectureData.sections[0]}</p>
          <p>{lectureData.sections[1]}</p>
        </div>
        <div className="lecture-second-part p-4">
          <InteractiveChart />
          <p>{lectureData.sections[2]}</p>
        </div>
      </div>
      <LectureButton />
    </div>
  );
}

export default Lecture;
