import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';


export default class About extends Component{
    
    render() {
       
        return (
            <div>
                <Header />
                
                <div className="about">
                    <p>Alguma coisa sobre o app</p>
                </div>

                <Footer />

            </div>
        );
    }
}