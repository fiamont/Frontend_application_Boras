import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import mockUser from "../data/mock-user.json";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onChangeUsername(event) {
    setUsername(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleLoginResult(event) {
    event.preventDefault(); //gör så det inte försvinner på en gång (laddas om)
    if (username === mockUser.username && password === mockUser.password) {
      console.log("Woho! Lyckades!");
      //window.location.href = "#"; //använda rätt redirect (routing?)
    } else {
      setError("Användarnamn eller lösenord fel.");
    }
  }

  return (
    <Form
      onSubmit={handleLoginResult}
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
          <Form.Control
            type="text"
            placeholder="Användarnamn"
            required
            value={username}
            onChange={onChangeUsername}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Lösenord">
          <Form.Control
            type="password"
            placeholder="Lösenord"
            required
            value={password}
            onChange={onChangePassword}
          />
        </FloatingLabel>
      </div>
      {/* Nedan: Short-circuiting, det som Johan gick igenom på föreläsningen om villkorsstyrd rendering */}
      {error && <p className="text-danger">{error}</p>}
      <Button className="btn login-btn fs-5 mt-5" type="submit">
        Logga in
      </Button>
    </Form>
  );
}

export default LoginForm;
