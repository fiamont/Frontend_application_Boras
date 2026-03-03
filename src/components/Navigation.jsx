import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation p-4 d-flex gap-2 align-items-center">
      <Link className="navigation-link" to={"/start"}>
        <h1>Klimatinfo</h1>
      </Link>
      <Link className="navigation-link" to={"/start"}>
        Start
      </Link>
      <Link className="navigation-link" to={"/lektion"}>
        Utveckling
      </Link>
      <Link className="navigation-link" to={"/profil"}>
        Profil
      </Link>
    </nav>
  );
}

export default Navigation;
