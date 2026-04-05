import "./Profile.css";

/*Visar profilbild, användarnamn och en kort text. Tar emot user som prop för att visa rätt data.*/
function ProfileInfo({ user }) {
  return (
    <div className="d-flex flex-column flex-lg-row gap-4 align-items-center">
      <img
        className="rounded-circle profile-image"
        src={user.image.url}
        alt={user.image.alt}
      />
      <div className="text-center text-lg-start">
        <h2>{`Välkommen tillbaka ${user.username}!`}</h2>
        <p className="fs-5 m-lg-0">
          Läs igenom en ny lektion för att nå dagens mål!
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo;
