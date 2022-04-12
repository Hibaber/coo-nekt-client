import { useState, useContext } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import authService from "../../services/auth.service";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import "../LoginForm/LoginForm.css";

function LoginForm() {
  const { user, storeToken, authenticateUser } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    authService
      .login(loginForm)
      .then(({ data }) => {
        storeToken(data.authToken);
        authenticateUser();
        navigate(`/`);
      })
      .catch((err) => console.log(err));
  }
  return (
    <Container className="loginForm">
      <Row>
        <h1>¡Conéctate! :)</h1>
        <br />
        <br />
        <br />
        <hr />
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button
          className="button"
          variant="light"
          type="submit"
          style={{ width: "100%" }}
        >
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
