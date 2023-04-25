import React, { Component } from 'react';
import CircleListView from './circleListView';

class CircleListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            skills: [
                'Angular', 'Vue', 'React', 'Node', 'JWT', 'Docker', 
                'Spring Boot', 'Django', 'Asp.Net', 'Git', 'HTML', 'SCSS'
            ]
        }
    }

    render() {
        return (
            <>
                <CircleListView skills={this.state.skills}/>
            </>
        );
    }
}

export default CircleListComponent;