import "./ProfileSummary.css";
import { ProgressBar } from "react-bootstrap";

function ProgressInfo({ data }) {
  return (
    <div className="d-flex flex-column gap-3">
      <h2 className="text-center">{`${data.progress} av 3 lektioner genomförda!`}</h2>
      <ProgressBar now={60} />
    </div>
  );
}
export default ProgressInfo;
