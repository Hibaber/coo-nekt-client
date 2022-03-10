import IndexPage from '../pages/IndexPage/IndexPage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import UserPage from '../pages/UserPage/UserPage'
import EventsListPage from '../pages/EventsListPage/EventsListPage'
import NewEventForm from '../components/NewEventForm/NewEventForm'
import PrivateRoute from './PrivateRoute'
import EventDetailsPage from ".././pages/EventDetailsPage/EventDetailsPage"
import EditEventForm from '../components/EditEventForm/EditEventForm'
import MaterialDetailsPage from '.././pages/MaterialDetailsPage/MaterialDetailsPage'
import BooksPage from '../pages/BooksPage/BooksPage'
import CoworkingPage from '../pages/CoworkingPage/CoworkingPage'


const AppRoutes = () => {

    return (

        <Routes className='routes'>

            <Route path="/" element={<IndexPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/inicio-sesion" element={<LoginPage />} />

            <Route path="/" element={<PrivateRoute />}>
                <Route path="/eventos/listado" element={<EventsListPage />} />
                <Route path="/eventos/crear-evento" element={<NewEventForm />} />
                <Route path="/eventos/detalles/:id" element={<EventDetailsPage />} />
                <Route path="/eventos/crear-evento" element={<NewEventForm />} />
                <Route path="/eventos/modificar-evento/:id" element={<EditEventForm />} />
                <Route path="/material" element={<MaterialDetailsPage />} />
                <Route path="/libros" element={<BooksPage />} />
                <Route path="/coworking" element={<CoworkingPage />} />
                <Route path="/usuario" element={<UserPage />} />
                <Route path="/usuario/:user_id" element={<UserPage />} />

                {/* RESTO DE RUTAS */}
                {/* + AÑADIR 404 */}
                {/* PROTEGIDAS */}
            </Route>

        </Routes>

    )

}

export default AppRoutes