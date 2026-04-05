import "./Profile.css";
import { ProgressBar } from "react-bootstrap";

/*Visar användarens framsteg i lektioner med text och progressbar. Tar emot data som prop för att visa antal genomförda lektioner i texten och progressbar.*/
function ProfileProgress({ data }) {
  let progressValue = 0;

  if (data.progress === "1") {
    progressValue = 33;
  } else if (data.progress === "2") {
    progressValue = 66;
  } else if (data.progress === "3") {
    progressValue = 100;
  }
  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="text-center">{`${data.progress} av 3 lektioner genomförda!`}</h2>
      <ProgressBar now={progressValue} />
    </div>
  );
}
export default ProfileProgress;
