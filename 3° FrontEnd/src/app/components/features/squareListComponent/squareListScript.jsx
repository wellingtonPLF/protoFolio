import React, { Component } from 'react';
import SquareListView from './squareListView'
import gitHubService from '../../../shared/service/GitHubService';

class SquareListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects: [],
            allProjects: []
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleWindowResize);
        gitHubService.listAll().then(
            it => {
                const projects = it.filter((element) => {
                    return element.stargazers_count > 0
                });
                const result =  projects.map((element) => {
                    let {id, name, language, html_url} = element;
                    return {id, name, language, html_url}
                })
                this.setState({ allProjects: result.slice(0,9) }, () => {
                    if (window.innerWidth < 372) {  
                        this.setState({
                            projects: this.state.allProjects.slice(0, 2)
                        })
                    }
                    else if (window.innerWidth < 560) {  
                        this.setState({
                            projects: this.state.allProjects.slice(0, 4)
                        })
                    }
                    else {
                        this.setState({
                            projects: this.state.allProjects
                        })
                    }
                })
            }
        )
    }

    handleWindowResize = () => {
        if (window.innerWidth < 372) {    
            if (this.state.projects.length != 2){
                this.setState({
                    projects: this.state.allProjects.slice(0, 2)
                })
            }
        }
        else if (window.innerWidth < 560) {
            if (this.state.projects.length != 4){
                this.setState({
                    projects: this.state.allProjects.slice(0, 4)
                })
            }
        }
        else {
            if (this.state.projects.length != 9){
                this.setState({
                    projects: this.state.allProjects.slice(0, 9)
                })
            }
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