import mockUser from "../data/mock-user.json";
import "./ProfileSummary.css";

function ProfileSummary() {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center rounded profile-summary-container p-4">
      <div className="d-flex flex-column flex-lg-row gap-4 align-items-center">
        <img
          className="rounded-circle profile-image"
          src={mockUser.image.url}
          alt={mockUser.image.alt}
        />
        <div className="text-center text-lg-start">
          <h2>{`Välkommen tillbaka ${mockUser.username}!`}</h2>
          <p className="fs-5">
            Läs igenom en ny lektion för att nå dagens mål!
          </p>
        </div>
      </div>
      <div>
        <h2>{`${mockUser.progress} av 3 lektioner genomförda!`}</h2>
        <p>progressbar</p>
      </div>
    </div>
  );
}

export default ProfileSummary;
