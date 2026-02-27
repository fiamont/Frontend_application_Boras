import lectureOne from "../data/lecture-one.json";
import lectureTwo from "../data/lecture-two.json";
import lectureThree from "../data/lecture-three.json";
import mockUser from "../data/mock-user.json";

function StartView() {
  return (
    <div>
      <h2>Start</h2>
      <h3>{lectureOne.title}</h3>
      <p>{lectureOne.sections[0]}</p>
      <h3>{lectureTwo.title}</h3>
      <p>{lectureTwo.introduction}</p>
      <h3>{lectureThree.title}</h3>
      <img src={lectureThree.image.url} alt={lectureThree.image.alt} />
      <h3>{`Välkommen tillbaka ${mockUser.username}!`}</h3>
    </div>
  );
}

export default StartView;
