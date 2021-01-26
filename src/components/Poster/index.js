import './styles.css'
import api from '../../api'
import Axios from '../../Axios'
import { useState, useEffect } from 'react'
const base_poster_url = "https://image.tmdb.org/t/p/original"

function Poster({ title, url }) {
    return (
        <div className="poste">
            <img src={base_poster_url + url} />

            <div className="poster-description">
                {title}
            </div>
        </div>
    )
}

export default Poster