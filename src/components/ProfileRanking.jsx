import orangeCup from "../assets/orange-cup.png";
import mockUser from "../data/mock-user.json";

function ProfileRanking() {
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between rounded py-3 px-5 text-dark fs-3 user-ranking">
      <p>{`#${mockUser.classRank} i din klass`}</p>
      <img src={orangeCup} alt="Cup" />
      <p>{`#${mockUser.schoolRank} i din skola`}</p>
    </div>
  );
}

export default ProfileRanking;
