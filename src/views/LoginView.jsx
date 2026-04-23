import LoginForm from "../components/LoginForm";
import Navigation from "../components/navigation/Navigation";
import mockUser from "../data/mock-user.json";

/*En vy för inloggningssidan som visar Navigation (anpassad för login) och centrerar LoginForm. Skickar mockUser som prop.*/
function LoginView() {
  return (
    <div className="d-flex flex-column login-view vh-100">
      <Navigation isLoginPage={true} />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <LoginForm mockUser={mockUser} />
      </div>
    </div>
  );
}

export default LoginView;
