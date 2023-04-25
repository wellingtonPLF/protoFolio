import React, { Component } from 'react';
import SquareListView from './squareListView'

class SquareListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects: [
                {id: 1, img: '', title: 'Titulo 1'},
                {id: 2, img: '', title: 'Titulo 2'},
                {id: 3, img: '', title: 'Titulo 3'},
                {id: 4, img: '', title: 'Titulo 4'},
                {id: 5, img: '', title: 'Titulo 5'},
                {id: 6, img: '', title: 'Titulo 6'},
                {id: 7, img: '', title: 'Titulo 7'},
                {id: 8, img: '', title: 'Titulo 8'},
                {id: 9, img: '', title: 'Titulo 9'},
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