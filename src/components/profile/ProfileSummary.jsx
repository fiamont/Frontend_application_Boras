import "./Profile.css";
import ProfileInfo from "./ProfileInfo";
import ProfileProgress from "./ProfileProgress";

function ProfileSummary({ user }) {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center rounded profile-summary-container p-4">
      <ProfileInfo data={user} />
      <ProfileProgress data={user} />
    </div>
  );
}

export default ProfileSummary;
