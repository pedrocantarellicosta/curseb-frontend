import React, { Component } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom'; 

import './styles.css';

export default class Main extends Component {
    state = {
       courses: [],
    }
    componentDidMount(){
        this.loadCourses();
    }

    loadCourses = async () => {
        const courses = await api.get(`/courses`);

        const  docs  = courses.data;

        this.setState({courses: docs});
    };
    

    render() {
        const { courses } = this.state;

        return (
            <div className="course-list">
                {courses.map(course => (
                    <article key={course._id}>
                    <Link to={`/course/${course._id}`}><span>{course.title}</span></Link>
                        <p>{course.about}</p>

                    </article>
                ))}
            </div>
        );
    }
}