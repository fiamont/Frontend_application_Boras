import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

/*länkas till inloggningsvyn*/
function Logout() {
  return (
    <div className="text-center fs-3">
      <Link to="/">
        Logga ut <IoIosArrowRoundForward />
      </Link>
    </div>
  );
}

export default Logout;
