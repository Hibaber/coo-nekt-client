import "./Navigation.css";
import { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import logo from "../Navigation/logo.png";
import Logo from "../Navigation/logo2.png";

const Navigation = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar className="justify-content-start" style={{ marginBottom: 30 }}>
      <NavLink to="/">
        <img alt="logo" src={Logo} className="logo"></img>
      </NavLink>

      {!isLoggedIn ? (
        <>
          <NavLink to="/registro">
            <Nav.Link as="span" className="link">
              Registro
            </Nav.Link>
          </NavLink>
          <NavLink to="/inicio-sesion">
            <Nav.Link as="span">Iniciar sesión</Nav.Link>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={`/usuario/${user?._id}`}>
            Perfil de {user?.username}
          </NavLink>

          <Nav.Link onClick={logOutUser}>Cerrar sesión</Nav.Link>
        </>
      )}
    </Navbar>
  );
};

export default Navigation;
