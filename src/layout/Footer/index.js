import './styles.css'
function Footer (){
    const linkNames = ['Audio and Subtitles', 'Audio Description', 'Help Center',
                    'Gift Cards', 'Media Center', 'Investor Relations', 
                    'Jobs', 'Terms of Use', 'Privacy','Legal Notices', 
                    'Cookie Preferences', 'Corporate Information',
                    'Contact Us', 'Act of Specified Commerical Transactions']

    const listLinks = linkNames.map((links) => <li>{links}</li>)

    return (
        <footer className="footer">
            <section className="footer-social">

            </section>

            <section className="footer-links">
                <ul>{listLinks}</ul>
            </section>

            <section className="footer-copyright">
                &copy; 1997-{new Date().getFullYear()} Netflix Clone, Inc. {'{MD5: 42160cb013adb360492c4872a1a0f728}'}
            </section>
        </footer>
    )
}

export default Footer