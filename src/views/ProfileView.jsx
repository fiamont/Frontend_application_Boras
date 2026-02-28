import ProfileSummary from "../components/ProfileSummary";
import UserRanking from "../components/UserRanking";
import UserLectures from "../components/UserLectures";
import Logout from "../components/Logout";

function ProfileView() {
  return (
    <div className="d-flex flex-column gap-5 m-4">
      <ProfileSummary />
      <UserRanking />
      <UserLectures />
      <Logout />
    </div>
  );
}

export default ProfileView;
