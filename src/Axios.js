import axios from 'axios'

const defaultOptions = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TMDB_API}`,
        'Content-Type': 'application/json;charset=utf-8'
    }
}

const axiosInstance = axios.create(defaultOptions)

export default axiosInstance