import { useState, useEffect } from 'react'
import Axios from '../../Axios'
import api from '../../api'
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'

const base_poster_url = 'https://image.tmdb.org/t/p/original/'

function Banner() {
  
    const [movie, setMovie] = useState({})
    
     useEffect(() => {
        async function getRandomPoster() {
            try {
               
                const response = await Axios.get(api.getNetflixOriginals)
                
                const randomNumber = Math.floor(Math.random() * (response.data.results.length - 0 + 1)) + 0
                const tvShow = response.data.results[randomNumber]
                
                const movieDetails = await Axios.get(api.getTVByID + tvShow.id)
                
               setMovie(movieDetails.data)
            } catch(err) {
                console.error(err)
            }
        }
        
        getRandomPoster()
    }, [])
    
    function truncate(str, charLen) {
        return str?.length > charLen ? str.substr(0, charLen - 1) + '...' : str
    }
    
    return (
        <div className="banner">
            { movie?.backdrop_path && 
                <div className="banner-img" 
                    style={{backgroundImage: `url(${base_poster_url + movie.backdrop_path})`}}>
                    <div className="banner-vignette"></div>
                
                    <div className="banner-description">
                        <h2 className="banner-title">{movie.name}</h2>
                    
                        <p className="banner-message">Watch Season {movie.number_of_seasons}</p>
                        
                        <p className="banner-synopsis">{truncate(movie.overview, 150)}</p>
                        
                        <button className="watch-button">
                            <FontAwesomeIcon icon={faPlay}/> Play
                        </button>
                    
                        <button className="info-button"> 
                            <FontAwesomeIcon icon={faInfoCircle}/> More Info
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Banner
