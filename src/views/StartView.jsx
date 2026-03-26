import StartIntro from "../components/StartIntro";
import ProfileSummary from "../components/profile/ProfileSummary";
import Navigation from "../components/navigation/Navigation";

function StartView() {
  return (
    <div>
      <Navigation isLoginPage={false} />
      <div className="d-flex flex-column gap-5 m-4">
        <ProfileSummary />
        <StartIntro />
      </div>
    </div>
  );
}

export default StartView;
