import React, { Component } from 'react';
import SquareListView from './squareListView'
import gitHubService from '../../../shared/service/GitHubService';

class SquareListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        gitHubService.listAll().then(
            it => {
                const projects = it.filter((element) => element.stargazers_count > 0);
                const result =  projects.map((element) => {
                    let {id, name, language, html_url} = element;
                    return {id, name, language, html_url}
                })
                let lista = result.slice(0,9)
                if (window.innerWidth < 500) {
                    lista = result.slice(0, 4)
                }
                this.setState({
                    projects: lista
                })
            }
        )
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