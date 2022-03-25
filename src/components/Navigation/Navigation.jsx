import './Navigation.css'
import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import Logo from "../Navigation/logo2.png"

const Navigation = () => {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    return (
        <Navbar className='navbar' style={{ marginBottom: 30 }} >

            <NavLink to="/">
                <img
                    alt="logo"
                    src={Logo}
                    className="logo">
                </img>
            </NavLink>

            <Container className='justify-content-start'>

                {
                    !isLoggedIn ?
                        <>
                            <NavLink to="/registro">
                                <Nav.Link as="span" className="link">Registro</Nav.Link>
                            </NavLink>
                            <NavLink to="/inicio-sesion">
                                <Nav.Link as="span">Iniciar sesión</Nav.Link>
                            </NavLink>
                        </>
                        :
                        <>
                            <NavLink to={`/usuario/${user?._id}`}>
                                Perfil de {user?.username}
                            </NavLink>

                            <Nav.Link onClick={logOutUser}>Cerrar sesión</Nav.Link>
                        </>
                }
            </Container>
        </Navbar >

    )

}

export default Navigation

