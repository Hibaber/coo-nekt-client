import axios from 'axios'

class MaterialService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/usuario/material` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllBooks = () => {
        return this.api.get('/libros')
    }

    getAllCoworking = () => {
        return this.api.get('/coworking')
    }

}

const materialService = new MaterialService()

export default materialService