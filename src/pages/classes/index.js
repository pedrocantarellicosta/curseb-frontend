import React, { Component } from 'react';

import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import  pt  from 'date-fns/locale/pt';

import socket from 'socket.io-client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


import './styles.css';


export default class Class extends Component{
    state = {
        class: [],
    };

    async componentDidMount(){
        this.subscribeToNewClass();
        this.loadClasses();
    }

    loadClasses = async () => {
        const { id } = this.props.match.params;

        const response = await api.get(`/course/${id}`);
        const aula = response.data;
        this.setState({ class: aula.class});
    };


    subscribeToNewClass = () => {
        const aula = this.props.match.params.id;
        const io = socket("http://localhost:3333");
    
    
        io.emit("connectRoom", aula);
    
        io.on("class", data => {
            const aulas  = this.state.class;
            aulas.push(data);
            this.setState({
                class: aulas
          });
        });
      }



    render() {
        const aulas  = this.state.class;
        const ptbr = pt;
        console.log(this.state.class);
        return (
            <div>
                <Header />
                <div className="classes-list">
                    {aulas && aulas.map(aula => (
                        <div className="class-info" key={aula._id}>
                            <article>
                                <div className="class-left">
                                        <iframe width="460" height="258" src={aula.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
                                </div>
                                <div className="class-right">
                                    <div className="dataaula">
                                        <span>há{" "}{distanceInWords(aula.createdAt, new Date(), {
                                            locale: ptbr
                                        })}
                                        </span>
                                    </div>
                                    <h1>{aula.title}</h1>
                                    <p>{aula.about}</p>
                                    <p>{aula.teacher}</p>
                                    
                                </div>
                            </article>
                        </div>
                    ))}


                </div>

                <Footer />
            </div>
        );
    }
}