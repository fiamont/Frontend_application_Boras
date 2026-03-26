import ProfileSummary from "../components/ProfileSummary";
import UserRanking from "../components/UserRanking";
import UserLectures from "../components/UserLectures";
import Logout from "../components/Logout";
import Navigation from "../components/navigation/Navigation";

function ProfileView() {
  return (
    <div>
      <Navigation isLoginPage={false} />
      <div className="d-flex flex-column gap-5 m-4">
        <ProfileSummary />
        <UserRanking />
        <UserLectures />
        <Logout />
      </div>
    </div>
  );
}

export default ProfileView;
