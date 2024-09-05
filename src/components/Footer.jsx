import { pageLinks, socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <>
            <footer className="section footer">
                <ul className="footer-links">
                    {
                        pageLinks.map((plinks) => (
                            <PageLinks plinks={plinks} classy="footer-link" />
                        ))
                    }
                </ul>
                <ul className="footer-icons">
                    {
                        socialLinks.map((slink) => (
                            <SocialLinks slink={slink} classy="footer-icon" />
                        ))
                    }
                </ul>
                <p className="copyright">
                    copyright &copy; Backroads travel tours company
                    <span id="date"></span> all rights reserved
                </p>
            </footer>
        </>
    )
}

export default Footer