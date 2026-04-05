import ProfileSummary from "../components/profile/ProfileSummary";
import ProfileRanking from "../components/profile/ProfileRanking";
import ProfileLectures from "../components/profile/ProfileLectures";
import Logout from "../components/Logout";
import Navigation from "../components/navigation/Navigation";
import mockUser from "../data/mock-user.json";

function ProfileView() {
  return (
    <div>
      <Navigation isLoginPage={false} />
      <div className="d-flex flex-column gap-5 m-4">
        <ProfileSummary user={mockUser} />
        <ProfileRanking user={mockUser} />
        <ProfileLectures />
        <Logout />
      </div>
    </div>
  );
}

export default ProfileView;
