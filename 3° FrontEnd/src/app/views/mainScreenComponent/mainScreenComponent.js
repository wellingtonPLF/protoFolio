import React, {Component} from 'react';
import MainScreenView from "./mainScreenView";

class MainScreenComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {id: 1, name: 'Projeto 1', description: 'Descrição N 1°'},
                {id: 2, name: 'Projeto 2', description: 'Descrição N 2°'},
                {id: 3, name: 'Projeto 3', description: 'Descrição N 3°'},
                {id: 4, name: 'Projeto 4', description: 'Descrição N 4°'}]
        }
    }

    render() {
        const {projects} = this.state

        return (
            <div>
                <MainScreenView projects={projects}/>
            </div>
        );
    }
}

export default MainScreenComponent;
