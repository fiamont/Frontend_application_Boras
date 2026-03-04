import { Link } from "react-router-dom";

function LectureButton() {
  return (
    <Link
      className="px-5 py-2 m-4 rounded lecture-btn text-center"
      to="/profil"
    >
      Jag har förstått!
    </Link>
  );
}

export default LectureButton;
