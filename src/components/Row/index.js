import './styles.css'
import { useState, useEffect } from 'react'
import Poster from '../Poster'
import Axios from '../../Axios'

function Row({ title, url, isPoster = false }) {
    // Stores the list of Posters
    const [topRated, setTopRated] = useState([])
    
    useEffect(() => {
        async function getTopRated() {
            try {
                const data = localStorage.getItem(title)

                if (data) {
                    setTopRated(JSON.parse(data))
                } else {
                    //get a list of top rated movies
                    const response = await Axios.get(url)

                    localStorage.setItem(title, JSON.stringify(response.data.results))
                    //state-ify the movie
                    setTopRated(response.data.results)
                }
            } catch (err) {
                console.error(err)
            }
        }
        
        getTopRated()
    }, [url, title]) 
    
    return (
        <div className="row">
 
            {/* rowArray.map() builds out the <Poster data={data} /> */}
            
            <h2>{title}</h2>
            
            <div className="row-slider">
                {
                    topRated.map(poster => {
                        // If poster doesn't have an image or path don't display
                        if (!poster.poster_path || !poster.backdrop_path) {
                            return null
                        }

                        return <Poster className="poster-row"
                            key={poster.id} 
                            url={isPoster ? poster.poster_path : poster.backdrop_path} 
                            title={poster.name || poster.title} />
                    })
                }
            </div>
        </div>
    )
} 

export default Row