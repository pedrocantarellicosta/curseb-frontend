import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom'; 


const Header = () => (
    <header id="main-header">
        <menu>
        
        <span></span>
        <p>CoUrSeB</p>
        <nav>
            <Link to={`/`}>home</Link>
            <Link to={`/about`}>about</Link>
            <Link to={`/`}>home 2</Link>

        </nav>
        </menu>
    
    </header>
);

export default Header;