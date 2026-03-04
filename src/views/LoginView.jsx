import LoginForm from "../components/LoginForm";
import Navigation from "../components/Navigation";

function LoginView() {
  return (
    <div className="d-flex justify-content-center align-items-center login-view vh-100">
      <Navigation isLoginPage={true} />
      <LoginForm />
    </div>
  );
}

export default LoginView;
