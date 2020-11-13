import React from 'react';

const Footer = ({ name }) => {
    return ( 
        <footer className="footer">
            <p className="text-center">Developed by <span className="name">{name}</span> &copy; 2020</p>
        </footer>
     );
}
 
export default Footer;