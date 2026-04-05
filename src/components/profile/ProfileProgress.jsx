import "./Profile.css";
import { ProgressBar } from "react-bootstrap";

/*Visar användarens framsteg i lektioner med text och progressbar. Tar emot data som prop för att visa antal genomförda lektioner i texten.*/
function ProfileProgress({ data }) {
  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="text-center">{`${data.progress} av 3 lektioner genomförda!`}</h2>
      <ProgressBar now={60} />
    </div>
  );
}
export default ProfileProgress;
