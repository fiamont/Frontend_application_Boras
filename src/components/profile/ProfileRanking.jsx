import orangeCup from "../../assets/orange-cup.png";

/*Visar klass- och skolranking plus en pokal (bild), tar user som prop*/
function ProfileRanking({ user }) {
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between rounded py-3 px-5 text-dark fs-3 ranking">
      <p>{`#${user.classRank} i din klass`}</p>
      <img src={orangeCup} alt="Cup" />
      <p>{`#${user.schoolRank} i din skola`}</p>
    </div>
  );
}

export default ProfileRanking;
