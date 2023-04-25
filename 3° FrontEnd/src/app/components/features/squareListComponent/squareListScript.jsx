import React, { Component } from 'react';
import SquareListView from './squareListView'

class SquareListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects: [
                {id: 1, img: '', title: 'Projeto1'},
                {id: 2, img: '', title: 'Projeto2'},
                {id: 3, img: '', title: 'Projeto3'},
                {id: 4, img: '', title: 'Projeto4'},
                {id: 5, img: '', title: 'Projeto5'},
                {id: 6, img: '', title: 'Projeto6'},
                {id: 7, img: '', title: 'Projeto7'},
                {id: 8, img: '', title: 'Projeto8'},
                {id: 9, img: '', title: 'Projeto9'},
            ]
        }
    }

    render() {
        return (
            <>
                <SquareListView projects={this.state.projects} />   
            </>
        );
    }
}

export default SquareListComponent;