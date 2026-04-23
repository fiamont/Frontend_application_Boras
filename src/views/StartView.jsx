import StartIntro from "../components/StartIntro";
import ProfileSummary from "../components/profile/ProfileSummary";
import Navigation from "../components/navigation/Navigation";
import mockUser from "./../data/mock-user.json";

/*Startvyn som visar Navigation, innehåller ProfileSummary och StartIntro. Skickar user som prop till ProfileSummary.*/
function StartView() {
  return (
    <div>
      <Navigation isLoginPage={false} />
      <div className="d-flex flex-column gap-5 m-4">
        <ProfileSummary user={mockUser} />
        <StartIntro />
      </div>
    </div>
  );
}

export default StartView;
