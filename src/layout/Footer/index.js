import {useState, useLayoutEffect } from 'react'
import './styles.css'

function Footer () {
    const [windowWidth, setWindowWidth] = useState(0)

    useLayoutEffect(() => {
        function updateWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateWidth)
        
        return () => window.removeEventListener('resize', updateWidth)
    }, [])


    const linkNames = ['Audio and Subtitles', 'Audio Description', 'Help Center',
                    'Gift Cards', 'Media Center', 'Investor Relations', 
                    'Jobs', 'Terms of Use', 'Privacy','Legal Notices', 
                    'Cookie Preferences', 'Corporate Information',
                    'Contact Us', 'Act of Specified Commerical Transactions']

    const listLinks = linkNames.map((link) => {
        console.log(link)
        return <li key={link}>{link}</li>
    })

    return (
        <footer className="footer">
            <section className="footer-social">

            </section>

            <section className="footer-links">
                {
                    windowWidth > 979 ? 
                    <ul className="footer-links-desktop">{listLinks}</ul> : 
                    <ul className="footer-links-mobile">
                        <li><a href="#Link1">Link 1</a></li>
                        <li><a href="#Link2">Link 2</a></li>
                        <li><a href="#Link3">Link 3</a></li>
                        <li><a href="#Link4">Link 4</a></li>
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