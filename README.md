
App demo: https://coo-nekt.netlify.app/


![2022-03-26 18 41 08](https://user-images.githubusercontent.com/86075066/160418573-21c79a26-9230-4fff-bae2-c535a14c39a7.gif)
![2022-03-26 18 26 06](https://user-images.githubusercontent.com/86075066/160420272-cb74b43c-ede3-474a-a0f3-24370f95e2a5.gif)


Register and create your account or use the following one for testing purposes
Login
email: ofek@hotmail.com
password: 123

Description
Connekt(SPA) is an online dating application. The profiles propose ideal romantic dates. Users can "swipe left" to reject a candidate or selects a date and to play to guess a truth and a lie proposed by the profile. In order to talk to that person, the lie must be guess.

Server Install
npm install

Server Usage
npm run dev

Server .env variables needed
PORT=5005
ORIGIN=http://localhost:3000
SESS_SECRET
MONGODB_URI
CLOUDINARY_NAME = Your Cloudinary user name
CLOUDINARY_KEY = Key to your Cloudinary account
CLOUDINARY_SECRET = Secret key of your Cloudinary account

On client:
REACT_APP_BASE_URL=http://localhost:5005/api
REACT_APP_SOCKET_URL=http://localhost:3000
REACT_APP_SOCKET_IO=http://localhost:5005

Client Install
npm install

Client Usage
npm start


Technologies
React - Hooks
MongoDB
Express
Node
Javascript (ES6)
HTML & CSS

Additional info

This project has been developed by Hiba Berber and Laura Del Valle as the final project of Ironhack's Web Development Bootcamp 

Backend endpoints

| Method      | Type                                                  | Description
| :--------   | :-------                                              | :--------------------------------
|   `GET`     | `/`                                                   |  Homepage
|   `POST`    | `/api/auth/registro`                                  |  Create a user account
|   `POST`    | `/api/auth/iniciar-sesion`                            |  Login to account
|   `POST`    | `/api/auth/verify`                                    |  Verifies if a user is logged in
|   `POST`    | `/api/auth/logout`                                    |  Log out from the current session
|   `GET`     | `/api/usuario/eventos/listado`	                      |  Brings all created events by users
|   `GET`     | `/api/usuario/eventos/detalles/:id`	                  |  Brings event details if clicked on
|   `POST`    | `/api/usuario/eventos/crear-evento`                   |  Allows to create a new event 
|   `PUT`     | `/api/usuario/eventos/modificar-evento/:id`           |  Allows to edit a an existing event 
|   `DELETE`  | `/api/usuario/eventos/borrar-evento/:id`              |  Allows to delete a an existing event 
|   `PUT`     | `/api/usuario/eventos/detalles/:event_id/asistir`     |  Allows to assist to an event
|   `PUT`     | `/api/usuario/eventos/detalles/:event_id/desapuntarse`|  Allows to cancel assistance to an event
|   `GET`     | `/api/usuario/material/listado`	                      |  Brings all the networking material for users
|   `GET`     | `/api/usuario/material/libros`	                      |  Brings all the books in DB
|   `GET`     | `/api/usuario/material/coworking`	                  |  Brings all the coworking places in DB
|   `GET`     | `/api/usuario/getUserById/:id`	                      |  Allows to check other users profile


Front-end endpoints

| Method      | Type                                                  | Description
| :--------   | :-------                                              | :--------------------------------
|   `GET`     | `/`                                                   |  Homepage
|   `POST`    | `/registro`                                           |  Create a user account
|   `POST`    | `/iniciar-sesion`                                     |  Login to account
|   `POST`    | `/verify`                                             |  Verifies if a user is logged in
|   `POST`    | `/logout`                                             |  Log out from the current session
|   `GET`     | `/usuario/eventos/listado`	                          |  Brings all created events by users
|   `GET`     | `/usuario/eventos/detalles/:id`	                      |  Brings event details if clicked on
|   `POST`    | `/usuario/eventos/crear-evento`                       |  Allows to create a new event 
|   `PUT`     | `/usuario/eventos/modificar-evento/:id`               |  Allows to edit a an existing event 
|   `DELETE`  | `/usuario/eventos/borrar-evento/:id`                  |  Allows to delete a an existing event 
|   `PUT`     | `/usuario/eventos/detalles/:event_id/asistir`         |  Allows to assist to an event
|   `PUT`     | `/usuario/eventos/detalles/:event_id/desapuntarse`    |  Allows to cancel assistance to an event
|   `GET`     | `/usuario/material/libros`	                          |  Brings all the books in DB
|   `GET`     | `/usuario/material/coworking`	                      |  Brings all the coworking places in DB
|   `GET`     | `/usuario/getUserById/:id`	                          |  Allows to check other users profile



