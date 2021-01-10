import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
function Banner() {
    return (
        <div className="banner">
            <div className="text-title">
                <h2> Insert Text Here or Perish! </h2>
                    <p className= "message"> Watch Season 4 Now! </p>
                    <p className ="episode-title"></p>
                    <p className="synopsis"> The anticipated TV Drama 'Insert Text Here or Perish!' comes back with a brand new season! 
                     Buckle up because this season will bring you more than ever before! Action packed with love, drama, mystery, and murder!
                     Watch your favorites become entangled in this year's most talked about real-life drama series! </p>
                    <button className="watch-button" a href='#'><FontAwesomeIcon icon= {faPlay}/> Play
        	    </button>
                    <button className="play-button" a href='#'> <FontAwesomeIcon icon={faInfoCircle}/> More Info 
                </button>
            </div>
        </div>
            
    )
}
export default Banner