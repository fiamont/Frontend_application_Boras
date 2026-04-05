import mockUser from "../../data/mock-user.json";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";
import ProfileProgress from "./ProfileProgress";

function ProfileSummary() {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center rounded profile-summary-container p-4">
      <ProfileInfo user={mockUser} />
      <ProfileProgress user={mockUser} />
    </div>
  );
}

export default ProfileSummary;
