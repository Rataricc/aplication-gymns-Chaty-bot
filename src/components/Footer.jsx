//import React from 'react'; 
//import { Link } from 'react-router-dom';
/*
export default function Footer() {
    return (
        <footer className="main-footer">
            <strong>Copyright © 2024 <Link to="https://chaty-gyms.netlify.app/">Chaty-Bot.com</Link>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 1.0.0
            </div>
        </footer>

    )
}
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css'; 

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#1">Inicio</a>
                    <a href="#1">Sobre Nosotros</a>
                    <a href="#3">Servicios</a>
                    <a href="/">Contacto</a>
                </div>

                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>

                <div className="footer-contact">
                    <p>Contacto: <a href="mailto:support@chaty-bot.com">support@chaty-bot.com</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                <p><strong>Copyright © 2024 <Link to="https://chaty-gyms.netlify.app/">Chaty-Bot.com</Link>. All rights reserved.</strong></p>
                <p className="footer-version">Version 1.0.0</p>
            </div>
        </footer>
    );
}; 