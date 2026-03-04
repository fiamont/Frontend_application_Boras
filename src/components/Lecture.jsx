import LectureButton from "./LectureButton";

function Lecture(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>{props.heading}</h1>
      <div>
        <div>Part 1</div>
        <div>Part 2</div>
      </div>
      <LectureButton />
    </div>
  );
}

export default Lecture;
