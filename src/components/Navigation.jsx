import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <nav
      className={`${props.isLoginPage ? "navigation-login" : "navigation-default"} navigation p-2 d-flex gap-2 align-items-center`}
    >
      <Link className="navigation-link" to="/start">
        <h1>Klimatinfo</h1>
      </Link>
      <Link to="/start">Start</Link>
      <Link to="/lektion">Utveckling</Link>
      <Link to="/profil">{props.isLoginPage ? "Logga in" : "Profil"}</Link>
    </nav>
  );
}

export default Navigation;
