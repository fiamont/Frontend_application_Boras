import "./ProfileSummary.css";

function ProgressInfo({ data }) {
  return (
    <div>
      <h2>{`${data.progress} av 3 lektioner genomförda!`}</h2>
      <p>progressbar</p>
    </div>
  );
}
export default ProgressInfo;
