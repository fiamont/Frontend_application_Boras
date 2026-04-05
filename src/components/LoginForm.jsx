import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/*Ett formulär för inloggning som hanterar användarnamn, lösenord, felmeddelande och navigering vid korrekt inloggning.*/
function LoginForm({ mockUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); //från react router för att kunna byta vy efter inloggningen

  function onChangeUsername(event) {
    setUsername(event.target.value); //uppdaterar användarnamnet med det användaren skrivit
  }

  function onChangePassword(event) {
    setPassword(event.target.value); //uppdaterar password med det användaren skrivit
  }

  //när användaren klickar på logga in (när formuläret skickas)
  function handleLoginResult(event) {
    event.preventDefault(); //gör så det inte försvinner på en gång (laddas om)
    if (username === mockUser.username && password === mockUser.password) {
      navigate("/start"); //skickas till startvyn
    } else {
      setError("Användarnamn eller lösenord fel."); //felmeddelandet visas
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
      {/* Villkorsstyrd rendering: error-meddelande visas bara om error inte är tomt (här med short-circuiting) */}
      {error && <p className="text-danger">{error}</p>}
      <Button className="btn login-btn fs-5 mt-5" type="submit">
        Logga in
      </Button>
    </Form>
  );
}

export default LoginForm;
