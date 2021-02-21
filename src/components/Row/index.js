import './styles.css'
import { useState, useEffect } from 'react'
import Poster from '../Poster'
import Axios from '../../Axios'

function Row({ title, url, isPoster = false }) {

    const [topRated, setTopRated] = useState([])
    
    useEffect(() => {
        async function getTopRated() {
            try {
                const data = localStorage.getItem(title)

                if (data) {
                    setTopRated(JSON.parse(data))
                } else {
                    
                    const response = await Axios.get(url)

                    localStorage.setItem(title, JSON.stringify(response.data.results))
                 
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
 
        
            
            <h2>{title}</h2>
            
            <div className="row-slider">
                {
                    topRated.map(poster => {
                     
                        if (!poster.poster_path || !poster.backdrop_path) {
                            return null
                        }

                        return <Poster 
                            isPoster={isPoster}
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