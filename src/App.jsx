import "./App.css";
import lectureOne from "./data/lecture-one.json";
import lectureTwo from "./data/lecture-two.json";
import lectureThree from "./data/lecture-three.json";
import mockUser from "./data/mock-user.json";

function App() {
  return (
    <>
      <h1>Klimatinfo</h1>
      <h2>{lectureOne.title}</h2>
      <p>{lectureOne.sections[0]}</p>
      <h2>{lectureTwo.title}</h2>
      <p>{lectureTwo.introduction}</p>
      <h2>{lectureThree.title}</h2>
      <img src={lectureThree.image.url} alt={lectureThree.image.alt} />
      <h2>{`Välkommen tillbaka ${mockUser.username}!`}</h2>
    </>
  );
}

export default App;
