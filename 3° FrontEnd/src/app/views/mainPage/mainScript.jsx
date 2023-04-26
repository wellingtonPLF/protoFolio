import React, {Component} from 'react';
import MainScreenView from './mainView';
import gitHubService from '../../shared/service/GitHubService';

class MainScreenComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        gitHubService.listMains().then(
            it => {
                const result =  it.map((element) => {
                    let {id, name, language, html_url} = element;
                    return {id, name, language, html_url}
                })
                this.setState({
                    projects: result
                })
            }
        )
    }

    render() {
        return (
            <div>
                <MainScreenView projects={this.state.projects}/>
            </div>
        );
    }
}

export default MainScreenComponent;
