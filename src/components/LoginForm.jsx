import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginForm() {
  return (
    <Form
      className="login-form d-flex flex-column justify-content-center rounded-3 p-3 m-3"
      style={{ maxWidth: "350px" }}
    >
      <div className="mx-4">
        <h1>Klimatinfo</h1>
        <p className="fs-5">
          Logga in för att få tillgång till din profil och se din historik
        </p>
      </div>
      <div>
        <FloatingLabel
          controlId="floatingInput"
          label="Användarnamn"
          className="mb-3"
        >
          <Form.Control placeholder="Användarnamn" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Lösenord">
          <Form.Control type="password" placeholder="Lösenord" />
        </FloatingLabel>
      </div>
      <Button className="btn login-btn fs-5 mt-5" type="submit">
        Logga in
      </Button>
    </Form>
  );
}

export default LoginForm;
