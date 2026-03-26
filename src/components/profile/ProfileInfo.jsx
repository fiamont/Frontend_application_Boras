import "./ProfileSummary.css";

function ProfileInfo({ data }) {
  return (
    <div className="d-flex flex-column flex-lg-row gap-4 align-items-center">
      <img
        className="rounded-circle profile-image"
        src={data.image.url}
        alt={data.image.alt}
      />
      <div className="text-center text-lg-start">
        <h2>{`Välkommen tillbaka ${data.username}!`}</h2>
        <p className="fs-5 m-lg-0">
          Läs igenom en ny lektion för att nå dagens mål!
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo;
