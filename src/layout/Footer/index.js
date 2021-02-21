import {useState, useLayoutEffect } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, 
         faInstagram,
         faTwitter,
         faYoutube
           } from '@fortawesome/free-brands-svg-icons'


function Footer () {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth) 

    useLayoutEffect(() => {
        function updateWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateWidth)
        
        return () => window.removeEventListener('resize', updateWidth)
    }, [])


    const linkNames = [
        'Audio and Subtitles', 'Audio Description', 'Gift Cards',
        'Help Center','Media Center', 'Jobs', 
        'Privacy', 'Terms of Use', 'Investor Relations',
        'Legal Notices', 'Cookie Preferences', 'Corporate Information',
        'Contact Us', 'Act of Specified Commerical Transactions'
    ]

    const listLinks = linkNames.map(link => <li key={link}>{link}</li>)

    return (
        <footer className="footer">
            <section className="footer-social">
              
                <div className='social-icons'>
                    <FontAwesomeIcon style={{height: '30px', width: '30px'}} icon={faFacebookSquare}/> 
                </div>
                
                <div className='social-icons'>
                     <FontAwesomeIcon style={{height: '30px', width: '30px'}} icon={faInstagram}/>
                </div>
               
               <div className='social-icons'>
                   <FontAwesomeIcon style={{height: '30px', width: '30px'}} icon={faTwitter}/>
               </div>
                
                <div className='social-icons'>
                    <FontAwesomeIcon style={{height: '30px', width: '30px'}} icon={faYoutube}/> 
                </div>    
            </section>

            <section className="footer-links">
                {
                    windowWidth > 979 ? 
                    <ul className="footer-links-desktop">{listLinks}</ul> : 
                    <ul className="footer-links-mobile">
                        <li><a href="#Link1">Terms of Use</a></li>
                        <li><a href="#Link2">Privacy Statement</a></li>
                        <li><a href="#Link3">Cookie Preferences</a></li>
                        <li><a href="#Link4">Help Center</a></li>
                    </ul>
                }
            </section>

            <section className="footer-copyright">
                &copy; 1997-{new Date().getFullYear()} Netflix Clone, Inc. {'{MD5: 42160cb013adb360492c4872a1a0f728}'}
            </section>
        </footer>
    )
}

export default Footer
