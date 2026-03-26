import ProfileSummary from "../components/ProfileSummary";
import ProfileRanking from "../components/ProfileRanking";
import ProfileLectures from "../components/ProfileLectures";
import Logout from "../components/Logout";
import Navigation from "../components/navigation/Navigation";

function ProfileView() {
  return (
    <div>
      <Navigation isLoginPage={false} />
      <div className="d-flex flex-column gap-5 m-4">
        <ProfileSummary />
        <ProfileRanking />
        <ProfileLectures />
        <Logout />
      </div>
    </div>
  );
}

export default ProfileView;
