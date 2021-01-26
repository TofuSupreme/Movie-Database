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
                //get a list of top rated movies
                const response = await Axios.get(url)
                
                // console.log(response.data.results)
            
                //state-ify the movie
                setTopRated(response.data.results)
            } catch (err) {
                console.error(err)
            }
        }
        
        getTopRated()
    }, [])
    
    //For some strange reason, NOW console.log works 
    console.log(topRated)
    
    return (
        <div className="row">
            {/* rowArray.map() builds out the <Poster data={data} /> */}
            
            <h2>{title}</h2>
            
            <div className="row-slider">
                {
                    topRated.map(poster =>
                        <Poster 
                            key={poster.id} 
                            url={isPoster ? poster.poster_path : poster.backdrop_path} 
                            title={poster.name} />
                    )
                }
            </div>
        </div>
    )
} 

export default Row