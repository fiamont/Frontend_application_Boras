import mockUser from "../data/mock-user.json";
import "./ProfileSummary.css";
import UserInfo from "./UserInfo";
import ProgressInfo from "./ProgressInfo";

function ProfileSummary() {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center rounded profile-summary-container p-4">
      <UserInfo data={mockUser} />
      <ProgressInfo data={mockUser} />
    </div>
  );
}

export default ProfileSummary;
