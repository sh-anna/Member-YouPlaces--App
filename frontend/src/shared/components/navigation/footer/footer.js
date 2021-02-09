import React from 'react';

import { SocialIcon } from 'react-social-icons';
import './footer.css';


const Footer = props => {
    
    return <footer className="footer">
            <ul className="social-icon">
                <SocialIcon url="http://facebook.com/" bgColor="#3B5998" fgColor="#FFFFFF" style={{ height: 40, width: 40 }}/>
                <SocialIcon url="http://twitter.com/" bgColor="#1DA1F2" fgColor="#FFFFFF" style={{ height: 40, width: 40 }}/>
                <SocialIcon url="http://instagram.com/" bgColor="#d6249f" fgColor="#FFFFFF"style={{ height: 40, width: 40 }}/>
                <SocialIcon url="http://linkedin.com/" bgColor="#0A66C2" fgColor="#FFFFFF"style={{ height: 40, width: 40 }}/>
                <SocialIcon url="http://github.com/" bgColor="#333" fgColor="#FFFFFF" style={{ height: 40, width: 40 }} />
            </ul>
            <ul className="create">
                <p>Create with &#x2764; by Anna Sharipkin</p>
            </ul>
            
        </footer>
     
};
 
export default Footer;