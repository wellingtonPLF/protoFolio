import React, { Component } from 'react';
import CircleListView from './circleListView';
import { faAngular, faReact, faVuejs, faNode, 
    faDocker, faHtml5, faCss3Alt, faGitAlt } from '@fortawesome/free-brands-svg-icons'


class CircleListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            iconSkills: [
                {name: faAngular, color: 'red'},
                {name: faReact, color: 'cyan'},
                {name: faVuejs, color: 'green'},
                {name: faHtml5, color: 'orangered'},
                {name: faCss3Alt, color: 'royalblue'},
                {name: faDocker, color: 'royalblue'},
                {name: faNode, color: 'green'},
                {name: faGitAlt, color: 'black'},
            ],
            imgSkills: [
                'JWT', 'Spring Boot', 'Django', 'ASP'
            ]
        }
    }

    render() {
        return (
            <>
                <CircleListView icons={this.state.iconSkills} imgs={this.state.imgSkills}/>
            </>
        );
    }
}

export default CircleListComponent;