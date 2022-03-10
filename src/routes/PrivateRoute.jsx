import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, Outlet } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"


function PrivateRoute() {

    const { isLoggedIn, isLoading } = useContext(AuthContext)

    return isLoading ? <LoadingSpinner /> : !isLoggedIn ? <Navigate to="/inicio-sesion" /> : <Outlet />
}

export default PrivateRoute

