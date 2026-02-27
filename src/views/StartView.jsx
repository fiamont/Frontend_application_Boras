import mockUser from "../data/mock-user.json";
import StartIntro from "../components/StartIntro";

function StartView() {
  return (
    <div className="mx-4">
      <h2>{`Välkommen tillbaka ${mockUser.username}!`}</h2>
      <StartIntro />
    </div>
  );
}

export default StartView;
