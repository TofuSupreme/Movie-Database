import api from '../../api'
import Axios from '../../Axios'
import { useState, useEffect } from 'react'

// const base_poster_url = 'https://www.themoviedb.org/movie/top-rated'
function Poster (){
    //First, I want to store top rated movies
    const [topRated, setTopRated] =  useState({})
    
    //Then useEffect to make an API call
    
    useEffect(()=>{
        async function getTopRated(){
            try{
                //get a list of top rated movies
                const response = await Axios.get(api.getTopRated)
            
                //state-ify the movie
                setTopRated(response.data)
            }catch (err){
                console.log(err)
            }
        }
        getTopRated()
    }, [])
    //For some strange reason, NOW console.log works 
    console.log(topRated)
   
return(
  <div className="row">
  <div className="col-md-5">
  <div style={{
      background: topRated.backdrop_path,
      padding: 5,
      margin: 5
  }}>
  {topRated.name}
  {topRated.id}
  {topRated.genres}
  </div>
  </div>
  </div>
   )
}
export default Poster