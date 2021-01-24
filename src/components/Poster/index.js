import './styles.css'
import api from '../../api'
import Axios from '../../Axios'
import { useState, useEffect } from 'react'
const base_poster_url = "https://image.tmdb.org/t/p/original"

function Poster({ url }) {
    return <img src={base_poster_url + url} />
}

export default Poster