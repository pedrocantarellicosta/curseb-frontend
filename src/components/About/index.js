import React from 'react';
import './styles.css';

import sample from '../../public/fundo.mp4';

const About = () => (
    
    <div className="about">
        <video autoPlay muted loop>
            <source src={sample} type="video/mp4" />
        </video>
        <div className="texto-meio">
        
            <p className="title">Plataforma Gratuita de Videos</p>
            <p className="subtitle">Assista Videos online sobre a linguagem de sua preferência!</p>
        </div>
    </div>
    
);

export default About;