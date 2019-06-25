import React, { Component } from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Course from '../../components/Course';
import Footer from '../../components/Footer';


import './styles.css';

export default class Main extends Component {
    
    render() {

        return (
            <div>
                <Header />
                <About />
                <Course />
                <Footer />
            </div>
        );
    }
}