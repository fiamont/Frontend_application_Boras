import StartIntro from "../components/StartIntro";
import ProfileSummary from "../components/ProfileSummary";

function StartView() {
  return (
    <div className="d-flex flex-column gap-5 mx-4">
      <ProfileSummary />
      <StartIntro />
    </div>
  );
}

export default StartView;
