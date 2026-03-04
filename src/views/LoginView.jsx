import LoginForm from "../components/LoginForm";
import Navigation from "../components/Navigation";

function LoginView() {
  return (
    <div className="d-flex flex-column login-view vh-100">
      <Navigation isLoginPage={true} />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginView;
