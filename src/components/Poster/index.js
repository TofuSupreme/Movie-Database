import { useState, useEffect } from 'react'
import api from '../../api'
import Axios from '../../Axios'

const base_poster_url = "https://image.tmdb.org/t/p/original"

function Poster({ url }) {
    return <img src={base_poster_url + url} />
}

export default Poster